import { useState } from 'react';

function SignUp() {
  const [mode, setMode] = useState('signup');
  const isSignIn = mode === 'signin';

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 text-slate-100" id="signup">
      <div className="w-full max-w-lg">
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

          {/* Tabs */}
          <div className="flex rounded-full bg-slate-900/80 border border-slate-800 p-0.5 mb-5 text-xs font-medium">
            <button
              type="button"
              onClick={() => setMode('signin')}
              className={`flex-1 py-2 rounded-full transition ${
                isSignIn
                  ? 'bg-slate-800 text-slate-100 shadow'
                  : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              Sign in
            </button>
            <button
              type="button"
              onClick={() => setMode('signup')}
              className={`flex-1 py-2 rounded-full transition ${
                !isSignIn
                  ? 'bg-slate-800 text-slate-100 shadow'
                  : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              Sign up
            </button>
          </div>

          {isSignIn ? <SignInForm /> : <SignUpForm />}

          <p className="mt-4 text-center text-xs text-slate-400">
            {isSignIn ? (
              <>
                New to TopStop?{' '}
                <button
                  type="button"
                  onClick={() => setMode('signup')}
                  className="text-cyan-400 hover:text-cyan-300 hover:underline"
                >
                  Create an account
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setMode('signin')}
                  className="text-cyan-400 hover:text-cyan-300 hover:underline"
                >
                  Sign in
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

function SignInForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <h2 className="text-base font-semibold">Welcome back</h2>
        <p className="text-xs text-slate-400 mt-1">
          Sign in to continue to TopStop.
        </p>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-medium text-slate-200">Email</label>
        <input
          type="email"
          name="email"
          className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 placeholder:text-slate-500"
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-medium text-slate-200">Password</label>
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
  );
}

function SignUpForm() {

  const [UserName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const userDetails = {
    UserName,
    email,
    password,
    confirmPassword
  };

  const handleSubmit = async(event) => {
    event.preventDefault(); 
    console.log(userDetails);
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
// TODO: hook into your auth API
   const response = await fetch('', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userDetails)
   });
   if (response.ok) {
    alert('User created successfully');
    navigate('/signin');
   } else {
    alert('User creation failed');
    navigate('/signup');
   }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <h2 className="text-base font-semibold">Create your account</h2>
        <p className="text-xs text-slate-400 mt-1">
          Join TopStop and start shopping smarter.
        </p>
      </div>
    
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-slate-200">
            User Name
          </label>
          <input
            type="text"
            name="UserName"
            className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 placeholder:text-slate-500"
            placeholder="John"
            onChange={(event) => setUserName(event.target.value)}
            required
          />
        </div>


      <div className="space-y-1.5">
        <label className="text-xs font-medium text-slate-200">Email</label>
        <input
          type="email"
          name="email"
          className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 placeholder:text-slate-500"
          placeholder="you@example.com"
          onChange={(event) => setEmail(event.target.value)}  
          required
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-medium text-slate-200">Password</label>
        <input
          type="password"
          name="password"
          className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 placeholder:text-slate-500"
          placeholder="Create a strong password"
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-medium text-slate-200">
          Confirm password
        </label>
        <input
          type="password"
          name="confirmPassword"
          className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 placeholder:text-slate-500"
          placeholder="Repeat your password"
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        />
      </div>

      <div className="flex items-start gap-2 text-xs text-slate-300">
        <input
          type="checkbox"
          name="terms"
          className="mt-0.5 h-3.5 w-3.5 rounded border-slate-600 bg-slate-900 text-emerald-400 focus:ring-cyan-500/60"
          required
        />
        <span>
          I agree to the{' '}
          <a href="#" className="text-cyan-400 hover:text-cyan-300 hover:underline">
            Terms
          </a>{' '}
          and{' '}
          <a href="#" className="text-cyan-400 hover:text-cyan-300 hover:underline">
            Privacy Policy
          </a>
          .
        </span>
      </div>

      <button
        type="submit"
        className="w-full inline-flex justify-center items-center rounded-xl bg-gradient-to-tr from-emerald-400 to-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:brightness-105 active:translate-y-px transition"
      >
        Create account
      </button>
    </form>
  );
}

export default SignUp;

