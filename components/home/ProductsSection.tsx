import { useTranslations } from "next-intl";

import ProductCard from "@/components/store/ProductCard";
import { Product } from "@/types";

interface ProductsSectionProps {
  products: Product[];
  locale: string;
}

export default function ProductsSection({ products, locale }: ProductsSectionProps) {
  const t = useTranslations("home.products");

  return (
    <section className="bg-brand-dark py-16">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black text-white md:text-4xl">{t("title")}</h2>
          <p className="mt-4 text-zinc-300">{t("description")}</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
