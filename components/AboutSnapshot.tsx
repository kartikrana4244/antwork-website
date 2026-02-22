'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutSnapshot() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white py-16 sm:py-24"
      id="about"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[4/3] max-w-lg overflow-hidden rounded-2xl bg-gradient-to-br from-[#F2C94C]/20 via-[#F8F8F8] to-[#4F4F4F]/10"
            aria-hidden="true"
          >
            <div className="flex h-full w-full items-center justify-center">
              <div className="grid grid-cols-3 gap-2 p-8 opacity-60">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="aspect-square rounded-lg bg-[#4F4F4F]/10" />
                ))}
              </div>
            </div>
          </motion.div>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading text-3xl font-bold text-[#4F4F4F] sm:text-4xl"
            >
              Who We Are
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mt-6 text-lg leading-relaxed text-[#4F4F4F]/90"
            >
              AntWork Consultants LLP is a results-driven consulting firm that accelerates brand expansion through strategic franchise partnerships. We empower investors to find their perfect match, optimize exhibition spaces, and drive M&A activity for thriving franchises and SMEs. Our growth advisory services fuel business transformation and sustainable growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.14 }}
            >
              <Link href="/about" className="btn-primary mt-8">
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
