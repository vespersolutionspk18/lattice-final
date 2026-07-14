import { neon, type NeonQueryFunction } from '@neondatabase/serverless'

import { getRequiredServerEnv } from '@/lib/server-env'

type DatabaseClient = NeonQueryFunction<false, false>

let cachedConnectionString: string | null = null
let cachedDatabase: DatabaseClient | null = null

export function getDatabase(): DatabaseClient {
  const connectionString = getRequiredServerEnv(
    'DATABASE_URL',
    'The submissions database is not configured. Add DATABASE_URL and try again.',
  )

  if (!cachedDatabase || cachedConnectionString !== connectionString) {
    cachedConnectionString = connectionString
    cachedDatabase = neon(connectionString)
  }

  return cachedDatabase
}
