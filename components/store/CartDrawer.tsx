"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

import { useCartStore } from "@/lib/cartStore";

interface CartDrawerProps {
  locale: string;
}

export default function CartDrawer({ locale }: CartDrawerProps) {
  const t = useTranslations("cart");
  const items = useCartStore((store) => store.items);

  return (
    <aside className="rounded-lg border border-zinc-700 bg-zinc-900 p-4 text-sm text-zinc-200">
      <p className="font-bold text-white">{t("title")}</p>
      <p className="mt-2">{items.length} items</p>
      <Link className="mt-3 inline-block text-brand-yellow" href={`/${locale}/carrito`}>
        {t("continueShopping")}
      </Link>
    </aside>
  );
}
