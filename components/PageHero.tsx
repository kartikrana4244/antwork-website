'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

type Breadcrumb = { label: string; href?: string };

type PageHeroProps = {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  breadcrumb: Breadcrumb[];
};

const wordReveal = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const wordItem = {
  hidden: { opacity: 0, y: 35, rotateX: -30 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function PageHero({ title, subtitle, backgroundImage, breadcrumb }: PageHeroProps) {
  const words = title.split(' ');
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[65vh] items-end overflow-hidden pb-16 pt-36 sm:pb-20 lg:pb-24">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="pointer-events-none object-cover"
          sizes="100vw"
          priority
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#1A1A1A]" aria-hidden="true" />

      <motion.div style={{ opacity }} className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6 flex items-center gap-2 text-xs sm:text-sm"
          aria-label="Breadcrumb"
        >
          {breadcrumb.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-white/25">/</span>}
              {item.href ? (
                <Link href={item.href} className="text-white/50 transition-colors hover:text-[#F2C94C]">
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#F2C94C]">{item.label}</span>
              )}
            </span>
          ))}
        </motion.nav>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 h-[2px] w-14 origin-left bg-[#F2C94C]"
        />

        <motion.h1
          className="flex flex-wrap gap-x-4 gap-y-1 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
          variants={wordReveal}
          initial="hidden"
          animate="show"
          style={{ perspective: 600 }}
        >
          {words.map((word, i) => (
            <motion.span key={i} variants={wordItem}>
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-5 max-w-2xl text-base text-white/60 sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
