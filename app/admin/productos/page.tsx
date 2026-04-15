import Link from "next/link";

import AdminSidebar from "@/components/admin/AdminSidebar";
import DeleteProductButton from "@/components/admin/DeleteProductButton";
import { getProducts } from "@/lib/products";

export default async function AdminProductsPage() {
  const products = await getProducts();

  return (
    <main className="mx-auto flex w-full max-w-7xl gap-6 px-4 py-8 lg:px-6">
      <AdminSidebar />
      <section className="flex-1">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-3xl font-black text-zinc-900">Productos</h1>
          <Link className="rounded-md bg-brand-orange px-4 py-2 text-sm font-semibold text-white" href="/admin/productos/nuevo">
            Nuevo
          </Link>
        </div>

        <div className="overflow-hidden rounded-lg border bg-white">
          <table className="min-w-full text-sm">
            <thead className="bg-zinc-100 text-left text-zinc-600">
              <tr>
                <th className="px-4 py-3">Producto</th>
                <th className="px-4 py-3">Categoría</th>
                <th className="px-4 py-3">Precio</th>
                <th className="px-4 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-t">
                  <td className="px-4 py-3 font-semibold">{product.nameEs}</td>
                  <td className="px-4 py-3">{product.category}</td>
                  <td className="px-4 py-3">${product.price}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <Link
                        className="rounded border px-3 py-1 text-xs font-semibold"
                        href={`/admin/productos/${product.id}`}
                      >
                        Editar
                      </Link>
                      <DeleteProductButton id={product.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
