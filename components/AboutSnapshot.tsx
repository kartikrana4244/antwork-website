'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const highlights = [
  '1600+ brands in pipeline across India',
  'Presence in 32+ cities nationwide',
  '2500+ deals facilitated',
  'End-to-end franchise & growth advisory',
];

export default function AboutSnapshot() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#1A1A1A] py-14 sm:py-20" id="about">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/about-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-shadow duration-300 hover:shadow-[0_24px_56px_rgba(0,0,0,0.35)]"
          >
            <motion.div className="absolute -inset-4" style={{ y: imageY }}>
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200"
                alt="Business consulting meeting"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/10 bg-black/50 px-5 py-4 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F2C94C]">Since 2018</p>
              <p className="mt-1 text-sm text-white/70">Driving growth for brands across India</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="space-y-7"
          >
            <div className="flex items-center gap-3">
              <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="h-px w-8 origin-left bg-[#F2C94C]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">
                About Us
              </span>
            </div>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Who We Are
            </h2>
            <p className="text-base leading-relaxed text-white/55 sm:text-lg">
              AntWork Consultants LLP is a results-driven consulting firm that accelerates brand
              expansion through strategic franchise partnerships. We empower investors to find their
              perfect match, optimize exhibition spaces, and drive M&A activity for thriving franchises
              and SMEs. Our growth advisory services fuel business transformation and sustainable growth.
            </p>

            <div className="space-y-3 pt-2">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F2C94C] text-xs font-bold text-[#1A1A1A]">
                    ✓
                  </span>
                  <span className="text-sm text-white/55">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2"
            >
              <Link
                href="/about"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-[#F2C94C] px-7 py-3.5 text-sm font-semibold text-[#1A1A1A] shadow-[0_2px_8px_rgba(242,201,76,0.15)] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_14px_36px_rgba(242,201,76,0.4),0_0_0_1px_rgba(242,201,76,0.2)]"
              >
                <span className="relative z-10">Learn More About Us</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-black/80" aria-hidden="true" />
    </section>
  );
}
