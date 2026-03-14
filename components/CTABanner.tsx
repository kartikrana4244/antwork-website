'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CTABanner() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <section ref={ref} className="relative overflow-hidden py-16 sm:py-20" aria-label="Call to action">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920"
          alt=""
          fill
          className="pointer-events-none object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/75" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]"
        >
          Take the next step
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
        >
          Ready to Expand Your Brand?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-lg text-white/60"
        >
          Join 1600+ brands that trust AntWork for their growth journey
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="group relative mt-8 inline-flex items-center justify-center overflow-hidden rounded-md bg-[#F2C94C] px-10 py-4 text-sm font-semibold text-[#1A1A1A] shadow-[0_2px_8px_rgba(242,201,76,0.15)] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_16px_40px_rgba(242,201,76,0.45),0_0_0_1px_rgba(242,201,76,0.2)]"
          >
            <span className="relative z-10">Contact Us Today</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
