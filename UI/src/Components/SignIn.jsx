function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: hook into your auth API
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 text-slate-100">
      <div className="w-full max-w-md">
        <div className="bg-slate-900/80 border border-slate-800 shadow-2xl rounded-2xl p-6 backdrop-blur">
          {/* Brand */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-400 to-cyan-400 flex items-center justify-center text-slate-900 font-semibold tracking-[0.2em] text-xs shadow-lg">
              TS
            </div>
            <div>
              <h1 className="text-lg font-semibold leading-tight">TopStop</h1>
              <p className="text-xs text-slate-400">
                Your one-stop shop, on top.
              </p>
            </div>
          </div>

          {/* Sign-in form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <h2 className="text-base font-semibold">Welcome back</h2>
              <p className="text-xs text-slate-400 mt-1">
                Sign in to continue to TopStop.
              </p>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-200">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 placeholder:text-slate-500"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-200">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 placeholder:text-slate-500"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300">
              <label className="inline-flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="remember"
                  className="h-3.5 w-3.5 rounded border-slate-600 bg-slate-900 text-emerald-400 focus:ring-cyan-500/60"
                />
                <span>Remember me</span>
              </label>
              <button
                type="button"
                className="text-cyan-400 hover:text-cyan-300 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full inline-flex justify-center items-center rounded-xl bg-gradient-to-tr from-emerald-400 to-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:brightness-105 active:translate-y-px transition"
            >
              Sign in
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-slate-400">
            New to TopStop?{' '}
            <a href="#signup" className="text-cyan-400 hover:text-cyan-300 hover:underline">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;