'use client';

import { useRef } from 'react';
import Image from 'next/image';
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
    <section className="relative overflow-hidden bg-[#111111] py-20 sm:py-28" id="how-we-work">
      <Image
        src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920"
        alt=""
        fill
        className="pointer-events-none object-cover opacity-[0.04]"
        sizes="100vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#111111] via-transparent to-[#111111]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(242,201,76,0.04)_0%,transparent_70%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute left-0 top-0 h-[350px] w-[350px] bg-[radial-gradient(circle,rgba(242,201,76,0.03)_0%,transparent_70%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-[48px]">
            How We Work
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-[#F2C94C]" aria-hidden="true" />
        </motion.div>

        <div className="relative mt-16">
          {/* Desktop timeline */}
          <div className="hidden lg:block" ref={lineRef}>
            <div className="relative flex justify-between">
              <div className="absolute left-0 right-0 top-8 h-px bg-[rgba(242,201,76,0.15)]" aria-hidden="true" />
              <motion.div
                className="absolute left-0 top-8 h-px origin-left bg-[#F2C94C]"
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
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] as const }}
                  className="relative z-10 flex flex-1 flex-col items-center px-2"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#F2C94C] bg-[#0A0A0A] text-lg font-bold text-[#F2C94C]">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-5 text-center font-heading text-sm font-semibold text-white lg:text-base">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-center text-xs leading-relaxed text-[#A0A0A0] lg:text-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile vertical */}
          <div className="space-y-8 lg:hidden">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] as const }}
                className="flex gap-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#F2C94C] bg-[#0A0A0A] text-sm font-bold text-[#F2C94C]">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#A0A0A0]">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
