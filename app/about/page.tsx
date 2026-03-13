'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Scale, Search, TrendingUp, Lightbulb, Handshake } from 'lucide-react';
import LeadershipCard from '@/components/LeadershipCard';
import PageHero from '@/components/PageHero';
import GoldDivider from '@/components/GoldDivider';

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
    <div className="bg-[#0A0A0A] text-white">
      <PageHero
        title="About AntWork Consultants LLP"
        subtitle="Ethical Excellence in Every Engagement"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      <GoldDivider />

      <motion.section
        {...sectionReveal}
        className="relative overflow-hidden bg-[#0A0A0A] py-16 sm:py-24"
      >
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920"
          alt=""
          fill
          className="pointer-events-none object-cover opacity-[0.03]"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" aria-hidden="true" />
        <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(242,201,76,0.05)_0%,transparent_70%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
                alt="AntWork Consultants team in a business meeting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[rgba(242,201,76,0.2)]" />
              <div className="absolute inset-0 shadow-[0_0_40px_rgba(242,201,76,0.08)]" />
            </motion.div>
            <div>
              <div className="h-0.5 w-10 bg-[#F2C94C]" />
              <h2 className="mt-4 font-heading text-2xl font-bold text-white sm:text-3xl">Who We Are</h2>
              <p className="mt-6 text-base leading-relaxed text-[#A0A0A0] sm:text-lg">
                AntWork Consultants LLP is a results-driven consulting firm that accelerates brand expansion through strategic franchise partnerships. We empower investors to find their perfect match, optimize exhibition spaces, and drive M&A activity for thriving franchises and SMEs. Our growth advisory services fuel business transformation and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <GoldDivider />

      <motion.section
        {...sectionReveal}
        className="relative overflow-hidden bg-[#111111] py-16 sm:py-24"
      >
        <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(242,201,76,0.04)_0%,transparent_70%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute left-0 top-0 h-[350px] w-[350px] bg-[radial-gradient(circle,rgba(242,201,76,0.03)_0%,transparent_70%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-[rgba(242,201,76,0.12)] bg-[rgba(255,255,255,0.02)] p-5 backdrop-blur-sm transition-all duration-300 hover:border-[rgba(242,201,76,0.3)] sm:p-8"
            >
              <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">Our Vision</h2>
              <div className="mt-2 h-0.5 w-8 bg-[#F2C94C]" />
              <p className="mt-4 leading-relaxed text-[#A0A0A0]">
                To become India&apos;s most trusted and result-driven business consulting firm, empowering brands and entrepreneurs to scale nationally and globally.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-2xl border border-[rgba(242,201,76,0.12)] bg-[rgba(255,255,255,0.02)] p-5 backdrop-blur-sm transition-all duration-300 hover:border-[rgba(242,201,76,0.3)] sm:p-8"
            >
              <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">Our Mission</h2>
              <div className="mt-2 h-0.5 w-8 bg-[#F2C94C]" />
              <ul className="mt-4 space-y-2 text-[#A0A0A0]">
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

      <GoldDivider />

      <motion.section
        {...sectionReveal}
        className="relative overflow-hidden bg-[#0A0A0A] py-16 sm:py-24"
      >
        <div className="pointer-events-none absolute left-0 bottom-0 h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(242,201,76,0.04)_0%,transparent_70%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute right-0 top-0 h-[350px] w-[350px] bg-[radial-gradient(circle,rgba(242,201,76,0.03)_0%,transparent_70%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-2xl font-bold text-white sm:text-3xl">Core Values</h2>
          <div className="mx-auto mt-2 h-0.5 w-10 bg-[#F2C94C]" />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
            {coreValues.map(({ Icon, title }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex flex-col items-center rounded-2xl border border-[rgba(242,201,76,0.12)] bg-[rgba(255,255,255,0.02)] p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-[rgba(242,201,76,0.4)] hover:shadow-[0_0_20px_rgba(242,201,76,0.06)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgba(242,201,76,0.1)] text-[#F2C94C]">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-white">{title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <GoldDivider />

      <motion.section
        {...sectionReveal}
        className="relative overflow-hidden bg-[#111111] py-16 sm:py-24"
      >
        <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(242,201,76,0.04)_0%,transparent_70%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-2xl font-bold text-white sm:text-3xl">Meet Our Leaders</h2>
          <div className="mx-auto mt-2 h-0.5 w-10 bg-[#F2C94C]" />
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
    </div>
  );
}
