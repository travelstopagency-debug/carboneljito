import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-brand-black px-4 text-center text-white">
      <p className="text-brand-yellow">404</p>
      <h1 className="mt-2 text-4xl font-black">Página no encontrada</h1>
      <p className="mt-3 text-zinc-300">No pudimos encontrar lo que buscas.</p>
      <Link
        href="/es"
        className="mt-6 rounded-md bg-brand-orange px-4 py-2 font-semibold text-white hover:bg-brand-orange-light"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
