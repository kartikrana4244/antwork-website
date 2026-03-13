'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import GoldDivider from '@/components/GoldDivider';

const services = [
  {
    href: '/services/franchise-consulting',
    title: 'Franchise Consulting',
    description: 'Convert your business into a scalable franchise model with structured systems and documentation.',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400',
  },
  {
    href: '/services/franchise-expansion',
    title: 'Franchise Expansion',
    description: 'Scale your franchise across cities and regions with territory planning and investor matching.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400',
  },
  {
    href: '/services/exhibition-management',
    title: 'Exhibition Management',
    description: 'Showcase your brand at high-impact business exhibitions and networking events.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400',
  },
  {
    href: '/services/business-resale',
    title: 'Business Resale',
    description: 'Smooth, confidential resale of running businesses with end-to-end deal support.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400',
  },
  {
    href: '/services/mergers-acquisitions',
    title: 'Mergers & Acquisitions',
    description: 'Strategic M&A advisory with top-notch confidentiality and deal structuring.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400',
  },
  {
    href: '/services/b2b-consulting',
    title: 'B2B Strategic Consulting',
    description: 'Result-oriented growth strategies, market entry, and operational efficiency.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      <PageHero
        title="Our Services"
        subtitle="End-to-end consulting solutions to help your brand scale, expand, and succeed. From franchise development to M&A and exhibitions, we deliver ethical, result-driven advisory."
        backgroundImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      <GoldDivider />

      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
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
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(242,201,76,0.05)_0%,transparent_70%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(242,201,76,0.04)_0%,transparent_70%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Link
                  href={service.href}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-[rgba(242,201,76,0.12)] bg-[rgba(255,255,255,0.02)] p-5 backdrop-blur-sm transition-all duration-300 hover:border-[rgba(242,201,76,0.4)] hover:shadow-[0_0_30px_rgba(242,201,76,0.08)] sm:p-6"
                >
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    className="pointer-events-none object-cover opacity-[0.06] transition-opacity duration-300 group-hover:opacity-[0.12]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="relative">
                    <h2 className="font-heading text-lg font-semibold text-white transition-colors group-hover:text-[#F2C94C] sm:text-xl">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-[#A0A0A0]">{service.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#F2C94C] transition-all group-hover:gap-2">
                      Learn more
                      <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
