# LEDGE DESIGN SYSTEM — Claude Code Reference
> v1.0 · Feb 2026 · Source of truth for all UI built on Ledge. When building any component, page, or feature, match this spec exactly. Do not deviate from tokens, fonts, or color rules.

---

## BRAND IDENTITY

**Product name:** Ledge  
**Category name:** Modular field operations platform  
**Do NOT call it:** CRM, ERP, all-in-one, enterprise software  
**One-liner:** "Ledge is the operating system for small contractors — replace your fragmented stack with the modules your business actually uses."  
**Design philosophy:** Industrial Precision. Built for the field, not the boardroom. Feels like a tool — not a toy, not a slide deck. Confident, functional, direct.  
**Audience:** Small contractors across trades, $500K–$5M revenue, 3–15 employees. Landscape design-build is the anchor vertical.

---

## FONTS

```
Display: 'Barlow Condensed', sans-serif  → H1–H3, eyebrows, section titles, card titles
Body:    'Barlow', sans-serif            → body copy, UI labels, button text, nav
Mono:    'JetBrains Mono', monospace     → code, tokens, timestamps, specs
```

**Google Fonts import:**
```
https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=Barlow:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap
```

**CSS variables:**
```css
--font-display: 'Barlow Condensed', sans-serif;
--font-body:    'Barlow', sans-serif;
--font-mono:    'JetBrains Mono', monospace;
```

**Type scale:**

| Role | Font | Size | Weight | Line-height | Notes |
|------|------|------|--------|-------------|-------|
| H1 / Hero title | Barlow Condensed | 48–72px (fluid) | 800 | 1.0 | Uppercase or sentence case |
| H2 / Section title | Barlow Condensed | 32px | 700 | 1.1 | Max 10 words |
| H3 / Subsection | Barlow Condensed | 24px | 700 | 1.1 | |
| Card title | Barlow Condensed | 18–22px | 700 | 1.2 | Max 4 words |
| Body | Barlow | 15px | 400 | 1.7 | max-width 640px |
| UI label / nav | Barlow | 13px | 500–600 | — | |
| Button | Barlow | 12–15px | 600 | — | |
| Eyebrow / badge | Barlow | 11px | 600 | — | uppercase, letter-spacing 0.09em |
| Caption / meta | Barlow | 11px | 400 | — | color: var(--text-dim) |
| Mono | JetBrains Mono | 11–13px | 400–500 | — | tokens, specs, code |

**Typography rules:**
- Barlow Condensed for ALL H1–H3. Never use system fonts or Inter in brand materials.
- Barlow for ALL body, UI, and button text.
- Never mix Barlow Condensed and Barlow in the same text block.
- Display text: line-height 1.0–1.1 MAX. Never higher.
- Do NOT italicize Barlow Condensed — use weight (700 vs 800) for emphasis instead.
- Letter-spacing on all uppercase/eyebrow labels: +0.08–0.12em.
- Max 2 type sizes in a single component.
- No random sizes outside the scale.

---

## COLOR TOKENS

```css
:root {
  /* Brand primaries */
  --navy:          #0D1A2D;
  --navy-mid:      #1A3254;
  --navy-light:    #2E4E72;
  --orange:        #F5620A;
  --orange-dim:    #C44E08;
  --orange-glow:   rgba(245,98,10,0.07);
  --orange-border: rgba(245,98,10,0.22);

  /* Backgrounds — LIGHT-FIRST */
  --bg-page:    #FFFFFF;
  --bg-white:   #FFFFFF;
  --bg-section: #F7F9FC;   /* subtle tint for alternating sections */
  --bg-tint:    #F0F4F9;   /* spec panels, hover states */

  /* Text */
  --white:         #FFFFFF;   /* on dark/orange backgrounds only */
  --text-primary:  #0D1A2D;
  --text-body:     #2D3E52;
  --text-muted:    #5C7A99;
  --text-dim:      #8BA3BE;
  --muted:         #8BA3BE;

  /* Borders */
  --border:        #E2EAF3;
  --border-mid:    #C8D8E8;

  /* Status / semantic */
  --success-text:   #15803D;
  --success-bg:     #F0FDF4;
  --success-border: rgba(21,128,61,0.18);
  --info-text:      #1D4ED8;
  --info-bg:        #EFF6FF;
  --info-border:    rgba(29,78,216,0.18);
  --error-text:     #DC2626;
  --error-bg:       #FFF1F2;
}
```

