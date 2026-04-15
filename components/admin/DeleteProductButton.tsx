"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface DeleteProductButtonProps {
  id: string;
}

export default function DeleteProductButton({ id }: DeleteProductButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onDelete = async () => {
    setLoading(true);
    const response = await fetch(`/api/products/${id}`, { method: "DELETE" });
    setLoading(false);

    if (!response.ok) {
      return;
    }

    router.refresh();
  };

  return (
    <button
      type="button"
      onClick={onDelete}
      disabled={loading}
      className="rounded border border-red-300 px-3 py-1 text-xs font-semibold text-red-600"
    >
      {loading ? "Eliminando..." : "Eliminar"}
    </button>
  );
}
