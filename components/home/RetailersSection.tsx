import { useTranslations } from "next-intl";

const retailers = ["Soriana", "Casa Ley", "Alsuper", "MercadoLibre"];

export default function RetailersSection() {
  const t = useTranslations("home.retailers");

  return (
    <section className="bg-white py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-3 px-4 text-center md:px-6">
        <p className="mr-2 text-sm font-bold uppercase text-zinc-700">{t("title")}</p>
        {retailers.map((retailer) => (
          <span
            key={retailer}
            className="rounded-full border border-zinc-300 bg-zinc-50 px-4 py-1 text-sm font-medium text-zinc-800"
          >
            {retailer}
          </span>
        ))}
      </div>
    </section>
  );
}
