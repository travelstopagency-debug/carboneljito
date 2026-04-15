"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

import Button from "@/components/ui/Button";
import { useCartStore } from "@/lib/cartStore";
import { Product } from "@/types";

interface ProductDetailActionsProps {
  product: Product;
}

export default function ProductDetailActions({ product }: ProductDetailActionsProps) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((store) => store.addItem);
  const t = useTranslations("cart");

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <p className="text-sm text-zinc-400">{t("quantity")}</p>
        <div className="inline-flex items-center gap-2 rounded-md border border-zinc-700 p-1">
          <button
            aria-label="Decrease quantity"
            className="rounded p-1 text-zinc-200 hover:bg-zinc-800"
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            type="button"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="min-w-8 text-center text-white">{quantity}</span>
          <button
            aria-label="Increase quantity"
            className="rounded p-1 text-zinc-200 hover:bg-zinc-800"
            onClick={() => setQuantity((prev) => prev + 1)}
            type="button"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
      <Button onClick={() => addItem(product, quantity)} type="button">
        Agregar al carrito
      </Button>
    </div>
  );
}
