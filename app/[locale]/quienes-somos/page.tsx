import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-16 text-zinc-100 md:px-6">
      <h1 className="text-4xl font-black text-white">{t("title")}</h1>
      <div className="mt-8 space-y-6 text-lg leading-relaxed text-zinc-300">
        <p>{t("p1")}</p>
        <p>{t("p2")}</p>
        <p>{t("p3")}</p>
      </div>
    </section>
  );
}
