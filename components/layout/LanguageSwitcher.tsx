"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { defaultLocale, locales } from "@/lib/i18n";
import { Locale } from "@/types";

function swapLocale(pathname: string, locale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${locale}`;
  }

  if (locales.includes(segments[0] as Locale)) {
    segments[0] = locale;
    return `/${segments.join("/")}`;
  }

  return `/${locale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = (pathname.split("/").filter(Boolean)[0] as Locale) || defaultLocale;

  return (
    <div className="flex items-center gap-2 text-xs font-bold">
      {locales.map((locale) => (
        <Link
          aria-label={`Switch language to ${locale.toUpperCase()}`}
          key={locale}
          href={swapLocale(pathname, locale)}
          className={
            currentLocale === locale
              ? "text-brand-yellow"
              : "text-zinc-300 hover:text-brand-yellow"
          }
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