**Orange usage rule — exactly 6 contexts:**
1. Primary CTA buttons
2. Logo mark (post and hockey stick)
3. Section eyebrows (small uppercase labels above H2s)
4. Active nav indicator (left border on active sidebar link)
5. Icon boxes / accent icons in feature cards
6. Key data values (e.g., dollar amounts in display stats)

**Orange DON'Ts:**
- Never use orange for decorative backgrounds or dividers
- Never use orange on more than one CTA per viewport
- Never use red for anything except errors and destructive actions
- Never hardcode hex values — always use CSS tokens
- Never introduce new brand colors without design approval

**Background rule:** White canvas everywhere. Dark (navy) = hero section ONLY. Section alternation uses `--bg-section` (barely-there gray), never navy. Navy is reserved for: sidebar, hero, inline callout panels, text.

---

## SPACING TOKENS

Two-tier system. **Static** for component internals (buttons, inputs, icons — must be pixel-perfect). **Fluid** for layout-level gaps and section padding (scale with viewport).

```css
/* Static — use for component internals */
--sp-1:  4px;
--sp-2:  8px;
--sp-3:  12px;
--sp-4:  16px;
/* NOTE: --sp-5 DOES NOT EXIST. Skip from 4 to 6. */
--sp-6:  24px;
--sp-8:  32px;
--sp-10: 40px;
--sp-12: 48px;
--sp-16: 64px;
--sp-20: 80px;
--sp-24: 96px;

/* Fluid — use for layout (clamp scales 320px–1240px viewport) */
--fluid-2xs: clamp(0.5rem,  0.46rem + 0.22vw, 0.625rem);   /* 8→10px   */
--fluid-xs:  clamp(0.75rem, 0.68rem + 0.33vw, 0.9375rem);  /* 12→15px  */
--fluid-s:   clamp(1rem,    0.91rem + 0.43vw, 1.25rem);     /* 16→20px  */
--fluid-m:   clamp(1.5rem,  1.36rem + 0.65vw, 1.875rem);    /* 24→30px  */
--fluid-l:   clamp(2rem,    1.78rem + 1.09vw, 2.5rem);      /* 32→40px  */
--fluid-xl:  clamp(3rem,    2.67rem + 1.63vw, 3.75rem);     /* 48→60px  */
--fluid-2xl: clamp(4rem,    3.57rem + 2.17vw, 5rem);        /* 64→80px  */
--fluid-3xl: clamp(5rem,    4.35rem + 3.26vw, 6.25rem);     /* 80→100px */

/* Aggressive one-up pairs */
--fluid-s-l:   clamp(1rem,   0.5rem  + 2.5vw,  2.5rem);    /* 16→40px  */
--fluid-m-xl:  clamp(1.5rem, 0.75rem + 3.75vw, 3.75rem);   /* 24→60px  */
--fluid-l-2xl: clamp(2rem,   1rem    + 5vw,    5rem);       /* 32→80px  */

/* Section padding */
--section-pad-y: clamp(2.5rem, 1.5rem + 5vw, 5rem);    /* 40→80px vertical  */
--section-pad-x: clamp(1.25rem, 0.75rem + 2.5vw, 2.5rem); /* 20→40px horizontal */
```

**Spacing rules:**
- `--sp-N` tokens for buttons, inputs, badges, icon gaps, component internals
- `--fluid-*` for section padding, grid gaps, and between-section spacing
- NEVER use hardcoded px values like `margin: 12px` — always use a token
- No `--sp-5` exists. Use `--sp-6` (24px) when you need ~20px. Adjust the component, not the token.

---

## BORDER RADIUS

```css
--r-sm: 3px;   /* buttons, inputs */
--r-md: 6px;   /* cards, panels */
--r-lg: 8px;   /* cards, modal containers */
--r-xl: 10px;  /* feature panels, large containers */
```

Industrial aesthetic — NOT pill-shaped. Never use `border-radius: 99px` on cards or containers. Only on pills/tags/badges where intentional.

