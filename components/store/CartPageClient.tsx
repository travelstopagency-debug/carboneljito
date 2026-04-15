"use client";

import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";

import Button from "@/components/ui/Button";
import { useCartStore } from "@/lib/cartStore";

interface CartPageClientProps {
  locale: string;
}

export default function CartPageClient({ locale }: CartPageClientProps) {
  const t = useTranslations("cart");
  const items = useCartStore((store) => store.items);
  const updateQuantity = useCartStore((store) => store.updateQuantity);
  const removeItem = useCartStore((store) => store.removeItem);
  const total = useCartStore((store) => store.getTotalPrice());

  if (!items.length) {
    return (
      <div className="rounded-xl border border-zinc-800 bg-brand-dark p-8 text-center">
        <h2 className="text-2xl font-bold text-white">{t("empty")}</h2>
        <p className="mt-2 text-zinc-300">{t("emptyDesc")}</p>
        <Link className="mt-6 inline-block text-brand-yellow" href={`/${locale}/tienda`}>
          {t("continueShopping")}
        </Link>
      </div>
    );
  }

  const orderText = encodeURIComponent(
    `Hola! Me interesa hacer un pedido: ${items
      .map((item) => `${item.quantity}x ${locale === "es" ? item.nameEs : item.nameEn}`)
      .join(", ")}`,
  );

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {items.map((item) => (
          <article
            key={item.id}
            className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-zinc-800 bg-brand-dark p-4"
          >
            <div>
              <h3 className="font-bold text-white">{locale === "es" ? item.nameEs : item.nameEn}</h3>
              <p className="text-sm text-zinc-300">${item.price} MXN</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="rounded p-1 text-zinc-200 hover:bg-zinc-700"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                aria-label="Disminuir cantidad"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-8 text-center text-white">{item.quantity}</span>
              <button
                type="button"
                className="rounded p-1 text-zinc-200 hover:bg-zinc-700"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                aria-label="Aumentar cantidad"
              >
                <Plus className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="rounded p-1 text-red-400 hover:bg-zinc-700"
                onClick={() => removeItem(item.id)}
                aria-label={t("remove")}
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="rounded-lg border border-zinc-800 bg-brand-dark p-5">
        <p className="text-lg font-bold text-white">
          {t("subtotal")}: <span className="text-brand-yellow">${total} MXN</span>
        </p>
        <a
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "528142850579"}?text=${orderText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block"
        >
          <Button>{t("orderViaWhatsapp")}</Button>
        </a>
      </div>

      <Link className="text-brand-yellow" href={`/${locale}/tienda`}>
        {t("continueShopping")}
      </Link>
    </div>
  );
}
