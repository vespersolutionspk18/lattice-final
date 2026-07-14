import { randomUUID } from 'node:crypto'
import { NextResponse, type NextRequest } from 'next/server'

import { handleApiError } from '@/lib/api-utils'
import {
  consumePersistentRateLimit,
  consumeRateLimit,
  getClientIdentifier,
  rateLimitHeaders,
} from '@/lib/rate-limit'
import { insertSubmission } from '@/lib/submission-store'
import {
  parseAndValidateSubmission,
  SubmissionValidationError,
} from '@/lib/submission-validation'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  const clientIdentifier = getClientIdentifier(request)
  const ingressLimit = consumeRateLimit({
    scope: 'public-ingress',
    identifier: clientIdentifier,
    limit: 100,
    windowMs: 10 * 60 * 1_000,
  })

  if (!ingressLimit.allowed) {
    return NextResponse.json(
      { ok: false, error: 'Too many submissions. Please wait a few minutes and try again.' },
      { status: 429, headers: rateLimitHeaders(ingressLimit) },
    )
  }

  try {
    const submission = await parseAndValidateSubmission(request)
    const typeLimit = consumeRateLimit({
      scope: `public-submission-${submission.type}`,
      identifier: clientIdentifier,
      limit: submission.type === 'chat_message' ? 60 : 10,
      windowMs: 10 * 60 * 1_000,
    })

    if (!typeLimit.allowed) {
      return NextResponse.json(
        { ok: false, error: 'Too many submissions of this type. Please wait a few minutes and try again.' },
        { status: 429, headers: rateLimitHeaders(typeLimit) },
      )
    }

    const globalLimit = await consumePersistentRateLimit({
      bucket: 'public-submissions-global',
      limit: 500,
      windowMs: 10 * 60 * 1_000,
    })

    if (!globalLimit.allowed) {
      return NextResponse.json(
        { ok: false, error: 'Submission capacity is temporarily full. Please wait a few minutes and try again.' },
        { status: 429, headers: rateLimitHeaders(globalLimit) },
      )
    }

    if (submission.file) {
      const uploadLimit = consumeRateLimit({
        scope: 'public-resume-uploads',
        identifier: clientIdentifier,
        limit: 3,
        windowMs: 60 * 60 * 1_000,
      })

      if (!uploadLimit.allowed) {
        return NextResponse.json(
          { ok: false, error: 'Too many resume uploads. Please wait before trying again.' },
          { status: 429, headers: rateLimitHeaders(uploadLimit) },
        )
      }

      const globalUploadLimit = await consumePersistentRateLimit({
        bucket: 'public-resume-uploads-global',
        limit: 25,
        windowMs: 60 * 60 * 1_000,
      })

      if (!globalUploadLimit.allowed) {
        return NextResponse.json(
          { ok: false, error: 'Resume upload capacity is temporarily full. Please wait before trying again.' },
          { status: 429, headers: rateLimitHeaders(globalUploadLimit) },
        )
      }
    }

    const saved = await insertSubmission({
      id: randomUUID(),
      type: submission.type,
      sourcePath: submission.sourcePath,
      payload: submission.payload,
      file: submission.file,
    })

    return NextResponse.json(
      { ok: true, id: saved.id },
      { status: 201 },
    )
  } catch (error) {
    if (error instanceof SubmissionValidationError) {
      return NextResponse.json(
        { ok: false, error: error.message },
        { status: error.status },
      )
    }

    return handleApiError(error, 'We could not save your submission. Please try again.')
  }
}