---

## LAYOUT SYSTEM

```css
--sidebar-w:   240px;
--content-max: 780px;
```

**Layout structure:**
```css
.shell   { display: flex; min-height: 100vh; }
.sidebar { width: 240px; position: fixed; height: 100vh; background: var(--navy); }
.main    { margin-left: 240px; flex: 1; background: var(--bg-white); }
```

**Section system:**
```css
/* Content container — centers to 780px max */
.section {
  width: 100%;
  max-width: 780px;
  margin: 0 auto;
  padding: var(--section-pad-y) var(--section-pad-x);
}

/* White section wrapper */
.section-wrap {
  background: var(--bg-white);
  border-bottom: 1px solid var(--border);
}

/* Tinted section wrapper — alternating */
.section-alt {
  background: var(--bg-section);
  border-bottom: 1px solid var(--border);
}

/* Hero — only dark section allowed */
.hero-section {
  background: var(--navy);
  border-bottom: 3px solid var(--orange);
}
```

**CRITICAL:** Do NOT add `container-type: inline-size` to the same element as `max-width` + `margin: auto` — breaks Chrome centering. Use `@media` queries for responsive grids instead.

**Grid utility classes:**
```css
.g-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--fluid-m); }
.g-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--fluid-m); }
.g-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--fluid-m); }
```

**Switcher pattern** (intrinsic — collapses below threshold, no media query needed):
```css
.switcher {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fluid-m);
}
.switcher > * {
  flex-grow: 1;
  flex-basis: calc((480px - 100%) * 999);
}
```

Never use `grid-template-columns: 1fr 1fr` — use `repeat(auto-fit, minmax(min(100%, 280px), 1fr))` for intrinsic responsive grids.

**Breakpoints:**
```css
@media (max-width: 1024px) { /* tablet — collapse sidebar */ }
@media (max-width: 768px)  { /* mobile — single column, full-width */ }
@media (max-width: 480px)  { /* small — base min for fluid clamps */ }
```

**Max widths:**
```css
--content-max: 780px;  /* main content */
720px;                  /* body text blocks (max-width on <p> tags) */
640px;                  /* narrow prose */
```

**Scrollbars:**
```css
/* Thin navy scrollbar in content areas */
::-webkit-scrollbar       { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--border-mid); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--navy-light); }

/* Hide on dropdowns — scroll still functional */
.dropdown-menu { scrollbar-width: none; }
.dropdown-menu::-webkit-scrollbar { display: none; }
```

---

## LOGO

**Mark anatomy:** A geometric L-frame. Left vertical post (orange rectangle) + hockey stick (orange path going right along the baseline then angling up-right). The inner corner of the hockey stick bend creates a triangular negative space — a hidden upward-right arrow (the "easter egg").

**Primary logo SVG (light background):**
```svg
<svg width="380" height="100" viewBox="0 0 380 100" fill="none">
  <text x="28" y="82" font-family="'Barlow Condensed',sans-serif"
        font-weight="800" font-size="78" fill="#0D1A2D" letter-spacing="-1">ledge</text>
  <rect x="0" y="0" width="18" height="100" fill="#F5620A"/>
  <path d="M 18,88 L 118,88 L 180,6"
        stroke="#F5620A" stroke-width="20"
        stroke-linecap="square" stroke-linejoin="miter" stroke-miterlimit="20" fill="none"/>
</svg>
```

**Dark background version:** Change `fill="#0D1A2D"` on `<text>` to `fill="white"`. Mark stays orange.

**Orange background version:** Change `<text>` fill and both mark elements to `white`.

**Standalone mark (square/icon contexts):**
```svg
<svg width="90" height="90" viewBox="0 0 90 90" fill="none">
  <rect x="6" y="2" width="16" height="82" fill="#F5620A"/>
  <path d="M 22,80 L 60,80 L 82,12"
        stroke="#F5620A" stroke-width="18"
        stroke-linecap="square" stroke-linejoin="miter" stroke-miterlimit="20" fill="none"/>
</svg>
```

**Approved background pairings:**
| Background | Wordmark color | Mark color |
|------------|---------------|------------|
| White / light gray | `#0D1A2D` (navy) | Orange |
| Navy | White | Orange |
| Orange | White | White |

