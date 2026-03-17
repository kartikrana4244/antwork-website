'use client';

const items = ['EXPERIENCE', 'GROWTH', '2500+ DEALS', '32+ CITIES', 'TRUST', 'EXPANSION'];

export default function ExperienceStrip() {
  const content = [...items, ...items];

  return (
    <section className="relative w-full py-5 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(242,201,76,0.16),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-full border border-white/10 bg-black/80 shadow-[0_18px_45px_rgba(0,0,0,0.55)] backdrop-blur-md">
          {/* Edge gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black via-black/80 to-transparent" />

          {/* Primary row */}
          <div className="marquee-track flex whitespace-nowrap py-3 pl-8 pr-8" aria-hidden="true">
            {content.map((item, idx) => (
              <span
                key={`primary-${item}-${idx}`}
                className="mx-10 inline-flex items-center text-sm font-semibold uppercase tracking-[0.4em] text-white sm:text-base"
              >
                {item}
                <span className="ml-4 inline-block h-px w-6 bg-white/50" />
              </span>
            ))}
          </div>

          {/* Secondary, softer row */}
          <div className="marquee-track-secondary hidden whitespace-nowrap border-t border-white/5 py-2 pl-8 pr-8 text-white/70 sm:flex">
            {content.map((item, idx) => (
              <span
                key={`secondary-${item}-${idx}`}
                className="mx-8 inline-flex items-center text-xs font-medium uppercase tracking-[0.35em]"
              >
                {item}
                <span className="ml-3 inline-block h-px w-5 bg-white/40" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
