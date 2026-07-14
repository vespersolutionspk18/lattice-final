import type {
  SubmissionPayload,
  SubmissionRecord,
  SubmissionStatus,
  SubmissionType,
} from '@/lib/submissions'
import { submissionStatuses, submissionTypes } from '@/lib/submissions'
import { getDatabase } from '@/lib/database'
import { ensureSubmissionSchema } from '@/lib/submission-schema'

type SubmissionRow = {
  id: string
  type: SubmissionType
  status: SubmissionStatus
  source_path: string
  payload: SubmissionPayload | string
  file_name: string | null
  file_type: string | null
  file_size: number | string | null
  has_file: boolean
  created_at: Date | string
  updated_at: Date | string
}

type StoredFileRow = {
  file_name: string | null
  file_type: string | null
  file_size: number | string | null
  file_base64: string | null
}

type SummaryRow = Record<SubmissionStatus | 'total', number | string>

type TypeCountRow = {
  type: SubmissionType
  count: number | string
}

const SUBMISSION_COLUMNS = `
  id,
  type,
  status,
  source_path,
  payload,
  file_name,
  file_type,
  file_size,
  (file_data IS NOT NULL) AS has_file,
  created_at,
  updated_at
`

function asIsoString(value: Date | string) {
  const date = value instanceof Date ? value : new Date(value)
  return Number.isNaN(date.getTime()) ? String(value) : date.toISOString()
}

function parsePayload(payload: SubmissionPayload | string): SubmissionPayload {
  if (typeof payload !== 'string') {
    return payload
  }

  try {
    return JSON.parse(payload) as SubmissionPayload
  } catch {
    return {}
  }
}

function mapSubmissionRow(row: SubmissionRow): SubmissionRecord {
  return {
    id: row.id,
    type: row.type,
    status: row.status,
    sourcePath: row.source_path,
    payload: parsePayload(row.payload),
    fileName: row.file_name,
    fileType: row.file_type,
    fileSize: row.file_size === null ? null : Number(row.file_size),
    hasFile: Boolean(row.has_file),
    createdAt: asIsoString(row.created_at),
    updatedAt: asIsoString(row.updated_at),
  }
}

export type NewSubmission = {
  id: string
  type: SubmissionType
  sourcePath: string
  payload: SubmissionPayload
  file?: {
    name: string
    type: string
    size: number
    base64: string
  } | null
}

export type SubmissionListFilters = {
  search?: string
  type?: SubmissionType
  status?: SubmissionStatus
  page: number
  limit: number
}

export type SubmissionSummary = Record<SubmissionStatus | 'total', number> & {
  byType: Record<SubmissionType, number>
}

export type SubmissionListResult = {
  items: SubmissionRecord[]
  page: number
  limit: number
  total: number
  totalPages: number
  summary: SubmissionSummary
}

export async function insertSubmission(input: NewSubmission) {
  await ensureSubmissionSchema()
  const database = getDatabase()
  const file = input.file ?? null

  const rows = await database.query(
    `
      INSERT INTO form_submissions (
        id,
        type,
        status,
        source_path,
        payload,
        file_name,
        file_type,
        file_size,
        file_data
      )
      VALUES (
        $1::uuid,
        $2,
        'new',
        $3,
        $4::jsonb,
        $5,
        $6,
        $7,
        CASE WHEN $8::text IS NULL THEN NULL ELSE decode($8, 'base64') END
      )
      RETURNING ${SUBMISSION_COLUMNS}
    `,
    [
      input.id,
      input.type,
      input.sourcePath,
      JSON.stringify(input.payload),
      file?.name ?? null,
      file?.type ?? null,
      file?.size ?? null,
      file?.base64 ?? null,
    ],
  )

  return mapSubmissionRow(rows[0] as SubmissionRow)
}