**Logo rules:**
- Clear space = 1× cap height on all sides. Nothing enters this zone.
- Minimum sizes: 120px wide for wordmark, 24px for mark alone
- NEVER recolor the orange mark
- NEVER place over busy photographs
- NEVER stretch, skew, rotate, or add drop shadows
- NEVER recreate in a different font
- NEVER use below minimum size
- `stroke-linejoin: miter` + `stroke-miterlimit: 20` is intentional — creates the sharp triangular arrow notch at the bend

**Deployment contexts:**
| Context | Use | Size |
|---------|-----|------|
| Navbar / app header | Wordmark, navy bg | 28–32px tall |
| App icon / favicon 32px | Mark only | 32×32 |
| Favicon 16px | Mark only | 16×16 |
| App Store icon | Mark on navy rounded square | 90×90, rx=20 |
| Social media profile | Mark only, navy bg | 400×400 |
| Email header | Wordmark, white bg | 160px wide |
| Dark hero section | Wordmark reversed (white) | 120–180px wide |

---

## COMPONENTS

### Buttons

**CSS classes:**
```css
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-body); font-weight: 600;
  border: none; border-radius: var(--r-sm); cursor: pointer;
  transition: background 0.15s, transform 0.1s, box-shadow 0.15s;
  white-space: nowrap;
}

/* Sizes */
.btn-sm  { font-size: 12px; padding: 6px 12px; }
.btn-md  { font-size: 14px; padding: 9px 16px; }
.btn-lg  { font-size: 15px; padding: 13px 24px; }

/* Variants */
.btn-primary        { background: var(--orange); color: #fff; }
.btn-primary:hover  { background: var(--orange-dim); transform: translateY(-1px); }

.btn-outline        { background: transparent; color: var(--text-muted); border: 1px solid var(--border-mid); }
.btn-outline:hover  { color: var(--navy); border-color: var(--navy-light); }

.btn-ghost          { background: transparent; color: var(--text-muted); }
.btn-ghost:hover    { color: var(--navy); }

.btn-outline-orange       { background: transparent; color: var(--orange); border: 1px solid var(--orange-border); }
.btn-outline-orange:hover { background: var(--orange-glow); }

/* On dark backgrounds */
.btn-white              { background: #fff; color: var(--navy); }
.btn-white:hover        { background: rgba(255,255,255,0.9); transform: translateY(-1px); }

.btn-white-outline      { background: transparent; color: rgba(255,255,255,0.75); border: 1px solid rgba(255,255,255,0.2); }
.btn-white-outline:hover { border-color: rgba(255,255,255,0.5); color: #fff; }
```

**CTA hierarchy rules:**
- One `btn-primary` (orange) per viewport. It is the loudest element — overuse kills signal.
- Secondary action: `btn-outline` (on light) or `btn-white-outline` (on dark)
- Tertiary: `btn-ghost`
- On orange backgrounds: `btn-white` for primary, `btn-white-outline` for secondary
- CTA copy format: verb + object, max 4 words. "Get started free." "Schedule a demo." "See how it works."
- Never: "Click here", "Submit", "Learn More" (vague). Always active, specific.

---

### Badges / Status

```css
.badge {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 3px 10px; border-radius: 3px;
  font-size: 12px; font-weight: 600; line-height: 1;
}
.badge-dot { width: 6px; height: 6px; border-radius: 50%; }

.badge-orange { background: rgba(245,98,10,0.1); color: var(--orange); border: 1px solid var(--orange-border); }
.badge-orange .badge-dot { background: var(--orange); }

.badge-green  { background: var(--success-bg); color: var(--success-text); border: 1px solid var(--success-border); }
.badge-green .badge-dot  { background: var(--success-text); }

.badge-blue   { background: var(--info-bg); color: var(--info-text); border: 1px solid var(--info-border); }
.badge-blue .badge-dot   { background: var(--info-text); }

.badge-gray   { background: var(--bg-section); color: var(--text-muted); border: 1px solid var(--border); }
.badge-gray .badge-dot   { background: var(--text-dim); }
```

