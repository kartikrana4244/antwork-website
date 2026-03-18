'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const textContainerVariants = {
  initial: { opacity: 0, y: 28 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.14,
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const textItemVariants = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: 8,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const slides = [
  {
    title: 'Franchise Marketing',
    description:
      'Grow your franchise network with strategic, data-backed campaigns that attract high-intent prospects, strengthen brand visibility, and keep your expansion pipeline consistently active.',
    button: 'Start Growing Today',
    href: '/services/franchise-expansion',
    video: '/videos/hero-section-video-2.mp4',
  },
  {
    title: 'Investor Relations',
    description:
      'Connect your brand with serious, pre-qualified investors through structured outreach, curated investor networks, and transparent deal communication that accelerates franchise sign-ups.',
    button: 'Find Investors',
    href: '/investor-zone',
    video: '/videos/hero-section-video-1.mp4',
  },
  {
    title: 'Business Expansion',
    description:
      'Scale your brand into new cities and regions with a clear market-entry roadmap, robust franchise models, and the right support systems to sustain long-term growth.',
    button: 'Explore Opportunities',
    href: '/services',
    video: '/videos/hero-section-video-3.mp4',
  },
  {
    title: 'Franchise Consulting',
    description:
      'Turn your business into a scalable franchise with end-to-end consulting—from model design and documentation to partner selection and roll-out support across multiple locations.',
    button: 'Start Your Franchise Journey',
    href: '/services/franchise-consulting',
    video: '/videos/hero-section-video-4.mp4',
  },
];

export default function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const activeSlide = slides[currentSlide];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505]">
      {/* Background video slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.video}
            initial={false}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="absolute inset-0"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload={index === 0 ? 'auto' : 'metadata'}
              poster="/videos/hero-poster.jpg"
              className="h-full w-full object-cover"
              style={{ filter: 'brightness(1.13) contrast(1.06)' }}
            >
              <source src={slide.video} type="video/mp4" />
            </video>
          </motion.div>
        ))}

        {/* Dark + gold overlay to keep text readable */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(242,201,76,0.2),transparent_55%),radial-gradient(circle_at_bottom,_rgba(0,0,0,0.22),transparent_65%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-[#050505]" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-14 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl text-center sm:max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={textContainerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mx-auto max-w-3xl text-center sm:max-w-4xl md:min-h-[260px]"
            >
              <motion.p
                variants={textItemVariants}
                className="mb-3 text-[11px] font-semibold tracking-[0.35em] text-[#F2C94C] sm:text-xs"
              >
                FRANCHISE CONSULTANTS
              </motion.p>

              <motion.h1
                variants={textItemVariants}
                className="mb-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-[3rem] lg:text-[3.4rem]"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}
              >
                {activeSlide.title}
              </motion.h1>

              <motion.p
                variants={textItemVariants}
                className="mb-6 text-sm text-white/70 sm:text-base sm:px-4 md:text-lg md:px-0"
              >
                {activeSlide.description}
              </motion.p>

              <motion.div
                variants={textItemVariants}
                className="mt-2 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-center"
              >
                <Link
                  href={activeSlide.href}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#F2C94C] px-8 py-3.5 text-sm font-semibold text-[#1A1A1A] shadow-[0_2px_8px_rgba(242,201,76,0.18)] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_18px_42px_rgba(242,201,76,0.45),0_0_0_1px_rgba(242,201,76,0.25)]"
                >
                  <span className="relative z-10">{activeSlide.button}</span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                </Link>

                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Slide {currentSlide + 1} / {slides.length}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Next arrow anchored below centered content */}
          <button
            type="button"
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % slides.length)
            }
            className="group mt-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/55 text-white/75 shadow-[0_8px_24px_rgba(0,0,0,0.55)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F2C94C] hover:text-[#F2C94C] sm:mt-12"
            aria-label="Next hero slide"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M8 5L15 12L8 19"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
