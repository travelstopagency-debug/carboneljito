"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";

import ProductCard from "@/components/store/ProductCard";
import { categoryKeys } from "@/lib/i18n";
import { Product } from "@/types";

interface ProductGridProps {
  products: Product[];
  locale: string;
}

export default function ProductGrid({ products, locale }: ProductGridProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categoryKeys)[number]>("all");
  const t = useTranslations("store");

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = category === "all" || product.category === category;
      const localizedName = locale === "es" ? product.nameEs : product.nameEn;
      const localizedDescription = locale === "es" ? product.descriptionEs : product.descriptionEn;
      const normalized = query.trim().toLowerCase();
      const matchesQuery =
        normalized.length === 0 ||
        localizedName.toLowerCase().includes(normalized) ||
        localizedDescription.toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [products, category, query, locale]);

  return (
    <section>
      <div className="space-y-4">
        <input
          aria-label={t("searchPlaceholder")}
          className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder:text-zinc-400 focus-visible:outline-2 focus-visible:outline-brand-yellow"
          placeholder={t("searchPlaceholder")}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

        <div className="flex flex-wrap gap-2">
          {categoryKeys.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                category === item
                  ? "bg-brand-orange text-white"
                  : "bg-zinc-800 text-zinc-200 hover:bg-zinc-700"
              }`}
            >
              {item === "all" ? t("categories.all") : t(`categories.${item}`)}
            </button>
          ))}
        </div>
      </div>

      {filtered.length ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} locale={locale} />
          ))}
        </div>
      ) : (
        <p className="mt-8 rounded-lg border border-dashed border-zinc-700 px-6 py-10 text-center text-zinc-300">
          {t("noResults")}
        </p>
      )}
    </section>
  );
}
