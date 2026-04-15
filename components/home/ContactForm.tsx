"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { z } from "zod";

import Button from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  message: z.string().min(10),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error" | "sending">("idle");
  const t = useTranslations("contact.form");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 400));
    setStatus("success");
    reset();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <label className="block text-sm font-semibold text-zinc-200">
        {t("name")}
        <input className="mt-1 w-full rounded border border-zinc-700 bg-zinc-900 px-3 py-2 text-white" {...register("name")} />
        {errors.name ? <span className="text-xs text-red-400">{errors.name.message}</span> : null}
      </label>
      <label className="block text-sm font-semibold text-zinc-200">
        {t("email")}
        <input className="mt-1 w-full rounded border border-zinc-700 bg-zinc-900 px-3 py-2 text-white" {...register("email")} />
        {errors.email ? <span className="text-xs text-red-400">{errors.email.message}</span> : null}
      </label>
      <label className="block text-sm font-semibold text-zinc-200">
        {t("phone")}
        <input className="mt-1 w-full rounded border border-zinc-700 bg-zinc-900 px-3 py-2 text-white" {...register("phone")} />
        {errors.phone ? <span className="text-xs text-red-400">{errors.phone.message}</span> : null}
      </label>
      <label className="block text-sm font-semibold text-zinc-200">
        {t("message")}
        <textarea className="mt-1 w-full rounded border border-zinc-700 bg-zinc-900 px-3 py-2 text-white" rows={5} {...register("message")} />
        {errors.message ? <span className="text-xs text-red-400">{errors.message.message}</span> : null}
      </label>
      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? t("sending") : t("send")}
      </Button>
      {status === "success" ? <p className="text-sm text-green-400">{t("success")}</p> : null}
      {status === "error" ? <p className="text-sm text-red-400">{t("error")}</p> : null}
    </form>
  );
}
