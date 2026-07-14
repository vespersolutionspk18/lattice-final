import { inflateRawSync } from 'node:zlib'

import type { SubmissionPayload, SubmissionType } from '@/lib/submissions'
import { isSubmissionType, submissionDefinitions } from '@/lib/submissions'
import { readBoundedRequestBody, RequestBodyTooLargeError } from '@/lib/request-body'

const MAX_REQUEST_BYTES = 6 * 1024 * 1024
const MAX_FILE_BYTES = 5 * 1024 * 1024
const MAX_PAYLOAD_BYTES = 64 * 1024
const MAX_SOURCE_PATH_LENGTH = 500

const URL_FIELDS = new Set(['companyWebsite', 'portfolio', 'linkedin'])
const LONG_TEXT_FIELDS = new Set(['message', 'coverLetter'])

type ZipEntry = {
  compressedSize: number
  compressionMethod: number
  flags: number
  localHeaderOffset: number
  name: string
  uncompressedSize: number
}

const MAX_DOCX_PART_BYTES = 2 * 1_024 * 1_024

function readZipEntries(buffer: Buffer) {
  const endSignature = Buffer.from([0x50, 0x4b, 0x05, 0x06])
  const endOffset = buffer.lastIndexOf(endSignature)
  if (endOffset < Math.max(0, buffer.length - 65_557) || endOffset + 22 > buffer.length) {
    return null
  }

  const commentLength = buffer.readUInt16LE(endOffset + 20)
  if (endOffset + 22 + commentLength !== buffer.length) return null

  const entryCount = buffer.readUInt16LE(endOffset + 10)
  const directorySize = buffer.readUInt32LE(endOffset + 12)
  const directoryOffset = buffer.readUInt32LE(endOffset + 16)
  if (entryCount === 0xffff || directoryOffset + directorySize > endOffset) return null

  const entries = new Map<string, ZipEntry>()
  let offset = directoryOffset

  for (let index = 0; index < entryCount; index += 1) {
    if (offset + 46 > endOffset || buffer.readUInt32LE(offset) !== 0x02014b50) return null

    const nameLength = buffer.readUInt16LE(offset + 28)
    const extraLength = buffer.readUInt16LE(offset + 30)
    const entryCommentLength = buffer.readUInt16LE(offset + 32)
    const nextOffset = offset + 46 + nameLength + extraLength + entryCommentLength
    if (nextOffset > endOffset) return null

    const name = buffer.toString('utf8', offset + 46, offset + 46 + nameLength).replace(/\\/g, '/')
    if (!name || entries.has(name)) return null

    entries.set(name, {
      name,
      flags: buffer.readUInt16LE(offset + 8),
      compressionMethod: buffer.readUInt16LE(offset + 10),
      compressedSize: buffer.readUInt32LE(offset + 20),
      uncompressedSize: buffer.readUInt32LE(offset + 24),
      localHeaderOffset: buffer.readUInt32LE(offset + 42),
    })
    offset = nextOffset
  }

  if (offset !== directoryOffset + directorySize) return null
  return entries
}

function readZipEntry(buffer: Buffer, entry: ZipEntry) {
  if (
    (entry.flags & 0x1) !== 0
    || ![0, 8].includes(entry.compressionMethod)
    || entry.uncompressedSize > MAX_DOCX_PART_BYTES
  ) {
    return null
  }

  const offset = entry.localHeaderOffset
  if (offset + 30 > buffer.length || buffer.readUInt32LE(offset) !== 0x04034b50) return null

  const nameLength = buffer.readUInt16LE(offset + 26)
  const extraLength = buffer.readUInt16LE(offset + 28)
  const nameStart = offset + 30
  const dataStart = nameStart + nameLength + extraLength
  const dataEnd = dataStart + entry.compressedSize
  if (dataEnd > buffer.length) return null

  const localName = buffer.toString('utf8', nameStart, nameStart + nameLength).replace(/\\/g, '/')
  if (localName !== entry.name) return null

  const compressed = buffer.subarray(dataStart, dataEnd)
  try {
    const data = entry.compressionMethod === 0
      ? Buffer.from(compressed)
      : inflateRawSync(compressed, { maxOutputLength: MAX_DOCX_PART_BYTES })
    return data.byteLength === entry.uncompressedSize ? data : null
  } catch {
    return null
  }
}

