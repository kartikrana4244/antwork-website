'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const current = testimonials[index];

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-20 sm:py-28" aria-label="Client testimonials">
      <div className="pointer-events-none absolute left-0 bottom-0 h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(242,201,76,0.04)_0%,transparent_70%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="text-center font-heading text-3xl font-bold text-white sm:text-4xl"
        >
          What Our Clients Say
        </motion.h2>
        <div className="mx-auto mt-3 h-0.5 w-12 bg-[#F2C94C]" aria-hidden="true" />

        <div className="relative mt-12 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="rounded-xl border border-[rgba(242,201,76,0.15)] bg-[rgba(255,255,255,0.03)] p-8 backdrop-blur-sm sm:p-10"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#F2C94C] bg-[rgba(242,201,76,0.1)]">
                  <span className="text-lg font-bold text-[#F2C94C]">{current.initials}</span>
                </div>
                <div>
                  <svg
                    className="mb-3 h-8 w-8 text-[#F2C94C]/50"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                  <blockquote className="text-base font-medium leading-relaxed text-white/90 sm:text-lg">
                    {current.quote}
                  </blockquote>
                  <cite className="mt-4 block text-sm font-semibold not-italic text-[#A0A0A0]">
                    — {current.author}
                  </cite>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(242,201,76,0.2)] bg-[rgba(255,255,255,0.03)] text-[#A0A0A0] transition-colors hover:border-[#F2C94C] hover:text-[#F2C94C]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2} aria-hidden />
            </button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-6 bg-[#F2C94C]' : 'bg-[rgba(242,201,76,0.3)]'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(242,201,76,0.2)] bg-[rgba(255,255,255,0.03)] text-[#A0A0A0] transition-colors hover:border-[#F2C94C] hover:text-[#F2C94C]"
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
