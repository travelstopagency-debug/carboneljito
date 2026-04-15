import Link from "next/link";
import { useTranslations } from "next-intl";

import Button from "@/components/ui/Button";

interface SalesSectionProps {
  locale: string;
}

export default function SalesSection({ locale }: SalesSectionProps) {
  const t = useTranslations("home.sales");

  return (
    <section className="bg-brand-black py-16 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-black">{t("title")}</h2>
        <p className="mt-4 max-w-4xl text-zinc-300">{t("description")}</p>
        <div className="mt-6 space-y-2 text-sm">
          <p>
            <strong>{t("phone")}:</strong> {t("phoneNumber")}
          </p>
          <p>
            <strong>{t("address")}:</strong> {t("addressLine1")}, {t("addressLine2")}, {t("addressLine3")}
          </p>
        </div>
        <Link href={`/${locale}/contacto`} className="mt-6 inline-block">
          <Button>{t("contact")}</Button>
        </Link>
      </div>
    </section>
  );
}
