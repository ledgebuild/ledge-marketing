import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden bg-[#0D1A2D]">

      {/* ── Noise texture overlay ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }}
      />

      {/* ── Subtle grid lines ── */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full stroke-white/[0.04]"
      >
        <defs>
          <pattern
            id="ledge-grid"
            x="50%"
            y={-1}
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect fill="url(#ledge-grid)" width="100%" height="100%" strokeWidth={0} />
      </svg>

      {/* ── Orange glow blob — top right ── */}
      <div
        aria-hidden="true"
        className="absolute -top-40 right-0 -z-10 transform-gpu blur-3xl opacity-20"
      >
        <div
          style={{
            clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
          className="aspect-1108/632 w-[40rem] bg-gradient-to-r from-[#F5620A] to-[#C44E08]"
        />
      </div>

      {/* ── Navy-mid glow — bottom left ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 -z-10 transform-gpu blur-3xl opacity-30"
      >
        <div
          style={{
            clipPath: 'polygon(0 0, 60% 0, 100% 100%, 0% 100%)',
          }}
          className="aspect-video w-[30rem] bg-gradient-to-tr from-[#1A3254] to-transparent"
        />
      </div>

      {/* ── Main content ── */}
      <div className="mx-auto max-w-[1160px] px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:items-center lg:gap-x-16 lg:px-8 lg:py-40">

        {/* Left — copy */}
        <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">

          {/* Logo */}
          <div className="flex items-center gap-2 mb-16">
            {/* Ledge mark — L with hockey stick */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="4" width="4" height="20" fill="#F5620A"/>
              <rect x="6" y="20" width="14" height="4" fill="#F5620A"/>
              <rect x="16" y="16" width="4" height="8" fill="#F5620A"/>
            </svg>
            <span
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: '0.04em' }}
              className="text-white text-2xl uppercase"
            >
              ledge
            </span>
          </div>

          {/* Announcement pill */}
          <div className="mt-0 sm:mt-0">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-[#F5620A]/10 px-3 py-1 text-sm font-semibold text-[#F5620A] ring-1 ring-[#F5620A]/25 ring-inset"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                Early access
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium text-white/50"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                <span>Now accepting beta users</span>
                <ChevronRightIcon aria-hidden="true" className="size-5 text-white/30" />
              </span>
            </a>
          </div>

          {/* H1 */}
          <h1
            className="mt-10 text-[64px] sm:text-[80px] leading-[1.05] tracking-[-0.02em] text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
          >
            Win bigger jobs.<br />
            <span className="text-white/60">Get paid for all of them.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="mt-8 text-lg text-white/50 max-w-[520px] leading-[1.65]"
            style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 400 }}
          >
            From first lead to final delivery — in one place. Replace HubSpot,
            Jobber, Trello, and Zapier with one modular platform built for small
            contractors under $5M.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex items-center gap-x-5 flex-wrap gap-y-3">
            <a
              href="https://app.ledge.build/signup"
              className="rounded-md bg-[#F5620A] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#C44E08] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5620A]"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              Get started free
            </a>
            <a
              href="#demo"
              className="text-sm font-semibold text-white/70 hover:text-white transition-colors duration-150 flex items-center gap-1"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              See a demo <span aria-hidden="true" className="text-[#F5620A]">→</span>
            </a>
          </div>

          {/* Trust line */}
          <p
            className="mt-4 text-sm text-white/30"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            No credit card required. Free for 14 days.
          </p>

          {/* Stats strip */}
          <div className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
            {[
              { value: '12h', label: 'saved per week' },
              { value: '64%', label: 'avg win rate' },
              { value: '3×', label: 'faster to signed' },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-3xl text-[#F5620A]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
                >
                  {stat.value}
                </p>
                <p
                  className="mt-1 text-sm text-white/40"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — screenshot placeholder */}
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-auto lg:max-w-none lg:flex-none">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">

            {/* Screenshot frame */}
            <div className="relative">
              {/* Glow behind screenshot */}
              <div className="absolute -inset-4 bg-[#F5620A]/10 rounded-2xl blur-2xl" />

              {/* Placeholder screenshot */}
              <div
                className="relative w-[560px] h-[360px] rounded-xl bg-[#1A3254] ring-1 ring-white/10 shadow-2xl overflow-hidden flex flex-col"
              >
                {/* Fake browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#0D1A2D]/60">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                  </div>
                  <div className="flex-1 mx-3 h-5 rounded-md bg-white/5 text-[10px] text-white/20 flex items-center px-3"
                    style={{ fontFamily: "'Barlow', sans-serif" }}
                  >
                    app.ledge.build
                  </div>
                </div>

                {/* Fake sidebar + content */}
                <div className="flex flex-1">
                  {/* Sidebar */}
                  <div className="w-40 bg-[#0D1A2D]/80 border-r border-white/5 p-3 flex flex-col gap-1">
                    {['Pipeline', 'Estimating', 'Scheduling', 'Job Tracking', 'Reporting'].map((item, i) => (
                      <div
                        key={item}
                        className={`px-3 py-2 rounded-md text-[11px] flex items-center gap-2 ${i === 0 ? 'bg-[#F5620A]/10 text-[#F5620A] border-l-2 border-[#F5620A]' : 'text-white/30'}`}
                        style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500 }}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-[#F5620A]' : 'bg-white/20'}`} />
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Main content */}
                  <div className="flex-1 p-4">
                    <div className="text-[11px] text-white/30 mb-3 uppercase tracking-wider"
                      style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600 }}
                    >
                      Active Pipeline
                    </div>
                    <div className="flex flex-col gap-2">
                      {[
                        { name: 'Canyon Crossing', stage: 'Proposal', value: '$48,200', color: '#F5620A' },
                        { name: 'Hi Valley Residence', stage: 'Won', value: '$31,500', color: '#15803D' },
                        { name: 'Crestway Build', stage: 'Scoping', value: '$72,000', color: '#1D4ED8' },
                        { name: 'Mesa Terrace', stage: 'New Lead', value: '$18,900', color: '#5C7A99' },
                      ].map((deal) => (
                        <div key={deal.name} className="flex items-center justify-between bg-white/[0.03] rounded-lg px-3 py-2 border border-white/5">
                          <div>
                            <p className="text-[11px] text-white/70" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500 }}>
                              {deal.name}
                            </p>
                            <p className="text-[10px] mt-0.5" style={{ fontFamily: "'Barlow', sans-serif", color: deal.color }}>
                              {deal.stage}
                            </p>
                          </div>
                          <p className="text-[11px] text-white/50" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>
                            {deal.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Google Fonts — add to your layout.tsx <head> */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=Barlow:wght@400;500;600&display=swap" rel="stylesheet" /> */}

    </div>
  )
}