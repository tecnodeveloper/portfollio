# Portfolio Website — Specification

**Owner:** Zain Ali — github.com/tecnodeveloper · linkedin.com/in/recluzedev
**Domain:** recluzedev.me
**Status:** Built and verified locally · not yet deployed
**Updated:** 2026-11-24

---

## 1. Why this site exists

This is the part that drives every other decision, so it comes first.

### The pain it solves

Three things are broken today:

1. **GitHub doesn't explain anything.** Repo names like `pwdAgent`, `mtChatbot` and
   `evChargerFinder` mean nothing to a recruiter, and the READMEs don't lead with the
   problem being solved. The portfolio is the translation layer between Zain's code and
   a reader who will not open a repo.
2. **There is no single link to send.** Applying currently means pasting a CV, a GitHub
   URL and a LinkedIn URL separately. One link should carry all of it and work on a
   phone in ten seconds.
3. **Applications get filtered out before any conversation happens.** The site exists to
   survive a 20-second skim and earn a first reply.

### What success looks like

**The visitor remembers his name.** Not a form submission, not a bounce rate — recall.
When his CV resurfaces in a pile three weeks later, the name should land.

That makes this a *memorability* brief, not a conversion brief, and it changed the build:

- One distinctive visual signature held consistently — emerald on near-black with mono
  labels, an engineer's terminal rather than a SaaS landing page.
- Each project leads with a **one-line pain point in plain English**, rendered larger and
  in accent, with more visual weight than the tech tags. A remembered problem beats a
  remembered stack.
- Copy stays short. Nothing memorable survives three paragraphs.
- The wordmark, the hero line and the accent are the three things a visitor could
  describe afterwards from memory.

### The objection to answer head-on

> *"Is this person backend, or AI, or what?"*

Zain's work spans Express APIs, retrieval pipelines and Next.js frontends, and a recruiter
reading that list sees someone unfocused. The site answers it in the hero with **one
position, stated once**:

> **Backend Engineer who ships AI features.**

Backend is the spine. LLM work is a specialty layered on top, not a second identity.
No rotating job titles — rotating titles are what *cause* the question.

### Audience

Remote and international recruiters hiring for backend and AI engineering roles.

---

## 2. Decisions

| Area | Decision |
|---|---|
| Framework | Next.js 15, App Router, TypeScript (strict) |
| Styling | Tailwind CSS v4 (CSS-first `@theme` tokens) |
| Animation | Hand-rolled `IntersectionObserver` + CSS transitions — **no animation library** |
| Icons | `lucide-react` |
| Fonts | `next/font` — Geist Sans + Geist Mono |
| Theme | Dark only. No light mode, no toggle. |
| Accent | Emerald `#34d399` |
| Position | Backend Engineer who ships AI features |
| Sections | Hero · About · Skills · Projects · Experience · Contact |
| Projects | **Two**, each defensible line by line in an interview |
| Imagery | **None.** No photographs anywhere — Zain's call. The page ships zero `<img>` elements. |
| Contact | Merged with the footer into one closing block. Email + social links, **no contact form.** |
| Résumé | `public/resume.pdf` — direct download, no viewer page |
| Deployment | Vercel, custom domain `recluzedev.me` |

### Out of scope (v1)

Per-project detail pages · blog or MDX · light theme · contact form or mail backend ·
CMS · i18n · analytics. Sections are independent components fed by one content file, so
any of these can be added later without restructuring.

---

## 3. Who Zain is — source of truth

Assembled from three sources: the CV at `public/resume.pdf`, the GitHub account, and the
LinkedIn profile (read on 2026-11-24, after Zain signed in — anonymous visitors get an
auth wall).

**The CV and LinkedIn contradict each other.** Where they disagree, the resolution below
is what Zain confirmed, and it is what the site says.

