# Personal Portfolio Site — Project Brief

## Goal
A personal website to share with recruiters when applying for jobs. It has two
audiences/areas: a **professional** side (the primary one) and a **personal/hobby**
side. Content is mostly text and images, with occasional outbound links (App Store,
Google Play, GitHub, demo videos).

## Owner profile
Mobile and embedded systems developer (Android/Java, iOS/Swift, React/Electron).
Comfortable with React and TypeScript. Prefers minimal, non-over-engineered
solutions — avoid unnecessary dependencies and abstraction.

## Tech stack (decided)
- **Astro + TypeScript**. Static output for fast loads and good SEO (the site is
  recruiter-facing and name-searchable). Use React islands only where genuine
  interactivity is needed.
- **Content as Markdown/MDX** via Astro content collections. No CMS, no database.
  Content lives in the repo, version-controlled.
- **Styling**: Tailwind CSS (or plain CSS — keep it simple, no heavy UI library).
- **Hosting**: static, free tier (Vercel / Netlify / Cloudflare Pages / GitHub Pages).
  Deploy from a Git push.
- **Custom domain** to be connected later (e.g. a `.dev` domain).

## Site structure
- **Home** — short intro (who I am, what I build), a portrait, and two clear entry
  points: "Work" and "Personal."
- **Work**
  - *Projects/Portfolio* — cards per app: short description, tech-stack tags,
    screenshots, outbound links (App Store / Play / GitHub / demo video).
  - *Experience* — current role and features developed, written as outcome-focused
    descriptions.
  - *Resume* — downloadable PDF link.
- **Personal** — a single **blog-style feed**: posts (recipes, travel, sports)
  listed newest-first, with **tag buttons at the top for instant client-side
  filtering**. NOT separate sections per hobby.
- **Contact** — email, LinkedIn, GitHub. Footer present site-wide.

## Content model (two collections)

### `projects`
Frontmatter fields:
- `title` (string)
- `summary` (string, short)
- `tech` (string[]) — e.g. ["Swift", "iOS", "SIP"]
- `links` (object, all optional): `appStore`, `playStore`, `github`, `demo`, `video`
- `cover` (image, optional)
- `order` (number, optional — for manual sorting)
Body: Markdown description.

### `posts` (the personal blog feed)
Frontmatter fields:
- `title` (string)
- `date` (date) — feed sorts by this, descending
- `tags` (string[]) — top-level: "cooking", "sports", "travel"; finer tags allowed
  freely (e.g. "pasta", "hiking", "japan")
- `cover` (image, optional)
- `excerpt` (string, optional)
Body: Markdown.

## Tag filtering (decided)
Instant **client-side** filter on the personal feed: tag buttons at the top; clicking
one shows/hides matching posts with no page reload. Implement as a small React island
or ~15 lines of vanilla JS — keep it minimal. (Static per-tag pages were the
zero-JS alternative; we chose instant filtering for snappier UX given low post count.)

## SEO / polish requirements
- Per-page `<title>` and meta description.
- Open Graph tags so links preview nicely on LinkedIn/Slack.
- Responsive layout, mobile-first.
- Optional: dark mode, lightweight privacy-friendly analytics (e.g. Plausible).

## Suggested first task for Claude Code
1. Scaffold the Astro + TS project.
2. Set up the two content collections with the typed schemas above.
3. Build base layout, nav, footer, and the page routes (home, work, personal, contact).
4. Add the personal feed with the instant tag filter.
5. Seed 1–2 placeholder entries in each collection so the structure is visible.
Leave actual content (real project write-ups, recipes, travel posts, images, resume
PDF) for me to fill into Markdown files afterward.
