'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import type { User } from '@supabase/supabase-js';

const MODULE_LINKS = [
  { href: '/admin/dashboard', label: 'Dashboard' },
  { href: '/admin/products', label: 'Products' },
  { href: '/admin/orders', label: 'Orders' },
  { href: '/admin/inventory', label: 'Inventory' },
  { href: '/admin/customers', label: 'Customers' },
  { href: '/admin/retailers', label: 'Retailers' },
  { href: '/admin/reports', label: 'Reports' },
];
const ADMIN_BG_CLASS = 'bg-[#0a0a0a]';

type Props = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

function AdminLoadingState() {
  return (
    <div className={`min-h-screen flex items-center justify-center ${ADMIN_BG_CLASS}`}>
      <p className="text-zinc-400">Loading ERP...</p>
    </div>
  );
}

export default function AdminShell({ title, subtitle, children }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.replace('/admin/login');
        return;
      }

      setUser(data.user);
      setLoading(false);
    });
  }, [router]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push('/admin/login');
  }

  if (loading) {
    return <AdminLoadingState />;
  }

  return (
    <main className={`min-h-screen ${ADMIN_BG_CLASS} text-zinc-100`}>
      <div className="mx-auto flex w-full max-w-7xl gap-6 px-4 py-6 md:px-6 md:py-8">
        <aside className="hidden w-64 shrink-0 rounded-2xl border border-white/10 bg-zinc-950/80 p-5 lg:block">
          <h2 className="text-lg font-bold text-[#f5c518]">Carbón El Jito ERP</h2>
          <p className="mt-1 text-xs text-zinc-500">Employee workspace</p>
          <nav className="mt-6 flex flex-col gap-2">
            {MODULE_LINKS.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-2 text-sm transition ${
                    active ? 'bg-[#f5c518] text-black' : 'text-zinc-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        <section className="flex-1 rounded-2xl border border-white/10 bg-zinc-950/70 p-6 md:p-8">
          <header className="mb-8 flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <h1 className="text-3xl font-black text-[#f5c518]">{title}</h1>
              <p className="mt-1 text-sm text-zinc-400">{subtitle}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden text-xs text-zinc-500 md:inline">{user?.email}</span>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-lg border border-white/20 px-3 py-2 text-xs text-zinc-300 transition hover:border-red-400 hover:text-red-300"
              >
                Sign out
              </button>
            </div>
          </header>

          {children}
        </section>
      </div>
    </main>
  );
}
