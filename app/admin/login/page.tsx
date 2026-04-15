"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import Button from "@/components/ui/Button";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    setLoading(false);

    if (!response.ok) {
      setError("Contraseña inválida");
      return;
    }

    router.push("/admin/dashboard");
    router.refresh();
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <form onSubmit={onSubmit} className="w-full max-w-md rounded-xl border bg-white p-6 shadow">
        <h1 className="text-2xl font-black text-zinc-900">Acceso Administrador</h1>
        <p className="mt-2 text-sm text-zinc-500">Ingresa la contraseña de administrador.</p>
        <label className="mt-5 block text-sm font-semibold text-zinc-800">
          Contraseña
          <input
            className="mt-1 w-full rounded border px-3 py-2"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            required
          />
        </label>
        {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
        <Button type="submit" className="mt-5 w-full" disabled={loading}>
          {loading ? "Validando..." : "Entrar"}
        </Button>
      </form>
    </main>
  );
}
