'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: 'AntWork Consultants provided valuable guidance and support in our business expansion journey.',
    author: 'Brand Partner',
  },
  {
    quote: 'Professional, structured and highly transparent advisory.',
    author: 'Business Owner',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#F8F8F8] py-16 sm:py-24"
      aria-label="Client testimonials"
    >
      <div className="mx-auto min-w-0 max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-heading text-3xl font-bold text-[#4F4F4F] sm:text-4xl"
        >
          What Our Clients Say
        </motion.h2>
        <div className="relative mt-12 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="min-w-0 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <Quote className="h-10 w-10 text-[#F2C94C]/80" strokeWidth={1.25} aria-hidden />
              <blockquote className="mt-4 break-words text-base font-medium leading-relaxed text-[#4F4F4F] sm:text-lg">
                {testimonials[index].quote}
              </blockquote>
              <cite className="mt-5 block not-italic text-sm font-semibold text-[#4F4F4F]/80">
                — {testimonials[index].author}
              </cite>
            </motion.div>
          </AnimatePresence>
          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-gray-200 bg-white p-2.5 text-[#4F4F4F] shadow-sm transition-all duration-300 hover:border-[#F2C94C]/50 hover:bg-[#F8F8F8]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2} aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-gray-200 bg-white p-2.5 text-[#4F4F4F] shadow-sm transition-all duration-300 hover:border-[#F2C94C]/50 hover:bg-[#F8F8F8]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={2} aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
