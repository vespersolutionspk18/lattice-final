'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight, KeyRound, LoaderCircle, LockKeyhole, ShieldCheck } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/admin/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      const result = await response.json().catch(() => null) as { error?: string } | null

      if (!response.ok) {
        throw new Error(result?.error || 'Unable to sign in with those credentials.')
      }

      router.replace('/admin')
      router.refresh()
    } catch (loginError) {
      setPassword('')
      setError(loginError instanceof Error ? loginError.message : 'Unable to sign in. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#f2efe7] px-3 py-3 text-[#1d1e1a] sm:px-5 sm:py-5" style={{ backgroundImage: 'radial-gradient(circle at 12% 8%, rgba(49, 91, 212, 0.13), transparent 27%), radial-gradient(circle at 88% 84%, rgba(192, 137, 39, 0.09), transparent 24%)' }}>
      <div className="mx-auto flex min-h-[calc(100vh-1.5rem)] w-full max-w-6xl flex-col sm:min-h-[calc(100vh-2.5rem)]">
        <nav className="flex items-center justify-between gap-4 px-1 py-2 sm:px-2">
          <Link href="/" className="inline-flex items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#315bd4]/30">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#292a26] bg-[#1d1e1a] text-xs font-bold tracking-[-0.03em] text-white">L</span>
            <span className="text-base font-semibold tracking-[-0.025em]">Lattice</span>
          </Link>
          <span className="hidden rounded-full border border-[#d4cec2] bg-[#faf8f3] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.17em] text-[#756f65] sm:inline-flex">
            Restricted workspace
          </span>
        </nav>

        <div className="flex flex-1 items-center justify-center py-5 sm:py-8">
          <section className="grid w-full overflow-hidden rounded-[30px] border border-[#d3cdc1] bg-[#fbf9f4] shadow-[0_28px_90px_rgba(38,37,32,0.16)] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[330px] overflow-hidden bg-[#244fc2] p-7 text-white sm:p-10 lg:min-h-[650px] lg:p-12" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)', backgroundSize: '44px 44px' }}>
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#86a2ff]/25 blur-3xl" />
              <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#0d2b85]/55 blur-3xl" />

              <div className="relative flex h-full flex-col justify-between gap-12">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Internal access
                  </span>
                  <h1 className="mt-8 max-w-xl font-[Georgia] text-5xl leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-[4.5rem]">
                    Every lead,<br />in one ledger.
                  </h1>
                  <p className="mt-6 max-w-md text-sm leading-6 text-white/68 sm:text-base sm:leading-7">
                    Review public inquiries, qualify opportunities, manage applications, and keep the intake queue moving.
                  </p>
                </div>

                <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {[
                    ['01', 'Authenticated'],
                    ['02', 'Auditable'],
                    ['03', 'Operational'],
                  ].map(([number, label]) => (
                    <div key={number} className="rounded-2xl border border-white/15 bg-black/10 p-3.5 backdrop-blur-sm">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">{number}</p>
                      <p className="mt-2 text-sm font-semibold text-white/90">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center p-6 sm:p-10 lg:p-12">
              <div className="mx-auto w-full max-w-md">
                <div className="mb-8">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d1cbc0] bg-[#efebe2] text-[#315bd4]">
                    <KeyRound className="h-5 w-5" />
                  </span>
                  <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.2em] text-[#315bd4]">Admin session</p>
                  <h2 className="mt-2 font-[Georgia] text-4xl leading-tight tracking-[-0.045em]">Sign in to continue.</h2>
                  <p className="mt-3 text-sm leading-6 text-[#716c63]">Use the private credentials configured for this environment.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4" aria-busy={isSubmitting}>
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.13em] text-[#5d5951]">Username</span>
                    <input
                      type="text"
                      name="username"
                      value={username}
                      onChange={(event) => {
                        setUsername(event.target.value)
                        if (error) setError('')
                      }}
                      autoComplete="username"
                      required
                      disabled={isSubmitting}
                      placeholder="Admin username"
                      className="h-12 w-full rounded-2xl border border-[#d4cec2] bg-white px-4 text-sm outline-none transition placeholder:text-[#a29c91] focus:border-[#315bd4] focus:ring-2 focus:ring-[#315bd4]/15 disabled:cursor-not-allowed disabled:opacity-65"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.13em] text-[#5d5951]">Password</span>
                    <div className="relative">
                      <LockKeyhole className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#969084]" />
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(event) => {
                          setPassword(event.target.value)
                          if (error) setError('')
                        }}
                        autoComplete="current-password"
                        required
                        disabled={isSubmitting}
                        placeholder="Admin password"
                        className="h-12 w-full rounded-2xl border border-[#d4cec2] bg-white px-4 pr-11 text-sm outline-none transition placeholder:text-[#a29c91] focus:border-[#315bd4] focus:ring-2 focus:ring-[#315bd4]/15 disabled:cursor-not-allowed disabled:opacity-65"
                      />
                    </div>
                  </label>

                  {error && (
                    <div role="alert" aria-live="polite" className="rounded-2xl border border-[#dfb4aa] bg-[#fff0ec] px-4 py-3 text-sm leading-5 text-[#8b3324]">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex min-h-12 w-full items-center justify-between rounded-2xl border border-[#315bd4] bg-[#315bd4] px-5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(49,91,212,0.24)] transition hover:bg-[#2749ae] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span>{isSubmitting ? 'Starting secure session…' : 'Open intake ledger'}</span>
                    {isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                  </button>
                </form>

                <div className="mt-7 rounded-2xl border border-[#d8d2c6] bg-[#f1ede5] p-4">
                  <div className="flex gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#315bd4]" />
                    <p className="text-xs leading-5 text-[#6c675e]">Credentials are sent directly to the secure session endpoint and are never saved in browser storage.</p>
                  </div>
                </div>

                <Link href="/" className="mt-6 inline-flex items-center gap-2 rounded-full text-sm font-semibold text-[#5d5951] transition hover:text-[#315bd4] focus:outline-none focus:ring-2 focus:ring-[#315bd4]/20">
                  <ArrowLeft className="h-4 w-4" />
                  Return to website
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