function isValidDocx(bytes: Uint8Array) {
  const buffer = Buffer.from(bytes)
  const entries = readZipEntries(buffer)
  if (!entries) return false

  const contentTypesEntry = entries.get('[Content_Types].xml')
  const relationshipsEntry = entries.get('_rels/.rels')
  const documentEntry = entries.get('word/document.xml')
  if (!contentTypesEntry || !relationshipsEntry || !documentEntry) return false

  const contentTypes = readZipEntry(buffer, contentTypesEntry)?.toString('utf8')
  const relationships = readZipEntry(buffer, relationshipsEntry)?.toString('utf8')
  const document = readZipEntry(buffer, documentEntry)?.toString('utf8')
  if (!contentTypes || !relationships || !document) return false

  return (
    /<(?:\w+:)?Types\b/.test(contentTypes)
    && contentTypes.includes('application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml')
    && relationships.includes('officeDocument')
    && relationships.includes('word/document.xml')
    && /<(?:\w+:)?document\b/.test(document)
    && /<(?:\w+:)?body\b/.test(document)
  )
}

const RESUME_TYPES = {
  '.pdf': {
    mime: 'application/pdf',
    aliases: ['application/pdf'],
    signature: (bytes: Uint8Array) => Buffer.from(bytes.subarray(0, 5)).equals(Buffer.from('%PDF-')),
  },
  '.doc': {
    mime: 'application/msword',
    aliases: ['application/msword'],
    signature: (bytes: Uint8Array) => {
      const expected = [0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]
      return (
        expected.every((byte, index) => bytes[index] === byte)
        && Buffer.from(bytes).includes(Buffer.from('WordDocument', 'utf16le'))
      )
    },
  },
  '.docx': {
    mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    aliases: ['application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    signature: isValidDocx,
  },
} as const

export class SubmissionValidationError extends Error {
  readonly status: number

  constructor(message: string, status = 400) {
    super(message)
    this.name = 'SubmissionValidationError'
    this.status = status
  }
}

type RawSubmission = {
  type: unknown
  sourcePath: unknown
  payload: unknown
  file: File | null
}

export type ValidatedSubmission = {
  type: SubmissionType
  sourcePath: string
  payload: SubmissionPayload
  file: {
    name: string
    type: string
    size: number
    base64: string
  } | null
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function isUploadedFile(value: FormDataEntryValue | null): value is File {
  return (
    typeof value === 'object'
    && value !== null
    && 'name' in value
    && typeof value.name === 'string'
    && 'size' in value
    && typeof value.size === 'number'
    && 'arrayBuffer' in value
    && typeof value.arrayBuffer === 'function'
  )
}

function stringLimit(field: string) {
  if (LONG_TEXT_FIELDS.has(field)) return 20_000
  if (URL_FIELDS.has(field)) return 2_048
  if (field === 'email') return 254
  return 500
}

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function validateHttpUrl(value: string) {
  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

function cleanSourcePath(value: unknown) {
  if (value === undefined || value === null || value === '') {
    return '/'
  }

  if (typeof value !== 'string') {
    throw new SubmissionValidationError('The submission source path is invalid.')
  }

  const sourcePath = value.trim()
  if (!sourcePath.startsWith('/') || sourcePath.length > MAX_SOURCE_PATH_LENGTH || /[\r\n\0]/.test(sourcePath)) {
    throw new SubmissionValidationError('The submission source path is invalid.')
  }

  return sourcePath
}

function cleanPayload(type: SubmissionType, rawPayload: unknown) {
  if (!isRecord(rawPayload)) {
    throw new SubmissionValidationError('The submission details are invalid.')
  }

  const definition = submissionDefinitions[type]
  const cleaned: SubmissionPayload = {}

  for (const field of definition.allowedFields) {
    const rawValue = rawPayload[field]
    if (rawValue === undefined) continue

    if (typeof rawValue !== 'string') {
      throw new SubmissionValidationError(`${definition.fieldLabels[field] ?? field} is invalid.`)
    }

    const value = rawValue.trim()
    if (value.length > stringLimit(field)) {
      throw new SubmissionValidationError(`${definition.fieldLabels[field] ?? field} is too long.`)
    }

    cleaned[field] = value
  }

  for (const field of definition.requiredFields) {
    const value = cleaned[field]
    if (typeof value !== 'string' || value.trim() === '') {
      throw new SubmissionValidationError(`${definition.fieldLabels[field] ?? field} is required.`)
    }
  }

  const email = cleaned.email
  if (email !== undefined && (typeof email !== 'string' || !validateEmail(email))) {
    throw new SubmissionValidationError('Enter a valid email address.')
  }

  for (const field of URL_FIELDS) {
    const value = cleaned[field]
    if (value !== undefined && value !== '') {
      if (typeof value !== 'string' || !validateHttpUrl(value)) {
        throw new SubmissionValidationError(`${definition.fieldLabels[field] ?? field} must be a valid web address.`)
      }
    }
  }

  const serializedPayload = JSON.stringify(cleaned)
  if (Buffer.byteLength(serializedPayload, 'utf8') > MAX_PAYLOAD_BYTES) {
    throw new SubmissionValidationError('The submission details are too large.')
  }

  return cleaned
}

function safeFileName(name: string) {
  return name.split(/[\\/]/).pop()?.replace(/[\r\n\0"]/g, '').trim() ?? ''
}

async function cleanResume(type: SubmissionType, file: File | null) {
  if (type === 'job_application' && (!file || file.size === 0)) {
    throw new SubmissionValidationError('Resume/CV is required.')
  }

  if (!file || file.size === 0) {
    return null
  }

  if (type !== 'job_application') {
    throw new SubmissionValidationError('Files are only accepted with job applications.')
  }

  if (file.size > MAX_FILE_BYTES) {
    throw new SubmissionValidationError('Resume/CV must be 5MB or smaller.')
  }

  const name = safeFileName(file.name)
  const extension = name.slice(name.lastIndexOf('.')).toLowerCase() as keyof typeof RESUME_TYPES
  const fileDefinition = RESUME_TYPES[extension]
  if (!name || !fileDefinition) {
    throw new SubmissionValidationError('Resume/CV must be a PDF, DOC, or DOCX file.')
  }

  const suppliedType = file.type.toLowerCase()
  const genericMime = suppliedType === '' || suppliedType === 'application/octet-stream'
  if (!genericMime && !fileDefinition.aliases.some((mime) => mime === suppliedType)) {
    throw new SubmissionValidationError('Resume/CV file type does not match its filename.')
  }

  const bytes = new Uint8Array(await file.arrayBuffer())
  if (!fileDefinition.signature(bytes)) {
    throw new SubmissionValidationError('Resume/CV does not appear to be a valid PDF, DOC, or DOCX file.')
  }

  return {
    name,
    type: fileDefinition.mime,
    size: bytes.byteLength,
    base64: Buffer.from(bytes).toString('base64'),
  }
}

async function parseJsonRequest(bodyBytes: Uint8Array): Promise<RawSubmission> {
  let body: unknown
  try {
    body = JSON.parse(new TextDecoder().decode(bodyBytes))
  } catch {
    throw new SubmissionValidationError('The request body must be valid JSON.')
  }

  if (!isRecord(body)) {
    throw new SubmissionValidationError('The request body is invalid.')
  }

  return {
    type: body.type,
    sourcePath: body.sourcePath,
    payload: body.payload,
    file: null,
  }
}

async function parseMultipartRequest(request: Request, bodyBytes: Uint8Array): Promise<RawSubmission> {
  let formData: FormData
  try {
    const bufferedBody = new ArrayBuffer(bodyBytes.byteLength)
    new Uint8Array(bufferedBody).set(bodyBytes)
    const bufferedRequest = new Request(request.url, {
      method: 'POST',
      headers: request.headers,
      body: bufferedBody,
    })
    formData = await bufferedRequest.formData()
  } catch {
    throw new SubmissionValidationError('The uploaded form data is invalid.')
  }

  const payloadEntry = formData.get('payload')
  if (typeof payloadEntry !== 'string') {
    throw new SubmissionValidationError('The submission details are missing.')
  }

  let payload: unknown
  try {
    payload = JSON.parse(payloadEntry)
  } catch {
    throw new SubmissionValidationError('The submission details must be valid JSON.')
  }

  const fileEntry = formData.get('file')
  return {
    type: formData.get('type'),
    sourcePath: formData.get('sourcePath'),
    payload,
    file: isUploadedFile(fileEntry) ? fileEntry : null,
  }
}

export async function parseAndValidateSubmission(request: Request): Promise<ValidatedSubmission> {
  const contentType = request.headers.get('content-type')?.toLowerCase() ?? ''
  if (!contentType.includes('multipart/form-data') && !contentType.includes('application/json')) {
    throw new SubmissionValidationError('Use JSON or multipart form data for submissions.', 415)
  }

  let bodyBytes: Uint8Array
  try {
    bodyBytes = await readBoundedRequestBody(request, MAX_REQUEST_BYTES)
  } catch (error) {
    if (error instanceof RequestBodyTooLargeError) {
      throw new SubmissionValidationError('The submission is larger than the 6MB request limit.', 413)
    }
    throw error
  }
  const raw = contentType.includes('multipart/form-data')
    ? await parseMultipartRequest(request, bodyBytes)
    : await parseJsonRequest(bodyBytes)

  if (raw.type === 'login' || raw.type === 'auth') {
    throw new SubmissionValidationError('Login credentials must only be sent to the admin session endpoint.')
  }

  if (!isSubmissionType(raw.type)) {
    throw new SubmissionValidationError('Choose a valid submission type.')
  }

  return {
    type: raw.type,
    sourcePath: cleanSourcePath(raw.sourcePath),
    payload: cleanPayload(raw.type, raw.payload),
    file: await cleanResume(raw.type, raw.file),
  }
}