| | CV says | LinkedIn says | Site says |
|---|---|---|---|
| Nexl Tech title | Backend Developer (Trainee) | Associate Software Engineer | **Associate Software Engineer** |
| Nexl Tech dates | Sept – Dec 2025 | Sep – Nov 2025 | **Sep – Nov 2025** |
| EV charging stack | Node, Express, MySQL, Stripe | Laravel + Tailwind | **Neither claimed** — see §4 |
| TechInnSolutions | *absent* | Backend Developer, 10 mos | **Included** |
| FYP inference | local LLaMA 3 | swappable Gemini / Ollama | **Swappable Gemini / Ollama** |
| Degree | Sept 2022 – Jul 2026 | Jul 2022 – May 2026 | **Jul 2022 – May 2026** |

The most valuable correction: **the CV omits ten months of paid backend work.**
TechInnSolutions (Dec 2024 – Sep 2025) plus Nexl Tech is **13 months of professional
experience**, not four. That removes the "fresh grad with nothing shipped" filter, so the
site leads with it and the About stat strip states it numerically.

### Stack — what the site claims

Zain's own constraint, in his words: *"I know only Next.js framework and Python,
JavaScript languages."* Everything on the site is held to that.

| Group | Items |
|---|---|
| Languages | JavaScript, TypeScript, Python |
| Frontend | Next.js, React, Tailwind CSS |
| Backend | Node.js, Express, Flask, REST APIs |
| Data | Supabase, PostgreSQL, SQLite |
| Tools | Git, GitHub, Docker, Linux, Postman |

**Dropped deliberately:** Laravel and PHP as skills (Zain doesn't claim them, and he has
removed Laravel from his LinkedIn headline), MySQL (not claimed), C++ (coursework only).

**Also dropped: an AI/ML skills group.** Zain chose not to claim LLM tooling as a skill
even though both shipped projects are built on it. The AI work is therefore demonstrated
through the projects rather than asserted in a list. See open question 1 — there is a
real tension between this and the hero line.

### Other facts worth keeping

