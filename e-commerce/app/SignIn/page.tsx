
import Link from 'next/link'
export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black text-slate-100">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-6 py-12 lg:px-10">
        <div className="w-full max-w-md rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_120px_rgba(2,6,23,0.45)] backdrop-blur-xl sm:p-8">
          <div className="space-y-2">
            <span className="inline-flex w-fit items-center rounded-full border border-cyan-300/25 bg-cyan-400/10 px-4 py-1 text-xs font-medium tracking-[0.28em] text-cyan-100 uppercase">
              E-Commerce Portal
            </span>
          </div>

          <section className="mt-8 rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-2xl sm:p-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">Welcome back</h2>
              <p className="text-sm leading-6 text-slate-400">Enter your email and password to continue.</p>
            </div>

            <form className="mt-8 space-y-5">
              <label className="block space-y-2">
                <span className="text-sm font-medium text-slate-200">Email</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-400/10"
                />
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-medium text-slate-200">Password</span>
                <input
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-400/10"
                />
              </label>

              <div className="flex items-center justify-between gap-4 text-sm">
                <label className="flex items-center gap-2 text-slate-300">
                  <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-white/5 text-cyan-500 focus:ring-cyan-400" />
                  Remember me
                </label>
                <a href="#" className="font-medium text-cyan-300 transition hover:text-cyan-200">Forgot password?</a>
              </div>

              <button type="submit" className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-cyan-400 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/30">
                Sign in
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-400">
              New here?{' '}
             <Link href="/CreateAccount" className="font-medium text-white transition hover:text-cyan-200">
  Create an account
</Link>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}









