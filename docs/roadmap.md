# Ledge Marketing Site — Phased Build Roadmap

> Each phase maps a homepage section or page to the content playbook strategy.
> Phases are ordered by visual impact and conversion priority.
> Reference: `docs/content-playbook.md` for messaging strategy, `docs/ledge-radiant-content-map.md` for exact copy.

---

## Phase 0: Logo + Brand Assets (prerequisite)

**Why first:** Navbar, footer, favicon, and OG images all depend on having Ledge logo files in the repo. Nothing looks "Ledge" until this is done.

**Note:** The Ledge logo is one combined unit (icon + text together). There is no separate standalone mark. For favicon and small icons, the icon portion of the logo needs to be cropped/isolated — text is illegible at 32px.

### Edgar's export checklist

Export these from your source file (Figma, Illustrator, Canva, etc.) and drop them into the repo root. Claude will move them to the right locations.

**SVG exports (vector, any size):**

| # | What | Color | Filename | Used for |
|---|---|---|---|---|
| 1 | Full logo (icon + text) | Navy `#0D1A2D` | `ledge-logo-navy.svg` | Navbar, light backgrounds |
| 2 | Full logo (icon + text) | White `#FFFFFF` | `ledge-logo-white.svg` | Footer, hero, dark sections |
| 3 | Icon portion only (cropped) | Orange `#F5620A` | `ledge-icon-orange.svg` | Favicon, mobile nav, compact spaces |

**PNG exports (raster, specific sizes):**

| # | What | Color | Size | Filename | Used for |
|---|---|---|---|---|---|
| 4 | Icon portion only | Orange on transparent | 32x32 px | `favicon-32.png` | Browser tab favicon |
| 5 | Icon portion only | Orange on transparent | 180x180 px | `apple-icon.png` | iOS home screen bookmark |
| 6 | Icon portion only | Orange on transparent | 512x512 px | `icon-512.png` | Android/PWA, OG image source |

> **Tip:** If your design tool can't export the icon portion separately, export the full logo and Claude can attempt to crop it. But a clean manual crop from the source will always look better at small sizes.

**Total: 3 SVGs + 3 PNGs = 6 files**

### Target file structure (Claude will organize)

```
public/
  logo/
    ledge-logo-navy.svg            # Full logo, navbar/light bg
    ledge-logo-white.svg           # Full logo, footer/dark bg
    ledge-icon-orange.svg          # Icon only, orange — compact use

src/app/
  favicon.ico                      # 32x32 (converted from favicon-32.png)
  icon.svg                         # SVG favicon (copy of ledge-icon-orange.svg)
  apple-icon.png                   # 180x180 (from apple-icon.png export)
  opengraph-image.png              # 1200x630 (generated: navy bg + white logo + tagline)
```

### Once files are dropped in, Claude will:
- [ ] Create `public/logo/` and move SVGs there
- [ ] Convert `favicon-32.png` to `src/app/favicon.ico`
- [ ] Copy icon SVG to `src/app/icon.svg`
- [ ] Move `apple-icon.png` to `src/app/apple-icon.png`
- [ ] Generate `src/app/opengraph-image.png` (navy bg + white logo + "Built for the field.")
- [ ] Replace Radiant `logo.tsx` component with Ledge logo SVG
- [ ] Clean up source files from repo root

**Depends on:** Edgar exporting and dropping 6 files into repo
**Commit scope:** `feat(brand): add Ledge logo assets and replace Radiant logo`

---

## Phase 1: Navigation + Footer (site chrome)

**Why first:** Every page depends on these. Visitors see them on every route. Broken chrome = broken trust.

**Components:**
- [ ] Navbar — Ledge logo, nav items (Product | Pricing | About | Blog), orange "Book a Demo" CTA, "Sign in" link
- [ ] Footer — Product column (5 modules), Company column, Legal column, social links, copyright

**Playbook guidance:**
- Nav CTA = "Book a Demo" (not "Get started free") — appropriate for Ledge's price point per playbook Page 1
- Tone: professional but direct, Barlow 500, 13-14px UI scale
- Footer anchors the "full platform" story by listing all 5 modules

**Depends on:** Nothing
**Commit scope:** `feat(nav)`, `feat(footer)`