- **Email:** recluzedev@gmail.com
- **Location:** Lahore, Pakistan. (Both past jobs are listed in Gujranwala Division;
  Zain's instruction is that the site says Lahore only.)
- **Medium:** medium.com/@recluzedev — linked, but **no posts published yet**. See open question 2.
- **Education:** BS Computer Science, Virtual University of Pakistan, Jul 2022 – May 2026 (GPA 3.06)
- **Certification:** GitHub Foundations, issued May 2025
- **Open source:** Elite Coders Winter of Code (ECWoC), among 5,000+ participants
- **FYP supervisor:** Neelam Aslam, Virtual University of Pakistan
- Phone number is on the CV and deliberately **not** published on the site.

---

## 4. Projects — two, each with its pain point

Every card leads with the **pain**, then what was built, then the stack.

### 4.1 Multi-Turn AI Chatbot — Final Year Project

- **Repo:** `tecnodeveloper/mtChatbot` · **Live:** https://multiturn-chatbot.vercel.app
- **Stack:** Next.js, TypeScript, Flask, Python, Supabase/PostgreSQL, Ollama, Gemini
- **Pain point:** *You can't trust a quality dashboard where the model grades its own answers.*
- **What it does:** every reply must be rated by a human — correctness, length, overall
  quality — before the session is allowed to advance. It makes the product measurably
  worse to use, on purpose, and it is the only reason the analytics mean anything.
  Inference routes to Gemini in the cloud or a local Ollama model behind one adapter, so
  the model is a config value rather than a code path, and identical conversations can be
  compared across both. Plus Google OAuth, row-level security, streaming with a stall
  guard, topic classification across five domains, and session phase tracking.
- **Why it's the flagship:** most recent, live, and Zain's own stated position is that
  the forced-rating loop is the part he'd defend in a code review. In his words:
  *"LLM-as-judge is cheap and I did not trust it."*

### 4.2 Price Watchdog — Multi-Platform E-Commerce Agent

- **Repo:** `tecnodeveloper/pwdAgent`
- **Stack:** Python, BeautifulSoup, Streamlit, Gemini API, SQLite
- **Pain point:** *The price drops and you miss it, because nobody refreshes a product page every day.*
- **What it does:** a ReAct agent watches a product across multiple e-commerce sites and
  alerts the moment it hits a target price. An LLM does the extraction, so it picks the
  right product, price and variant instead of choking on ads and related items, and it
  logs history so a "50% off" banner can be checked against what the thing actually cost
  last month.
- **Why it's on the site:** shows autonomous agent design rather than just calling a model.

### Excluded, and why

- **EV Charging Station** — Zain's call. The work was real (Nexl Tech, Sep–Nov 2025) but
  the codebase was Laravel, which he does not claim, and the `evChargerFinder` repo holds
  only a README. It stays in the experience timeline, described honestly as working inside
  a codebase he hadn't written, which is a genuine and defensible skill. It is **not** a
  project card.
- **HR Policy Assistant** — dropped at Zain's call: *"I can't defend it."* Correct
  instinct. An indefensible project is a liability in a technical screen.
- **Omnifood** — real paid work at TechInnSolutions with a live demo, but Zain says it was
  built from a tutorial in HTML/CSS/Bootstrap. It stays as context inside the
  TechInnSolutions role, not as a project card.
- `ecommerce_store`, `nodejs_base_project`, `psx_rag_chatbot`, `backendNotes`, `VSOSS` —
  off-position, templates, stubs or notes.

**Two defensible projects beat four with a weak one.** The layout is a vertical stack of
full-width cards, which reads as deliberate at two rather than sparse.

---

## 5. Experience

A vertical timeline with an accent rail. Present roles carry a live dot and a CURRENT tag.

1. **iCodeGuru — Lead Python Instructor** · Aug 2026 – present · Remote · Zoom
   Leads a four-week Python course for students over Zoom. **Placed first deliberately:**
   for a remote hire, proof of clear spoken English and the ability to explain technical
   ideas is worth as much as another project, and it is the strongest communication signal
   on the page.

   *Title set by Zain.* An earlier draft read "Student & Python Session Lead", from his
   description of joining in August as a student and co-delivering the session with a
   colleague. He asked for "Lead Python Instructor" instead. Recorded here because it is a
   deliberate choice, not an oversight — and because a title is the kind of thing an
   interviewer probes.
2. **Nexl Tech — Associate Software Engineer** · Sep 2025 – Nov 2025 · Gujranwala · On-site
   Worked on the EV charging station website. Most of the three months went on working
   inside a codebase he hadn't written — tracing how existing controllers and schema fitted
   together before extending them.
3. **TechInnSolutions — Backend Developer** · Dec 2024 – Sep 2025 · Gujranwala · On-site
   Ten months maintaining and extending an existing PHP and Node.js backend. Framed as
   maintenance, per Zain's instruction, since he doesn't claim PHP as a skill.
4. **Open Source — Contributor** · Jan 2025 – present · Remote
   PRs, bug fixes and documentation across JavaScript and Python. ECWoC, 5,000+ participants.

Education and the GitHub Foundations certification close the section as two quiet lines,
not a section of their own — leading with an in-progress degree invites the fresh-grad
filter, leading with shipped work does not.

---

## 6. Design system

### 6.1 Colour tokens

Defined once in `src/app/globals.css` under Tailwind v4's `@theme`. No hardcoded hex in
components.

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#0a0a0a` | Page background |
| `--color-surface` | `#121212` | Cards |
| `--color-surface-hover` | `#181818` | Card hover |
| `--color-border` | `#232323` | Hairlines, card edges |
| `--color-border-hover` | `#2e2e2e` | Card edge on hover |
| `--color-fg` | `#fafafa` | Headings, primary text |
| `--color-muted` | `#a1a1aa` | Body copy |
| `--color-subtle` | `#71717a` | Labels, metadata |
| `--color-accent` | `#34d399` | Links, active state, pain lines |
| `--color-accent-dim` | `#065f46` | Accent borders, glow, tag edges |

Contrast floor: body ≥ 4.5:1, large headings ≥ 3:1. `--color-subtle` on `--color-bg` is
4.6:1; accent on bg is 9.8:1. Text is never placed on `--color-accent-dim`.

### 6.2 Type scale

| Role | Size | Weight | Tracking |
|---|---|---|---|
| Hero h1 | `clamp(2.5rem, 7vw, 5rem)` | 600 | `-0.03em` |
| Section h2 | `clamp(1.75rem, 4vw, 2.5rem)` | 600 | `-0.02em` |
| Card title | `1.25rem`–`1.5rem` | 500 | `-0.01em` |
| Body | `1rem`–`1.0625rem` | 400 | leading 1.7 |
| Label (mono) | `0.75rem` | 500 | `0.15em`–`0.2em`, uppercase |

### 6.3 Layout

Container `max-width: 1100px`, padding `1.25rem` mobile / `2rem` desktop. Section rhythm
`clamp(5rem, 12vw, 9rem)`. Radius `0.75rem` cards, `0.5rem` tags and buttons. **No drop
shadows** — depth comes from border and surface lightness.

### 6.4 Motion

Fade + 12px rise, 500ms ease-out, staggered 60ms, fired once on scroll into view. Never
replays, never animates on scroll-up. Hover is 150ms on border, background and
`translateY(-2px)`.

Implemented with `IntersectionObserver` and a CSS transition rather than an animation
library — see §11 for why. Reduced-motion visitors get the final state immediately, and a
`<noscript>` rule forces everything visible when JavaScript is unavailable.

### 6.5 Texture

One fixed radial emerald glow behind the hero at ~6% opacity. Nothing else.

---

## 7. Sections as built

- **Nav** — fixed, transparent at top, gains `bg-bg/90` + blur + hairline past 20px.
  Active section tracked with `IntersectionObserver`, marked in accent *and* weight.
  Résumé download sits in the bar. Mobile: full-screen overlay with focus trap, Escape to
  close, and focus restored to the trigger.
- **Hero** — left-aligned, full viewport. Pulsing availability dot, name with the surname
  in accent, the position line, a 40-word blurb, three CTAs (View work / Download résumé /
  Email me) and the social row.
- **About** — 3:2 split on desktop: three first-person paragraphs on the left, the
  three-figure stat strip (13 months · 2 companies · open source since 2025) in a column
  of its own on the right, rule-separated so the text doesn't run the full page width.
  No portrait — see §7.1.
- **Skills** — five grouped cards of mono-tagged capabilities. No logo wall, and no
  percentage bars: progress bars on skills are meaningless and read as junior.
- **Projects** — vertical stack of full-width cards. Category, title, the accent pain line
  with a left rule, description, tags, and Live/Code links. An optional `image` slot renders
  a screenshot when one exists.
- **Experience** — accent-railed timeline, education and certification closing it.
- **Contact** — see §7.2.

### 7.1 No imagery

Zain's instruction: no photographs on the site. The portrait was removed, the project
`image` field was deleted from the content model, and `public/images/` is gone. The page
now ships **zero `<img>` elements**, which also removed `next/image` from the bundle.

It works because the site was never leaning on imagery: the memorability hook is the
oversized accent pain line on each project card, not a screenshot. The one thing lost is
a face, which does help recall — noted, not argued.

### 7.2 Closing block — contact and footer in one

Reworked at Zain's request after he rejected the first centred version and supplied a
reference design. Adapted from light to dark, and merged with the footer so the page ends
on a statement instead of trailing off through a thin section into a thinner footer.

**Laid out on a 12-column grid with three 4-column rails.** An earlier version stacked
four full-width rows with different internal alignments, and Zain's read was correct — it
looked "randomly staged", because nothing lined up with anything above or below it. Every
element now snaps to the same three rails, which is what makes the block read as one
composed unit rather than a pile of left/right rows.

Structure, top to bottom:

1. **Intro row** — mono eyebrow and one line of context on the left rail (cols 1–7);
   a STATUS block on the right rail (cols 9–12), right-aligned, carrying the pulsing
   availability dot and the location. That right rail was dead space before.
2. **The oversized "Let's talk"**, spanning all 12 columns. Set just above the page
   background so it reads as texture, lighting up in accent on hover. It is the `mailto`,
   so the largest thing on the page is also the thing to click.
3. **Three link columns**, one per rail, each with a mono column label:
   CONTACT (email, résumé) · ELSEWHERE (GitHub, LinkedIn, Medium) · SECTIONS (About,
   Skills, Projects, Experience). The section list comes from `src/lib/nav.ts`, shared
   with the navbar so the two can't drift apart.
4. **Baseline bar**, on the same rails: `© 2026 Zain Ali` (cols 1–4), the build credit
   (cols 5–8, centred), `BACK TO TOP` plus a circular arrow button (cols 9–12, right).

The outlined pills were dropped here. They came from the reference design, but pills
don't sit on a rail the way a labelled text column does, and mixing a pill row against
plain text on the opposite side was part of what felt unaligned.

Responsive: single column below `sm`, two columns to `lg`, the full 12-column grid above
it. The baseline bar keeps copyright and back-to-top on one row at every width, with the
credit dropping beneath them on small screens.

The reference design also put the copyright and back-to-top at the *top* of the block;
Zain asked for them at the bottom. It reads better that way — the eyebrow opens the block
instead of competing with a utility row, and the page ends on the chrome rather than
opening its last section with it.

**The headline is SVG text, not HTML.** Sizing it with `vw` units cannot guarantee it
spans the container exactly, and overshooting causes horizontal page overflow. An SVG with
`textLength="1000"` and `lengthAdjust="spacing"` fills the line precisely at every width
and can never overflow. `spacing` rather than `spacingAndGlyphs`, so tracking opens up but
the letterforms stay true — `spacingAndGlyphs` visibly stretched them. The `<h2>` carries
the heading semantics and an `aria-label`; the SVG is `aria-hidden`.

---

## 8. Content model

Everything the site says lives in `src/content/site.ts`, typed by `src/content/types.ts`.
No copy is hardcoded in components.

`pain` is a **required, non-empty** field on every project. That rule is what removed the
HR assistant, and it should keep removing weak projects.

---

## 9. Accessibility

Semantic landmarks · one `h1`, no skipped levels · full keyboard reachability in visual
order · 2px accent focus ring at 2px offset, never removed without replacement ·
`aria-label` on icon-only controls, `aria-hidden` on decorative icons · meaningful `alt`
text · `prefers-reduced-motion` disables every transform and transition · mobile menu traps
focus, closes on `Escape`, restores focus · colour is never the only signal.

---

## 10. Performance & SEO

- `next/image` everywhere with explicit dimensions or `fill` + aspect ratio.
- Self-hosted fonts via `next/font`, `display: swap`, no external request.
- Only three client components on the page: `Navbar`, `Reveal`, and nothing else.
- Metadata with title template, canonical, OpenGraph and Twitter cards.
- OG image **generated at build** by `src/app/opengraph-image.tsx` — no static `og.png`
  to keep in sync. It carries exactly the two things worth remembering: the name and
  the position line.
- `sitemap.ts`, `robots.ts`, and `Person` JSON-LD with `sameAs` pointing at the profiles,
  so search engines tie the name to the accounts instead of treating each as separate.

### Measured

| | |
|---|---|
| Budget | < 120 kB First Load JS |
| First build | **156 kB** — over |
| After removing the animation library | **117 kB** — under |
| After removing all imagery | **112 kB** |

The animation library was 50 kB doing one job: a fade-and-rise on scroll. Replacing it
with `IntersectionObserver` plus a CSS transition cut page JS from 53.6 kB to 14.6 kB with
an identical visual result. Documented because it's the kind of dependency that quietly
eats a performance budget.

---

## 11. Responsive

| Range | Behaviour |
|---|---|
| < 640px | Single column. Hamburger nav. Hero h1 at scale floor. Portrait capped at 18rem. |
| 640–1023px | Skills 2-col, portrait capped at 22rem, nav still collapsed below 768px. |
| ≥ 1024px | About 3:2, Skills 3-col, inline nav. |
| ≥ 1280px | Container caps at 1100px and centres. |

Verified at 375px and at desktop width.

---

## 12. Verification done

- `npm run build` — clean, 7 static routes prerendered.
- `tsc --noEmit` — clean under `strict` plus `noUnusedLocals` / `noUnusedParameters`.
- Walked every section in a real browser at desktop and 375×812.
- **Bug found and fixed:** the mobile menu panel collapsed to **0px tall** once the page
  was scrolled. The header's `backdrop-filter` makes it the containing block for `position:
  fixed` descendants, so the panel's `inset-0` resolved against a 65px-tall header instead
  of the viewport, and the links rendered over the page with no background. Fixed by making
  the panel a sibling of `<header>` rather than a child. It only reproduced after scrolling,
  which is exactly the kind of bug a screenshot of the top of the page would have missed.
- **Bug found and fixed:** the portrait rendered full-bleed below `lg`, taking more than a
  whole phone viewport. Capped and given an explicit aspect ratio with `object-top`.

---

## 13. Migration — done

The old Next.js 12 Pages Router site was deleted on 2026-11-24. Everything removed is
recoverable with `git checkout 19145a3 -- <path>`.

**Removed:** `src/` · `public/assets/` · `out/` · `firebase.json` · old Next/Tailwind/
PostCSS configs · `package.json` and lockfile · `.github/workflows/`

**Preserved and moved:** `CV_General_BACKEND_2026_07_9.pdf` → `public/resume.pdf` ·
`ProfilePicture.jpeg` → `public/images/portrait.jpg` · `CNAME` · `.git`

Nothing from the old copy ships. The old PHP/Laravel framing is retired.

---

## 14. Deployment

Vercel, `main` as production, `next build` (no static export, so server components and
future route handlers stay available). Domain `recluzedev.me` plus `www` redirect. Preview
deploys per branch. No environment variables.

---

## 15. Open questions

1. **AI is in the hero but not in Skills.** Zain chose not to claim LLM tooling (Ollama,
   Gemini, RAG) as a skill, yet the hero says "ships AI features" and both projects are
   built on it. A reader may notice the gap. Either add an AI group to Skills or soften the
   hero line — currently the projects are left to carry it alone. **Still open.**
2. **Medium is linked but empty.** `medium.com/@recluzedev` has no posts yet. A recruiter
   who clicks through learns there is nothing to read, and the CV already claims Zain
   publishes there. Linked on Zain's instruction; the recommendation is to blank the `href`
   in `site.ts` — the entry is skipped automatically — until the first post is live.
3. **The CV needs fixing, separately from this site.** It prints the GitHub handle as
   `recluzedev`, which 404s — the account is `tecnodeveloper`. It omits TechInnSolutions
   entirely, hiding ten months of paid work. It claims a Node/Express/MySQL/Stripe EV
   charging build that LinkedIn describes as Laravel, and that Zain says he can't defend.
   `public/resume.pdf` is what recruiters download from this site, so these are live.
4. **Deployment.** Not yet on Vercel, and DNS still points `recluzedev.me` at the old host.

### Closed since the last revision

- ~~Medium URL unknown~~ — supplied.
- ~~iCodeGuru start month~~ — August 2026, joined as a student.
- ~~Location~~ — Gujranwala, open to Lahore.
- ~~Project screenshots~~ — moot; the site carries no imagery at all.
