import Link from 'next/link';
import MarketingNavbar from '@/components/home/MarketingNavbar';
import { getLocalizedHref } from '@/lib/localeRouting';

type Props = {
  locale: string;
  navLabels: { about: string; contact: string; privacy: string };
  title: string;
  description: string;
};

export default function MarketingInfoPage({ locale, navLabels, title, description }: Props) {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <MarketingNavbar locale={locale} labels={navLabels} />
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-black text-[#f5c518]">{title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-300">{description}</p>
        <div className="mt-10">
          <Link
            href={getLocalizedHref(locale, 'home')}
            className="rounded-full border border-[#f5c518]/70 px-6 py-2 text-sm font-semibold text-[#f5c518] transition hover:bg-[#f5c518] hover:text-black"
          >
            ← Carbón El Jito
          </Link>
        </div>
      </section>
    </main>
  );
}
