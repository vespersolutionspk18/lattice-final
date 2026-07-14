export class RequestBodyTooLargeError extends Error {
  constructor() {
    super('The request body is too large.')
    this.name = 'RequestBodyTooLargeError'
  }
}

export async function readBoundedRequestBody(request: Request, maxBytes: number) {
  const contentLength = Number(request.headers.get('content-length') ?? 0)
  if (Number.isFinite(contentLength) && contentLength > maxBytes) {
    throw new RequestBodyTooLargeError()
  }

  if (!request.body) return new Uint8Array()

  const reader = request.body.getReader()
  const chunks: Uint8Array[] = []
  let totalBytes = 0

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    if (!value) continue

    totalBytes += value.byteLength
    if (totalBytes > maxBytes) {
      try {
        await reader.cancel()
      } catch {
        // The size error below remains useful even if stream cancellation fails.
      }
      throw new RequestBodyTooLargeError()
    }

    chunks.push(value)
  }

  const body = new Uint8Array(totalBytes)
  let offset = 0
  for (const chunk of chunks) {
    body.set(chunk, offset)
    offset += chunk.byteLength
  }

  return body
}
