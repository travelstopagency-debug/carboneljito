import Link from "next/link";
import { useTranslations } from "next-intl";

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations("footer");

  return (
    <footer className="mt-auto border-t border-zinc-800 bg-brand-black text-zinc-200">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 md:grid-cols-2 md:px-6">
        <div>
          <h3 className="text-lg font-bold text-white">{t("company")}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href={`/${locale}/quienes-somos`} className="hover:text-brand-yellow">
                {t("quienesSomos")}
              </Link>
            </li>
            <li className="text-zinc-400">{t("mision")}</li>
            <li>
              <Link href={`/${locale}/contacto`} className="hover:text-brand-yellow">
                {t("contacto")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Social</h3>
          <div className="mt-4 flex gap-4 text-2xl" aria-label="social links">
            <span aria-hidden>📘</span>
            <span aria-hidden>🎵</span>
            <span aria-hidden>📸</span>
          </div>
        </div>
      </div>
      <p className="border-t border-zinc-800 px-4 py-4 text-center text-sm text-zinc-400">
        © 2024 Carbón El Jito. {t("rights")}
      </p>
    </footer>
  );
}
