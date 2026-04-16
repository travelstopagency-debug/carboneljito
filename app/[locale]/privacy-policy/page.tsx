import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import MarketingInfoPage from '@/components/home/MarketingInfoPage';

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== 'en') {
    notFound();
  }
  const t = await getTranslations();

  return (
    <MarketingInfoPage
      locale={locale}
      navLabels={{ about: t('nav.about'), contact: t('nav.contact'), privacy: t('nav.privacy') }}
      title={t('privacy.title')}
      description={t('privacy.description')}
    />
  );
}
