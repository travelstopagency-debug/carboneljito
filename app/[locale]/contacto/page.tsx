import { useTranslations } from "next-intl";

import ContactForm from "@/components/home/ContactForm";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:px-6">
      <div>
        <h1 className="text-4xl font-black text-white">{t("title")}</h1>
        <p className="mt-4 text-zinc-300">{t("intro")}</p>

        <div className="mt-8 rounded-lg border border-zinc-800 bg-brand-dark p-5">
          <h2 className="text-xl font-bold text-white">{t("hours.title")}</h2>
          <p className="mt-2 text-zinc-300">{t("hours.weekdays")}</p>
          <p className="text-zinc-300">{t("hours.saturday")}</p>
        </div>

        <div className="mt-6 space-y-1 text-sm text-zinc-300">
          <p>�� 8142850579</p>
          <p>📍 Carretera a Reynosa #216, Colonia Nuevo León, Guadalupe N.L.</p>
          <p>📘 Facebook | 🎵 TikTok | 📸 Instagram</p>
        </div>
      </div>

      <div className="rounded-lg border border-zinc-800 bg-brand-dark p-6">
        <ContactForm />
      </div>
    </section>
  );
}
