import Link from 'next/link';
import LanguageToggle from '@/components/home/LanguageToggle';
import { getLocalizedHref } from '@/lib/localeRouting';

type Props = {
  locale: string;
  labels: {
    about: string;
    contact: string;
    privacy: string;
  };
};

export default function MarketingNavbar({ locale, labels }: Props) {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link href={getLocalizedHref(locale, 'home')} className="text-xl font-bold tracking-wide text-[#f5c518] md:text-2xl">
          Carbón El Jito
        </Link>

        <div className="flex items-center gap-4 text-sm md:gap-6">
          <Link href={getLocalizedHref(locale, 'about')} className="text-white/90 transition hover:text-[#f5c518]">
            {labels.about}
          </Link>
          <Link href={getLocalizedHref(locale, 'contact')} className="text-white/90 transition hover:text-[#f5c518]">
            {labels.contact}
          </Link>
          <Link href={getLocalizedHref(locale, 'privacy')} className="text-white/90 transition hover:text-[#f5c518]">
            {labels.privacy}
          </Link>
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}
