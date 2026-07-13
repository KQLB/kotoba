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

Backend status: vocabulary data comes from the Jisho dictionary API, proxied through the Route Handler at `src/app/api/vocabulary/route.ts` (Jisho has no CORS headers, so the browser can't call it directly). Client code fetches via helpers in `src/lib/api/` — never `fetch` directly from components. The companion API in the sibling `kotoba-be` repo (NestJS) is not yet wired up.

## Dark mode

The site has a class-based dark mode (`dark` class on `<html>`, toggled by `src/components/shared/ThemeToggle.tsx`, persisted in `localStorage`, applied pre-hydration by an inline script in `src/app/layout.tsx`). **Every new page or component MUST support it** — any hardcoded light color needs a `dark:` variant. Follow the existing mapping:

- Section background `bg-white` / `bg-slate-50` → add `dark:bg-slate-950`
- Card background `bg-white` → add `dark:bg-slate-900`
- Borders `border-slate-100/200` → add `dark:border-slate-800/700`
- Text: `text-slate-900` → `dark:text-white`; `text-slate-800` → `dark:text-slate-100`; `text-slate-600` → `dark:text-slate-300`; `text-slate-500` → `dark:text-slate-400`
- Rose accents: `bg-rose-50` → `dark:bg-rose-950/50`; `text-rose-600` → `dark:text-rose-400`; `border-rose-100` → `dark:border-rose-900`
- Other color tints follow the same pattern: `{color}-50` bg → `dark:{color}-950/50`, `{color}-600` text → `dark:{color}-400`
- Color classes stored in `src/constants/siteData.ts` must include their dark variants in the string

Prefer shadcn semantic tokens (`bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-card`) for new components — they adapt automatically without `dark:` classes.

## Responsive

Mobile-first Tailwind: base classes target mobile, scale up with `sm:` / `md:` / `lg:` (the only breakpoints in use — don't introduce `xl:`/`2xl:`). **Every new page or component must work from 375px up.** Follow the existing patterns:

- Page/section container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (narrow content pages use `max-w-3xl`)
- Card grids: `grid sm:grid-cols-2 lg:grid-cols-3` (or `lg:grid-cols-4`) — single column on mobile by default
- Two-column layouts stack on mobile: `grid lg:grid-cols-2`
- Headings scale: e.g. `text-4xl sm:text-5xl`, hero `text-5xl sm:text-6xl lg:text-7xl`
- Desktop nav is `hidden md:flex`; mobile gets `MobileMenu` behind a `md:hidden` hamburger — new nav items go in both
- Flex rows that can overflow use `flex-wrap`

## Code organization

- **Keep components and pages small.** A page composes components; it should not contain big blocks of JSX itself. When a component grows past ~150 lines or renders several distinct visual blocks, split it — either into small local function components in the same file (see HeroSection: HeroBadge, HeroHeading, HeroButtons, HeroStats) or into its own folder with an `index.ts` when the pieces are big enough to stand alone (see `sections/hero/`).
- **One responsibility per part.** Data fetching/state lives in the container component (VocabularyDeck), presentation in dumb children (Flashcard). Don't mix a fetch, a form, and layout in one component.
- **Types go in `src/types/`**, one file per domain (`site.ts`, `vocabulary.ts`) — never declare shared interfaces inline in a component. Props interfaces used by only one component may stay in that component's file.
- **Static content/config goes in `src/constants/siteData.ts`**, not inline arrays in JSX.
- **Reusable stateful logic goes in `src/hooks/`** (see `useScrolled`); API calls go in `src/lib/api/` — components never call `fetch` directly.
- Shared UI used by 2+ features goes in `components/shared/`; shadcn primitives stay in `components/ui/` (don't hand-edit beyond styling needs).

## Internationalization (i18n)

The app is bilingual (en/vi) via i18next. **No user-facing string may be hardcoded in JSX** — always `t("key")` from `useTranslation()`, and add the key to BOTH `src/locales/en.json` and `src/locales/vi.json` in the same change (a missing key silently renders the raw key). Rich text uses `<Trans>` with `components` (see HeroSection). Keys are nested per feature (`nav.*`, `hero.*`, `vocabularyPage.*`) — follow that grouping for new features.

## Accessibility

- Clickable things that navigate are `<Link>`/`<a>`; things that act are `<button type="button">` — never a `div` with onClick
- Icon-only buttons need `aria-label` (see ThemeToggle); toggle/selected state uses `aria-pressed` (see LanguageSwitcher, Flashcard)
- Images need meaningful `alt` (or `alt=""` if decorative); one `<h1>` per page, headings in order
- Never remove focus outlines; interactive elements must be reachable and operable by keyboard (see VocabularyDeck key handling)

## SEO

- Every route exports `metadata` (title + description) via the Next Metadata API. This only works in Server Components — keep `page.tsx` as a server component and push `"use client"` down into child components (vocabulary/page.tsx currently violates this; don't copy it)
- Use semantic elements (`<main>`, `<section>`, `<nav>`, `<footer>`) and real heading hierarchy

## Performance

- Don't add `"use client"` to a component that has no state/effects/browser APIs — server components are the default
- Images go through `next/image`, not `<img>`
- Don't add a dependency for what a few lines or an existing dep (lucide-react, tailwind, i18next) already covers

## Security

Applies once the `kotoba-be` API gets wired up:

- Secrets only in server-side env vars — anything `NEXT_PUBLIC_*` ships to the browser, so never put keys/tokens there
- Never render API/user-provided strings with `dangerouslySetInnerHTML`; the only allowed use is the theme-init script in `layout.tsx`
- Validate/narrow external data at the fetch boundary (typed parse helpers in `src/lib/api/`), don't trust response shapes

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
