'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const wordReveal = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } },
};

const wordItem = {
  hidden: { opacity: 0, y: 50, rotateX: -40 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const grainRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.7, 0.9]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

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
      const w = (canvas.width = canvas.offsetWidth / 2);
      const h = (canvas.height = canvas.offsetHeight / 2);
      const imgData = ctx.createImageData(w, h);
      const d = imgData.data;
      for (let i = 0; i < d.length; i += 4) {
        const v = Math.random() * 255;
        d[i] = v;
        d[i + 1] = v;
        d[i + 2] = v;
        d[i + 3] = 14;
      }
      ctx.putImageData(imgData, 0, 0);
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  const headingWords = ['Ethical', 'Excellence', 'in', 'Every', 'Engagement'];

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-[#1A1A1A]">
      <motion.div
        className="absolute inset-0"
        style={{ y: videoY, scale: videoScale }}
      >
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
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"
        style={{ opacity: overlayOpacity }}
        aria-hidden="true"
      />
      <canvas
        ref={grainRef}
        className="pointer-events-none absolute inset-0 h-full w-full mix-blend-overlay"
        style={{ imageRendering: 'pixelated' }}
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 flex h-full items-center justify-center px-4"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeUp}
            className="text-[11px] font-semibold tracking-[0.35em] text-[#F2C94C] sm:text-xs"
          >
            INDIA&apos;S #1 FRANCHISE CONSULTANTS
          </motion.p>

          <motion.h1
            className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-1 font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[88px]"
            variants={wordReveal}
            initial="hidden"
            animate="show"
            style={{ perspective: 800 }}
          >
            {headingWords.map((word, i) => (
              <motion.span key={i} variants={wordItem} className="inline-block">
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 1 }}
            className="mx-auto mt-6 max-w-2xl text-base text-white/60 sm:text-lg md:text-xl"
          >
            Helping brands expand through franchise routes across 32+ cities in India
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 1.2 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/services/franchise-expansion"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#F2C94C] px-9 py-4 text-sm font-semibold text-[#1A1A1A] shadow-[0_2px_8px_rgba(242,201,76,0.15)] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_16px_40px_rgba(242,201,76,0.4),0_0_0_1px_rgba(242,201,76,0.2)]"
            >
              <span className="relative z-10">Expand My Brand</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            </Link>
            <Link
              href="/investor-zone"
              className="inline-flex items-center justify-center rounded-md border border-white/25 px-9 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-[3px] hover:border-white/50 hover:bg-white/10 hover:shadow-[0_12px_30px_rgba(255,255,255,0.06),0_0_0_1px_rgba(255,255,255,0.1)]"
            >
              Find Franchise
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        style={{ opacity: scrollIndicatorOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">Scroll</span>
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
            <motion.div
              className="h-2 w-1 rounded-full bg-[#F2C94C]"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
