type Props = {
  retailers: string[];
};

export default function RetailersStrip({ retailers }: Props) {
  return (
    <section className="border-y border-black/10 bg-white py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-6 md:gap-8">
        {retailers.map((retailer) => (
          <span
            key={retailer}
            className="rounded-full border border-zinc-300 bg-zinc-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-600 md:text-sm"
          >
            {retailer}
          </span>
        ))}
      </div>
    </section>
  );
}
