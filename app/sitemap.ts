import type { MetadataRoute } from "next";

import { locales } from "@/lib/i18n";
import { getProducts } from "@/lib/products";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://carboneljito.com";
  const products = await getProducts();

  const staticPaths = ["", "/quienes-somos", "/tienda", "/contacto", "/politica-de-privacidad", "/carrito"];

  const localized = locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified: new Date(),
    })),
  );

  const productPaths = locales.flatMap((locale) =>
    products.map((product) => ({
      url: `${siteUrl}/${locale}/tienda/${product.slug}`,
      lastModified: new Date(),
    })),
  );

  return [...localized, ...productPaths];
}
