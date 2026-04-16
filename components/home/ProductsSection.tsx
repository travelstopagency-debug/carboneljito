import ProductCard from '@/components/home/ProductCard';

type Props = {
  title: string;
  products: string[];
};

export default function ProductsSection({ title, products }: Props) {
  return (
    <section className="bg-black px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-center text-3xl font-black text-[#f5c518] md:text-4xl">{title}</h2>

        <div className="mx-auto max-w-5xl rounded-[4rem] border border-white/20 bg-gradient-to-b from-zinc-900 to-black px-6 py-10 shadow-[0_24px_50px_-28px_rgba(245,197,24,0.65)] md:rounded-[999px] md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {products.map((name, index) => (
              <ProductCard key={name} name={name} image={`/images/products/product-${index + 1}.svg`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
