import Link from "next/link";

const links = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/productos", label: "Productos" },
  { href: "/admin/productos/nuevo", label: "Nuevo producto" },
];

export default function AdminSidebar() {
  return (
    <aside className="w-full rounded-lg border border-zinc-200 bg-white p-4 lg:w-64">
      <p className="text-sm font-bold text-zinc-500">ADMIN</p>
      <p className="mb-4 text-lg font-black text-zinc-900">Carbón El Jito</p>
      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block rounded-md px-3 py-2 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
