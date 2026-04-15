import { NextResponse } from "next/server";

import { getProducts, saveProducts } from "@/lib/products";
import { Product } from "@/types";

function validateProduct(product: Partial<Product>): product is Product {
  return Boolean(
    product.id &&
      product.slug &&
      product.nameEs &&
      product.nameEn &&
      product.descriptionEs &&
      product.descriptionEn &&
      typeof product.price === "number" &&
      product.currency &&
      product.category &&
      typeof product.inStock === "boolean" &&
      typeof product.featured === "boolean" &&
      product.gradient,
  );
}

export async function GET() {
  const products = await getProducts();
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const product = (await request.json()) as Partial<Product>;

  if (!validateProduct(product)) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const products = await getProducts();

  if (products.some((item) => item.id === product.id || item.slug === product.slug)) {
    return NextResponse.json({ error: "Product already exists" }, { status: 409 });
  }

  const updatedProducts = [...products, product];
  await saveProducts(updatedProducts);

  return NextResponse.json(product, { status: 201 });
}
