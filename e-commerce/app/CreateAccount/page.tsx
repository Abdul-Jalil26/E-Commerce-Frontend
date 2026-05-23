// e-commerce/app/CreateAccount/page.tsx
import Link from "next/link";
export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_35%),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[auto,72px_72px,72px_72px] opacity-35" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-6 py-12 lg:px-10">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-4xl border border-white/10 bg-white/5 shadow-[0_24px_120px_rgba(2,6,23,0.5)] backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr]">
          <section className="flex flex-col justify-between gap-10 border-b border-white/10 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
            <div className="space-y-6">
              <span className="inline-flex w-fit items-center rounded-full border border-cyan-300/25 bg-cyan-400/10 px-4 py-1 text-xs font-medium tracking-[0.3em] text-cyan-100 uppercase">
                E-Commerce Portal
              </span>

              <div className="space-y-3">
                <h1 className="max-w-md text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Create your account in a few quick steps.
                </h1>
                <p className="max-w-lg text-sm leading-6 text-slate-400 sm:text-base">
                  Set up your profile now so you can browse, save, and check out
                  faster later.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Fast setup", "Create your profile in under a minute."],
                [
                  "Secure access",
                  "Keep your account protected with a strong password.",
                ],
                ["Ready to shop", "Move straight into the store after signup."],
              ].map(([title, description]) => (
                <article
                  key={title}
                  className="rounded-3xl border border-white/10 bg-slate-950/70 p-4"
                >
                  <h2 className="text-sm font-semibold text-white">{title}</h2>
                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="p-8 sm:p-10 lg:p-12">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">
                Create account
              </h2>
              <p className="text-sm leading-6 text-slate-400">
                Enter your details below to continue.
              </p>
            </div>

            <form className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block space-y-2">
                  <span className="text-sm font-medium text-slate-200">
                    First name
                  </span>
                  <input
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    placeholder="Jane"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-400/10"
                  />
                </label>

                <label className="block space-y-2">
                  <span className="text-sm font-medium text-slate-200">
                    Last name
                  </span>
                  <input
                    type="text"
                    name="lastName"
                    autoComplete="family-name"
                    placeholder="Doe"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-400/10"
                  />
                </label>
              </div>

              <label className="block space-y-2">
                <span className="text-sm font-medium text-slate-200">
                  Gender
                </span>
                <select
                  name="gender"
                  defaultValue=""
                  className="h-12 w-full rounded-2xl border border-blue/20 bg-blue/5 px-4 text-blue-300 outline-none transition focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-400/10"
                >
                  <option value="" disabled>
                    Select gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-medium text-slate-200">
                  Password
                </span>
                <input
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  placeholder="••••••••"
                  className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-400/10"
                />
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-medium text-slate-200">
                  Confirm password
                </span>
                <input
                  type="password"
                  name="confirmPassword"
                  autoComplete="new-password"
                  placeholder="••••••••"
                  className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-400/10"
                />
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-cyan-400 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/30"
              >
                Create account
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-400">
              Already have an account?{" "}
              <Link
                href="/SignIn"
                className="font-medium text-white transition hover:text-cyan-200"
              >
                Sign in
              </Link>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
