'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push('/admin/dashboard');
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090909] px-4 py-10 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,197,24,0.2),_transparent_40%)]" />

      <div className="relative mx-auto grid min-h-[85vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black/70 shadow-[0_35px_70px_-35px_rgba(245,197,24,0.55)] md:grid-cols-2">
        <section className="flex flex-col justify-between border-b border-white/10 p-8 md:border-b-0 md:border-r md:border-white/10 md:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#f5c518]">Employee access</p>
            <h1 className="mt-4 text-4xl font-black leading-tight">Carbón El Jito ERP</h1>
            <p className="mt-5 text-sm text-zinc-300">
              Authenticate with your company account to access products, orders, inventory, retailers, and reports.
            </p>
          </div>
          <p className="mt-8 text-xs text-zinc-500">Need access? Contact system administration.</p>
        </section>

        <section className="p-8 md:p-10">
          <h2 className="text-2xl font-bold text-[#f5c518]">Sign in</h2>
          <p className="mt-2 text-sm text-zinc-400">Use your assigned Supabase credentials.</p>

          <form onSubmit={handleLogin} className="mt-8 flex flex-col gap-4">
            {error && (
              <div className="rounded-lg border border-red-400/50 bg-red-500/10 px-4 py-3 text-sm text-red-300">{error}</div>
            )}

            <label className="flex flex-col gap-2 text-sm text-zinc-300">
              Email
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[#f5c518]"
                placeholder="employee@carboneljito.com"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm text-zinc-300">
              Password
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[#f5c518]"
                placeholder="••••••••"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 rounded-lg bg-[#f5c518] px-4 py-3 font-semibold text-black transition hover:bg-[#ffd84d] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Signing in…' : 'Open dashboard'}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
