'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
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
  { href: '/services/franchise-consulting', Icon: Building2, title: 'Franchise Consulting', description: 'Convert your business into a scalable franchise model', img: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&q=75' },
  { href: '/services/franchise-expansion', Icon: Rocket, title: 'Franchise Expansion', description: 'Expand your franchise across cities and regions', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=75' },
  { href: '/services/exhibition-management', Icon: CalendarDays, title: 'Exhibition Management', description: 'Showcase your brand at high-impact business exhibitions', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=75' },
  { href: '/services/business-resale', Icon: RefreshCw, title: 'Business Resale', description: 'Smooth, confidential resale of running businesses', img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=75' },
  { href: '/services/mergers-acquisitions', Icon: Handshake, title: 'Mergers & Acquisitions', description: 'Strategic M&A advisory with top-notch confidentiality', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=75' },
  { href: '/services/b2b-consulting', Icon: BarChart3, title: 'B2B Strategic Consulting', description: 'Result-oriented growth strategies for your business', img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=75' },
];

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function ServicesGrid() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32" id="services">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/services-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-28 bg-gradient-to-b from-black/80 to-transparent" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">What We Offer</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-4 h-[2px] w-14 origin-center bg-[#F2C94C]"
          />
          <p className="mt-5 text-base text-white/70 sm:text-lg">
            End-to-end consulting solutions for your business growth
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map((service) => (
            <motion.div key={service.href} variants={cardVariant}>
              <Link
                href={service.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8e8e8] bg-white transition-all duration-500 hover:-translate-y-3 hover:border-[#F2C94C]/50 hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.img}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#F2C94C] shadow-lg">
                    <service.Icon className="h-5 w-5 text-[#1A1A1A]" strokeWidth={2} aria-hidden />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-bold text-[#1A1A1A] sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#666]">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A1A1A] transition-all duration-300 group-hover:gap-3 group-hover:text-[#F2C94C]">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} aria-hidden />
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
