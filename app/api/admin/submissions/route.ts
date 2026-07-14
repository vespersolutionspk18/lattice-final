import { NextResponse, type NextRequest } from 'next/server'

import { getAdminSessionFromRequest } from '@/lib/admin-auth'
import { apiError, handleApiError } from '@/lib/api-utils'
import { listSubmissions } from '@/lib/submission-store'
import {
  isSubmissionStatus,
  isSubmissionType,
  type SubmissionStatus,
  type SubmissionType,
} from '@/lib/submissions'

export const runtime = 'nodejs'

function positiveInteger(value: string | null, fallback: number, maximum: number) {
  if (!value) return fallback
  const parsed = Number(value)
  if (!Number.isInteger(parsed) || parsed < 1) return null
  return Math.min(parsed, maximum)
}

export async function GET(request: NextRequest) {
  try {
    const session = getAdminSessionFromRequest(request)
    if (!session) {
      return apiError('Admin authentication is required.', 401)
    }

    const params = request.nextUrl.searchParams
    const rawType = params.get('type')
    const rawStatus = params.get('status')
    const page = positiveInteger(params.get('page'), 1, Number.MAX_SAFE_INTEGER)
    const limit = positiveInteger(params.get('limit'), 20, 100)
    const search = params.get('search')?.trim() ?? ''

    if (rawType && !isSubmissionType(rawType)) {
      return apiError('Choose a valid submission type.', 400)
    }

    if (rawStatus && !isSubmissionStatus(rawStatus)) {
      return apiError('Choose a valid submission status.', 400)
    }

    if (page === null || limit === null) {
      return apiError('Page and limit must be positive whole numbers.', 400)
    }

    if (search.length > 200) {
      return apiError('Search text must be 200 characters or fewer.', 400)
    }

    const result = await listSubmissions({
      page,
      limit,
      search: search || undefined,
      type: (rawType || undefined) as SubmissionType | undefined,
      status: (rawStatus || undefined) as SubmissionStatus | undefined,
    })

    return NextResponse.json(result)
  } catch (error) {
    return handleApiError(error, 'We could not load submissions. Please try again.')
  }
}
