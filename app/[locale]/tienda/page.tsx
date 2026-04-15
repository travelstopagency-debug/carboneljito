import { getTranslations } from "next-intl/server";

import ProductGrid from "@/components/store/ProductGrid";
import { getProducts } from "@/lib/products";

interface StorePageProps {
  params: Promise<{ locale: string }>;
}

export default async function StorePage({ params }: StorePageProps) {
  const { locale } = await params;
  const products = await getProducts();
  const t = await getTranslations("store");

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6">
      <h1 className="mb-6 text-4xl font-black text-white">{t("title")}</h1>
      <ProductGrid products={products} locale={locale} />
    </section>
  );
}
