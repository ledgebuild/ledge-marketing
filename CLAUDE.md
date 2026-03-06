# CLAUDE.md — ledge-marketing

> Claude reads this automatically at the start of every session.
> This is the source of truth for conventions, stack, and constraints.

---

## Project Overview

**What this is:** The ledge.build marketing website. Next.js + Tailwind + Sanity CMS.
**What this is not:** The Ledge app (that lives in the Ledge/ repo).
**Live URL:** https://ledge.build
**Repo:** ledgebuild/ledge-marketing
**Deployed on:** Vercel (auto-deploys on push to main)

---

## Tech Stack

| Layer | Tool | Notes |
|---|---|---|
| Framework | Next.js 14+ (App Router) | TypeScript, src/ directory |
| Styling | Tailwind CSS | Utility classes only, no custom CSS files |
| Components | Radiant template (Tailwind Plus) | Partially replaced with Ledge components |
| CMS | Sanity | Blog, changelog, case studies |
| Hosting | Vercel | Hobby plan, auto-deploy on push |
| Fonts | Google Fonts | Barlow Condensed + Barlow + JetBrains Mono |
| Icons | @heroicons/react | 20/solid variant preferred |

---

## Brand Tokens

Always use these values. Never hardcode hex colors inline without a comment referencing the token name.

### Colors
```
--navy:          #0D1A2D   /* Headings, body text, dark backgrounds */
--navy-mid:      #1A3254   /* Hero bg, dark sections, sidebar */
--navy-light:    #2E4E72   /* Lighter navy accents */
--orange:        #F5620A   /* Primary CTA, logo mark, eyebrows, stats */
--orange-dim:    #C44E08   /* Hover/pressed state for orange buttons */
--bg-page:       #F7F8FA   /* Default page background */
--bg-section:    #F0F3F7   /* Alternating section backgrounds */
--text-primary:  #0D1A2D   /* Headings */
--text-body:     #2D3E52   /* Body copy */
--text-muted:    #5C7A99   /* Subheadlines, nav links */
--text-dim:      #8BA3BE   /* Captions, metadata */
--border:        #D1DCE9   /* Card borders, dividers */
--success:       #15803D   /* Won, positive states */
--info:          #1D4ED8   /* In-review, informational */
--error:         #DC2626   /* Errors, overdue */
```

### Tailwind equivalents (use these in className)
```
Navy bg:         bg-[#0D1A2D]
Orange:          bg-[#F5620A] text-[#F5620A]
Orange hover:    hover:bg-[#C44E08]
Section bg:      bg-[#F7F8FA] or bg-[#F0F3F7]
Muted text:      text-[#5C7A99]
Border:          border-[#D1DCE9]
```

### Orange usage rule — only 6 contexts
1. Primary CTA buttons
2. Logo mark
3. Section eyebrow labels (uppercase, above H2s)
4. Key stat numbers
5. Featured card borders (one per card set)
6. Active nav indicator

---

## Typography

```
Display/Headings:  font-family: 'Barlow Condensed', sans-serif  font-weight: 700 or 800
Body:              font-family: 'Barlow', sans-serif             font-weight: 400/500/600
Mono:              font-family: 'JetBrains Mono', monospace      font-weight: 400/500
```

### In Tailwind (use style prop for font-family since not in config):
```tsx
// Display heading
<h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }} className="text-[80px] leading-[1.05] tracking-[-0.02em]">

// Body
<p style={{ fontFamily: "'Barlow', sans-serif" }} className="text-lg leading-[1.65]">

// Eyebrow
<span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600 }} className="text-xs uppercase tracking-widest text-[#F5620A]">
```

### Type scale
```
Hero H1:        80–96px, BC 800, lh 1.05, ls -0.02em
Section H2:     36–48px, BC 700, lh 1.1
Card title:     24–30px, BC 700
Body large:     18px, Barlow 400, lh 1.65
Body:           16px, Barlow 400, lh 1.6
UI/labels:      13–14px, Barlow 500
Eyebrow:        11–12px, Barlow 600, UPPERCASE, ls +0.08em
```

---

## Copy Rules (Voice & Tone)

- **Outcome-first:** Lead with what the user gets, not how it works
- **Specific over general:** "12 hours saved per week" not "saves you time"
- **Peer tone:** Written like a contractor talking to another contractor
- **Direct, not clever:** No puns. Write what the product does.
- **Max lengths:** H1: 8 words, Subheadline: 25 words, Feature card body: 30 words, CTA: 4 words

### Key phrases to use
- "From first lead to final delivery"
- "One source of truth"
- "Modular field operations platform"
- "Built for small contractors under $5M"
- "Replace HubSpot, Jobber, Trello, and Zapier"
- "Activate what you need. Skip what you don't."

### Never say
- "All-in-one solution"
- "Streamline your workflows"
- "Leverage our platform"
- "Enterprise-grade"
- "Cutting-edge"

---

## Core Pages (launch set)

