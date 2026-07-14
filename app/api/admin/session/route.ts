import { NextResponse, type NextRequest } from 'next/server'

import {
  ADMIN_SESSION_COOKIE,
  adminSessionCookieOptions,
  createAdminSessionToken,
  getAdminSessionFromRequest,
  verifyAdminCredentials,
} from '@/lib/admin-auth'
import { apiError, handleApiError } from '@/lib/api-utils'
import {
  consumePersistentRateLimit,
  consumeRateLimit,
  getClientIdentifier,
  rateLimitHeaders,
  resetPersistentRateLimit,
  resetRateLimit,
} from '@/lib/rate-limit'
import { readBoundedRequestBody, RequestBodyTooLargeError } from '@/lib/request-body'

export const runtime = 'nodejs'

const MAX_LOGIN_BODY_BYTES = 8 * 1_024

type LoginBody = {
  username?: unknown
  password?: unknown
}

function sessionResponse(username: string) {
  return {
    ok: true,
    authenticated: true,
    user: { username },
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = getAdminSessionFromRequest(request)
    if (!session) {
      return NextResponse.json({
        ok: true,
        authenticated: false,
        user: null,
      })
    }

    return NextResponse.json(sessionResponse(session.username))
  } catch (error) {
    return handleApiError(error, 'We could not verify the admin session.')
  }
}

export async function POST(request: NextRequest) {
  const clientIdentifier = getClientIdentifier(request)

  try {
    let parsedBody: unknown
    try {
      const bodyBytes = await readBoundedRequestBody(request, MAX_LOGIN_BODY_BYTES)
      parsedBody = JSON.parse(new TextDecoder().decode(bodyBytes))
    } catch (error) {
      if (error instanceof RequestBodyTooLargeError) {
        return apiError('The sign-in request is too large.', 413)
      }
      return apiError('Enter your admin username and password.', 400)
    }

    if (typeof parsedBody !== 'object' || parsedBody === null || Array.isArray(parsedBody)) {
      return apiError('Enter your admin username and password.', 400)
    }

    const body = parsedBody as LoginBody

    if (
      typeof body.username !== 'string'
      || typeof body.password !== 'string'
      || body.username.length === 0
      || body.password.length === 0
      || body.username.length > 200
      || body.password.length > 1_000
    ) {
      return apiError('Enter your admin username and password.', 400)
    }

    const loginLimit = consumeRateLimit({
      scope: 'admin-login',
      identifier: clientIdentifier,
      limit: 8,
      windowMs: 15 * 60 * 1_000,
    })
    if (!loginLimit.allowed) {
      return NextResponse.json(
        { ok: false, error: 'Too many sign-in attempts. Please wait and try again.' },
        { status: 429, headers: rateLimitHeaders(loginLimit) },
      )
    }

    const globalLoginLimit = await consumePersistentRateLimit({
      bucket: 'admin-login-failures-global',
      limit: 100,
      windowMs: 15 * 60 * 1_000,
    })
    if (!globalLoginLimit.allowed) {
      return NextResponse.json(
        { ok: false, error: 'Too many sign-in attempts. Please wait and try again.' },
        { status: 429, headers: rateLimitHeaders(globalLoginLimit) },
      )
    }

    if (!verifyAdminCredentials(body.username, body.password)) {
      return apiError('The username or password is incorrect.', 401)
    }

    resetRateLimit('admin-login', clientIdentifier)
    await resetPersistentRateLimit('admin-login-failures-global')
    const token = createAdminSessionToken(body.username)
    const response = NextResponse.json(sessionResponse(body.username))
    response.cookies.set(ADMIN_SESSION_COOKIE, token, adminSessionCookieOptions())
    return response
  } catch (error) {
    return handleApiError(error, 'We could not sign you in. Please try again.')
  }
}

export async function DELETE() {
  const response = NextResponse.json({
    ok: true,
    authenticated: false,
    user: null,
  })
  response.cookies.set(ADMIN_SESSION_COOKIE, '', {
    ...adminSessionCookieOptions(),
    maxAge: 0,
    expires: new Date(0),
  })
  return response
}
