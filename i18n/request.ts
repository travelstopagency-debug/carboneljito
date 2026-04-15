import { getRequestConfig } from 'next-intl/server';

const LOCALES = ['es', 'en'] as const;

type Locale = (typeof LOCALES)[number];

function normalizeLocale(locale: string | undefined): Locale {
  return LOCALES.includes(locale as Locale) ? (locale as Locale) : 'es';
}

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = normalizeLocale(await requestLocale);

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
