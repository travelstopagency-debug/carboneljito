import Image from 'next/image';

type Props = {
  eyebrow: string;
  subtitle: string;
};

export default function HeroSection({ eyebrow, subtitle }: Props) {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/hero-fire.svg"
        alt="Charcoal fire background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

      <div className="relative mx-auto flex min-h-[72vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.5em] text-[#f5c518] md:text-sm">{eyebrow}</p>
        <h1 className="text-5xl font-black uppercase leading-tight tracking-[0.18em] text-white md:text-7xl">EL JITO</h1>
        <p className="mt-3 text-sm uppercase tracking-[0.35em] text-white/80 md:text-base">CARBÓN VEGETAL</p>
        <p className="mt-8 max-w-2xl text-base text-white/85 md:text-lg">{subtitle}</p>
      </div>
    </section>
  );
}
