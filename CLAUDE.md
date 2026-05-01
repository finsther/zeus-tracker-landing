# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev      # dev server at localhost:4321
bun build    # production build
bun preview  # preview production build
```

No linter or test runner configured yet.

## Stack

- **Astro 6** with `output: server` (SSR via Vercel adapter, ISR 30min)
- **Tailwind CSS v4** via `@tailwindcss/vite` (no config file — tokens live in `global.css @theme`)
- **astro-icon** for all icons — Remix Icons (`ri:*`) and local SVGs from `src/icons/`
- **Vercel** deployment target

## Path alias

`@/` maps to `src/` — use it everywhere, no relative imports.

## Architecture

`BaseLayout.astro` wraps every page: injects `global.css`, `Navbar`, `Footer`, and standard meta tags. Accepts `title` and `description` props.

`src/lib/api.ts` — `fetchFromAPI<T>(path)` reads `PUBLIC_API_URL` from env. All API calls go through it.

`src/mocks/` — static mock arrays used in `index.astro` while real API is not wired. When connecting real data, replace mock imports with `fetchFromAPI` calls server-side in the frontmatter.

`src/types/` — one interface per entity (`Series`, `Movie`, `Genre`, `Review`, `FAQItem`, `Category`). All exported from `src/types/index.ts`.

## Design system

All design tokens are in `src/styles/global.css` inside `@theme {}`. Use CSS variables — do not use Tailwind color/spacing utility classes that bypass the token scale.

Key token groups:
- Colors: `--color-background*`, `--color-fg*`, `--color-border*`, `--color-accent` (yellow), `--color-secondary` (red)
- Typography: `--font-display` (Fraunces serif), `--font-body` (Inter), `--font-mono` (JetBrains Mono)
- Scale: `--text-1` through `--text-12`, `--spacing-1` through `--spacing-20`, `--radius-1` through `--radius-full`
- Z-index: `--z-raised`, `--z-sticky`, `--z-drawer`, `--z-modal`, `--z-toast`
- Light theme overrides live under `[data-theme="light"]`; default is dark (`<html data-theme="dark">`)

## Icons

- Brand/UI icons: `<Icon name="ri:*" />` from Remix Icons
- Local brand SVGs: place in `src/icons/`, use as `<Icon name="filename-without-ext" />`
- Material Symbols (`material-symbols:*`) also installed but used for UI system icons only — it has no brand/social icons
- Always import `Icon` from `'astro-icon/components'`

## index.astro sections (all pending)

Hero · Trending · Best Movies · Must Watch Series · Genres · Recent Reviews · FAQ · Categories · Info CTA

## Code conventions
- All code in English: variables, functions, components, types, file names, comments
- Exception: UX copy values (text visible to the user) must be in Spanish