export async function listSubmissions(filters: SubmissionListFilters): Promise<SubmissionListResult> {
  await ensureSubmissionSchema()
  const database = getDatabase()
  const where: string[] = []
  const parameters: unknown[] = []

  if (filters.type) {
    parameters.push(filters.type)
    where.push(`type = $${parameters.length}`)
  }

  if (filters.status) {
    parameters.push(filters.status)
    where.push(`status = $${parameters.length}`)
  }

  if (filters.search) {
    parameters.push(`%${filters.search}%`)
    const searchParameter = `$${parameters.length}`
    where.push(`(
      id::text ILIKE ${searchParameter}
      OR type ILIKE ${searchParameter}
      OR status ILIKE ${searchParameter}
      OR source_path ILIKE ${searchParameter}
      OR payload::text ILIKE ${searchParameter}
      OR COALESCE(file_name, '') ILIKE ${searchParameter}
    )`)
  }

  const whereSql = where.length > 0 ? `WHERE ${where.join(' AND ')}` : ''
  const offset = (filters.page - 1) * filters.limit
  const itemParameters = [...parameters, filters.limit, offset]
  const limitParameter = `$${parameters.length + 1}`
  const offsetParameter = `$${parameters.length + 2}`

  const [itemRows, countRows, summaryRows, typeCountRows] = await Promise.all([
    database.query(
      `
        SELECT ${SUBMISSION_COLUMNS}
        FROM form_submissions
        ${whereSql}
        ORDER BY created_at DESC, id DESC
        LIMIT ${limitParameter}
        OFFSET ${offsetParameter}
      `,
      itemParameters,
    ),
    database.query(
      `SELECT COUNT(*)::integer AS count FROM form_submissions ${whereSql}`,
      parameters,
    ),
    database.query(`
      SELECT
        COUNT(*)::integer AS total,
        COUNT(*) FILTER (WHERE status = 'new')::integer AS new,
        COUNT(*) FILTER (WHERE status = 'reviewing')::integer AS reviewing,
        COUNT(*) FILTER (WHERE status = 'resolved')::integer AS resolved,
        COUNT(*) FILTER (WHERE status = 'archived')::integer AS archived
      FROM form_submissions
    `),
    database.query(`
      SELECT type, COUNT(*)::integer AS count
      FROM form_submissions
      GROUP BY type
    `),
  ])

  const total = Number((countRows[0] as { count?: number | string } | undefined)?.count ?? 0)
  const rawSummary = (summaryRows[0] ?? {}) as SummaryRow
  const byType = Object.fromEntries(submissionTypes.map((type) => [type, 0])) as Record<SubmissionType, number>

  for (const row of typeCountRows as TypeCountRow[]) {
    if (submissionTypes.includes(row.type)) {
      byType[row.type] = Number(row.count)
    }
  }

  const summary = {
    total: Number(rawSummary.total ?? 0),
    new: Number(rawSummary.new ?? 0),
    reviewing: Number(rawSummary.reviewing ?? 0),
    resolved: Number(rawSummary.resolved ?? 0),
    archived: Number(rawSummary.archived ?? 0),
    byType,
  }

  return {
    items: (itemRows as SubmissionRow[]).map(mapSubmissionRow),
    page: filters.page,
    limit: filters.limit,
    total,
    totalPages: total === 0 ? 0 : Math.ceil(total / filters.limit),
    summary,
  }
}

export async function getSubmission(id: string) {
  await ensureSubmissionSchema()
  const database = getDatabase()
  const rows = await database.query(
    `SELECT ${SUBMISSION_COLUMNS} FROM form_submissions WHERE id = $1::uuid LIMIT 1`,
    [id],
  )

  return rows[0] ? mapSubmissionRow(rows[0] as SubmissionRow) : null
}

export async function updateSubmissionStatus(id: string, status: SubmissionStatus) {
  await ensureSubmissionSchema()
  const database = getDatabase()
  const rows = await database.query(
    `
      UPDATE form_submissions
      SET status = $2, updated_at = NOW()
      WHERE id = $1::uuid
      RETURNING ${SUBMISSION_COLUMNS}
    `,
    [id, status],
  )

  return rows[0] ? mapSubmissionRow(rows[0] as SubmissionRow) : null
}

export async function getSubmissionFile(id: string) {
  await ensureSubmissionSchema()
  const database = getDatabase()
  const rows = await database.query(
    `
      SELECT
        file_name,
        file_type,
        file_size,
        CASE WHEN file_data IS NULL THEN NULL ELSE encode(file_data, 'base64') END AS file_base64
      FROM form_submissions
      WHERE id = $1::uuid
      LIMIT 1
    `,
    [id],
  )

  const row = rows[0] as StoredFileRow | undefined
  if (!row?.file_base64 || !row.file_name) {
    return null
  }

  return {
    name: row.file_name,
    type: row.file_type || 'application/octet-stream',
    size: row.file_size === null ? null : Number(row.file_size),
    data: Buffer.from(row.file_base64, 'base64'),
  }
}

export function emptySubmissionSummary(): SubmissionSummary {
  return {
    total: 0,
    ...Object.fromEntries(submissionStatuses.map((status) => [status, 0])),
    byType: Object.fromEntries(submissionTypes.map((type) => [type, 0])),
  } as SubmissionSummary
}
