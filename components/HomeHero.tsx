'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const grainRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let raf: number;
    const draw = () => {
      const w = (canvas.width = canvas.offsetWidth);
      const h = (canvas.height = canvas.offsetHeight);
      const imgData = ctx.createImageData(w, h);
      const d = imgData.data;
      for (let i = 0; i < d.length; i += 4) {
        const v = Math.random() * 255;
        d[i] = v;
        d[i + 1] = v;
        d[i + 2] = v;
        d[i + 3] = 18;
      }
      ctx.putImageData(imgData, 0, 0);
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0A0A0A]">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
      <canvas
        ref={grainRef}
        className="pointer-events-none absolute inset-0 h-full w-full mix-blend-overlay"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={childVariants}
            className="text-[11px] font-semibold tracking-[0.3em] text-[#F2C94C] sm:text-xs"
          >
            INDIA&apos;S #1 FRANCHISE CONSULTANTS
          </motion.p>
          <motion.h1
            variants={childVariants}
            className="mt-4 font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[80px]"
          >
            Ethical Excellence
          </motion.h1>
          <motion.p
            variants={childVariants}
            className="mt-5 text-base text-[#A0A0A0] sm:text-lg md:text-xl"
          >
            Helping brands expand through franchise routes across 32+ cities in India
          </motion.p>

          <motion.div
            variants={childVariants}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/services/franchise-expansion"
              className="inline-flex items-center justify-center rounded-md bg-[#F2C94C] px-8 py-3.5 text-sm font-semibold text-[#0A0A0A] transition-all duration-200 hover:scale-[1.02] hover:bg-[#E0B429]"
            >
              Expand My Brand
            </Link>
            <Link
              href="/investor-zone"
              className="inline-flex items-center justify-center rounded-md border border-[#F2C94C] px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[rgba(242,201,76,0.1)]"
            >
              Find Franchise
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-xs text-[#A0A0A0]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <span>Scroll</span>
          <span className="h-5 w-px bg-[#F2C94C]/60" />
          <svg className="h-4 w-4 text-[#F2C94C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
