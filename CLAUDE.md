# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start dev server (Turbopack, port 3000)
- `npm run build` — production build
- `npm run start` — run production build
- `npm run lint` — ESLint, zero warnings allowed (`--max-warnings 0`)
- `npm run tscheck` — TypeScript check (`tsc --noEmit`)
- `npm run check` — lint + tscheck + build, run this before considering a change done

No test runner is configured yet.

## Architecture

Next.js 16 App Router project (see AGENTS.md above — this version has breaking API changes vs. training data; check `node_modules/next/dist/docs/` before using unfamiliar APIs).

- `src/app/` — routes. `page.tsx` is the landing page composed of section components; `vocabulary/page.tsx` is a separate route, currently a stub.
- `src/components/layout/` — global chrome (Navbar, Footer, MobileMenu).
- `src/components/sections/` — landing-page sections (Hero, Courses, Culture, Features, Progress, Testimonials), each self-contained.
- `src/components/shared/` — small reusable UI (LanguageSwitcher, SectionHeader, StarRating).
- `src/components/providers/I18nProvider.tsx` — wraps the app with i18next; translations live in `src/locales/{en,vi}.json`, initialized via `src/utils/i18next.ts`.
- `src/constants/siteData.ts` — static content/config used across sections.
- Path alias `@/*` maps to `src/*`. Relative parent imports (`../`) are disallowed by ESLint — always use `@/`.

There is no backend integration yet: no fetch/axios calls, no API base URL config. The companion API lives in the sibling `kotoba-be` repo (NestJS) but is not yet wired up.

## Folder tree

```
kotoba/
├── AGENTS.md
├── CLAUDE.md
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── tsconfig.json
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
└── src/
    ├── app/
    │   ├── api/
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── vocabulary/
    │       └── page.tsx
    ├── components/
    │   ├── common/
    │   │   └── FloatingKanji.tsx
    │   ├── layout/
    │   │   ├── Footer.tsx
    │   │   ├── MobileMenu.tsx
    │   │   └── Navbar.tsx
    │   ├── providers/
    │   │   └── I18nProvider.tsx
    │   ├── sections/
    │   │   ├── CoursesSection.tsx
    │   │   ├── CultureSection.tsx
    │   │   ├── FeaturesSection.tsx
    │   │   ├── ProgressSection.tsx
    │   │   ├── TestimonialsSection.tsx
    │   │   └── hero/
    │   │       ├── FloatingKanji.tsx
    │   │       ├── HeroSection.tsx
    │   │       ├── HeroShowcase.tsx
    │   │       └── index.ts
    │   └── shared/
    │       ├── LanguageSwitcher.tsx
    │       ├── SectionHeader.tsx
    │       └── StarRating.tsx
    ├── constants/
    │   └── siteData.ts
    ├── hooks/
    │   └── useScrolled.ts
    ├── locales/
    │   ├── en.json
    │   └── vi.json
    ├── types/
    │   └── site.ts
    └── utils/
        └── i18next.ts
```
