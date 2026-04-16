# 🔥 Carbón El Jito

Official website for Carbón El Jito — Carbón Vegetal.

## Apps

- Public bilingual site (Next.js + next-intl): `/{locale}/*`
- ERP admin app (Vite build served by Next): `/admin/*`

## Environment variables

Use the same Supabase project for both apps:

```bash
# Next public site
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# ERP (Vite app in /erp)
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

## ERP scripts

From the repository root:

```bash
npm run erp:install   # install /erp dependencies
npm run erp:build     # build ERP into /erp/dist (base: /admin/)
npm run erp:dev       # run ERP vite dev server directly
npm run erp:typecheck # optional ERP TypeScript check
```

To serve ERP from Next at `/admin/*` in local dev:

1. Run `npm run erp:install` once
2. Run `npm run erp:build` whenever ERP changes
3. Run `npm run dev` for Next
