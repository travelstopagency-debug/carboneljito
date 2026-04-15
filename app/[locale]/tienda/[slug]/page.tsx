import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import ProductDetailActions from "@/components/store/ProductDetailActions";
import ProductCard from "@/components/store/ProductCard";
import Badge from "@/components/ui/Badge";
import { getProductBySlug, getProducts } from "@/lib/products";

interface ProductDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { locale, slug } = await params;
  const product = await getProductBySlug(slug);
  const t = await getTranslations("store");

  if (!product) {
    notFound();
  }

  const products = await getProducts();
  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className={`min-h-80 rounded-xl bg-gradient-to-br ${product.gradient}`} aria-label="Imagen del producto" />
        <div className="space-y-4">
          <Badge>{product.category}</Badge>
          <h1 className="text-4xl font-black text-white">{locale === "es" ? product.nameEs : product.nameEn}</h1>
          <p className="text-zinc-300">{locale === "es" ? product.descriptionEs : product.descriptionEn}</p>
          <p className="text-3xl font-black text-brand-yellow">${product.price} MXN</p>
          <ProductDetailActions product={product} />
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-black text-white">{t("related")}</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
