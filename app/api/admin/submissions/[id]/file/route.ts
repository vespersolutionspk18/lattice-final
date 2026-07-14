import { NextResponse, type NextRequest } from 'next/server'

import { getAdminSessionFromRequest } from '@/lib/admin-auth'
import { apiError, handleApiError, isUuid } from '@/lib/api-utils'
import { getSubmissionFile } from '@/lib/submission-store'

export const runtime = 'nodejs'

type RouteContext = {
  params: Promise<{ id: string }>
}

function contentDisposition(fileName: string) {
  const asciiName = fileName.replace(/[^\x20-\x7e]/g, '_').replace(/["\\]/g, '_')
  return `attachment; filename="${asciiName}"; filename*=UTF-8''${encodeURIComponent(fileName)}`
}

export async function GET(request: NextRequest, context: RouteContext) {
  try {
    const session = getAdminSessionFromRequest(request)
    if (!session) {
      return apiError('Admin authentication is required.', 401)
    }

    const { id } = await context.params
    if (!isUuid(id)) {
      return apiError('Resume file not found.', 404)
    }

    const file = await getSubmissionFile(id)
    if (!file) {
      return apiError('Resume file not found.', 404)
    }

    return new NextResponse(new Uint8Array(file.data), {
      headers: {
        'Cache-Control': 'private, no-store',
        'Content-Disposition': contentDisposition(file.name),
        'Content-Length': String(file.data.byteLength),
        'Content-Type': 'application/octet-stream',
        'X-Content-Type-Options': 'nosniff',
      },
    })
  } catch (error) {
    return handleApiError(error, 'We could not download this resume. Please try again.')
  }
}
