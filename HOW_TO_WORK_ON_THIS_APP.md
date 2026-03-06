# How to Work on This App

> **Audience:** Anyone using Claude Code to work on the ledge.build marketing site.
> **Purpose:** Learn the workflow, conventions, and component status so work stays consistent across sessions.
>
> For brand guidelines, see `docs/brand-guidelines.md`. For code conventions, see `CLAUDE.md`.

---

## Quick Start

1. **[CLAUDE.md](CLAUDE.md)** — Brand tokens, copy rules, component status, commit format (Claude reads automatically)
2. **[docs/brand-guidelines.md](docs/brand-guidelines.md)** — Full Ledge brand system (colors, typography, voice, layouts)
3. **[docs/content-map.md](docs/content-map.md)** — Every page mapped to Ledge content
4. **This file** — How to actually work on the site

---

## The Overall Flow

```
FLOW                                          WHAT TO DO
────                                          ──────────

Open Claude Code
  ↓
"What still needs to be replaced?"            Claude reads CLAUDE.md component
                                              status table and tells you what's
                                              still Radiant placeholder
  ↓
Pick a component or section to work on
  ↓
"Replace [component] with Ledge content"      Claude reads brand tokens from
                                              CLAUDE.md + content from
                                              docs/content-map.md
  ↓
Review at localhost:3000
  ↓
Commit and push                               git add . && git commit -m "..."
                                              git push origin main
  ↓
Vercel auto-deploys to ledge.build
  ↓
Update CLAUDE.md component status table       Mark component ✅ Done
```

---

## Working on the Site

### Starting a session

```
You say: "What still needs to be replaced with Ledge content?"
```

Claude reads the component status table in CLAUDE.md and tells you what's still Radiant placeholder vs. done.

### Replacing a Radiant section

```
You say: "Replace the [navbar / footer / logo cloud / feature section] with Ledge content"
```

Claude will:
1. Read CLAUDE.md for brand tokens and copy rules
2. Read docs/content-map.md for the specific content for that section
3. Write the replacement component
4. Keep it in the same file location so page.tsx imports don't break

### Adding new content

```
You say: "Add a [testimonials / FAQ / comparison table] section"
```

Claude will follow brand rules from CLAUDE.md automatically.

### Changing copy

```
You say: "Update the hero headline to [new headline]"
```

Just describe what you want changed. Claude knows the copy rules.

### Working on a specific page

```
You say: "Work on the pricing page"
```

Claude reads the pricing content from docs/content-map.md and builds it out.

---

## Component Priority Order

Work in this order — each builds on the previous:

| Priority | Component | Why |
|---|---|---|
| 1 | ✅ HeroSection | Done |
| 2 | Navbar + Footer | Global shell — nav links to core pages, orange "Book a Demo" CTA |
| 3 | Homepage sections (LogoCloud, FeatureSection, DarkBentoSection, Testimonials, Stats) | Complete the homepage pitch |
| 4 | Product page (`/product`) | Feature breakdown by workflow stage |
| 5 | Pricing page (`/pricing`) | Conversion |
| 6 | About page (`/about`) | Founder story — credibility |
| 7 | Book a Demo page (`/book-a-demo`) | Dedicated demo booking, linkable everywhere |
| 8 | Blog posts | SEO + authority |

---

## Local Development

```bash
# Start dev server
npm run dev
# → http://localhost:3000

# Push to deploy
git add .
git commit -m "feat(nav): replace Radiant nav with Ledge branding"
git push origin main
# → Vercel auto-deploys to ledge.build in ~60 seconds
```

No build step needed before pushing — Vercel handles the build.

---

## Sanity CMS (Blog)

The blog is powered by Sanity. You can write blog posts without touching code.

```
Go to: https://sanity.io → your ledge-marketing project
Or:    http://localhost:3000/studio (if studio is enabled)
```

**First 3 posts to write:**
1. "Why your Zapier stack is costing you more than you think"
2. "How to get a proposal signed the same day you walk the job"
3. "The difference between a CRM and a field ops platform"

---

## Key Files Reference

| File | What it is |
|---|---|
| `src/app/page.tsx` | Homepage — assembles all section components |
| `src/app/layout.tsx` | Global layout — fonts, metadata |
| `src/components/HeroSection.tsx` | ✅ Custom Ledge hero |
| `src/components/navbar.tsx` | ⚠ Still Radiant |
| `src/components/footer.tsx` | ⚠ Still Radiant |
| `src/app/product/page.tsx` | Product page — feature breakdown by workflow stage |
| `src/app/pricing/page.tsx` | Pricing page |
| `src/app/about/page.tsx` | About page — founder story (moved from /company) |
| `src/app/book-a-demo/page.tsx` | Demo booking page |
| `src/app/blog/` | Blog (Sanity-powered) |
| `.env.local` | Sanity project ID — never commit this |
| `CLAUDE.md` | Brand tokens + conventions (auto-read by Claude) |
| `docs/brand-guidelines.md` | Full Ledge brand system |
| `docs/content-map.md` | Every section mapped to Ledge copy |

---

## Common Scenarios

### "I want to update the homepage copy"

Open `src/app/page.tsx`, find the section, ask Claude to update it. Or just tell Claude:

```
"Update the feature section headline to [new copy]"
```

### "I want to add a new section"

```
"Add a [section name] section to the homepage between [section A] and [section B]"
```

Claude will build it following brand rules and add it to `page.tsx` in the right place.

### "The fonts don't look right"

Check that `src/app/layout.tsx` has the Google Fonts link for Barlow. It should be there — if it gets removed by a Radiant update, add it back:

```tsx
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=Barlow:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

### "I want to add a real screenshot"

1. Take a screenshot of the Ledge app at 1440×900px minimum
2. Save as WebP to `public/screenshots/`
3. Ask Claude: "Replace the placeholder screenshot in HeroSection with this image"

### "I want to connect the real domain"

Already done — `ledge.build` points to this Vercel project via the A record in GoDaddy.

### "I need to add a new page"

```
"Create a new [page name] page at /[slug]"
```

Claude will create `src/app/[slug]/page.tsx` following Next.js App Router conventions.

---

## 5 Things That Must Not Change

1. **`.env.local` Sanity vars** — Don't delete or rename `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`
2. **`@/` path alias** — All component imports use this
3. **Vercel project connection** — Don't disconnect the GitHub repo from Vercel
4. **GoDaddy DNS A record** — `ledge.build` → `216.198.79.1` (Vercel IP)
5. **`src/app/layout.tsx` Barlow fonts** — Always keep the Google Fonts link

---

## Cheat Sheet

| I want to... | Say this to Claude |
|---|---|
| See what still needs work | "What still needs to be replaced with Ledge content?" |
| Replace a section | "Replace the [component name] with Ledge content" |
| Update copy | "Update the [section] [element] to [new copy]" |
| Add a section | "Add a [section] between [A] and [B] on the homepage" |
| Build a page | "Build out the pricing page using the content map" |
| Check brand compliance | "Does this follow Ledge brand rules?" |
| Write a blog post | Go to sanity.io dashboard |
| Deploy | `git push origin main` — Vercel auto-deploys |
