import Image from 'next/image';

type Props = {
  name: string;
  image: string;
};

export default function ProductCard({ name, image }: Props) {
  return (
    <article className="flex w-40 shrink-0 flex-col items-center gap-3 rounded-3xl border border-white/15 bg-white/5 p-4 text-center shadow-[0_16px_28px_-22px_rgba(245,197,24,0.7)] md:w-44">
      <div className="relative h-24 w-24 overflow-hidden rounded-full border border-white/20 bg-white/10">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <h3 className="text-sm font-semibold text-white/95">{name}</h3>
    </article>
  );
}
