# Stanford Effective Altruism — Website

The official website for Stanford EA. Built with plain HTML/Vanilla JS and Vite.

## Pages

| File | Route | Description |
|------|-------|-------------|
| `index.html` | `/` | Home — programs overview, live RSS research feed |
| `community.html` | `/community` | Team, community members, about us |
| `ea.html` | `/ea` | What is EA? — educational content, curated EA Forum feed |
| `career-accelerator.html` | `/career-accelerator` | Career Accelerator program details |
| `project-incubator.html` | `/project-incubator` | Project Incubator program details |
| `manifesto.html` | `/manifesto` | Stanford EA Manifesto (long-form) |

## Tech Stack

- **Build**: [Vite](https://vite.dev) 6 (multi-page)
- **Styling**: Tailwind CSS (CDN) with custom cardinal/EA-blue theme
- **Icons**: Iconify (Solar icon set)
- **3D**: Three.js r128
- **Fonts**: Inter, Source Serif Pro, JetBrains Mono

No framework — pure HTML + Vanilla JS.

## Dev

```bash
npm install
npm run dev       # localhost:5173
npm run build     # outputs to dist/
npm run preview   # preview the build
```

## Asset Organization

```
public/           # Vite static assets (served at /)
  Media/          # Team photos and images
  Docs/           # PDFs (manifesto, etc.)
Media/            # Source copies of media files
```

> Team photos go in `public/Media/`. Vite serves `public/` at the root URL.

## RSS Feeds (Research & Writing)

The home page pulls live posts from multiple RSS feeds:

- Substack feeds (Avi Parrack)
- EA Forum user feeds

Feed sources are configured in `index.html` under `RSS_FEEDS`. Deduplication logic filters cross-posts between Substack and EA Forum, preferring Substack when both exist.

To add a new feed:
```js
{ url: 'https://...', source: 'Substack' | 'EA Forum', author: 'Name', defaultImage: '...' }
```

## Adding Team Members

1. Add photo to `public/Media/` (convert `.heic` to `.jpg` first — `sips -s format jpeg input.heic --out output.jpg`)
2. Add a member card in `community.html` following the existing card pattern
