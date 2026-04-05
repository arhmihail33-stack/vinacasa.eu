# RAIDAVA — vinacasa.eu

Site-ul proiectului RAIDAVA, o micro-ferma regenerativa in Vulturesti, Arges, Romania.

## Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4
- **Content**: MDX (articole blog)
- **Deploy**: Netlify (auto-deploy din main)

## Setup Local

```bash
npm install
npm run dev        # Dev server la localhost:4321
npm run build      # Build productie in ./dist/
npm run preview    # Preview build local
```

## Structura

```
src/
  layouts/Layout.astro    — Layout principal (nav + footer)
  pages/
    index.astro           — Pagina principala
    despre.astro          — Despre RAIDAVA
    razvanis.astro        — Razvanis AI Agent
    cercetare/sol-apa.astro — Cercetare sol si apa
    blog/index.astro      — Lista articole
    blog/[...slug].astro  — Articol individual
  content/blog/           — Articole MDX
  styles/global.css       — Tailwind config + teme
```

## Deploy Netlify

1. Conecteaza repo-ul GitHub pe Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Auto-deploy la fiecare push pe `main`
