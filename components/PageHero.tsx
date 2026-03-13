'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Breadcrumb = { label: string; href?: string };

type PageHeroProps = {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  breadcrumb: Breadcrumb[];
};

const wordReveal = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const wordItem = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function PageHero({ title, subtitle, backgroundImage, breadcrumb }: PageHeroProps) {
  const words = title.split(' ');

  return (
    <section className="relative flex min-h-[340px] items-end overflow-hidden pb-12 pt-28 sm:min-h-[400px] sm:pb-16 sm:pt-32 lg:min-h-[440px] lg:pb-20">
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="pointer-events-none object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(242,201,76,0.06)_0%,transparent_60%)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 flex items-center gap-1.5 text-xs sm:text-sm"
          aria-label="Breadcrumb"
        >
          {breadcrumb.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-[#555]">/</span>}
              {item.href ? (
                <Link href={item.href} className="text-[#A0A0A0] transition-colors hover:text-[#F2C94C]">
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#F2C94C]">{item.label}</span>
              )}
            </span>
          ))}
        </motion.nav>

        <div className="mb-1 h-0.5 w-10 bg-[#F2C94C]" />

        <motion.h1
          className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          variants={wordReveal}
          initial="hidden"
          animate="show"
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
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 max-w-2xl text-base text-[#A0A0A0] sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
