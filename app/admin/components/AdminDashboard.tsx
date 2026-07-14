'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Archive,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Download,
  FileText,
  Inbox,
  LoaderCircle,
  LogOut,
  RefreshCw,
  Search,
  ShieldCheck,
} from 'lucide-react'

import {
  formatFieldLabel,
  submissionDefinitions,
  submissionStatuses,
  submissionTypes,
  type SubmissionRecord,
  type SubmissionStatus,
  type SubmissionType,
} from '@/lib/submissions'

type SubmissionSummary = {
  total: number
  new: number
  reviewing: number
  resolved: number
  archived: number
  byType: Partial<Record<SubmissionType, number>>
}

type SubmissionListResponse = {
  items: SubmissionRecord[]
  page: number
  limit: number
  total: number
  totalPages: number
  summary: SubmissionSummary
}

type SubmissionDetailResponse = {
  item: SubmissionRecord
}

type AdminDashboardProps = {
  username: string
}

const PAGE_LIMIT = 12

const emptySummary: SubmissionSummary = {
  total: 0,
  new: 0,
  reviewing: 0,
  resolved: 0,
  archived: 0,
  byType: {},
}

const statusPresentation: Record<SubmissionStatus, { label: string; className: string }> = {
  new: {
    label: 'New',
    className: 'border-[#b8c9ff] bg-[#e9efff] text-[#2149b8]',
  },
  reviewing: {
    label: 'Reviewing',
    className: 'border-[#ead49f] bg-[#fff4d8] text-[#7a5610]',
  },
  resolved: {
    label: 'Resolved',
    className: 'border-[#b9d8c3] bg-[#e8f5eb] text-[#28633a]',
  },
  archived: {
    label: 'Archived',
    className: 'border-[#d4d0c7] bg-[#efede7] text-[#656158]',
  },
}

function formatDateTime(value: string) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return 'Unknown date'

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(date)
}

