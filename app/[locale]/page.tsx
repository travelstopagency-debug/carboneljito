'use client';

import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';

const ProductModelViewer = dynamic(
  () => import('@/components/three/ProductModelViewer'),
  {
    ssr: false,
    loading: () => (
      <div className="h-[400px] flex items-center justify-center text-gray-500">
        Cargando modelo 3D…
      </div>
    ),
  },
);

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-[#F5C518] text-2xl font-bold tracking-tight">Carbón El Jito</span>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#productos" className="hover:text-[#F5C518] transition">{t('nav.products')}</a>
            <a href="#ventas" className="hover:text-[#F5C518] transition">{t('nav.contact')}</a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-black text-[#F5C518] mb-4 tracking-tight">{t('hero.title')}</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl">{t('hero.subtitle')}</p>
        <a
          href="#productos"
          className="bg-[#F5C518] text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-400 transition text-lg"
        >
          {t('hero.cta')}
        </a>

        <div className="mt-16 w-full max-w-2xl h-[400px]">
          <ProductModelViewer modelPath="/models/sample.glb" />
        </div>
      </section>

      <section className="bg-white py-8 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-12 flex-wrap">
          {['Retailer A', 'Retailer B', 'Retailer C', 'Retailer D'].map((name) => (
            <span key={name} className="text-gray-400 text-lg font-semibold uppercase tracking-widest">
              {name}
            </span>
          ))}
        </div>
      </section>

      <section id="productos" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-[#F5C518] mb-4">{t('products.title')}</h2>
          <p className="text-gray-400 mb-12">{t('products.description')}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 flex flex-col items-center hover:border-[#F5C518]/40 transition"
              >
                <div className="w-48 h-48 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <span className="text-5xl">🔥</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Producto {i}</h3>
                <p className="text-gray-400 text-sm text-center">
                  Carbón vegetal de alta calidad para uso profesional.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ventas" className="py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-[#F5C518] mb-8">{t('sales.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-2">📍 {t('sales.address')}</p>
              <p className="text-gray-300 mb-6">📞 {t('sales.phone')}</p>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-full transition"
              >
                💬 {t('sales.whatsapp')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <span className="text-[#F5C518] font-bold">Carbón El Jito</span>
          <span className="text-gray-500 text-sm">© 2026 — {t('footer.rights')}</span>
        </div>
      </footer>
    </main>
  );
}
