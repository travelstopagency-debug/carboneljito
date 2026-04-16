'use client';

import Link from 'next/link';
import AdminShell from '@/components/admin/AdminShell';

const ERP_MODULES = [
  { href: '/admin/products', title: 'Products', description: 'Manage the product catalog' },
  { href: '/admin/orders', title: 'Orders', description: 'Track order lifecycles and fulfillment' },
  { href: '/admin/inventory', title: 'Inventory', description: 'Control stock movement and levels' },
  { href: '/admin/customers', title: 'Customers', description: 'Maintain customer records and activity' },
  { href: '/admin/retailers', title: 'Retailers', description: 'Manage retail and distribution partners' },
  { href: '/admin/reports', title: 'Reports', description: 'Review performance analytics and KPIs' },
];

export default function AdminDashboardPage() {
  return (
    <AdminShell title="ERP Dashboard" subtitle="Operational modules for employees">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {ERP_MODULES.map((module) => (
          <Link
            key={module.href}
            href={module.href}
            className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-[#f5c518]/60 hover:bg-white/10"
          >
            <h2 className="text-lg font-bold text-zinc-100">{module.title}</h2>
            <p className="mt-2 text-sm text-zinc-400">{module.description}</p>
          </Link>
        ))}
      </div>
    </AdminShell>
  );
}
