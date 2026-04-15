import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://carboneljito.com"),
  title: {
    default: "Carbón El Jito | Carbón Vegetal",
    template: "%s | Carbón El Jito",
  },
  description:
    "Carbón El Jito: carbón vegetal, briquetas, iniciadores y productos de limpieza para parrilla.",
  openGraph: {
    title: "Carbón El Jito",
    description:
      "Carbón El Jito: carbón vegetal premium, briquetas y accesorios para asado.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://carboneljito.com",
    siteName: "Carbón El Jito",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full bg-brand-black text-zinc-100">{children}</body>
    </html>
  );
}
