'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CTABanner() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20"
      aria-label="Call to action"
    >
      <Image
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920"
        alt=""
        fill
        className="pointer-events-none object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div
        className="absolute inset-0 animate-[gradientShift_6s_ease_infinite] opacity-80"
        style={{
          background: 'linear-gradient(135deg, rgba(242,201,76,0.35) 0%, rgba(224,180,41,0.2) 25%, rgba(242,201,76,0.35) 50%, rgba(212,160,23,0.2) 75%, rgba(242,201,76,0.35) 100%)',
          backgroundSize: '300% 300%',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="font-heading text-3xl font-bold text-white sm:text-4xl"
        >
          Ready to Expand Your Brand?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="mt-4 text-lg text-white/80"
        >
          Join 1600+ brands that trust AntWork for their growth journey
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-[#F2C94C] px-8 py-3.5 text-sm font-semibold text-[#0A0A0A] transition-all duration-200 hover:scale-[1.02] hover:bg-[#E0B429]"
          >
            Contact Us Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