---

## Phase 2: Hero Section (revision)

**Why second:** Hero is done but the playbook suggests revisions — needs identity + outcome + proof formula.

**Components:**
- [ ] HeroSection revision — add quantified proof element above the fold, revise headline to name landscape design-build specifically, add friction reducer ("No commitment required") near CTAs

**Playbook guidance (Page 1 — Hero):**
- Headline should explicitly name landscape design-build, not generic "small contractors"
- Need at least one proof element above the fold (Structure Landscapes stat, or beta metric)
- Primary CTA: "Book a Demo" with secondary "See How It Works"
- Subheadline bridges Edgar's practitioner credibility with platform promise

**Depends on:** Phase 1 (nav should be Ledge-branded before revising hero)
**Commit scope:** `feat(hero)`

---

## Phase 3: Social Proof Bar (LogoCloud)

**Why third:** Trust bar sits directly below hero — the #2 content block in the winning homepage sequence.

**Components:**
- [ ] LogoCloud — replace Radiant logos with contractor company names or "Trusted by X+ design-build firms"

**Playbook guidance (Page 1 — Social proof):**
- Quantity matters less than specificity — one verifiable number beats vague claims
- If real logos aren't available, use a bold single stat (e.g., "Structure Landscapes runs entirely on Ledge")
- Consider review badges (Trustpilot/G2) if available

**Depends on:** Phase 2
**Commit scope:** `feat(logo-cloud)`

---

## Phase 4: Feature Showcase (BentoSection)

**Why fourth:** Outcome pillars + feature walkthrough = the core homepage conversion engine.

**Components:**
- [ ] FeatureSection / BentoSection — map to 4 outcome groups: Win the Project, Design and Plan, Build and Track, Get Paid and Grow

**Playbook guidance (Page 2 — Product):**
- Hybrid approach: outcome-based grouping with workflow ordering within each group
- Lead each card with the result, not the feature ("Know your margins before breaking ground")
- Real product screenshots, not illustrations
- 4-6 top-level groups maximum

**Depends on:** Phase 3
**Commit scope:** `feat(features)`

---

## Phase 5: Stats Strip + Stack Problem (DarkBentoSection)

**Why fifth:** Quantified proof + competitive positioning — the "why switch" argument.

**Components:**
- [ ] Stats strip — 12h saved/week, 64% win rate, 3x faster, $0 to start
- [ ] DarkBentoSection — "The Stack Problem" before/after comparison (6 tools -> Ledge)

**Playbook guidance (Page 1 — Social proof + Page 2 — Full platform story):**
- Frame through profitability and margins
- Stats: orange numbers, Barlow Condensed 800
- Stack Problem addresses primary buyer concern: "Will this replace my disconnected tools?"
- Use specific language: proposals not quotes, phases not tickets

**Depends on:** Phase 4
**Commit scope:** `feat(stats)`, `feat(stack-problem)`

---

## Phase 6: Testimonials

**Why sixth:** Customer proof after the feature showcase reinforces the conversion path.

**Components:**
- [ ] Testimonials section — Marcus D. confirmed real, 2 placeholders need real beta quotes

**Playbook guidance (Page 1 — Testimonials):**
- Names, company names, and measurable outcomes required
- At least one addressing ease of use, one addressing ROI
- "Tech fear" testimonial is powerful for trades: "I'm not a computer guy but..."
- Place testimonials at point of decision, not just homepage

**Depends on:** Phase 5
**Commit scope:** `feat(testimonials)`

---

## Phase 7: Pricing Page

**Why seventh:** Core page, high conversion intent. Needs FAQ + feature comparison + value framing.

**Components:**
- [ ] PricingPage — 3 tiers (Solo/Growing/Established or Core/Build/Scale), annual/monthly toggle, FAQ, feature comparison table, testimonial with ROI

**Playbook guidance (Page 3 — Pricing):**
- Publish prices (SMB norm) — 2-3 tiers visible, optional enterprise "Contact Us"
- Tier names by business stage, not feature count
- "Recommended if you..." bullets under each tier
- FAQ: 6-10 questions addressing contracts, setup time, QuickBooks, crew adoption
- ROI calculator = genuine differentiator (only ServiceTitan has one)
- Competitive benchmarks: SynkedUP $359-599, Knowify $99+, Buildxact $149-439

