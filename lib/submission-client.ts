import type { SubmissionPayload, SubmissionType } from '@/lib/submissions'

type SubmissionResponse = {
  ok: boolean
  id?: string
  error?: string
}

export async function submitJsonSubmission(
  type: SubmissionType,
  payload: SubmissionPayload,
  sourcePath?: string,
): Promise<SubmissionResponse> {
  const response = await fetch('/api/submissions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type,
      payload,
      sourcePath: sourcePath ?? (typeof window === 'undefined' ? '/' : window.location.pathname),
    }),
  })

  const result = await response.json().catch(() => ({ error: 'The server returned an invalid response.' }))
  if (!response.ok) {
    throw new Error(result.error || 'Unable to submit your information.')
  }

  return result
}

export async function submitMultipartSubmission(formData: FormData): Promise<SubmissionResponse> {
  const response = await fetch('/api/submissions', {
    method: 'POST',
    body: formData,
  })

  const result = await response.json().catch(() => ({ error: 'The server returned an invalid response.' }))
  if (!response.ok) {
    throw new Error(result.error || 'Unable to submit your information.')
  }

  return result
}
