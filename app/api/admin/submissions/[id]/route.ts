import { NextResponse, type NextRequest } from 'next/server'

import { getAdminSessionFromRequest } from '@/lib/admin-auth'
import { apiError, handleApiError, isUuid } from '@/lib/api-utils'
import { getSubmission, updateSubmissionStatus } from '@/lib/submission-store'
import { isSubmissionStatus } from '@/lib/submissions'

export const runtime = 'nodejs'

type RouteContext = {
  params: Promise<{ id: string }>
}

export async function GET(request: NextRequest, context: RouteContext) {
  try {
    const session = getAdminSessionFromRequest(request)
    if (!session) {
      return apiError('Admin authentication is required.', 401)
    }

    const { id } = await context.params
    if (!isUuid(id)) {
      return apiError('Submission not found.', 404)
    }

    const item = await getSubmission(id)
    if (!item) {
      return apiError('Submission not found.', 404)
    }

    return NextResponse.json({ item })
  } catch (error) {
    return handleApiError(error, 'We could not load this submission. Please try again.')
  }
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  try {
    const session = getAdminSessionFromRequest(request)
    if (!session) {
      return apiError('Admin authentication is required.', 401)
    }

    const { id } = await context.params
    if (!isUuid(id)) {
      return apiError('Submission not found.', 404)
    }

    let body: unknown
    try {
      body = await request.json()
    } catch {
      return apiError('Choose a valid submission status.', 400)
    }

    if (
      typeof body !== 'object'
      || body === null
      || !('status' in body)
      || !isSubmissionStatus(body.status)
    ) {
      return apiError('Choose a valid submission status.', 400)
    }

    const item = await updateSubmissionStatus(id, body.status)
    if (!item) {
      return apiError('Submission not found.', 404)
    }

    return NextResponse.json({ item })
  } catch (error) {
    return handleApiError(error, 'We could not update this submission. Please try again.')
  }
}
