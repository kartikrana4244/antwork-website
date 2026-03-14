'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Scale, Search, TrendingUp, Lightbulb, Handshake } from 'lucide-react';
import LeadershipCard from '@/components/LeadershipCard';
import PageHero from '@/components/PageHero';

const coreValues = [
  { Icon: Scale, title: 'Integrity' },
  { Icon: Search, title: 'Transparency' },
  { Icon: TrendingUp, title: 'Growth-Oriented Approach' },
  { Icon: Lightbulb, title: 'Innovation' },
  { Icon: Handshake, title: 'Long-Term Partnerships' },
];

const sectionReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export default function AboutPage() {
  const imgRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <>
      <PageHero
        title="About AntWork Consultants LLP"
        subtitle="Ethical Excellence in Every Engagement"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      <motion.section ref={imgRef} {...sectionReveal} className="relative overflow-hidden bg-white py-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_20%,rgba(242,201,76,0.05),transparent)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F2C94C]/20 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }} className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]">
              <motion.div className="absolute -inset-4" style={{ y: imgY }}>
                <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800" alt="AntWork Consultants team in a business meeting" fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 50vw" />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">Who We Are</p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-[#1A1A1A] sm:text-3xl">Our Story</h2>
              <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-3 h-[2px] w-12 origin-left bg-[#F2C94C]" />
              <p className="mt-6 text-base leading-relaxed text-[#555] sm:text-lg">
                AntWork Consultants LLP is a results-driven consulting firm that accelerates brand expansion through strategic franchise partnerships. We empower investors to find their perfect match, optimize exhibition spaces, and drive M&A activity for thriving franchises and SMEs. Our growth advisory services fuel business transformation and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="relative overflow-hidden bg-[#1A1A1A] py-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_80%,rgba(242,201,76,0.04),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-2xl border border-white/8 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F2C94C]/20 hover:bg-white/[0.06] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">Vision</p>
              <h2 className="mt-2 font-heading text-xl font-bold text-white sm:text-2xl">Our Vision</h2>
              <div className="mt-3 h-[2px] w-8 bg-[#F2C94C]" />
              <p className="mt-5 leading-relaxed text-white/55">
                To become India&apos;s most trusted and result-driven business consulting firm, empowering brands and entrepreneurs to scale nationally and globally.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="rounded-2xl border border-white/8 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F2C94C]/20 hover:bg-white/[0.06] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">Mission</p>
              <h2 className="mt-2 font-heading text-xl font-bold text-white sm:text-2xl">Our Mission</h2>
              <div className="mt-3 h-[2px] w-8 bg-[#F2C94C]" />
              <ul className="mt-5 space-y-3 text-white/55">
                <li className="flex gap-2"><span className="mt-1 text-[#F2C94C]">•</span>Develop scalable franchise systems for emerging brands</li>
                <li className="flex gap-2"><span className="mt-1 text-[#F2C94C]">•</span>Connect investors with profitable business opportunities</li>
                <li className="flex gap-2"><span className="mt-1 text-[#F2C94C]">•</span>Support businesses in mergers, acquisitions, and strategic restructuring</li>
                <li className="flex gap-2"><span className="mt-1 text-[#F2C94C]">•</span>Organize impactful business exhibitions and networking platforms</li>
                <li className="flex gap-2"><span className="mt-1 text-[#F2C94C]">•</span>Provide result-oriented B2B growth strategies</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="relative overflow-hidden bg-[#FAFAFA] py-14 sm:py-20">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">Principles</p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-[#1A1A1A] sm:text-3xl">Core Values</h2>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="mx-auto mt-3 h-[2px] w-12 origin-center bg-[#F2C94C]" />
          </div>
          <div className="mt-14 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-5">
            {coreValues.map(({ Icon, title }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex flex-col items-center rounded-2xl border border-[#e8e8e8] bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-3 hover:scale-[1.03] hover:border-[#F2C94C]/50 hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)]"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-[#1A1A1A] text-[#F2C94C]">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-[#1A1A1A]">{title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="relative overflow-hidden bg-[#1A1A1A] py-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(242,201,76,0.04),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">Leadership</p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-white sm:text-3xl">Meet Our Leaders</h2>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="mx-auto mt-3 h-[2px] w-12 origin-center bg-[#F2C94C]" />
          </div>
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <LeadershipCard name="Alok Tripathi" role="Founder & CEO" bio="Visionary leader driving AntWork's mission of ethical and scalable business consulting across India." linkedInUrl="https://www.linkedin.com/in/alok-tripathi-97718254" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <LeadershipCard name="Yash Sharma" role="Director, Exhibition" bio="Expert in organizing high-impact business exhibitions and connecting brands with investors." linkedInUrl="http://linkedin.com/in/yash-sharma-b9826021b" />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
