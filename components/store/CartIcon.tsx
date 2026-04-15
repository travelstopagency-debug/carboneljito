"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import { useCartStore } from "@/lib/cartStore";

interface CartIconProps {
  locale: string;
}

export default function CartIcon({ locale }: CartIconProps) {
  const totalItems = useCartStore((store) => store.getTotalItems());

  return (
    <Link
      href={`/${locale}/carrito`}
      aria-label="Ir al carrito"
      className="relative rounded-full p-2 text-white transition hover:bg-white/10"
    >
      <ShoppingCart className="h-5 w-5" />
      {totalItems > 0 ? (
        <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-yellow px-1 text-[10px] font-bold text-brand-black">
          {totalItems}
        </span>
      ) : null}
    </Link>
  );
}
