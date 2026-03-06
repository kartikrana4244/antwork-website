'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />

      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/* Bottom-left content box */}
      <div className="absolute bottom-0 left-0 max-w-[520px] bg-[#FBF0C4] p-5 text-[#111111] shadow-lg md:p-6">
        <p className="text-sm font-bold uppercase tracking-wide">
          POWERING INDIA&apos;S NEXT-GENERATION BRANDS
        </p>
        <h1 className="mb-3 mt-2 text-2xl font-bold leading-tight tracking-tight md:text-3xl md:leading-[1.2]">
          Building Scalable Brands. Expanding Businesses. Creating Opportunities.
        </h1>
        <p className="mt-2 mb-4 max-w-[520px] text-sm leading-relaxed text-[#111111]/90">
          AntWork Consultants LLP is a growth-based consulting firm specializing
          in helping brands expand through franchise routes, enabling smooth and
          confidential business resale transactions, and assisting brands in
          securing premium exhibition spaces across India.
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <Link
            href="/services/franchise-expansion"
            className="rounded bg-[#111111] px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-black"
          >
            Expand My Brand
          </Link>
          <Link
            href="/investor-zone"
            className="rounded bg-[#111111] px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-black"
          >
            Buy a New Franchise
          </Link>
          <Link
            href="/contact"
            className="rounded bg-[#111111] px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-black"
          >
            Ask Our Experts
          </Link>
        </div>
      </div>
    </section>
  );
}
