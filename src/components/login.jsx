import React from "react";
import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex max-w-md flex-col gap-4 px-4 py-14">
        <div>
          <p className="text-sm text-slate-500">
            <Link to="/" className="font-medium text-slate-900 hover:underline">
              ← Back to TopStop
            </Link>
          </p>
          <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900">
            Create your account
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Join TopStop to save addresses, track orders, and checkout faster.
          </p>
        </div>

        <form className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <label className="block text-sm font-medium text-slate-700">
            Full name
            <input
              type="text"
              className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
              placeholder="Nithin B"
            />
          </label>

          <label className="mt-4 block text-sm font-medium text-slate-700">
            Email
            <input
              type="email"
              className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
              placeholder="you@topstop.com"
            />
          </label>

          <label className="mt-4 block text-sm font-medium text-slate-700">
            Password
            <input
              type="password"
              className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
              placeholder="Create a strong password"
            />
          </label>

          <label className="mt-4 block text-sm font-medium text-slate-700">
            Confirm password
            <input
              type="password"
              className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
              placeholder="Re-enter your password"
            />
          </label>

          <button
            type="button"
            className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Create account
          </button>

          <p className="mt-4 text-center text-sm text-slate-600">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-slate-900 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

