'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

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
  const [index, setIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.03, 1, 1.03]);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const current = testimonials[index];

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

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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

        <div className="relative mt-14 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
              className="rounded-2xl border border-white/8 bg-white/[0.04] p-8 backdrop-blur-sm sm:p-12"
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F2C94C] shadow-[0_0_30px_rgba(242,201,76,0.25)]">
                  <span className="text-xl font-bold text-[#1A1A1A]">{current.initials}</span>
                </div>
                <Quote className="mt-6 h-8 w-8 text-[#F2C94C]/30" strokeWidth={1.5} aria-hidden />
                <blockquote className="mt-4 max-w-xl text-lg font-medium leading-relaxed text-white/80 sm:text-xl">
                  {current.quote}
                </blockquote>
                <cite className="mt-5 block text-sm font-semibold not-italic text-white/40">
                  — {current.author}
                </cite>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-4">
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F2C94C] hover:text-[#F2C94C] hover:shadow-[0_0_20px_rgba(242,201,76,0.15)]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2} aria-hidden />
            </button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-400 ${
                  i === index ? 'w-8 bg-[#F2C94C] shadow-[0_0_8px_rgba(242,201,76,0.3)]' : 'w-2 bg-white/15 hover:bg-white/25'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F2C94C] hover:text-[#F2C94C] hover:shadow-[0_0_20px_rgba(242,201,76,0.15)]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={2} aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
