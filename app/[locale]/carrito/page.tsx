import { getTranslations } from "next-intl/server";

import CartPageClient from "@/components/store/CartPageClient";

interface CartPageProps {
  params: Promise<{ locale: string }>;
}

export default async function CartPage({ params }: CartPageProps) {
  const { locale } = await params;
  const t = await getTranslations("cart");

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12 md:px-6">
      <h1 className="mb-6 text-4xl font-black text-white">{t("title")}</h1>
      <CartPageClient locale={locale} />
    </section>
  );
}
