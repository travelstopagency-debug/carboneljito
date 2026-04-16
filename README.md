# 🔥 Carbón El Jito

Bilingual marketing site + ERP admin backend built with Next.js 16 (App Router), `next-intl`, Tailwind v4, and Supabase Auth.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` and use:
- `http://localhost:3000/es`
- `http://localhost:3000/en`
- `http://localhost:3000/admin/login`

## Environment variables (`.env.local`)

Create `.env.local` in the project root:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
NEXT_PUBLIC_WHATSAPP_NUMBER=528142850579
```

`NEXT_PUBLIC_WHATSAPP_NUMBER` is optional for future public contact integrations.
