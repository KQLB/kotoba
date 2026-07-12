# Kotoba (言葉)

Japanese vocabulary-learning web app. Frontend built with Next.js; the companion API lives in the sibling [`kotoba-be`](../kotoba-be) repo (NestJS).

## Stack

- Next.js 16 (App Router) + React 19, TypeScript
- Tailwind CSS v4
- i18next / react-i18next (English / Vietnamese)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Run production build |
| `npm run lint` | ESLint (`--max-warnings 0`) |
| `npm run tscheck` | TypeScript check (`tsc --noEmit`) |
| `npm run check` | lint + tscheck + build |

## Folder tree

```
kotoba/
├── public/
└── src/
    ├── app/                # routes (App Router)
    │   └── vocabulary/     # /vocabulary route (stub)
    ├── components/
    │   ├── common/
    │   ├── layout/         # Navbar, Footer, MobileMenu
    │   ├── providers/      # I18nProvider
    │   ├── sections/       # landing page sections
    │   └── shared/         # LanguageSwitcher, SectionHeader, StarRating
    ├── constants/          # static site content
    ├── hooks/
    ├── locales/            # en.json, vi.json
    ├── types/
    └── utils/              # i18next init
```

Use the `@/*` path alias for imports from `src/` — relative parent imports (`../`) are disallowed by ESLint.

## Tài liệu nghiệp vụ / API

Đặc tả nghiệp vụ, API và data model của toàn hệ thống (FE + BE) sống trong repo backend:

- [../kotoba-be/docs/features.md](../kotoba-be/docs/features.md) — nghiệp vụ theo module
- [../kotoba-be/docs/api.md](../kotoba-be/docs/api.md) — REST endpoint theo module
- [../kotoba-be/docs/db-schema.md](../kotoba-be/docs/db-schema.md) — data model

## Status

Currently a fresh scaffold with a marketing-style landing page and a stub `/vocabulary` route. No backend integration yet.

See [CLAUDE.md](CLAUDE.md) for guidance when working on this repo with Claude Code.