**Semantic usage:**
- Orange → active, in-progress, current
- Green → won, completed, success, approved
- Blue → in review, pending, info
- Gray → inactive, closed, archived

---

### Forms & Inputs

```css
.input-wrap  { display: flex; flex-direction: column; gap: 6px; }
.input-label { font-size: 13px; font-weight: 600; color: var(--text-body); }

.input {
  background: var(--bg-white);
  border: 1px solid var(--border-mid);
  border-radius: var(--r-sm);
  padding: 9px 14px;
  font-family: var(--font-body); font-size: 14px;
  color: var(--text-primary);
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
  width: 100%;
}
.input:focus        { border-color: var(--orange); box-shadow: 0 0 0 3px rgba(245,98,10,0.1); }
.input::placeholder { color: var(--text-dim); }

.input-hint      { font-size: 12px; color: var(--text-dim); }
.input-error     { border-color: var(--error-text) !important; }
.input-error-msg { font-size: 12px; color: var(--error-text); }
```

**Form rules:**
- Focus ring: orange border + `rgba(245,98,10,0.1)` shadow — ALWAYS applied, never removed
- Error state: red border + red helper text below input
- Label always above input, never placeholder-only
- Groups: 6px gap between label and input, 16px between fields
- Never auto-submit on enter for multi-field forms

---

### Cards & Containers

```css
/* Standard card */
.card {
  background: var(--bg-white);
  border: 1px solid var(--border);
  border-top: 2px solid var(--navy);
  border-radius: var(--r-lg);
  padding: 24px;
}

/* Dark card */
.card-dark {
  background: var(--navy);
  border: 1px solid rgba(255,255,255,0.07);
  border-top: 2px solid var(--orange);
  border-radius: var(--r-lg);
  padding: 24px;
}

/* Orange accent card */
.card-orange {
  background: var(--orange);
  border-radius: var(--r-lg);
  padding: 24px;
}
```

**Card hover behavior:**
```css
.card-interactive {
  transition: transform 0.15s var(--spring), box-shadow 0.15s;
  cursor: pointer;
}
.card-interactive:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(13,26,45,0.10);
}
```

**Inline callout panels (accent colors on top border):**
```css
/* Feature card — orange accent */
border-top: 3px solid var(--orange);

/* Neutral card */
border-top: 3px solid var(--navy);

/* Muted/optional card */
border-top: 3px solid var(--text-dim);
```

---

### Icons

Library: **Lucide** (`https://cdn.jsdelivr.net/npm/lucide@0.468.0/dist/umd/lucide.min.js`)

**Size scale:**
| Context | Size |
|---------|------|
| Nav items / label icons | 14×14 |
| Inline / body text | 16×16 |
| Button icons | 16×16 |
| Feature card icons | 18–20×18–20 |
| Empty state / hero | 24×24 |
| Large display | 32×32 |

**Color usage:**
- `var(--navy)` — primary UI icons (default)
- `var(--orange)` — accent/active icons, icons inside orange icon boxes
- `white` — icons on dark/navy backgrounds
- `var(--text-muted)` — secondary/inactive icons

**Icon boxes:**
```css
.icon-box {
  width: 34px; height: 34px;
  background: var(--orange-glow);
  border: 1px solid var(--orange-border);
  border-radius: var(--r-md);
  display: flex; align-items: center; justify-content: center;
}
.icon-box-navy {
  width: 34px; height: 34px;
  background: rgba(13,26,45,0.06);
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  display: flex; align-items: center; justify-content: center;
}
```

**Icon rules:**
- Always pair icons with text labels in navigation
- Never use icons as the ONLY navigation affordance in primary nav
- `stroke-width: 1.5` is Lucide default — do not change
- Never fill Lucide icons; they are stroke-only

**Core icon set for product UI:**
```
dollar-sign    → billing, invoices, revenue
calendar       → scheduling, dates
clipboard-list → estimates, quotes
layout-grid    → pipeline, kanban
map-pin        → job sites, location
hard-hat       → field crew, jobs
camera         → job photos, StructureCam
file-text      → documents, proposals
check-circle   → completed, success
alert-triangle → warnings, issues
settings       → configuration
user, users    → contacts, CRM
truck          → delivery, dispatch
bar-chart-2    → reporting, analytics
search         → search, filter
plus, x        → add, close/remove
chevron-right  → navigation, expand
```

