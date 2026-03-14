'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const steps = [
  { title: 'Consultation & Requirement Analysis', description: 'We understand your goals, market position, and growth aspirations.' },
  { title: 'Research & Feasibility', description: 'In-depth market and feasibility analysis to validate opportunities.' },
  { title: 'Strategy Development', description: 'Custom roadmaps and actionable strategies aligned with your vision.' },
  { title: 'Execution & Implementation', description: 'Hands-on support to roll out plans with precision and speed.' },
  { title: 'Ongoing Support & Monitoring', description: 'Continuous monitoring and support to ensure sustained growth.' },
];

export default function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true, margin: '-20%' });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#1A1A1A] py-14 sm:py-20" id="how-we-work">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-[#F2C94C]/15 to-transparent" />
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920"
          alt=""
          fill
          className="pointer-events-none object-cover opacity-20"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/90 via-[#1A1A1A]/70 to-[#1A1A1A]/90" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">Our Process</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            How We Work
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-4 h-[2px] w-14 origin-center bg-[#F2C94C]"
          />
        </motion.div>

        <div className="relative mt-20">
          <div className="hidden lg:block" ref={lineRef}>
            <div className="relative flex justify-between">
              <div className="absolute left-0 right-0 top-8 h-px bg-white/8" aria-hidden="true" />
              <motion.div
                className="absolute left-0 top-8 h-px origin-left bg-[#F2C94C]"
                initial={{ scaleX: 0 }}
                animate={lineInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: '100%' }}
                aria-hidden="true"
              />
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const }}
                  className="relative z-10 flex flex-1 flex-col items-center px-3"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#F2C94C] bg-[#1A1A1A] text-lg font-bold text-[#F2C94C] shadow-[0_0_20px_rgba(242,201,76,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(242,201,76,0.35)]">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-6 text-center font-heading text-sm font-semibold text-white lg:text-base">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-center text-xs leading-relaxed text-white/45 lg:text-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:hidden">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as const }}
                className="flex gap-5 rounded-xl border border-white/8 bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F2C94C]/20 hover:bg-white/[0.05] hover:shadow-[0_8px_25px_rgba(0,0,0,0.3)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#F2C94C] bg-[#1A1A1A] text-sm font-bold text-[#F2C94C]">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/45">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
