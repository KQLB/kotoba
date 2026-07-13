# Kotoba (言葉)

Japanese vocabulary-learning web app. Frontend built with Next.js; the companion API lives in the sibling [`kotoba-be`](../kotoba-be) repo (NestJS).

## Stack

- Next.js 16 (App Router) + React 19, TypeScript
- Tailwind CSS v4 + shadcn/ui (class-based dark mode included)
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
    ├── app/                # routes: / (landing), /vocabulary (flashcards),
    │                       # /kanji /grammar /jlpt /community (coming soon)
    ├── components/
    │   ├── common/
    │   ├── layout/         # Navbar, Footer, MobileMenu
    │   ├── providers/      # I18nProvider
    │   ├── sections/       # landing page sections
    │   ├── shared/         # LanguageSwitcher, ThemeToggle, SectionHeader, ...
    │   ├── ui/             # shadcn/ui primitives
    │   └── vocabulary/     # Flashcard, VocabularyDeck
    ├── constants/          # static site content
    ├── hooks/
    ├── lib/                # cn() util, API fetch helpers (src/lib/api/)
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

## Configuration

`NEXT_PUBLIC_API_URL` — base URL of the `kotoba-be` API (defaults to `http://localhost:3001/api/v1`). If the API is unreachable, `/vocabulary` falls back to a built-in mock dataset.

## Status

- Marketing landing page (hero, courses, culture, features, progress, testimonials) — done
- `/vocabulary` — JLPT flashcard deck with level filter and keyboard navigation (Space to flip, ←/→ to move); uses mock data until the backend is deployed
- `/kanji`, `/grammar`, `/jlpt`, `/community` — coming-soon stubs
- Dark mode toggle (persisted, follows system preference by default) and en/vi language switcher in the navbar

See [CLAUDE.md](CLAUDE.md) for guidance when working on this repo with Claude Code.

Demo link: https://kotoba-delta-tan.vercel.app/