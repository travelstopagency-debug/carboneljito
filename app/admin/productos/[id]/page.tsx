import { notFound } from "next/navigation";

import AdminSidebar from "@/components/admin/AdminSidebar";
import ProductForm from "@/components/admin/ProductForm";
import { getProductById } from "@/lib/products";

interface EditProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditProductPage({ params }: EditProductPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-7xl gap-6 px-4 py-8 lg:px-6">
      <AdminSidebar />
      <section className="flex-1 rounded-lg bg-white p-6 shadow">
        <h1 className="mb-4 text-3xl font-black text-zinc-900">Editar producto</h1>
        <ProductForm method="PUT" endpoint={`/api/products/${id}`} initialValues={product} />
      </section>
    </main>
  );
}
