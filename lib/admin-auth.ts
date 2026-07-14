import { createHash, createHmac, timingSafeEqual } from 'node:crypto'
import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'

import { getRequiredServerEnv } from '@/lib/server-env'

export const ADMIN_SESSION_COOKIE = 'lattice_admin_session'
export const ADMIN_SESSION_MAX_AGE_SECONDS = 60 * 60 * 12

export type AdminSession = {
  username: string
  expiresAt: number
}

type SessionPayload = AdminSession & {
  version: 1
}

function constantTimeEqual(left: string, right: string) {
  const leftDigest = createHash('sha256').update(left, 'utf8').digest()
  const rightDigest = createHash('sha256').update(right, 'utf8').digest()
  return timingSafeEqual(leftDigest, rightDigest)
}

function getSessionSecret() {
  return getRequiredServerEnv(
    'ADMIN_SESSION_SECRET',
    'Admin sessions are not configured. Add ADMIN_SESSION_SECRET and try again.',
  )
}

function signPayload(encodedPayload: string) {
  return createHmac('sha256', getSessionSecret())
    .update(encodedPayload, 'utf8')
    .digest('base64url')
}

export function adminSessionCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
    maxAge: ADMIN_SESSION_MAX_AGE_SECONDS,
  }
}

export function verifyAdminCredentials(username: string, password: string) {
  const expectedUsername = getRequiredServerEnv(
    'ADMIN_USERNAME',
    'Admin sign-in is not configured. Add ADMIN_USERNAME and try again.',
  )
  const expectedPassword = getRequiredServerEnv(
    'ADMIN_PASSWORD',
    'Admin sign-in is not configured. Add ADMIN_PASSWORD and try again.',
  )

  const usernameMatches = constantTimeEqual(username, expectedUsername)
  const passwordMatches = constantTimeEqual(password, expectedPassword)
  return usernameMatches && passwordMatches
}

export function createAdminSessionToken(username: string) {
  const payload: SessionPayload = {
    version: 1,
    username,
    expiresAt: Date.now() + ADMIN_SESSION_MAX_AGE_SECONDS * 1000,
  }
  const encodedPayload = Buffer.from(JSON.stringify(payload), 'utf8').toString('base64url')
  return `${encodedPayload}.${signPayload(encodedPayload)}`
}

export function verifyAdminSessionToken(token: string | null | undefined): AdminSession | null {
  if (!token) {
    return null
  }

  const [encodedPayload, suppliedSignature, ...extraParts] = token.split('.')
  if (!encodedPayload || !suppliedSignature || extraParts.length > 0) {
    return null
  }

  const expectedSignature = signPayload(encodedPayload)
  if (!constantTimeEqual(suppliedSignature, expectedSignature)) {
    return null
  }

  try {
    const payload = JSON.parse(
      Buffer.from(encodedPayload, 'base64url').toString('utf8'),
    ) as Partial<SessionPayload>

    if (
      payload.version !== 1
      || typeof payload.username !== 'string'
      || typeof payload.expiresAt !== 'number'
      || !Number.isFinite(payload.expiresAt)
      || payload.expiresAt <= Date.now()
    ) {
      return null
    }

    const configuredUsername = getRequiredServerEnv(
      'ADMIN_USERNAME',
      'Admin sign-in is not configured. Add ADMIN_USERNAME and try again.',
    )
    if (!constantTimeEqual(payload.username, configuredUsername)) {
      return null
    }

    return {
      username: payload.username,
      expiresAt: payload.expiresAt,
    }
  } catch {
    return null
  }
}

export async function getAdminSession(): Promise<AdminSession | null> {
  const cookieStore = await cookies()
  return verifyAdminSessionToken(cookieStore.get(ADMIN_SESSION_COOKIE)?.value)
}

export async function isAdminAuthenticated() {
  return (await getAdminSession()) !== null
}

export function getAdminSessionFromRequest(request: NextRequest) {
  return verifyAdminSessionToken(request.cookies.get(ADMIN_SESSION_COOKIE)?.value)
}
