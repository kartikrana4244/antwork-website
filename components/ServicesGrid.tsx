'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Building2,
  Rocket,
  CalendarDays,
  RefreshCw,
  Handshake,
  BarChart3,
  ArrowRight,
} from 'lucide-react';

const services = [
  { href: '/services/franchise-consulting', Icon: Building2, title: 'Franchise Consulting', description: 'Convert your business into a scalable franchise model' },
  { href: '/services/franchise-expansion', Icon: Rocket, title: 'Franchise Expansion', description: 'Expand your franchise across cities and regions' },
  { href: '/services/exhibition-management', Icon: CalendarDays, title: 'Exhibition & Fest Management', description: 'Showcase your brand at high-impact business exhibitions' },
  { href: '/services/business-resale', Icon: RefreshCw, title: 'Business Resale', description: 'Smooth, confidential resale of running businesses' },
  { href: '/services/mergers-acquisitions', Icon: Handshake, title: 'Mergers & Acquisitions', description: 'Strategic M&A advisory with top-notch confidentiality' },
  { href: '/services/b2b-consulting', Icon: BarChart3, title: 'B2B Strategic Consulting', description: 'Result-oriented growth strategies for your business' },
];

export default function ServicesGrid() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#F8F8F8] py-16 sm:py-24"
      id="services"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-[#4F4F4F] sm:text-4xl">Our Core Services</h2>
          <p className="mt-3 text-lg text-[#4F4F4F]/80">
            End-to-end consulting solutions for your business growth
          </p>
        </motion.div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.01, boxShadow: '0 20px 40px -12px rgba(79, 79, 79, 0.18)' }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={service.href}
                  className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F2C94C]/15 text-[#4F4F4F] transition-colors group-hover:bg-[#F2C94C]/25">
                    <service.Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-semibold text-[#4F4F4F]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4F4F4F]/80">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#F2C94C] transition-transform group-hover:gap-2.5">
                    Learn More
                    <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