**Depends on:** Phase 6 (testimonials component reusable on pricing page)
**Commit scope:** `feat(pricing)`

---

## Phase 8: About Page

**Why eighth:** 2nd or 3rd most-visited SaaS page. Edgar's story is Ledge's sharpest weapon.

**Components:**
- [ ] AboutPage — move from /company to /about, founder story structure

**Playbook guidance (Page 4 — About):**
- Structure: Story -> Problem -> Mission -> Proof -> CTA
- 30-40% Edgar's story (emotional core), 20-25% industry problem, 25-30% proof, 10-15% values
- Photo of Edgar on a job site, not corporate headshot
- Name Structure Landscapes explicitly
- Key line: "Edgar doesn't just build software — he builds landscapes."
- End with "Book a Demo" CTA

**Depends on:** Nothing (can be parallelized with Phase 7)
**Commit scope:** `feat(about)`

---

## Phase 9: Book a Demo Page

**Why ninth:** Final conversion destination. Every CTA on the site points here.

**Components:**
- [ ] BookADemoPage — form, outcome headline, testimonials sidebar, FAQ, phone number

**Playbook guidance (Page 5 — Book a Demo):**
- Lead with outcomes, not the form
- Headline: "See How Design-Build Firms Hit 20%+ Net Profit" (not "Book a Demo")
- 4-5 form fields max: name, email, phone, company, qualifying question
- Phone number prominently displayed (non-negotiable for trades)
- "Not ready?" section with on-demand video alternative
- FAQ: How long? Free trial? Who is it for? Hard to learn?
- Address tech fear: include ease-of-use testimonial

**Depends on:** Phase 8 (about page establishes founder credibility that demo page leverages)
**Commit scope:** `feat(demo)`

---

## Phase 10: Product Page

**Why last:** Deepest content page. Requires all feature components + screenshots to be ready.

**Components:**
- [ ] ProductPage — workflow-based feature breakdown: Lead -> Estimate -> Design -> Build -> Invoice

**Playbook guidance (Page 2 — Product):**
- Hybrid: outcome grouping + workflow ordering
- 4 groups: Win the Project, Design and Plan, Build and Track, Get Paid and Grow
- Progressive disclosure: tabs or expandable sections, not a wall of features
- Each feature answers: What result? How does it work? Why believe you?
- Lead with "full platform" completeness message
- Real product UI screenshots, 60-second walkthrough video ideal
- Bottom CTA: "Book a Demo"

**Depends on:** All homepage components (reuses feature visuals)
**Commit scope:** `feat(product)`

---

## Phase 11: Blog Content

**Why last:** SEO long game. Site structure and pages come first.

**Components:**
- [ ] 3 launch blog posts (Sanity CMS)
  1. "Why your Zapier stack is costing you more than you think"
  2. "How to get a proposal signed the same day you walk the job"
  3. "The difference between a CRM and a field ops platform (and why it matters)"

**Playbook guidance:**
- Use design-build language throughout
- Each post should link to relevant product features
- Include CTA at end of each post

**Depends on:** Product page (posts reference features)
**Commit scope:** `content(blog)`

---

## Summary

| Phase | What | Components | Blocked by |
|---|---|---|---|
| **0** | **Logo + brand assets** | Wordmark SVGs, mark SVGs, favicon, apple-icon, OG image | Edgar provides source files |
| 1 | Site chrome | Navbar, Footer | Phase 0 |
| 2 | Hero revision | HeroSection v2 | Phase 1 |
| 3 | Social proof | LogoCloud | Phase 2 |
| 4 | Features | BentoSection | Phase 3 |
| 5 | Proof + positioning | Stats, DarkBentoSection | Phase 4 |
| 6 | Customer proof | Testimonials | Phase 5 |
| 7 | Pricing | PricingPage + FAQ | Phase 6 |
| 8 | Founder story | AboutPage | Nothing (parallel with 7) |
| 9 | Conversion | BookADemoPage | Phase 8 |
| 10 | Deep product | ProductPage | All homepage phases |
| 11 | SEO content | 3 blog posts | Phase 10 |
