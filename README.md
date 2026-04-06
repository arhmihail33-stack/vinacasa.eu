# RAIDAVA — vinacasa.eu

Site-ul proiectului RAIDAVA, o micro-ferma regenerativa in Vulturesti, Arges, Romania.

## Tech Stack

- **Framework**: [Astro](https://astro.build) v6
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4
- **Tipografie**: Playfair Display (headings) + Inter (body)
- **Content**: MDX (blog, produse, cercetare-log)
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
  layouts/
    BaseLayout.astro    — HTML shell + SEO + fonts
    PageLayout.astro    — BaseLayout + Header + Footer
    BlogPost.astro      — Layout articol blog
  components/
    Header.astro        — Nav responsive cu hamburger
    Footer.astro        — Footer 3 coloane
    Hero.astro          — Hero section reutilizabil
    Card.astro          — Card generic
    Timeline.astro      — Timeline vizual
    StatusCard.astro    — Status Razvanis AI
    SectionSeparator.astro — SVG motiv traditional
    BlogCard.astro      — Card articol blog
    ProductCard.astro   — Card produs cu badge
  pages/
    index.astro         — Acasa
    despre.astro        — Povestea noastra
    ferma.astro         — Ferma & Animalele
    camara.astro        — Produse (Camara)
    razvanis.astro      — Razvanis AI Agent
    contact.astro       — Contact + harta
    traditii.astro      — Constructii traditionale
    cercetare/sol-apa.astro — Cercetare sol si apa
    blog/index.astro    — Lista articole
    blog/[...slug].astro — Articol individual
  content/
    blog/               — Articole MDX
    produse/            — Produse MDX
    cercetare-log/      — Log cercetare Razvanis
  styles/global.css     — Tailwind @theme + base styles
```

## Content Collections

| Colectie | Baza | Campuri |
|----------|------|--------|
| blog | src/content/blog/ | title, description, date, author |
| produse | src/content/produse/ | title, category, season, available |
| cercetareLog | src/content/cercetare-log/ | title, date, domain, summary |

## Deploy Netlify

1. Conecteaza repo-ul GitHub pe Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Auto-deploy la fiecare push pe `main`