---

## MOTION & INTERACTIONS

**Timing tokens:**
```css
--spring:   cubic-bezier(0.34, 1.56, 0.64, 1);  /* overshoots → feels physical */
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);       /* fast start, soft landing    */
--t-hover:  150ms;   /* hover color/border/background changes */
--t-menu:   250ms;   /* menu open/close, position/scale/opacity */
```

**Five interaction patterns:**

**01 — Flyout nav (dark navbar):**
```css
/* Trigger container */
.dm-ni { position: relative; }
.dm-ni:hover .dm-trig { color: white; background: rgba(255,255,255,0.08); }

/* Chevron rotates on open */
.dm-chev { transition: transform 0.2s var(--ease-out); }
.dm-ni:hover .dm-chev { transform: rotate(180deg); }

/* Flyout panel */
.dm-flyout {
  position: absolute; top: calc(100% + 10px); left: 0;
  background: white; border: 1px solid #D1DCE9; border-top: 2px solid var(--orange);
  border-radius: 6px; box-shadow: 0 16px 48px rgba(13,26,45,0.18);
  padding: 6px; min-width: 230px;
  opacity: 0; transform: translateY(-6px) scale(0.97); pointer-events: none;
  transform-origin: top left;
  transition: opacity 0.2s var(--ease-out), transform 0.25s var(--spring);
  z-index: 200;
}
/* Bridge — invisible hover zone prevents gap-triggered close */
.dm-flyout::before {
  content: ''; position: absolute; top: -12px; left: 0; right: 0; height: 12px;
}
.dm-ni:hover .dm-flyout { opacity: 1; transform: translateY(0) scale(1); pointer-events: all; }

/* Item hover: icon scale(1.1) spring */
.dm-fi:hover .dm-ficon { transform: scale(1.1); }
```

**02 — Mega menu (light navbar):**
```css
.dm-mega {
  position: absolute; top: calc(100% + 10px);
  transform-origin: top center;
  opacity: 0; transform: translateY(-8px) scale(0.98);
  transition: opacity 0.2s var(--ease-out), transform 0.28s var(--spring);
}
.dm-ni2:hover .dm-mega { opacity: 1; transform: translateY(0) scale(1); pointer-events: all; }
/* Item hover: translateX(3px), icon rotate(-3deg) scale(1.1) */
.dm-mi:hover { transform: translateX(3px); }
.dm-mi:hover .dm-miicon { transform: scale(1.1) rotate(-3deg); }
```

**03 — Sidebar accordion:**
```css
.dm-sbkids { max-height: 0; overflow: hidden; transition: max-height 0.35s var(--ease-out); }
.dm-sbg.sbopen .dm-sbkids { max-height: 200px; }
/* Child hover: indent + orange dot */
.dm-sbchild:hover { padding-left: 40px; }
.dm-sbchild:hover::before { background: var(--orange); transform: scale(1.4); }
```

**04 — Row inline actions (table/list rows):**
```css
/* Orange left-border indicator slides in on hover */
.dm-row::before {
  content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
  background: var(--orange); transform: scaleY(0); transform-origin: center;
  transition: transform 0.2s var(--spring);
}
.dm-row:hover::before { transform: scaleY(1); }
/* Action buttons slide in from right */
.dm-acts { opacity: 0; transform: translateX(6px); transition: opacity 0.15s, transform 0.2s var(--spring); }
.dm-row:hover .dm-acts { opacity: 1; transform: translateX(0); }
```

**05 — Tooltips:**
```css
/* Simple tooltip */
.dm-tt {
  position: absolute; bottom: calc(100% + 10px); left: 50%;
  transform: translateX(-50%) translateY(4px) scale(0.95);
  background: var(--navy); color: white; font-size: 11px; padding: 6px 11px;
  border-radius: 5px; white-space: nowrap;
  opacity: 0; transition: opacity 0.18s, transform 0.22s var(--spring);
}
.dm-ttw:hover .dm-tt { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
/* Tail */
.dm-tt::after {
  content: ''; position: absolute; top: 100%; left: 50%;
  transform: translateX(-50%); border: 5px solid transparent; border-top-color: var(--navy);
}
```

