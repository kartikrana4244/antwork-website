'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const textContainerVariants = {
  initial: { opacity: 0, y: 32 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.12,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const textItemVariants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const slides = [
  {
    title: 'Franchise Marketing',
    description:
      'Grow your franchise network with powerful marketing strategies that connect you with the right buyers.',
    button: 'Start Growing Today',
    href: '/services/franchise-expansion',
    video: '/videos/15470063_1920_1080_50fps.mp4',
  },
  {
    title: 'Investor Relations',
    description:
      'Connect your brand with serious investors and expand your franchise footprint faster.',
    button: 'Find Investors',
    href: '/investor-zone',
    video: '/videos/15175124_3840_2160_30fps.mp4',
  },
  {
    title: 'Business Expansion',
    description:
      'Scale your brand across new markets with a strong franchise growth strategy.',
    button: 'Explore Opportunities',
    href: '/services',
    video: '/videos/15370702_3840_2160_30fps.mp4',
  },
  {
    title: 'Franchise Consulting',
    description:
      'We help brands scale through powerful franchise consulting and growth strategies.',
    button: 'Start Your Franchise Journey',
    href: '/services/franchise-consulting',
    video: '/videos/hero-video.mp4',
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
              preload="auto"
              className="h-full w-full object-cover"
            >
              <source src={slide.video} type="video/mp4" />
            </video>
          </motion.div>
        ))}

        {/* Dark + gold overlay to keep text readable */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(242,201,76,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(0,0,0,0.3),transparent_65%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-[#050505]" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={textContainerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-center"
            >
              <motion.p
                variants={textItemVariants}
                className="text-[11px] font-semibold tracking-[0.35em] text-[#F2C94C] sm:text-xs"
              >
                INDIA&apos;S #1 FRANCHISE CONSULTANTS
              </motion.p>

              <motion.h1
                variants={textItemVariants}
                className="mt-5 font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-[3.25rem] lg:text-[3.6rem]"
              >
                {activeSlide.title}
              </motion.h1>

              <motion.p
                variants={textItemVariants}
                className="mt-5 text-base text-white/70 sm:text-lg"
              >
                {activeSlide.description}
              </motion.p>

              <motion.div
                variants={textItemVariants}
                className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:items-center"
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
