'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export default function HeroSection() {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, 120]);
  const parallaxOpacity = useTransform(scrollY, [0, 300], [1, 0.4]);
  const heroVisualY = useTransform(scrollY, [0, 400], [0, 60]);

  return (
    <section className="relative overflow-hidden bg-white">
      <motion.div
        style={{ y: parallaxY, opacity: parallaxOpacity }}
        className="absolute inset-0 bg-gradient-to-br from-[#F2C94C]/10 via-[#F2C94C]/5 to-transparent"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-8">
        <div className="lg:w-1/2">
          <motion.p
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="font-heading text-sm font-semibold uppercase tracking-wider text-[#F2C94C]"
          >
            India&apos;s Growth Consulting Partner
          </motion.p>
          <motion.h1
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...fadeUp.transition, delay: 0.18 }}
            className="mt-4 font-heading text-4xl font-extrabold leading-tight text-[#4F4F4F] sm:text-5xl lg:text-6xl"
          >
            Building Scalable Brands. Expanding Businesses. Creating Opportunities.
          </motion.h1>
          <motion.p
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...fadeUp.transition, delay: 0.26 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-[#4F4F4F]/90"
          >
            AntWork Consultants LLP is a growth-based consulting firm specializing in helping brands expand through franchise routes, helping running businesses with smooth resale with 100% confidentiality, and helping brands exhibit and find space in big exhibitions.
          </motion.p>
          <motion.div
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...fadeUp.transition, delay: 0.34 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link href="/services/franchise-consulting" className="btn-primary">
              Expand My Brand
            </Link>
            <Link href="/investor-zone" className="btn-secondary">
              Buy a New Franchise
            </Link>
            <Link href="/contact" className="btn-outline">
              Ask Our Experts
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: heroVisualY }}
          className="relative mt-12 lg:mt-0 lg:w-1/2"
          aria-hidden="true"
        >
          <div className="relative aspect-square max-w-md mx-auto lg:max-w-none rounded-2xl bg-gradient-to-br from-[#F2C94C]/20 via-[#F8F8F8] to-[#4F4F4F]/10 p-8 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  className="aspect-square rounded-xl bg-white/80 shadow-sm border border-[#F2C94C]/30 flex items-center justify-center"
                >
                  <svg className="h-10 w-10 text-[#4F4F4F]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