| Page | Route | Purpose |
|---|---|---|
| Home | `/` | Full pitch, hero to final CTA |
| Product | `/product` | Feature breakdown by workflow stage (lead → estimate → design → build → invoice) |
| Pricing | `/pricing` | Tiers or "Book a demo to discuss pricing" |
| About | `/about` | Founder story — built Ledge while running a landscaping company |
| Book a Demo | `/book-a-demo` | Dedicated page, linkable from everywhere |
| Blog | `/blog` | Sanity-powered, SEO + authority |

**Nav:** Product | Pricing | About | Blog + **"Book a Demo"** (orange CTA button)

---

## File Structure

```
src/
  app/
    page.tsx              # Homepage
    product/page.tsx      ⚠ TODO — needs creation
    pricing/page.tsx      # Pricing page (Radiant placeholder)
    about/page.tsx        ⚠ TODO — move from company/
    book-a-demo/page.tsx  ⚠ TODO — needs creation
    blog/                 # Blog (Sanity-powered)
    login/page.tsx        # Login (redirects to app.ledge.build)
  components/
    HeroSection.tsx       ✅ DONE — Ledge branded
    navbar.tsx            ⚠ TODO — still Radiant
    footer.tsx            ⚠ TODO — still Radiant
    logo-cloud.tsx        ⚠ TODO — still Radiant (swap logos)
    bento-card.tsx        ⚠ TODO — still Radiant
    testimonials.tsx      ⚠ TODO — still Radiant
    screenshot.tsx        ⚠ TODO — still Radiant
  styles/
    tailwind.css          # Global styles
```

---

## Component Status

| Component | Status | Notes |
|---|---|---|
| HeroSection | ✅ Done | Custom Ledge component, navy bg |
| Navbar | ⚠ Radiant | Needs Ledge logo, nav items, orange CTA |
| Footer | ⚠ Radiant | Needs Ledge columns and copy |
| LogoCloud | ⚠ Radiant | Swap in contractor company names |
| FeatureSection | ⚠ Radiant | Map to 5 Ledge modules |
| BentoSection | ⚠ Radiant | Map to Ledge features |
| DarkBentoSection | ⚠ Radiant | Map to "The Stack Problem" section |
| Testimonials | ⚠ Radiant | Replace with Ledge testimonials |
| ProductPage | ⚠ New | Feature breakdown by workflow stage |
| PricingPage | ⚠ Radiant | 3 tiers: Core / Build★ / Scale |
| AboutPage | ⚠ Radiant | Founder story, move from /company to /about |
| BookADemoPage | ⚠ New | Dedicated demo booking page |
| BlogIndex | ✅ Sanity | Working, needs real posts |

---

## CTAs

```
Primary:   "Get started free"  →  https://app.ledge.build/signup
Secondary: "Book a demo"       →  /book-a-demo
Tertiary:  "See all features →" (text link, no button style)
```

---

## Key Content

### Stats (use these exact numbers)
- 12h saved per week
- 64% avg win rate
- 3× faster to signed
- $0 to start

### Pricing tiers
- Core: $XX/mo (placeholder), up to 3 users
- Build: $XXX/mo (placeholder), up to 10 users ← FEATURED
- Scale: $XXX/mo (placeholder), unlimited users

### Testimonial to use (real)
"Replaced HubSpot and Jobber in one shot. Cut $400/mo in subscriptions."
— Marcus D., Hardscape contractor, Austin TX

---

## Commit Convention

```
type(scope): brief description
```

Types: `feat`, `fix`, `style`, `content`, `refactor`, `chore`
Scopes: `hero`, `nav`, `footer`, `pricing`, `product`, `about`, `demo`, `blog`, `global`

Examples:
```
feat(hero): replace Radiant hero with Ledge HeroSection component
content(nav): update nav items and CTA to Ledge brand
style(global): replace Switzer font with Barlow system
```

---

## What NOT to Change

1. **Sanity config** — `sanity.config.ts`, `sanity.cli.ts`, `.env.local` NEXT_PUBLIC_SANITY_* vars
2. **Next.js App Router structure** — Don't move files out of `src/app/`
3. **Tailwind config** — Don't add custom colors to config, use arbitrary values instead
4. **Vercel connection** — Don't change build settings, auto-deploy stays on main
5. **`@/` path alias** — All imports use this, don't switch to relative paths

---

## Known Gaps

- HeroSection: placeholder screenshot — replace with real Ledge app screenshot when available
- Navbar: still Radiant template — needs Ledge logo, nav items, orange CTA
- Footer: still Radiant template — needs Ledge columns and copy
- LogoCloud: still Radiant logos — swap for contractor company names
- FeatureSection / BentoSection: still Radiant — map to 5 Ledge modules
- DarkBentoSection: still Radiant — map to "The Stack Problem" section
- Testimonials: still Radiant — only Marcus D. quote confirmed real, need 2 more beta user quotes
- Pricing: still Radiant placeholder — tier prices TBD ($XX placeholders)
- ProductPage: not created yet — needs /product route
- AboutPage: still at /company, needs move to /about
- BookADemoPage: not created yet — needs /book-a-demo route
- Root stray files: HeroSection.tsx and layout.tsx exist at repo root (not committed, likely duplicates)
