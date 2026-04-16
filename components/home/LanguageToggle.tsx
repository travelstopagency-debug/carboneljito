'use client';

import { useTransition } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { getEquivalentLocalePath, type AppLocale } from '@/lib/localeRouting';

export default function LanguageToggle() {
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function switchTo(targetLocale: AppLocale) {
    if (targetLocale === locale || isPending) {
      return;
    }

    startTransition(() => {
      router.push(getEquivalentLocalePath(pathname, targetLocale));
    });
  }

  return (
    <div className="inline-flex items-center rounded-full border border-white/30 p-0.5 text-xs">
      {(['es', 'en'] as AppLocale[]).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => switchTo(lang)}
          className={`rounded-full px-3 py-1 uppercase tracking-wide transition ${
            locale === lang ? 'bg-[#f5c518] text-black' : 'text-white/80 hover:text-white'
          }`}
          aria-label={`Switch language to ${lang.toUpperCase()}`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
