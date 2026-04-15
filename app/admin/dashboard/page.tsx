import Link from "next/link";

import AdminSidebar from "@/components/admin/AdminSidebar";
import { getProducts } from "@/lib/products";

export default async function AdminDashboardPage() {
  const products = await getProducts();
  const inStock = products.filter((product) => product.inStock).length;
  const featured = products.filter((product) => product.featured).length;

  return (
    <main className="mx-auto flex w-full max-w-7xl gap-6 px-4 py-8 lg:px-6">
      <AdminSidebar />
      <section className="flex-1 space-y-6">
        <h1 className="text-3xl font-black text-zinc-900">Dashboard</h1>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-lg bg-white p-5 shadow">
            <p className="text-sm text-zinc-500">Total productos</p>
            <p className="text-3xl font-black">{products.length}</p>
          </article>
          <article className="rounded-lg bg-white p-5 shadow">
            <p className="text-sm text-zinc-500">En stock</p>
            <p className="text-3xl font-black">{inStock}</p>
          </article>
          <article className="rounded-lg bg-white p-5 shadow">
            <p className="text-sm text-zinc-500">Destacados</p>
            <p className="text-3xl font-black">{featured}</p>
          </article>
        </div>
        <div className="flex gap-3">
          <Link href="/admin/productos" className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white">
            Gestionar productos
          </Link>
          <Link href="/admin/productos/nuevo" className="rounded-md bg-brand-orange px-4 py-2 text-sm font-semibold text-white">
            Nuevo producto
          </Link>
        </div>
      </section>
    </main>
  );
}
