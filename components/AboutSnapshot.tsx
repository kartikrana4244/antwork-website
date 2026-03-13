'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const highlights = [
  '1600+ brands in pipeline across India',
  'Presence in 32+ cities nationwide',
  '2500+ deals facilitated',
  'End-to-end franchise & growth advisory',
];

export default function AboutSnapshot() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-20 sm:py-28" id="about">
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(242,201,76,0.04)_0%,transparent_70%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="relative overflow-hidden rounded-2xl shadow-[0_0_40px_rgba(242,201,76,0.08)]"
          >
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[rgba(242,201,76,0.25)]" />
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="Business consulting meeting"
              width={800}
              height={600}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#F2C94C]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F2C94C]">
                About Us
              </span>
            </div>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-[48px] lg:leading-[1.15]">
              Who We Are
            </h2>
            <p className="text-base leading-relaxed text-[#A0A0A0] sm:text-lg">
              AntWork Consultants LLP is a results-driven consulting firm that accelerates brand
              expansion through strategic franchise partnerships. We empower investors to find their
              perfect match, optimize exhibition spaces, and drive M&A activity for thriving franchises
              and SMEs. Our growth advisory services fuel business transformation and sustainable growth.
            </p>

            <div className="rounded-xl border border-[rgba(242,201,76,0.15)] bg-[rgba(255,255,255,0.03)] p-6 backdrop-blur-sm">
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#F2C94C]">
                Key Highlights
              </h3>
              <ul className="mt-4 space-y-3">
                {highlights.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F2C94C] text-xs font-bold text-[#0A0A0A]">
                      ✓
                    </span>
                    <span className="text-sm text-[#A0A0A0]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-md bg-[#F2C94C] px-6 py-3 text-sm font-semibold text-[#0A0A0A] transition-all duration-200 hover:scale-[1.02] hover:bg-[#E0B429]"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
