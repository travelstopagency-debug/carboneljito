import AdminSidebar from "@/components/admin/AdminSidebar";
import ProductForm from "@/components/admin/ProductForm";

export default function NewProductPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl gap-6 px-4 py-8 lg:px-6">
      <AdminSidebar />
      <section className="flex-1 rounded-lg bg-white p-6 shadow">
        <h1 className="mb-4 text-3xl font-black text-zinc-900">Nuevo producto</h1>
        <ProductForm method="POST" endpoint="/api/products" />
      </section>
    </main>
  );
}
