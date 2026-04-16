import { getTranslations } from 'next-intl/server';
import MarketingNavbar from '@/components/home/MarketingNavbar';
import HeroSection from '@/components/home/HeroSection';
import RetailersStrip from '@/components/home/RetailersStrip';
import ProductsSection from '@/components/home/ProductsSection';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations();

  return (
    <main className="min-h-screen bg-black text-white">
      <MarketingNavbar
        locale={locale}
        labels={{
          about: t('nav.about'),
          contact: t('nav.contact'),
          privacy: t('nav.privacy'),
        }}
      />
      <HeroSection eyebrow={t('hero.eyebrow')} subtitle={t('hero.subtitle')} />
      <RetailersStrip />
      <ProductsSection title={t('products.title')} products={t.raw('products.items') as string[]} />
    </main>
  );
}
