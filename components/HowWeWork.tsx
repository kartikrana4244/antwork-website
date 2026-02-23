'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  { title: 'Consultation & Requirement Analysis', description: 'We understand your goals, market position, and growth aspirations.' },
  { title: 'Research & Feasibility', description: 'In-depth market and feasibility analysis to validate opportunities.' },
  { title: 'Strategy Development', description: 'Custom roadmaps and actionable strategies aligned with your vision.' },
  { title: 'Execution & Implementation', description: 'Hands-on support to roll out plans with precision and speed.' },
  { title: 'Ongoing Support & Monitoring', description: 'Continuous monitoring and support to ensure sustained growth.' },
];

export default function HowWeWork() {
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true, margin: '-20%' });

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white py-16 sm:py-24"
      id="how-we-work"
    >
      <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-[#4F4F4F] sm:text-4xl">How We Work</h2>
        </motion.div>
        <div className="relative mt-16">
          {/* Desktop: horizontal timeline with animated connecting line */}
          <div className="hidden lg:block" ref={lineRef}>
            <div className="relative flex justify-between">
              {/* Background line (static) */}
              <div className="absolute left-0 right-0 top-8 h-0.5 bg-gray-200" aria-hidden="true" />
              {/* Animated yellow line that draws on scroll */}
              <motion.div
                className="absolute left-0 top-8 h-0.5 origin-left bg-[#F2C94C]"
                initial={{ scaleX: 0 }}
                animate={lineInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: '100%' }}
                aria-hidden="true"
              />
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10 flex flex-1 flex-col items-center px-2"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#F2C94C] bg-white text-lg font-bold text-[#4F4F4F] shadow-sm">
                    {i + 1}
                  </div>
                  <h3 className="mt-5 text-center font-heading text-sm font-semibold text-[#4F4F4F] lg:text-base">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-center text-xs leading-relaxed text-[#4F4F4F]/80 lg:text-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Mobile: vertical list with numbered steps */}
          <div className="space-y-8 lg:hidden">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#F2C94C] bg-white text-base font-bold text-[#4F4F4F]">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-[#4F4F4F]">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#4F4F4F]/80">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
