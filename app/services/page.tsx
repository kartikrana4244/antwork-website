'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';

const services = [
  { href: '/services/franchise-consulting', title: 'Franchise Consulting', description: 'Convert your business into a scalable franchise model with structured systems and documentation.', image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&q=75' },
  { href: '/services/franchise-expansion', title: 'Franchise Expansion', description: 'Scale your franchise across cities and regions with territory planning and investor matching.', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=75' },
  { href: '/services/exhibition-management', title: 'Exhibition Management', description: 'Showcase your brand at high-impact business exhibitions and networking events.', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=75' },
  { href: '/services/business-resale', title: 'Business Resale', description: 'Smooth, confidential resale of running businesses with end-to-end deal support.', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=75' },
  { href: '/services/mergers-acquisitions', title: 'Mergers & Acquisitions', description: 'Strategic M&A advisory with top-notch confidentiality and deal structuring.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=75' },
  { href: '/services/b2b-consulting', title: 'B2B Strategic Consulting', description: 'Result-oriented growth strategies, market entry, and operational efficiency.', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=75' },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="End-to-end consulting solutions to help your brand scale, expand, and succeed."
        backgroundImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      <section className="relative overflow-hidden bg-[#FAFAFA] py-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_80%,rgba(242,201,76,0.05),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
              >
                <Link
                  href={service.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8e8e8] bg-white transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] hover:border-[#F2C94C]/50 hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)]"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image src={service.image} alt="" fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-heading text-lg font-bold text-[#1A1A1A] transition-colors group-hover:text-[#F2C94C] sm:text-xl">
                      {service.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[#666]">{service.description}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A1A1A] transition-all duration-300 group-hover:gap-3 group-hover:text-[#F2C94C]">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} aria-hidden />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
