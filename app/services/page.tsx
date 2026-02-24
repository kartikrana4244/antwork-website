'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PageBanner from '@/components/PageBanner';

const services = [
  { href: '/services/franchise-consulting', title: 'Franchise Consulting', description: 'Convert your business into a scalable franchise model with structured systems and documentation.' },
  { href: '/services/franchise-expansion', title: 'Franchise Expansion', description: 'Scale your franchise across cities and regions with territory planning and investor matching.' },
  { href: '/services/exhibition-management', title: 'Exhibition Management', description: 'Showcase your brand at high-impact business exhibitions and networking events.' },
  { href: '/services/business-resale', title: 'Business Resale', description: 'Smooth, confidential resale of running businesses with end-to-end deal support.' },
  { href: '/services/mergers-acquisitions', title: 'Mergers & Acquisitions', description: 'Strategic M&A advisory with top-notch confidentiality and deal structuring.' },
  { href: '/services/b2b-consulting', title: 'B2B Strategic Consulting', description: 'Result-oriented growth strategies, market entry, and operational efficiency.' },
];

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="End-to-end consulting solutions to help your brand scale, expand, and succeed. From franchise development to M&A and exhibitions, we deliver ethical, result-driven advisory."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-b from-white to-[#F8F8F8] py-16 sm:py-24"
      >
        <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-2xl p-[1px] bg-gradient-to-br from-[#F2C94C]/40 via-white to-[#4F4F4F]/10"
              >
                <Link
                  href={service.href}
                  className="group block min-w-0 rounded-2xl border border-white/40 bg-white/70 p-5 shadow-lg backdrop-blur-xl transition-all duration-300 hover:shadow-xl sm:p-6"
                >
                  <h2 className="font-heading text-lg font-semibold text-[#4F4F4F] group-hover:text-[#F2C94C] transition-colors sm:text-xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 min-w-0 break-words text-sm text-[#4F4F4F]/80">{service.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#F2C94C] group-hover:gap-2 transition-all">
                    Learn more
                    <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
