export const SUPPORTED_LOCALES = ['es', 'en'] as const;

export type AppLocale = (typeof SUPPORTED_LOCALES)[number];

export type MarketingRouteKey = 'home' | 'about' | 'contact' | 'privacy';

const localizedPaths: Record<MarketingRouteKey, Record<AppLocale, string>> = {
  home: { es: '', en: '' },
  about: { es: '/quienes-somos', en: '/about' },
  contact: { es: '/contacto', en: '/contact' },
  privacy: { es: '/politica-de-privacidad', en: '/privacy-policy' },
};

export function normalizeLocale(locale: string): AppLocale {
  return locale === 'en' ? 'en' : 'es';
}

export function getLocalizedHref(locale: string, route: MarketingRouteKey): string {
  const safeLocale = normalizeLocale(locale);
  const suffix = localizedPaths[route][safeLocale];
  return suffix ? `/${safeLocale}${suffix}` : `/${safeLocale}`;
}

function resolveRouteKey(pathWithoutLocale: string): MarketingRouteKey | null {
  const normalizedPath = pathWithoutLocale.replace(/\/$/, '');

  if (!normalizedPath) {
    return 'home';
  }

  for (const [routeKey, localeMap] of Object.entries(localizedPaths) as [
    MarketingRouteKey,
    Record<AppLocale, string>
  ][]) {
    if (Object.values(localeMap).includes(normalizedPath)) {
      return routeKey;
    }
  }

  return null;
}

export function getEquivalentLocalePath(pathname: string, targetLocale: AppLocale): string {
  const [, currentLocale, ...restSegments] = pathname.split('/');
  const isLocalePrefix = SUPPORTED_LOCALES.includes(currentLocale as AppLocale);
  const pathWithoutLocale = isLocalePrefix ? `/${restSegments.join('/')}` : pathname;
  const routeKey = resolveRouteKey(pathWithoutLocale);

  if (!routeKey) {
    const normalizedPath = pathWithoutLocale === '/' ? '' : pathWithoutLocale;
    return `/${targetLocale}${normalizedPath}`;
  }

  return getLocalizedHref(targetLocale, routeKey);
}
