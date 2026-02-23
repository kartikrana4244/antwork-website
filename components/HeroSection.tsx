'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const particleCount = 24;
const particles = Array.from({ length: particleCount }, (_, i) => ({
  id: i,
  size: 2 + Math.random() * 4,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: 8 + Math.random() * 12,
  delay: Math.random() * 5,
}));

export default function HeroSection() {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, 120]);
  const parallaxOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const heroVisualY = useTransform(scrollY, [0, 400], [0, 60]);

  return (
    <section className="relative min-h-0 overflow-hidden sm:min-h-[85vh] lg:min-h-[90vh]">
      {/* Smooth yellow-to-white gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #F2C94C 0%, #F8E8A8 25%, #FFFBF0 50%, #FFFFFF 85%, #FFFFFF 100%)',
        }}
        aria-hidden="true"
      />
      {/* Parallax overlay */}
      <motion.div
        style={{ y: parallaxY, opacity: parallaxOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#4F4F4F]/20"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-24 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-8">
        <div className="min-w-0 flex-1 lg:w-1/2">
          <motion.p
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="font-heading text-sm font-semibold uppercase tracking-wider text-[#4F4F4F]"
          >
            India&apos;s Growth Consulting Partner
          </motion.p>
          <motion.h1
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...fadeUp.transition, delay: 0.18 }}
            className="mt-4 break-words font-heading text-3xl font-extrabold leading-tight text-[#4F4F4F] sm:text-4xl sm:leading-tight lg:text-5xl xl:text-6xl"
          >
            Building Scalable Brands. Expanding Businesses. Creating Opportunities.
          </motion.h1>
          <motion.p
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...fadeUp.transition, delay: 0.26 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-[#4F4F4F]/90 sm:mt-6 sm:text-lg"
          >
            AntWork Consultants LLP is a growth-based consulting firm specializing in helping brands expand through franchise routes, helping running businesses with smooth resale with 100% confidentiality, and helping brands exhibit and find space in big exhibitions.
          </motion.p>
          <motion.div
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...fadeUp.transition, delay: 0.34 }}
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <Link href="/services/franchise-consulting" className="btn-primary min-h-[48px] w-full justify-center rounded-xl sm:w-auto">
              Expand My Brand
            </Link>
            <Link href="/investor-zone" className="btn-secondary min-h-[48px] w-full justify-center rounded-xl sm:w-auto">
              Buy a New Franchise
            </Link>
            <Link href="/contact" className="btn-outline min-h-[48px] w-full justify-center rounded-xl sm:w-auto">
              Ask Our Experts
            </Link>
          </motion.div>
        </div>

        {/* Modern abstract gradient mesh + geometric pattern */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: heroVisualY }}
          className="relative mt-10 min-w-0 flex-1 lg:mt-0 lg:w-1/2 lg:flex-none lg:justify-end"
          aria-hidden="true"
        >
          <div className="relative mx-auto w-full max-w-[280px] aspect-square sm:max-w-md">
            {/* Gradient mesh blob */}
            <div
              className="absolute inset-0 rounded-[2.5rem] opacity-90"
              style={{
                background: `
                  radial-gradient(ellipse 80% 80% at 30% 20%, rgba(242, 201, 76, 0.4) 0%, transparent 50%),
                  radial-gradient(ellipse 60% 60% at 70% 70%, rgba(79, 79, 79, 0.12) 0%, transparent 50%),
                  radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255, 255, 255, 0.9) 0%, transparent 70%)
                `,
              }}
            />
            {/* Geometric pattern overlay */}
            <svg
              className="absolute inset-0 w-full h-full rounded-[2.5rem] opacity-[0.07]"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#4F4F4F" strokeWidth="0.5" />
                </pattern>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F2C94C" />
                  <stop offset="100%" stopColor="#4F4F4F" />
                </linearGradient>
              </defs>
              <rect width="400" height="400" fill="url(#grid)" />
              <circle cx="200" cy="200" r="120" stroke="url(#lineGrad)" strokeWidth="1" fill="none" />
              <circle cx="200" cy="200" r="80" stroke="url(#lineGrad)" strokeWidth="0.75" fill="none" />
              <circle cx="200" cy="200" r="40" stroke="url(#lineGrad)" strokeWidth="0.5" fill="none" />
              <line x1="200" y1="80" x2="200" y2="320" stroke="url(#lineGrad)" strokeWidth="0.5" />
              <line x1="80" y1="200" x2="320" y2="200" stroke="url(#lineGrad)" strokeWidth="0.5" />
              <line x1="120" y1="120" x2="280" y2="280" stroke="url(#lineGrad)" strokeWidth="0.4" />
              <line x1="280" y1="120" x2="120" y2="280" stroke="url(#lineGrad)" strokeWidth="0.4" />
            </svg>
            {/* Soft inner highlight */}
            <div className="absolute inset-0 rounded-[2.5rem] border border-white/40 shadow-2xl shadow-[#4F4F4F]/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