---

## VOICE & TONE

**Core principles:**
1. **Specific over general** — Real numbers beat vague claims. "12 hours saved per week" beats "saves you time." If you can't put a number on it, rewrite it.
2. **Peer tone, not salesy** — Ledge was built by a contractor. Talk like you're at the tailgate, not in a pitch meeting. Short sentences. Max 25 words. Max 4 sentences per paragraph.
3. **Outcomes first, features second** — Lead with what the user gets, not what the product does.
4. **Name the real problem** — Don't say "stop running your business on spreadsheets." Say "You're already paying for HubSpot, Jobber, Trello, and Zapier. Ledge replaces all of them."

**Copy examples:**

| ✕ Don't write | ✓ Write instead |
|--------------|----------------|
| "Leverage our cutting-edge AI-powered estimating solution to streamline your business workflows" | "Build a quote on-site in 10 minutes. Send it before you leave the driveway. Get it signed the same day." |
| "Our robust enterprise-grade platform provides comprehensive project management capabilities" | "Three crews, six active jobs, one place to track all of it. Your team always knows what they're doing tomorrow." |
| "Stop running your business on spreadsheets." | "You're already paying for HubSpot, Jobber, Trello, and Zapier. Ledge replaces all of them." |
| "An all-in-one solution for your entire business workflow." | "You don't need routing and dispatch. You don't need call recording. Turn those off. Pay for the pipeline, estimates, and scheduling that actually run your jobs." |

**Banned words:** "leverage," "synergy," "streamline," "robust," "cutting-edge," "enterprise-grade," "AI-powered" (as a headline benefit), "all-in-one," "comprehensive," "solution"

**Passive voice rule:** Never use "is designed to" → use "does"

**Copy length limits:**

| Element | Max | Rule |
|---------|-----|------|
| Hero H1 | 8 words | Two short lines preferred over one long |
| Hero subheadline | 25 words / 2 sentences | One value statement + one clarifier. Never 3 sentences. |
| Section H2 | 10 words | Complete thought, not a topic label |
| Feature card title | 4 words | Module name + optional descriptor. "Estimates that win" not "Advanced Estimation Module." |
| Feature card body | 30 words / 2 sentences | Pain point solved + how. No feature listing. |
| CTA button label | 4 words | Verb + object. "Get started free." "Schedule a demo." |
| Nav item | 1–2 words | Never 3 words in nav |
| Paragraph | 4 sentences | Max. Shorter always better. |
| Sentence | 25 words | Max. |

---

## PHOTOGRAPHY GUIDELINES

**Use:**
- Active job sites — installation in progress, natural light
- Hands in work — real gloves, real tools, real materials
- Tablet or phone with Ledge UI visible on-site
- Finished work — completed hardscape, before/after
- Candid crew moments — not posed, not looking at camera

**Never use:**
- Generic stock: handshakes, boardrooms, suits
- People looking at the camera smiling with arms crossed
- Abstract tech imagery (blue glowing networks, circuit boards)
- Office environments
- Diversity stock that looks obviously staged

**Image specs:**
| Context | Aspect ratio | Min size |
|---------|-------------|----------|
| Hero background | 16:9 | 1440×810 |
| Feature section | 4:3 or 16:9 | 800×600 |
| Card thumbnail | 3:2 | 600×400 |
| OG / social share | 1.91:1 | 1200×630 |
| Profile avatar | 1:1 | 400×400 |

---

## SAMPLE LAYOUT PATTERNS

### Marketing site nav bar
```
[Ledge logo] | [Features] [Pricing] [About] | [Sign in (ghost)] [Get started free (primary)]
Background: white or navy. Border-bottom: 1px solid var(--border).
Logo left, nav links center or left-of-ctas, CTAs right.
```

### Hero section
```css
background: var(--navy);
border-bottom: 3px solid var(--orange);
/* Content: eyebrow (orange, uppercase) → H1 (white, Barlow Condensed 800) 
   → subheadline (rgba(255,255,255,0.65), 18px Barlow) 
   → CTA row: btn-primary + btn-white-outline */
```

