'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimationControls, useScroll, useTransform } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'AntWork Consultants provided valuable guidance and support in our business expansion journey.',
    author: 'Brand Partner',
    initials: 'BP',
  },
  {
    quote: 'Professional, structured and highly transparent advisory.',
    author: 'Business Owner',
    initials: 'BO',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.03, 1, 1.03]);
  const items = [...testimonials, ...testimonials];

  const [paused, setPaused] = useState(false);
  const topControls = useAnimationControls();
  const bottomControls = useAnimationControls();

  useEffect(() => {
    if (paused) {
      topControls.stop();
      bottomControls.stop();
      return;
    }

    topControls.start({
      x: ['0%', '-50%'],
      transition: { duration: 25, ease: 'linear', repeat: Infinity },
    });
    bottomControls.start({
      x: ['-50%', '0%'],
      transition: { duration: 25, ease: 'linear', repeat: Infinity },
    });
  }, [paused, topControls, bottomControls]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#1A1A1A] py-14 sm:py-20" aria-label="Client testimonials">
      <motion.div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: bgY,
          scale: bgScale,
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_110%,rgba(242,201,76,0.06),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-transparent to-[#1A1A1A]" />

      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">Testimonials</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
            className="mx-auto mt-4 h-[2px] w-14 origin-center bg-[#F2C94C]"
          />
        </motion.div>

        <div
          className="relative mt-12 -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#1A1A1A] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#1A1A1A] to-transparent" />

          <div className="space-y-6">
            {/* Top row: RIGHT -> LEFT */}
            <motion.div
              className="flex gap-6 w-max transform-gpu"
              aria-hidden="true"
              style={{ willChange: 'transform' }}
              initial={{ x: '0%' }}
              animate={topControls}
            >
              {items.map((t, idx) => (
                <div
                  key={`top-${t.author}-${idx}`}
                  className="min-w-[280px] md:min-w-[320px] rounded-2xl border border-white/8 bg-white/[0.04] p-5 backdrop-blur-sm shadow-sm transition-transform duration-300 hover:scale-105 sm:p-6"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F2C94C] shadow-[0_0_30px_rgba(242,201,76,0.25)]">
                      <span className="text-xl font-bold text-[#1A1A1A]">{t.initials}</span>
                    </div>
                    <Quote className="mt-6 h-8 w-8 text-[#F2C94C]/30" strokeWidth={1.5} aria-hidden />
                    <blockquote className="mt-4 max-w-xl text-lg font-medium leading-relaxed text-white/80 sm:text-xl">
                      {t.quote}
                    </blockquote>
                    <cite className="mt-5 block text-sm font-semibold not-italic text-white/40">
                      — {t.author}
                    </cite>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Bottom row: LEFT -> RIGHT */}
            <motion.div
              className="flex gap-6 w-max transform-gpu"
              aria-hidden="true"
              style={{ willChange: 'transform' }}
              initial={{ x: '-50%' }}
              animate={bottomControls}
            >
              {items.map((t, idx) => (
                <div
                  key={`bottom-${t.author}-${idx}`}
                  className="min-w-[280px] md:min-w-[320px] rounded-2xl border border-white/8 bg-white/[0.04] p-5 backdrop-blur-sm shadow-sm transition-transform duration-300 hover:scale-105 sm:p-6"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F2C94C] shadow-[0_0_30px_rgba(242,201,76,0.25)]">
                      <span className="text-xl font-bold text-[#1A1A1A]">{t.initials}</span>
                    </div>
                    <Quote className="mt-6 h-8 w-8 text-[#F2C94C]/30" strokeWidth={1.5} aria-hidden />
                    <blockquote className="mt-4 max-w-xl text-lg font-medium leading-relaxed text-white/80 sm:text-xl">
                      {t.quote}
                    </blockquote>
                    <cite className="mt-5 block text-sm font-semibold not-italic text-white/40">
                      — {t.author}
                    </cite>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
