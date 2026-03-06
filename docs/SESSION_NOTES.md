# Session Notes

## 2026-03-06
- Initial commit of Ledge marketing site on top of Create Next App + Radiant template
- HeroSection is the only custom Ledge component so far — everything else is still Radiant placeholder
- Blog is Sanity-powered and functional, just needs real posts
- Excluded from git: .claude/, seed.tar.gz, root-level stray files (HeroSection.tsx, layout.tsx)
- Fonts (Barlow Condensed, Barlow, JetBrains Mono) must be applied via style prop — not in Tailwind config
- Vercel auto-deploys on push to main
