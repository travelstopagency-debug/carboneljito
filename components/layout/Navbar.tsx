"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import CartIcon from "@/components/store/CartIcon";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

interface NavbarProps {
  locale: string;
}

export default function Navbar({ locale }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const t = useTranslations("nav");

  const links = [
    { href: `/${locale}/quienes-somos`, label: t("quienesSomos") },
    { href: `/${locale}/tienda`, label: t("tienda") },
    { href: `/${locale}/contacto`, label: t("contacto") },
    { href: `/${locale}/politica-de-privacidad`, label: t("politicaPrivacidad") },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800 bg-brand-black/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href={`/${locale}`} className="text-xl font-black tracking-wide text-brand-yellow">
          Carbón El Jito
        </Link>

        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="rounded-md p-2 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-zinc-100 transition hover:text-brand-yellow"
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <CartIcon locale={locale} />
        </div>
      </nav>

      {open ? (
        <div className="border-t border-zinc-800 px-4 py-3 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-zinc-100"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-2">
              <LanguageSwitcher />
              <CartIcon locale={locale} />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
