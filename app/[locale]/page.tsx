import HeroSection from "@/components/home/HeroSection";
import ProductsSection from "@/components/home/ProductsSection";
import RetailersSection from "@/components/home/RetailersSection";
import SalesSection from "@/components/home/SalesSection";
import { getProducts } from "@/lib/products";

interface HomeProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomeProps) {
  const { locale } = await params;
  const products = await getProducts();

  return (
    <>
      <HeroSection />
      <RetailersSection />
      <ProductsSection products={products} locale={locale} />
      <SalesSection locale={locale} />
    </>
  );
}
