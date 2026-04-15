'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import type { User } from '@supabase/supabase-js';

const ERP_MODULES = [
  { label: 'Productos', icon: '📦', href: '/admin/products', description: 'Gestiona el catálogo de productos' },
  { label: 'Inventario', icon: '🏭', href: '/admin/inventory', description: 'Control de stock y ubicaciones' },
  { label: 'Pedidos', icon: '🛒', href: '/admin/orders', description: 'Gestiona pedidos y entregas' },
  { label: 'Clientes', icon: '👥', href: '/admin/customers', description: 'Base de datos de clientes' },
  { label: 'Distribuidores', icon: '🏪', href: '/admin/retailers', description: 'Gestiona distribuidores' },
  { label: 'Reportes', icon: '📊', href: '/admin/reports', description: 'Ventas y estadísticas' },
];

export default function AdminDashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.push('/admin/login');
      } else {
        setUser(data.user);
        setLoading(false);
      }
    });
  }, [router]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push('/admin/login');
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400">Cargando panel…</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen px-6 py-8">
      <header className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-black text-[#F5C518]">Panel de administración</h1>
          <p className="text-gray-400 mt-1 text-sm">Bienvenido, {user?.email}</p>
        </div>
        <button
          onClick={handleLogout}
          className="border border-white/20 text-gray-300 hover:border-red-500 hover:text-red-400 px-4 py-2 rounded-lg text-sm transition"
        >
          Cerrar sesión
        </button>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ERP_MODULES.map((mod) => (
          <a
            key={mod.href}
            href={mod.href}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#F5C518]/40 hover:bg-white/10 transition group"
          >
            <div className="text-4xl mb-3">{mod.icon}</div>
            <h2 className="text-lg font-bold group-hover:text-[#F5C518] transition">{mod.label}</h2>
            <p className="text-gray-400 text-sm mt-1">{mod.description}</p>
          </a>
        ))}
      </div>

      <div className="mt-12 text-center text-xs text-gray-600">Carbón El Jito ERP v0.1 — Fase 2</div>
    </main>
  );
}
