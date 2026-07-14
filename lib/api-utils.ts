import { NextResponse } from 'next/server'

import { isServerConfigurationError } from '@/lib/server-env'

export function apiError(error: string, status: number) {
  return NextResponse.json({ ok: false, error }, { status })
}

export function handleApiError(error: unknown, fallbackMessage: string) {
  if (isServerConfigurationError(error)) {
    return apiError(error.message, error.status)
  }

  console.error(fallbackMessage, error)
  return apiError(fallbackMessage, 500)
}

export function isUuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value)
}
