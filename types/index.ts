export type Locale = "es" | "en";

export type Category = "carbon" | "briquetas" | "iniciadores" | "limpieza";

export interface Product {
  id: string;
  slug: string;
  nameEs: string;
  nameEn: string;
  descriptionEs: string;
  descriptionEn: string;
  price: number;
  currency: "MXN";
  category: Category;
  imageUrl: string;
  inStock: boolean;
  featured: boolean;
  gradient: string;
}

export interface CartItem {
  id: string;
  slug: string;
  nameEs: string;
  nameEn: string;
  price: number;
  quantity: number;
}