### Stats strip
```
3–4 stat cards in a row. Each: large number (Barlow Condensed 700, orange or navy) + 
label below (13px Barlow, --text-muted). Dividers between. Background: --bg-section.
```

### Feature card grid
```
g-3 grid. Each card: .card with border-top: 3px solid var(--orange).
Icon box (orange) + label → card title (Barlow Condensed, 18px) → 2-sentence body.
```

### Pricing page toggle
```
Monthly / Annual toggle at top (pill buttons, navy active state).
Annual shows "Save 20%" badge (orange pill).
Cards: Starter | Growth | Pro. Middle card elevated (border-top orange, slight scale up).
```

### Final CTA box (bottom of page)
```css
background: var(--navy); border-radius: var(--r-xl); padding: var(--sp-12) var(--sp-8);
text-align: center;
/* Eyebrow (orange) → H2 (white) → subtext (rgba(255,255,255,0.55)) 
   → btn-primary (lg) + btn-white-outline (lg) */
```

---

## DO'S AND DON'TS

### Logo
| ✓ Do | ✕ Don't |
|------|--------|
| Use SVG mark at all sizes | Recolor the orange mark to any other color |
| Maintain required clear space | Place logo over busy photographs |
| Use on approved backgrounds only | Stretch, skew, or rotate |
| Use standalone mark for square/icon contexts | Add drop shadows or effects |
| Keep orange mark on ALL backgrounds | Use below minimum size (120px wordmark, 24px mark) |

### Color
| ✓ Do | ✕ Don't |
|------|--------|
| Use orange in exactly the 6 approved contexts | Use orange for decorative purposes |
| Use navy as primary text and structure color | Use orange on more than one CTA per viewport |
| Use status colors semantically | Introduce new brand colors |
| Reference colors via CSS tokens | Hardcode hex values |
| Use red only for errors/destructive | Use red for anything non-error |

### Typography
| ✓ Do | ✕ Don't |
|------|--------|
| Barlow Condensed for all H1–H3 | Use Inter, Roboto, Arial, or system fonts |
| Barlow for all body/UI/button | Set display text at line-height above 1.1 |
| Keep display at line-height 1.0–1.1 | Mix Barlow Condensed and Barlow in same block |
| Respect the type scale | Italicize Barlow Condensed |
| Max 2 type sizes in a component | Use random sizes outside the scale |

### Voice
| ✓ Do | ✕ Don't |
|------|--------|
| Lead with outcomes and specific numbers | Use banned jargon ("leverage," "robust") |
| Write short sentences (25 words max) | Lead with features instead of outcomes |
| Address the contractor as a peer | Use passive voice ("is designed to") |
| Reference real scenarios (on-site, crew, quotes) | Claim "AI-powered" as headline benefit |
| Name the specific tools Ledge replaces | Position as enterprise or generic SaaS |

---

## COMMON CSS BUGS TO AVOID

1. **`--sp-5` doesn't exist.** Referencing undefined CSS vars silently collapses padding to 0. Valid scale: --sp-1, --sp-2, --sp-3, --sp-4, --sp-6, --sp-8, --sp-10, --sp-12, --sp-16, --sp-20, --sp-24.

2. **`container-type: inline-size` on the same element as `max-width + margin: auto`** breaks Chrome centering. Use `@media` queries for responsive grids inside `.section`.

3. **Missing `::before` bridge on hover menus** — a 12px invisible gap between the trigger and the panel causes the menu to close when the mouse crosses the gap. Always add `::before { height: 12px; top: -12px; }` to the panel.

4. **Orphaned `</div>` after section refactors** — extra closing div causes all subsequent sections to lose their max-width and background. Run a depth check (increment on `<div`, decrement on `</div>`) if layout breaks.

5. **`grid-template-columns: 1fr 1fr`** — never use this. It creates fixed proportions that don't collapse. Use `repeat(auto-fit, minmax(min(100%, 280px), 1fr))`.

6. **Hardcoded pixel values** — never `margin-bottom: 12px`. Always `var(--sp-3)`.

7. **`scrollbar-width: none` on layout containers** — only apply to dropdown menus. Main content areas keep the thin navy scrollbar.