import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Carbón El Jito — Admin',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[#0A0A0A] text-white">{children}</body>
    </html>
  );
}
