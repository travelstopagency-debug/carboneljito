"use client";

import { motion } from "framer-motion";

import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("home.hero");

  return (
    <section
      className="flex min-h-[78vh] items-center justify-center px-4 text-center"
      style={{
        background:
          "radial-gradient(ellipse at center, #e85d04 0%, #c1121f 30%, #0a0a0a 70%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl font-black tracking-[0.3em] text-white md:text-7xl">EL JITO</h1>
        <p className="mt-4 text-lg font-semibold tracking-[0.2em] text-brand-yellow">
          {t("subtitle")} ✶
        </p>
        <p className="mt-5 text-zinc-100">{t("tagline")}</p>
      </motion.div>
    </section>
  );
}
