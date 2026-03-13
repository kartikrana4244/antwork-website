'use client';

import Link from 'next/link';
import Image from 'next/image';
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
  { href: '/services/franchise-consulting', Icon: Building2, title: 'Franchise Consulting', description: 'Convert your business into a scalable franchise model', img: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&q=60' },
  { href: '/services/franchise-expansion', Icon: Rocket, title: 'Franchise Expansion', description: 'Expand your franchise across cities and regions', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=60' },
  { href: '/services/exhibition-management', Icon: CalendarDays, title: 'Exhibition Management', description: 'Showcase your brand at high-impact business exhibitions', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=60' },
  { href: '/services/business-resale', Icon: RefreshCw, title: 'Business Resale', description: 'Smooth, confidential resale of running businesses', img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=60' },
  { href: '/services/mergers-acquisitions', Icon: Handshake, title: 'Mergers & Acquisitions', description: 'Strategic M&A advisory with top-notch confidentiality', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=60' },
  { href: '/services/b2b-consulting', Icon: BarChart3, title: 'B2B Strategic Consulting', description: 'Result-oriented growth strategies for your business', img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&q=60' },
];

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-20 sm:py-28" id="services">
      <Image
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920"
        alt=""
        fill
        className="pointer-events-none object-cover opacity-[0.04]"
        sizes="100vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(242,201,76,0.05)_0%,transparent_70%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(242,201,76,0.04)_0%,transparent_70%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-[48px]">
            Our Services
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-[#F2C94C]" aria-hidden="true" />
          <p className="mt-4 text-base text-[#A0A0A0] sm:text-lg">
            End-to-end consulting solutions for your business growth
          </p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map((service) => (
            <motion.div key={service.href} variants={cardVariant}>
              <Link
                href={service.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-[rgba(242,201,76,0.15)] bg-[rgba(255,255,255,0.03)] p-8 backdrop-blur-sm transition-all duration-300 hover:border-[rgba(242,201,76,0.5)] hover:shadow-[0_0_30px_rgba(242,201,76,0.1)]"
              >
                <Image
                  src={service.img}
                  alt=""
                  fill
                  className="pointer-events-none absolute inset-0 object-cover opacity-[0.07] transition-opacity duration-500 group-hover:opacity-[0.12]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgba(242,201,76,0.1)] text-[#F2C94C] transition-colors duration-300 group-hover:bg-[rgba(242,201,76,0.2)]">
                    <service.Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-white sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#A0A0A0]">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#F2C94C] transition-all duration-200 group-hover:gap-2.5">
                    Learn More
                    <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
