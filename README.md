# 🔥 Carbón El Jito

Sitio web oficial de **Carbón El Jito — Carbón Vegetal** construido con Next.js App Router, TypeScript, Tailwind CSS y next-intl.

## Requisitos previos

- Node.js 20+
- npm 10+

## Instalación

```bash
npm install
```

## Variables de entorno

Crea un archivo `.env.local` basado en `.env.example`.

| Variable | Descripción | Ejemplo |
| --- | --- | --- |
| `ADMIN_PASSWORD` | Contraseña del panel administrativo | `jito2024admin` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número para pedidos y botón flotante | `528142850579` |
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio para SEO/sitemap | `https://carboneljito.com` |

## Desarrollo local

```bash
npm run dev
```

Abrir:

- Sitio público: `http://localhost:3000/es`
- Sitio en inglés: `http://localhost:3000/en`
- Admin login: `http://localhost:3000/admin/login`

## Panel de administración

1. Ir a `/admin/login`
2. Ingresar `ADMIN_PASSWORD`
3. Administrar productos en:
   - `/admin/dashboard`
   - `/admin/productos`
   - `/admin/productos/nuevo`

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Deploy en Vercel

1. Conectar repositorio en Vercel.
2. Configurar variables de entorno del proyecto.
3. Deploy automático con cada push.
4. Verificar rutas localizadas (`/es`, `/en`), APIs (`/api/products`) y admin (`/admin`).
