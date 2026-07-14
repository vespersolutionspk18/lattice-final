import { getDatabase } from '@/lib/database'
import { ensureSubmissionSchema } from '@/lib/submission-schema'

type RateLimitEntry = {
  count: number
  resetAt: number
}

type RateLimitStore = Map<string, RateLimitEntry>

type GlobalWithRateLimits = typeof globalThis & {
  __latticeRateLimitStore?: RateLimitStore
}

type RateLimitOptions = {
  scope: string
  identifier: string
  limit: number
  windowMs: number
}

export type RateLimitResult = {
  allowed: boolean
  limit: number
  remaining: number
  retryAfterSeconds: number
}

const MAX_BUCKETS = 10_000
const globalWithRateLimits = globalThis as GlobalWithRateLimits
const rateLimitStore = globalWithRateLimits.__latticeRateLimitStore ?? new Map<string, RateLimitEntry>()
globalWithRateLimits.__latticeRateLimitStore = rateLimitStore

function pruneStore(now: number) {
  for (const [key, entry] of rateLimitStore) {
    if (entry.resetAt <= now) rateLimitStore.delete(key)
  }

  while (rateLimitStore.size >= MAX_BUCKETS) {
    const oldestKey = rateLimitStore.keys().next().value as string | undefined
    if (!oldestKey) break
    rateLimitStore.delete(oldestKey)
  }
}

export function getClientIdentifier(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
  return forwardedFor || request.headers.get('x-real-ip')?.trim() || 'unknown-client'
}

export function consumeRateLimit({ scope, identifier, limit, windowMs }: RateLimitOptions): RateLimitResult {
  const now = Date.now()
  const key = `${scope}:${identifier}`
  let entry = rateLimitStore.get(key)

  if (!entry || entry.resetAt <= now) {
    if (!entry) pruneStore(now)
    entry = { count: 0, resetAt: now + windowMs }
    rateLimitStore.set(key, entry)
  }

  if (entry.count >= limit) {
    return {
      allowed: false,
      limit,
      remaining: 0,
      retryAfterSeconds: Math.max(1, Math.ceil((entry.resetAt - now) / 1_000)),
    }
  }

  entry.count += 1
  return {
    allowed: true,
    limit,
    remaining: Math.max(0, limit - entry.count),
    retryAfterSeconds: Math.max(1, Math.ceil((entry.resetAt - now) / 1_000)),
  }
}

type PersistentRateLimitOptions = {
  bucket: string
  limit: number
  windowMs: number
}

type PersistentRateLimitRow = {
  request_count: number | string
  reset_at: Date | string
}

export async function consumePersistentRateLimit({
  bucket,
  limit,
  windowMs,
}: PersistentRateLimitOptions): Promise<RateLimitResult> {
  await ensureSubmissionSchema()
  const database = getDatabase()
  const rows = await database.query(
    `
      INSERT INTO request_rate_limits (
        bucket_key,
        request_count,
        reset_at,
        updated_at
      )
      VALUES (
        $1,
        1,
        NOW() + ($3::double precision * INTERVAL '1 millisecond'),
        NOW()
      )
      ON CONFLICT (bucket_key) DO UPDATE
      SET
        request_count = CASE
          WHEN request_rate_limits.reset_at <= NOW() THEN 1
          ELSE LEAST(request_rate_limits.request_count + 1, $2::integer + 1)
        END,
        reset_at = CASE
          WHEN request_rate_limits.reset_at <= NOW()
            THEN NOW() + ($3::double precision * INTERVAL '1 millisecond')
          ELSE request_rate_limits.reset_at
        END,
        updated_at = NOW()
      RETURNING request_count, reset_at
    `,
    [bucket, limit, windowMs],
  )

  const row = rows[0] as PersistentRateLimitRow
  const count = Number(row.request_count)
  const resetAt = new Date(row.reset_at).getTime()

  return {
    allowed: count <= limit,
    limit,
    remaining: Math.max(0, limit - count),
    retryAfterSeconds: Math.max(1, Math.ceil((resetAt - Date.now()) / 1_000)),
  }
}

export async function resetPersistentRateLimit(bucket: string) {
  await ensureSubmissionSchema()
  const database = getDatabase()
  await database.query('DELETE FROM request_rate_limits WHERE bucket_key = $1', [bucket])
}

export function resetRateLimit(scope: string, identifier: string) {
  rateLimitStore.delete(`${scope}:${identifier}`)
}

export function rateLimitHeaders(result: RateLimitResult) {
  return {
    'Retry-After': String(result.retryAfterSeconds),
    'X-RateLimit-Limit': String(result.limit),
    'X-RateLimit-Remaining': String(result.remaining),
  }
}