function formatFileSize(bytes: number | null) {
  if (!bytes || bytes < 1) return 'Unknown size'
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function displayValue(value: string | number | boolean | null | undefined) {
  if (value === null || value === undefined || value === '') return 'Not provided'
  if (typeof value === 'boolean') return value ? 'Yes' : 'No'
  return String(value)
}

function recordTitle(item: SubmissionRecord) {
  const firstName = displayValue(item.payload.firstName)
  const lastName = displayValue(item.payload.lastName)
  const fullName = [firstName, lastName].filter((part) => part !== 'Not provided').join(' ')

  if (fullName) return fullName
  if (item.payload.companyName) return displayValue(item.payload.companyName)
  if (item.payload.company) return displayValue(item.payload.company)
  if (item.payload.email) return displayValue(item.payload.email)
  if (item.payload.message) return displayValue(item.payload.message).slice(0, 70)
  return submissionDefinitions[item.type].label
}

function recordPreview(item: SubmissionRecord) {
  const definition = submissionDefinitions[item.type]
  const preview = definition.previewFields
    .map((field) => item.payload[field])
    .filter((value) => value !== null && value !== undefined && value !== '')
    .map((value) => displayValue(value))

  return preview.join(' · ') || definition.description
}

async function parseResponse<T>(response: Response): Promise<T> {
  const result = await response.json().catch(() => null) as (T & { error?: string }) | null

  if (!response.ok) {
    throw new Error(result?.error || 'The server could not complete this request.')
  }

  if (!result) {
    throw new Error('The server returned an invalid response.')
  }

  return result
}

function StatusPill({ status }: { status: SubmissionStatus }) {
  const presentation = statusPresentation[status]

  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.13em] ${presentation.className}`}>
      {presentation.label}
    </span>
  )
}

function LoadingRows() {
  return (
    <div className="grid gap-2.5" aria-label="Loading submissions">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="grid animate-pulse gap-3 rounded-2xl border border-[#ded9cf] bg-[#faf8f3] p-4 md:grid-cols-[minmax(0,1.45fr)_0.6fr_0.55fr]">
          <div className="space-y-2">
            <div className="h-4 w-2/5 rounded-full bg-[#ddd8ce]" />
            <div className="h-3 w-4/5 rounded-full bg-[#e8e4db]" />
          </div>
          <div className="h-7 w-24 rounded-full bg-[#e5e1d8]" />
          <div className="h-4 w-24 rounded-full bg-[#e5e1d8]" />
        </div>
      ))}
    </div>
  )
}

export default function AdminDashboard({ username }: AdminDashboardProps) {
  const router = useRouter()
  const [items, setItems] = useState<SubmissionRecord[]>([])
  const [summary, setSummary] = useState<SubmissionSummary>(emptySummary)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState<SubmissionType | 'all'>('all')
  const [statusFilter, setStatusFilter] = useState<SubmissionStatus | 'all'>('all')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [selectedItem, setSelectedItem] = useState<SubmissionRecord | null>(null)
  const selectedIdRef = useRef<string | null>(selectedId)
  selectedIdRef.current = selectedId
  const [listLoading, setListLoading] = useState(true)
  const [detailLoading, setDetailLoading] = useState(false)
  const [listError, setListError] = useState('')
  const [detailError, setDetailError] = useState('')
  const [refreshToken, setRefreshToken] = useState(0)
  const [updatingStatus, setUpdatingStatus] = useState<SubmissionStatus | null>(null)
  const [loggingOut, setLoggingOut] = useState(false)
  const [downloadReadyId, setDownloadReadyId] = useState<string | null>(null)

  useEffect(() => {
    const timeout = window.setTimeout(() => setDebouncedSearch(search.trim()), 280)
    return () => window.clearTimeout(timeout)
  }, [search])

  useEffect(() => {
    setPage(1)
  }, [debouncedSearch, typeFilter, statusFilter])

  useEffect(() => {
    const controller = new AbortController()

    async function loadSubmissions() {
      setListLoading(true)
      setListError('')

      const parameters = new URLSearchParams({
        page: String(page),
        limit: String(PAGE_LIMIT),
      })
      if (debouncedSearch) parameters.set('search', debouncedSearch)
      if (typeFilter !== 'all') parameters.set('type', typeFilter)
      if (statusFilter !== 'all') parameters.set('status', statusFilter)

      try {
        const response = await fetch(`/api/admin/submissions?${parameters.toString()}`, {
          cache: 'no-store',
          signal: controller.signal,
        })

        if (response.status === 401) {
          router.replace('/login')
          router.refresh()
          return
        }

        const result = await parseResponse<SubmissionListResponse>(response)
        setSummary(result.summary)
        setTotal(result.total)
        const safeTotalPages = Math.max(result.totalPages, 1)
        setTotalPages(safeTotalPages)

        if (page > safeTotalPages) {
          setItems([])
          setPage(safeTotalPages)
          return
        }

        setItems(result.items)
        if (result.page !== page) setPage(result.page)
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          setListError(error instanceof Error ? error.message : 'Unable to load submissions.')
        }
      } finally {
        if (!controller.signal.aborted) setListLoading(false)
      }
    }

    void loadSubmissions()
    return () => controller.abort()
  }, [debouncedSearch, page, refreshToken, router, statusFilter, typeFilter])

  useEffect(() => {
    if (listLoading) return

    if (items.length === 0) {
      setSelectedId(null)
      setSelectedItem(null)
      return
    }

    if (!selectedId || !items.some((item) => item.id === selectedId)) {
      setSelectedId(items[0].id)
      setSelectedItem(items[0])
    }
  }, [items, listLoading, selectedId])

  useEffect(() => {
    if (!selectedId) {
      setSelectedItem(null)
      setDetailError('')
      return
    }

    const controller = new AbortController()
    const submissionId = selectedId

    async function loadDetail() {
      setDetailLoading(true)
      setDetailError('')

      try {
        const response = await fetch(`/api/admin/submissions/${encodeURIComponent(submissionId)}`, {
          cache: 'no-store',
          signal: controller.signal,
        })

        if (response.status === 401) {
          router.replace('/login')
          router.refresh()
          return
        }

        const result = await parseResponse<SubmissionDetailResponse>(response)
        setSelectedItem(result.item)
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          setDetailError(error instanceof Error ? error.message : 'Unable to load this record.')
        }
      } finally {
        if (!controller.signal.aborted) setDetailLoading(false)
      }
    }

    void loadDetail()
    return () => controller.abort()
  }, [router, selectedId])

  const detailFields = useMemo(() => {
    if (!selectedItem) return []

    const definition = submissionDefinitions[selectedItem.type]
    return Array.from(new Set([...definition.allowedFields, ...Object.keys(selectedItem.payload)]))
  }, [selectedItem])

  async function updateStatus(status: SubmissionStatus) {
    if (!selectedItem || selectedItem.status === status || updatingStatus) return

    const submissionId = selectedItem.id
    setUpdatingStatus(status)
    setDetailError('')

    try {
      const response = await fetch(`/api/admin/submissions/${encodeURIComponent(submissionId)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      })

      if (response.status === 401) {
        router.replace('/login')
        router.refresh()
        return
      }

      const result = await parseResponse<SubmissionDetailResponse>(response)
      setSelectedItem((current) => current?.id === result.item.id ? result.item : current)
      setItems((current) => current.map((item) => item.id === result.item.id ? result.item : item))
      setRefreshToken((current) => current + 1)
    } catch (error) {
      if (selectedIdRef.current === submissionId) {
        setDetailError(error instanceof Error ? error.message : 'Unable to update the record status.')
      }
    } finally {
      setUpdatingStatus(null)
    }
  }

  async function logout() {
    if (loggingOut) return
    setLoggingOut(true)
    setListError('')

    try {
      const response = await fetch('/api/admin/session', { method: 'DELETE' })
      if (!response.ok && response.status !== 401) {
        await parseResponse(response)
      }
      router.replace('/login')
      router.refresh()
    } catch (error) {
      setListError(error instanceof Error ? error.message : 'Unable to sign out. Please try again.')
      setLoggingOut(false)
    }
  }

  const isRefreshing = listLoading && items.length > 0
  const activeFilterCount = Number(Boolean(debouncedSearch)) + Number(typeFilter !== 'all') + Number(statusFilter !== 'all')

  return (
    <main className="min-h-screen bg-[#f2efe7] text-[#1d1e1a]" style={{ backgroundImage: 'radial-gradient(circle at 12% 4%, rgba(38, 82, 201, 0.09), transparent 25%), radial-gradient(circle at 88% 18%, rgba(197, 146, 54, 0.08), transparent 22%)' }}>
      <div className="mx-auto w-full max-w-[1580px] px-3 py-3 sm:px-5 sm:py-5 lg:px-7">
        <header className="overflow-hidden rounded-[28px] border border-[#353731] bg-[#1b1d19] text-[#f7f4ec] shadow-[0_24px_70px_rgba(31,31,27,0.16)]">
          <div className="flex flex-col gap-7 p-5 sm:p-7 lg:flex-row lg:items-end lg:justify-between lg:p-9">
            <div className="max-w-3xl">
              <div className="mb-5 flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                  <span className="h-2 w-2 rounded-full bg-[#4f7cff] shadow-[0_0_14px_rgba(79,124,255,0.9)]" />
                  Intake operations
                </span>
                <span className="rounded-full border border-white/10 bg-black/15 px-3 py-1.5 text-[11px] text-white/55">
                  Signed in as {username}
                </span>
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#86a2ff]">Lattice private workspace</p>
              <h1 className="font-[Georgia] text-4xl leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-[4.25rem]">
                The intake ledger.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/60 sm:text-base">
                One dense, auditable view of every estimate, inquiry, application, lead, and visitor question.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setRefreshToken((current) => current + 1)}
                disabled={listLoading}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 text-sm font-semibold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-55"
              >
                <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              <button
                type="button"
                onClick={() => void logout()}
                disabled={loggingOut}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-[#f7f4ec] px-4 text-sm font-semibold text-[#1d1e1a] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loggingOut ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <LogOut className="h-4 w-4" />}
                Sign out
              </button>
            </div>
          </div>

          <div className="grid gap-2 bg-[#252722] p-3 sm:grid-cols-2 sm:p-4 lg:grid-cols-5">
            {[
              { label: 'All records', value: summary.total, icon: Inbox, emphasis: true },
              { label: 'New', value: summary.new, icon: ShieldCheck },
              { label: 'Reviewing', value: summary.reviewing, icon: Clock3 },
              { label: 'Resolved', value: summary.resolved, icon: CheckCircle2 },
              { label: 'Archived', value: summary.archived, icon: Archive },
            ].map(({ label, value, icon: Icon, emphasis }) => (
              <div
                key={label}
                className={`rounded-2xl border p-4 ${emphasis ? 'border-[#527cff]/60 bg-[#315bd4] text-white' : 'border-white/10 bg-white/[0.035] text-white'}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${emphasis ? 'text-white/75' : 'text-white/45'}`}>{label}</span>
                  <Icon className={`h-4 w-4 ${emphasis ? 'text-white' : 'text-white/40'}`} />
                </div>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] tabular-nums">{value.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </header>

        <section className="mt-4 rounded-[24px] border border-[#d8d2c6] bg-[#fbf9f4]/95 p-3 shadow-[0_12px_35px_rgba(50,47,40,0.07)] sm:p-4">
          <div className="grid gap-2.5 md:grid-cols-[minmax(260px,1fr)_210px_180px_auto]">
            <label className="relative block">
              <span className="sr-only">Search submissions</span>
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#777268]" />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search names, email, company, message…"
                className="h-11 w-full rounded-xl border border-[#d6d0c4] bg-white px-10 text-sm text-[#20211d] outline-none transition placeholder:text-[#999388] focus:border-[#315bd4] focus:ring-2 focus:ring-[#315bd4]/15"
              />
            </label>

            <label>
              <span className="sr-only">Filter by submission type</span>
              <select
                value={typeFilter}
                onChange={(event) => setTypeFilter(event.target.value as SubmissionType | 'all')}
                className="h-11 w-full rounded-xl border border-[#d6d0c4] bg-white px-3 text-sm font-medium text-[#3d3b35] outline-none transition focus:border-[#315bd4] focus:ring-2 focus:ring-[#315bd4]/15"
              >
                <option value="all">All intake types</option>
                {submissionTypes.map((type) => (
                  <option key={type} value={type}>{submissionDefinitions[type].label}</option>
                ))}
              </select>
            </label>

            <label>
              <span className="sr-only">Filter by status</span>
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value as SubmissionStatus | 'all')}
                className="h-11 w-full rounded-xl border border-[#d6d0c4] bg-white px-3 text-sm font-medium text-[#3d3b35] outline-none transition focus:border-[#315bd4] focus:ring-2 focus:ring-[#315bd4]/15"
              >
                <option value="all">Every status</option>
                {submissionStatuses.map((status) => (
                  <option key={status} value={status}>{statusPresentation[status].label}</option>
                ))}
              </select>
            </label>

            <button
              type="button"
              onClick={() => {
                setSearch('')
                setTypeFilter('all')
                setStatusFilter('all')
              }}
              disabled={activeFilterCount === 0}
              className="h-11 rounded-xl border border-[#d6d0c4] bg-[#f2efe7] px-4 text-sm font-semibold text-[#555149] transition hover:bg-[#eae6dc] disabled:cursor-not-allowed disabled:opacity-45"
            >
              Clear {activeFilterCount > 0 ? `(${activeFilterCount})` : ''}
            </button>
          </div>
        </section>

        {listError && (
          <div role="alert" className="mt-4 rounded-2xl border border-[#e0b4aa] bg-[#fff0ec] px-4 py-3 text-sm text-[#8b3324]">
            {listError}
          </div>
        )}

        <div className="mt-4 grid items-start gap-4 lg:grid-cols-[minmax(0,1.38fr)_minmax(340px,0.72fr)]">
          <section className="min-w-0 rounded-[26px] border border-[#d8d2c6] bg-[#fbf9f4] p-3 shadow-[0_16px_45px_rgba(50,47,40,0.07)] sm:p-4">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-[#ece8df] px-4 py-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#746f65]">Queue</p>
                <h2 className="mt-0.5 text-lg font-semibold tracking-[-0.02em]">Submission records</h2>
              </div>
              <div className="rounded-full border border-[#d1cbc0] bg-[#fbf9f4] px-3 py-1.5 text-xs font-semibold text-[#5e5a52]">
                {total.toLocaleString()} result{total === 1 ? '' : 's'}
              </div>
            </div>

            {listLoading && items.length === 0 ? (
              <LoadingRows />
            ) : items.length === 0 ? (
              <div className="flex min-h-72 flex-col items-center justify-center rounded-2xl border border-dashed border-[#cbc5b9] bg-[#f7f4ed] px-6 text-center">
                <Inbox className="h-9 w-9 text-[#898378]" />
                <h3 className="mt-4 text-lg font-semibold">No records found</h3>
                <p className="mt-1 max-w-sm text-sm leading-6 text-[#777167]">Try clearing a filter or searching for a different name, email, company, or message.</p>
              </div>
            ) : (
              <div className="grid gap-2.5">
                <div className="hidden grid-cols-[minmax(0,1.45fr)_0.6fr_0.55fr] gap-3 px-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a847a] md:grid">
                  <span>Record</span>
                  <span>Status</span>
                  <span>Received</span>
                </div>

                {items.map((item) => {
                  const definition = submissionDefinitions[item.type]
                  const selected = selectedId === item.id

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setSelectedId(item.id)
                        setSelectedItem(item)
                      }}
                      className={`grid w-full gap-3 rounded-2xl border p-4 text-left transition md:grid-cols-[minmax(0,1.45fr)_0.6fr_0.55fr] md:items-center ${selected ? 'border-[#315bd4] bg-[#eef2ff] shadow-[0_10px_28px_rgba(49,91,212,0.11)]' : 'border-[#ded9cf] bg-white hover:border-[#aaa398] hover:bg-[#fdfcf9]'}`}
                    >
                      <span className="flex min-w-0 items-start gap-3">
                        <span
                          className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-[10px] font-bold uppercase tracking-[0.12em]"
                          style={{ color: definition.accent, borderColor: `${definition.accent}45`, backgroundColor: `${definition.accent}10` }}
                        >
                          {definition.shortLabel.slice(0, 2)}
                        </span>
                        <span className="min-w-0">
                          <span className="flex flex-wrap items-center gap-2">
                            <span className="truncate text-sm font-semibold text-[#20211d]">{recordTitle(item)}</span>
                            {item.hasFile && <FileText className="h-3.5 w-3.5 text-[#315bd4]" aria-label="Has attached file" />}
                          </span>
                          <span className="mt-1 block truncate text-xs text-[#777167]">{recordPreview(item)}</span>
                          <span className="mt-1.5 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9b958b]">{definition.shortLabel} · {item.id.slice(0, 8)}</span>
                        </span>
                      </span>
                      <span><StatusPill status={item.status} /></span>
                      <span className="text-xs leading-5 text-[#676259]">{formatDateTime(item.createdAt)}</span>
                    </button>
                  )
                })}
              </div>
            )}

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-[#ece8df] px-3 py-2.5">
              <p className="text-xs font-medium text-[#706b62]">Page {page} of {totalPages}</p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPage((current) => Math.max(1, current - 1))}
                  disabled={page <= 1 || listLoading}
                  className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[#ccc6ba] bg-[#fbf9f4] px-3 text-xs font-semibold transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-45"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
                  disabled={page >= totalPages || listLoading}
                  className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[#ccc6ba] bg-[#fbf9f4] px-3 text-xs font-semibold transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-45"
                >
                  Next
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </section>

          <aside className="min-w-0 lg:sticky lg:top-4">
            <div className="overflow-hidden rounded-[26px] border border-[#cfc9bd] bg-[#20221e] text-[#f7f4ec] shadow-[0_22px_60px_rgba(36,35,31,0.18)]">
              {!selectedItem && !detailLoading ? (
                <div className="flex min-h-[520px] flex-col items-center justify-center px-7 text-center">
                  <FileText className="h-10 w-10 text-white/35" />
                  <h2 className="mt-4 font-[Georgia] text-2xl">Select a ledger entry</h2>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-white/50">Choose a record from the queue to inspect every captured field and manage its status.</p>
                </div>
              ) : detailLoading && !selectedItem ? (
                <div className="flex min-h-[520px] items-center justify-center">
                  <LoaderCircle className="h-7 w-7 animate-spin text-[#86a2ff]" />
                </div>
              ) : selectedItem ? (
                <div>
                  <div className="bg-[#292b26] p-5 sm:p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="min-w-0">
                        <span
                          className="inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em]"
                          style={{ color: submissionDefinitions[selectedItem.type].accent, borderColor: `${submissionDefinitions[selectedItem.type].accent}80`, backgroundColor: `${submissionDefinitions[selectedItem.type].accent}16` }}
                        >
                          {submissionDefinitions[selectedItem.type].label}
                        </span>
                        <h2 className="mt-3 break-words font-[Georgia] text-3xl leading-tight tracking-[-0.035em]">{recordTitle(selectedItem)}</h2>
                        <p className="mt-2 break-all text-xs text-white/40">#{selectedItem.id}</p>
                      </div>
                      {detailLoading ? <LoaderCircle className="h-5 w-5 animate-spin text-[#86a2ff]" /> : <StatusPill status={selectedItem.status} />}
                    </div>

                    <div className="mt-5 rounded-2xl border border-white/10 bg-black/15 p-3">
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-white/40">Workflow status</p>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                        {submissionStatuses.map((status) => (
                          <button
                            key={status}
                            type="button"
                            onClick={() => void updateStatus(status)}
                            disabled={Boolean(updatingStatus) || selectedItem.status === status}
                            className={`min-h-9 rounded-xl border px-2 text-[10px] font-bold uppercase tracking-[0.11em] transition ${selectedItem.status === status ? statusPresentation[status].className : 'border-white/10 bg-white/5 text-white/55 hover:bg-white/10 hover:text-white'} disabled:cursor-not-allowed`}
                          >
                            {updatingStatus === status ? <LoaderCircle className="mx-auto h-3.5 w-3.5 animate-spin" /> : statusPresentation[status].label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="max-h-[min(64vh,760px)] space-y-4 overflow-y-auto bg-[#f9f7f1] p-4 text-[#20211d] sm:p-5">
                    {detailError && (
                      <div role="alert" className="rounded-xl border border-[#e0b4aa] bg-[#fff0ec] px-3 py-2.5 text-xs text-[#8b3324]">
                        {detailError}
                      </div>
                    )}

                    <section>
                      <div className="mb-2.5 flex items-center justify-between gap-3">
                        <h3 className="text-xs font-bold uppercase tracking-[0.17em] text-[#625e56]">Captured details</h3>
                        <span className="rounded-full border border-[#d7d1c6] bg-white px-2.5 py-1 text-[10px] font-semibold text-[#777167]">{detailFields.length} fields</span>
                      </div>
                      <dl className="grid gap-2">
                        {detailFields.map((field) => {
                          const value = displayValue(selectedItem.payload[field])
                          const missing = value === 'Not provided'

                          return (
                            <div key={field} className="rounded-xl border border-[#ded9cf] bg-white px-3.5 py-3">
                              <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8a8479]">{formatFieldLabel(selectedItem.type, field)}</dt>
                              <dd className={`mt-1 whitespace-pre-wrap break-words text-sm leading-5 ${missing ? 'italic text-[#aaa398]' : 'text-[#282824]'}`}>{value}</dd>
                            </div>
                          )
                        })}
                      </dl>
                    </section>

                    {selectedItem.hasFile && (
                      <section className="rounded-2xl border border-[#b9c8f1] bg-[#edf2ff] p-4">
                        <div className="flex items-start gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#bdcaf0] bg-white text-[#315bd4]">
                            <FileText className="h-5 w-5" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold">{selectedItem.fileName || 'Attached resume'}</p>
                            <p className="mt-2 text-[11px] leading-4 text-[#5e6680]">External upload. Downloaded files are not malware-scanned; scan before opening.</p>
                            <p className="mt-1 text-xs text-[#646f91]">{selectedItem.fileType || 'Document'} · {formatFileSize(selectedItem.fileSize)}</p>
                          </div>
                        </div>
                        {downloadReadyId === selectedItem.id ? (
                          <a
                            href={`/api/admin/submissions/${encodeURIComponent(selectedItem.id)}/file`}
                            className="mt-3 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-[#315bd4] bg-[#315bd4] px-4 text-sm font-semibold text-white transition hover:bg-[#274ab0]"
                          >
                            <Download className="h-4 w-4" />
                            Download quarantined file
                          </a>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setDownloadReadyId(selectedItem.id)}
                            className="mt-3 inline-flex min-h-10 w-full items-center justify-center rounded-xl border border-[#8995b8] bg-white px-4 text-sm font-semibold text-[#344263] transition hover:border-[#315bd4] hover:text-[#315bd4]"
                          >
                            Acknowledge warning
                          </button>
                        )}
                      </section>
                    )}

                    <section className="grid gap-2 sm:grid-cols-2">
                      <div className="rounded-xl border border-[#ded9cf] bg-[#efebe2] p-3">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8a8479]">Received</p>
                        <p className="mt-1.5 text-xs leading-5 text-[#4f4b44]">{formatDateTime(selectedItem.createdAt)}</p>
                      </div>
                      <div className="rounded-xl border border-[#ded9cf] bg-[#efebe2] p-3">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8a8479]">Last updated</p>
                        <p className="mt-1.5 text-xs leading-5 text-[#4f4b44]">{formatDateTime(selectedItem.updatedAt)}</p>
                      </div>
                      <div className="rounded-xl border border-[#ded9cf] bg-[#efebe2] p-3 sm:col-span-2">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8a8479]">Source path</p>
                        <p className="mt-1.5 break-all font-mono text-xs leading-5 text-[#4f4b44]">{selectedItem.sourcePath}</p>
                      </div>
                    </section>
                  </div>
                </div>
              ) : null}
            </div>
          </aside>
        </div>

        <section className="mt-4 rounded-[22px] border border-[#d8d2c6] bg-[#e9e4da] p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#7b756b]">Intake mix</p>
              <p className="mt-1 text-sm text-[#555149]">Current totals by submission source</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {submissionTypes.map((type) => {
                const definition = submissionDefinitions[type]
                return (
                  <span key={type} className="inline-flex items-center gap-2 rounded-full border border-[#d0cabf] bg-[#f8f6f0] px-3 py-1.5 text-xs font-semibold text-[#504d46]">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: definition.accent }} />
                    {definition.shortLabel}
                    <span className="tabular-nums text-[#8a8479]">{summary.byType[type] || 0}</span>
                  </span>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
