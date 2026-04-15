import { promises as fs } from "node:fs";
import path from "node:path";

import { Product } from "@/types";

const productsPath = path.join(process.cwd(), "data", "products.json");

export async function getProducts(): Promise<Product[]> {
  const file = await fs.readFile(productsPath, "utf8");
  return JSON.parse(file) as Product[];
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((product) => product.id === id);
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((product) => product.slug === slug);
}

export async function saveProducts(products: Product[]): Promise<void> {
  await fs.writeFile(productsPath, `${JSON.stringify(products, null, 2)}\n`, "utf8");
}
