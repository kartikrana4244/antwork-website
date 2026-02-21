'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTABanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#4F4F4F] py-16 sm:py-20"
      aria-label="Call to action"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-0 h-1 w-24 mx-auto bg-[#F2C94C]" aria-hidden="true" />
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl font-bold text-white sm:text-4xl"
          >
            Ready to Scale Your Business?
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-lg text-white/90"
        >
          Join 1600+ brands that trust AntWork for their growth journey
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <Link href="/contact" className="btn-primary mt-8">
            Schedule a Strategy Call
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
