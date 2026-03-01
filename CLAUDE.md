# CLAUDE.md — Stanford EA Site

## Project Overview

Multi-page static site for Stanford Effective Altruism. No framework — plain HTML + Vanilla JS + Vite. Each page is a standalone `.html` file at the project root.

## Dev Server

```bash
npm run dev    # starts Vite at localhost:5173
```

Pages are served directly by filename: `localhost:5173/community.html`, etc.

## Key Conventions

- **Tailwind via CDN** — no build step for styles. Tailwind config lives in a `<script>` block at the top of each HTML file.
- **No shared components** — each page is self-contained. Copy patterns from existing pages when adding new sections.
- **Static assets in `public/`** — anything referenced as `Media/foo.jpg` in HTML must live in `public/Media/`. The root `Media/` folder is source storage only.
- **`.heic` images won't render in Chrome/Firefox** — always convert to `.jpg` first: `sips -s format jpeg input.heic --out public/Media/output.jpg`

## RSS Feed Logic (index.html)

- Feed sources: `RSS_FEEDS` array (~line 1170)
- Deduplication: `titlesAreSimilar()` — exact match, first-15-char prefix match, or 60% substring overlap. Substack is preferred over EA Forum for cross-posts.
- CORS proxies: `fetchWithProxyFallback()` cycles through fallback proxies if primary fails
- Caching: results stored in `localStorage` with a TTL

## Color Tokens (Tailwind theme)

| Token | Hex | Usage |
|-------|-----|-------|
| `cardinal` | `#8C1515` | Stanford red, CTAs, accents |
| `eablue` | `#0C87C9` | EA brand blue |
| `bg` | `#F8FAFC` | Page background |
| `dark` | `#0F172A` | Dark sections |

## Team Photos (`community.html`)

Photos are in `public/Media/`. The card pattern is a `<div class="group">` wrapping a rounded card with `aspect-square` image, name, role, and bio. See existing Ahmad/Dillon/Kuhan cards for reference.

## Git

- `node_modules/`, `dist/`, `.DS_Store`, `*.zip`, `._*` are gitignored
- Remote: `https://github.com/AviParrack/SEA-site.git`
- Default branch: `main`
