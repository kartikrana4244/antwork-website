'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Scale, Search, TrendingUp, Lightbulb, Handshake } from 'lucide-react';
import LeadershipCard from '@/components/LeadershipCard';
import PageBanner from '@/components/PageBanner';

const coreValues = [
  { Icon: Scale, title: 'Integrity' },
  { Icon: Search, title: 'Transparency' },
  { Icon: TrendingUp, title: 'Growth-Oriented Approach' },
  { Icon: Lightbulb, title: 'Innovation' },
  { Icon: Handshake, title: 'Long-Term Partnerships' },
];

const sectionReveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About AntWork Consultants LLP"
        subtitle="Ethical Excellence in Every Engagement"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      <motion.section
        {...sectionReveal}
        className="bg-white py-16 sm:py-24"
      >
        <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl bg-gradient-to-br from-[#F2C94C]/20 via-[#F8F8F8] to-[#4F4F4F]/10"
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
            <div className="min-w-0">
              <h2 className="font-heading text-2xl font-bold text-[#4F4F4F] sm:text-3xl">Who We Are</h2>
              <p className="mt-6 break-words text-base leading-relaxed text-[#4F4F4F]/90 sm:text-lg">
                AntWork Consultants LLP is a results-driven consulting firm that accelerates brand expansion through strategic franchise partnerships. We empower investors to find their perfect match, optimize exhibition spaces, and drive M&A activity for thriving franchises and SMEs. Our growth advisory services fuel business transformation and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        {...sectionReveal}
        className="bg-gradient-to-b from-[#F8F8F8] to-white py-16 sm:py-24"
      >
<div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl p-[1px] bg-gradient-to-br from-[#F2C94C]/30 via-white to-[#4F4F4F]/10"
            >
              <div className="min-w-0 rounded-2xl border border-white/40 bg-white/70 p-5 shadow-lg backdrop-blur-xl sm:p-8">
                <h2 className="font-heading text-xl font-bold text-[#4F4F4F] sm:text-2xl">Our Vision</h2>
                <p className="mt-4 break-words leading-relaxed text-[#4F4F4F]/90">
                  To become India&apos;s most trusted and result-driven business consulting firm, empowering brands and entrepreneurs to scale nationally and globally.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-2xl p-[1px] bg-gradient-to-br from-[#F2C94C]/30 via-white to-[#4F4F4F]/10"
            >
              <div className="min-w-0 rounded-2xl border border-white/40 bg-white/70 p-5 shadow-lg backdrop-blur-xl sm:p-8">
                <h2 className="font-heading text-xl font-bold text-[#4F4F4F] sm:text-2xl">Our Mission</h2>
                <ul className="mt-4 list-inside list-disc space-y-2 break-words text-[#4F4F4F]/90">
                  <li>Develop scalable franchise systems for emerging brands</li>
                  <li>Connect investors with profitable business opportunities</li>
                  <li>Support businesses in mergers, acquisitions, and strategic restructuring</li>
                  <li>Organize impactful business exhibitions and networking platforms</li>
                  <li>Provide result-oriented B2B growth strategies</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        {...sectionReveal}
        className="bg-white py-16 sm:py-24"
      >
        <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-2xl font-bold text-[#4F4F4F] sm:text-3xl">Core Values</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.map(({ Icon, title }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl p-[1px] bg-gradient-to-br from-[#F2C94C]/20 via-white to-[#4F4F4F]/10"
              >
                <div className="flex flex-col items-center rounded-2xl border border-white/40 bg-white/70 p-6 text-center shadow-lg backdrop-blur-xl transition-all duration-300 hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F2C94C]/15 text-[#4F4F4F]">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="mt-4 font-heading font-semibold text-[#4F4F4F]">{title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        {...sectionReveal}
        className="bg-gradient-to-b from-white to-[#F8F8F8] py-16 sm:py-24"
      >
        <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-2xl font-bold text-[#4F4F4F] sm:text-3xl">Meet Our Leaders</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <LeadershipCard
                name="Alok Tripathi"
                role="Founder & CEO"
                bio="Visionary leader driving AntWork's mission of ethical and scalable business consulting across India."
                linkedInUrl="https://www.linkedin.com/in/alok-tripathi-97718254"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <LeadershipCard
                name="Yash Sharma"
                role="Director, Exhibition"
                bio="Expert in organizing high-impact business exhibitions and connecting brands with investors."
                linkedInUrl="http://linkedin.com/in/yash-sharma-b9826021b"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
