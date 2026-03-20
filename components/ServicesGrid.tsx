'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ServicesGrid() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.03, 1.05]);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-14 sm:py-20" id="services">
      <motion.div
        className="absolute inset-0 transform-gpu"
        style={{ y: videoY, scale: videoScale, willChange: 'transform' }}
      >
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
      </motion.div>
      <div
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.4))]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/5 backdrop-blur-[2px]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-28 bg-gradient-to-b from-black/75 to-transparent" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
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
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
            className="mx-auto mt-4 h-[2px] w-14 origin-center bg-[#F2C94C]"
          />
          <p className="mt-5 text-base text-white/70 sm:text-lg">
            End-to-end consulting solutions for your business growth
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-7 items-stretch sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map((service) => (
            <motion.div key={service.href} variants={cardVariant}>
              <div
                className="group relative transform-gpu will-change-transform rounded-2xl before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:border before:border-[#D4AF37]/40 before:opacity-0 sm:group-hover:before:opacity-100 before:transition-opacity before:duration-300"
                style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
                onMouseEnter={(e) => {
                  const fine = typeof window !== 'undefined' && window.matchMedia?.('(pointer: fine)').matches;
                  if (!fine) return;
                  const el = e.currentTarget;
                  el.style.transition = 'transform 0.3s ease-out';
                  el.style.transform = 'perspective(800px) translateY(-10px) scale(1.06) rotateX(0deg) rotateY(0deg)';
                }}
                onMouseMove={(e) => {
                  const fine = typeof window !== 'undefined' && window.matchMedia?.('(pointer: fine)').matches;
                  if (!fine) return;
                  const el = e.currentTarget;
                  const rect = el.getBoundingClientRect();
                  const px = (e.clientX - rect.left) / rect.width;
                  const py = (e.clientY - rect.top) / rect.height;
                  const rotateY = (px - 0.5) * 10; // max 5deg
                  const rotateX = (0.5 - py) * 10; // max 5deg
                  el.style.transition = 'transform 0s';
                  el.style.transform = `perspective(800px) translateY(-10px) scale(1.06) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                }}
                onMouseLeave={(e) => {
                  const fine = typeof window !== 'undefined' && window.matchMedia?.('(pointer: fine)').matches;
                  if (!fine) return;
                  const el = e.currentTarget;
                  el.style.transition = 'transform 0.35s ease-out';
                  el.style.transform = 'perspective(800px) translateY(0px) scale(1) rotateX(0deg) rotateY(0deg)';
                }}
              >
                <Link
                  href={service.href}
                  className="relative z-10 flex h-full flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/80 text-[#1A1A1A] backdrop-blur-md transition-all duration-300 sm:group-hover:border-[#D4AF37]/60 sm:group-hover:shadow-[0_20px_60px_rgba(212,175,55,0.25)]"
                >
                  {/* Light sweep */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-transform duration-500 sm:group-hover:opacity-100 sm:group-hover:translate-x-full"
                  />
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.img}
                    alt=""
                    fill
                    className="h-full w-full object-cover transition-transform duration-500 sm:group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#F2C94C] shadow-lg transition-transform duration-300 sm:group-hover:rotate-6 sm:group-hover:scale-110 sm:group-hover:shadow-[0_0_18px_rgba(212,175,55,0.35)]">
                    <service.Icon
                      className="h-5 w-5 text-[#1A1A1A] transition-transform duration-300"
                      strokeWidth={2}
                      aria-hidden
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-between flex-grow p-6">
                  <h3 className="min-h-[56px] font-heading text-lg font-bold text-[#1A1A1A] transition-colors duration-300 group-hover:text-[#1A1A1A] sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 min-h-[48px] line-clamp-2 text-sm leading-relaxed text-[#666]">
                    {service.description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A1A1A] transition-all duration-300 sm:group-hover:gap-3 sm:group-hover:text-[#D4AF37]">
                    Learn More
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 sm:group-hover:translate-x-2"
                      strokeWidth={2}
                      aria-hidden
                    />
                  </span>
                </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
