"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

import Button from "@/components/ui/Button";
import { useCartStore } from "@/lib/cartStore";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  locale: string;
}

export default function ProductCard({ product, locale }: ProductCardProps) {
  const t = useTranslations("store");
  const addItem = useCartStore((store) => store.addItem);

  return (
    <article className="group overflow-hidden rounded-xl border border-zinc-800 bg-brand-dark transition hover:scale-[1.01] hover:border-brand-orange hover:shadow-[0_0_20px_rgba(232,93,4,0.2)]">
      <div className={`h-36 bg-gradient-to-br ${product.gradient}`} />
      <div className="space-y-3 p-4">
        <h3 className="text-lg font-bold text-white">
          {locale === "es" ? product.nameEs : product.nameEn}
        </h3>
        <p className="line-clamp-2 text-sm text-zinc-300">
          {locale === "es" ? product.descriptionEs : product.descriptionEn}
        </p>
        <p className="text-xl font-black text-brand-yellow">${product.price} MXN</p>
        <div className="flex gap-2">
          <Button
            type="button"
            className="flex-1"
            onClick={() => addItem(product)}
            aria-label={`${t("addToCart")}: ${locale === "es" ? product.nameEs : product.nameEn}`}
          >
            {t("addToCart")}
          </Button>
          <Link
            href={`/${locale}/tienda/${product.slug}`}
            className="flex-1 rounded-md border border-zinc-600 px-3 py-2 text-center text-sm font-semibold text-white transition hover:border-brand-yellow"
          >
            {t("viewDetails")}
          </Link>
        </div>
      </div>
    </article>
  );
}
