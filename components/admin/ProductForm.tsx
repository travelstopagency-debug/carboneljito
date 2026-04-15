"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Button from "@/components/ui/Button";
import { Product } from "@/types";

const schema = z.object({
  id: z.string().min(2),
  slug: z.string().min(2),
  nameEs: z.string().min(2),
  nameEn: z.string().min(2),
  descriptionEs: z.string().min(10),
  descriptionEn: z.string().min(10),
  price: z.number().positive(),
  category: z.enum(["carbon", "briquetas", "iniciadores", "limpieza"]),
  gradient: z.string().min(5),
  inStock: z.boolean(),
  featured: z.boolean(),
});

type FormValues = z.infer<typeof schema>;

interface ProductFormProps {
  initialValues?: Product;
  method: "POST" | "PUT";
  endpoint: string;
}

export default function ProductForm({ initialValues, method, endpoint }: ProductFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: initialValues
      ? {
          ...initialValues,
          price: initialValues.price,
          inStock: initialValues.inStock,
          featured: initialValues.featured,
        }
      : {
          id: "",
          slug: "",
          nameEs: "",
          nameEn: "",
          descriptionEs: "",
          descriptionEn: "",
          price: 0,
          category: "carbon",
          gradient: "from-orange-900 to-amber-800",
          inStock: true,
          featured: false,
        },
  });

  const onSubmit = async (values: FormValues) => {
    setSaving(true);
    setError("");

    const response = await fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, currency: "MXN", imageUrl: "" }),
    });

    setSaving(false);

    if (!response.ok) {
      setError("No se pudo guardar el producto");
      return;
    }

    router.push("/admin/productos");
    router.refresh();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-semibold">
          ID
          <input className="mt-1 w-full rounded border px-3 py-2" {...register("id")} />
          {errors.id ? <span className="text-xs text-red-600">{errors.id.message}</span> : null}
        </label>
        <label className="text-sm font-semibold">
          Slug
          <input className="mt-1 w-full rounded border px-3 py-2" {...register("slug")} />
          {errors.slug ? <span className="text-xs text-red-600">{errors.slug.message}</span> : null}
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-semibold">
          Nombre (ES)
          <input className="mt-1 w-full rounded border px-3 py-2" {...register("nameEs")} />
        </label>
        <label className="text-sm font-semibold">
          Name (EN)
          <input className="mt-1 w-full rounded border px-3 py-2" {...register("nameEn")} />
        </label>
      </div>

      <label className="block text-sm font-semibold">
        Descripción (ES)
        <textarea className="mt-1 w-full rounded border px-3 py-2" rows={3} {...register("descriptionEs")} />
      </label>
      <label className="block text-sm font-semibold">
        Description (EN)
        <textarea className="mt-1 w-full rounded border px-3 py-2" rows={3} {...register("descriptionEn")} />
      </label>

      <div className="grid gap-4 md:grid-cols-3">
        <label className="text-sm font-semibold">
          Precio
          <input type="number" className="mt-1 w-full rounded border px-3 py-2" {...register("price", { valueAsNumber: true })} />
        </label>
        <label className="text-sm font-semibold">
          Categoría
          <select className="mt-1 w-full rounded border px-3 py-2" {...register("category")}>
            <option value="carbon">Carbón</option>
            <option value="briquetas">Briquetas</option>
            <option value="iniciadores">Iniciadores</option>
            <option value="limpieza">Limpieza</option>
          </select>
        </label>
        <label className="text-sm font-semibold">
          Gradiente Tailwind
          <input className="mt-1 w-full rounded border px-3 py-2" {...register("gradient")} />
        </label>
      </div>

      <div className="flex gap-6">
        <label className="inline-flex items-center gap-2 text-sm font-semibold">
          <input type="checkbox" {...register("inStock")} /> En stock
        </label>
        <label className="inline-flex items-center gap-2 text-sm font-semibold">
          <input type="checkbox" {...register("featured")} /> Destacado
        </label>
      </div>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      <Button type="submit" disabled={saving}>
        {saving ? "Guardando..." : "Guardar producto"}
      </Button>
    </form>
  );
}
