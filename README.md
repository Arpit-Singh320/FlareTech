# Flaretech

Marketing site for **Flaretech** — bionic robotics, built in public.

Flaretech builds biomimetic robots — starting with a bionic butterfly — and the
intelligence and on-chain autonomy to run them. The site documents the build:
plywood → robotics → intelligence → on-chain autonomy (Virtuals Protocol).

- X / Twitter: [@Flaretechxyz](https://x.com/Flaretechxyz)

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS + shadcn/ui (Radix primitives)
- GSAP + React Bits–style animated components (`src/components/reactbits`)
- React Router (single landing page at `/`)

## Commands

```bash
npm install
npm run dev       # start dev server
npm run build     # production build
npm run lint      # eslint
npm run test      # vitest
```

## Structure

- `src/pages/Index.tsx` — the landing page (all sections)
- `src/components/marketing/` — layout, header, footer, and page sections
- `src/components/reactbits/` — animated primitives (Aurora, SpotlightCard, etc.)
- `src/index.css` — design tokens (monochrome palette, warm amber accent)
