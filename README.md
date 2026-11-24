# recluzedev.me

Personal portfolio for **Zain Ali** — Backend Engineer who ships AI features.

Dark, single page, no contact form. Built so a recruiter can understand who Zain is,
what he's built, and how to reach him inside twenty seconds on a phone.

The full brief — why the site exists, who it's for, and why each decision went the way
it did — is in [SPEC.md](./SPEC.md).

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router), TypeScript strict |
| Styling | Tailwind CSS v4, CSS-first `@theme` tokens |
| Fonts | Geist Sans + Geist Mono via `next/font` |
| Icons | `lucide-react` |
| Motion | Hand-rolled `IntersectionObserver` + CSS transitions |
| Hosting | Vercel |

No animation library. The only motion on the site is a fade-and-rise on scroll, and a
library for it cost ~50 kB of First Load JS — most of the page's performance budget for
something CSS already does. See `src/components/ui/Reveal.tsx`.

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build       # production build
npm run start       # serve the production build
npm run type-check  # tsc --noEmit
npm run lint        # eslint
```

## Editing the content

**Everything the site says lives in [`src/content/site.ts`](./src/content/site.ts).**
No copy is hardcoded in components, so updating a project or adding a job never means
touching JSX. Types are in `src/content/types.ts`.

One rule worth keeping: every project carries a `pain` field — the one-line problem it
solves, in plain English. It's the thing the site is built to make memorable, and it gets
more visual weight than the tech tags. If a project can't be reduced to one sentence of
pain, it doesn't belong on the site.

To swap the résumé, replace `public/resume.pdf`.

**The site carries no imagery** — no portrait, no project screenshots, zero `<img>`
elements. That's deliberate; the memorability hook is each project's oversized accent pain
line, not a picture.

## Structure

```
src/
├── app/
│   ├── layout.tsx            # fonts, metadata, Person JSON-LD
│   ├── page.tsx              # composes the six sections
│   ├── globals.css           # @theme tokens and base styles
│   ├── opengraph-image.tsx   # OG card, generated at build
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/               # Navbar
│   ├── sections/             # Hero, About, Skills, Projects, Experience, Contact
│   │                         #   Contact is the <footer> landmark — contact and
│   │                         #   footer are one closing block
│   └── ui/                   # Container, Section, Reveal, Tag, Button, SocialRow
├── content/
│   ├── site.ts               # ← all copy and data
│   └── types.ts
└── lib/utils.ts              # cn()
```

## Design tokens

Defined once in `src/app/globals.css`. No hardcoded hex values in components.

| Token | Value | |
|---|---|---|
| `--color-bg` | `#0a0a0a` | page |
| `--color-surface` | `#121212` | cards |
| `--color-border` | `#232323` | hairlines |
| `--color-fg` | `#fafafa` | headings |
| `--color-muted` | `#a1a1aa` | body |
| `--color-subtle` | `#71717a` | labels |
| `--color-accent` | `#34d399` | links, pain lines |

Dark only — there is no light theme and no toggle.

## Accessibility

Semantic landmarks, a single `h1`, visible focus rings, `aria-label` on every icon-only
control, a skip link, and a mobile menu that traps focus and closes on `Escape`. All
motion is gated behind `prefers-reduced-motion`, and the reveal animation is forced off
entirely when JavaScript is unavailable.

## Deploying

Connected to Vercel, `main` is production, custom domain `recluzedev.me`
(the `CNAME` file is a leftover from GitHub Pages and is harmless). No environment
variables are needed.
