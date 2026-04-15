import { NextResponse } from "next/server";

import { getProducts, saveProducts } from "@/lib/products";
import { Product } from "@/types";

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(_: Request, context: RouteContext) {
  const { id } = await context.params;
  const products = await getProducts();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}

export async function PUT(request: Request, context: RouteContext) {
  const { id } = await context.params;
  const payload = (await request.json()) as Partial<Product>;
  const products = await getProducts();
  const index = products.findIndex((item) => item.id === id);

  if (index < 0) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  const current = products[index];
  const updated: Product = {
    ...current,
    ...payload,
    id: current.id,
    currency: payload.currency ?? current.currency,
  };

  products[index] = updated;
  await saveProducts(products);

  return NextResponse.json(updated);
}

export async function DELETE(_: Request, context: RouteContext) {
  const { id } = await context.params;
  const products = await getProducts();
  const remaining = products.filter((item) => item.id !== id);

  if (remaining.length === products.length) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  await saveProducts(remaining);

  return NextResponse.json({ success: true });
}
