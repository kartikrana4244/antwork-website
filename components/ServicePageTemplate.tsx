'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PageHero from '@/components/PageHero';

type FAQItem = { question: string; answer: string };

type ServicePageTemplateProps = {
  title: string;
  heroTitle: string;
  heroSubtitle?: string;
  heroImage?: string;
  overview: React.ReactNode;
  processSteps?: string[];
  servicesList?: string[];
  focusAreas?: string[];
  whyChooseUs?: string[];
  faqs?: FAQItem[];
  ctaTitle: string;
  ctaHref?: string;
  highlight?: string;
};

const sectionReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export default function ServicePageTemplate({
  title,
  heroTitle,
  heroSubtitle,
  heroImage,
  overview,
  processSteps,
  servicesList,
  focusAreas,
  whyChooseUs,
  faqs,
  ctaTitle,
  ctaHref = '/contact',
  highlight,
}: ServicePageTemplateProps) {
  const list = processSteps ?? servicesList ?? focusAreas ?? [];
  const ctaRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ctaRef, offset: ['start end', 'end start'] });
  const ctaBgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);

  return (
    <>
      <PageHero
        title={heroTitle}
        subtitle={heroSubtitle}
        backgroundImage={heroImage || 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920'}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: title },
        ]}
      />

      {highlight && (
        <div className="bg-[#1A1A1A] py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="inline-block rounded-sm bg-[#F2C94C] px-4 py-2 text-sm font-semibold text-[#1A1A1A]">
              {highlight}
            </p>
          </div>
        </div>
      )}

      <motion.section {...sectionReveal} className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">Overview</p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-[#1A1A1A] sm:text-3xl">About This Service</h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-3 h-[2px] w-12 origin-left bg-[#F2C94C]" />
          <div className="mt-8 text-base leading-relaxed text-[#555] sm:text-lg">{overview}</div>
        </div>
      </motion.section>

      {list.length > 0 && (
        <motion.section {...sectionReveal} className="bg-[#1A1A1A] py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">
              {processSteps ? 'Process' : servicesList ? 'What We Do' : 'Focus'}
            </p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-white sm:text-3xl">
              {processSteps ? 'Our Process' : servicesList ? 'Services' : 'Focus Areas'}
            </h2>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-3 h-[2px] w-12 origin-left bg-[#F2C94C]" />
            <div className="mt-10 space-y-4">
              {list.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex gap-4 rounded-xl border border-white/8 bg-white/[0.04] p-5 backdrop-blur-sm transition-colors hover:border-[#F2C94C]/30"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F2C94C] text-sm font-bold text-[#1A1A1A]">
                    {i + 1}
                  </span>
                  <span className="text-white/65">{step}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {whyChooseUs && whyChooseUs.length > 0 && (
        <motion.section {...sectionReveal} className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">Advantages</p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-[#1A1A1A] sm:text-3xl">Why Choose Us</h2>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-3 h-[2px] w-12 origin-left bg-[#F2C94C]" />
            <div className="mt-10 space-y-4">
              {whyChooseUs.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex gap-3 text-[#555]"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F2C94C] text-xs font-bold text-[#1A1A1A]">✓</span>
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {faqs && faqs.length > 0 && (
        <motion.section {...sectionReveal} className="bg-[#1A1A1A] py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">FAQ</p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-white sm:text-3xl">Frequently Asked Questions</h2>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-3 h-[2px] w-12 origin-left bg-[#F2C94C]" />
            <div className="mt-10 space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-xl border border-white/8 bg-white/[0.04] p-5 transition-colors [&[open]]:border-[#F2C94C]/30"
                >
                  <summary className="min-h-[44px] cursor-pointer py-1 font-semibold text-white transition-colors group-hover:text-[#F2C94C] [&::-webkit-details-marker]:hidden">
                    {faq.question}
                  </summary>
                  <p className="mt-3 leading-relaxed text-white/55">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      <section ref={ctaRef} className="relative overflow-hidden py-24">
        <motion.div className="absolute inset-0" style={{ y: ctaBgY }}>
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920"
            alt=""
            fill
            className="pointer-events-none object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/75" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">Next Step</p>
          <h2 className="mt-3 font-heading text-2xl font-bold text-white sm:text-3xl lg:text-4xl">Ready to get started?</h2>
          <Link
            href={ctaHref}
            className="group relative mt-8 inline-flex min-h-[48px] items-center justify-center overflow-hidden rounded-md bg-[#F2C94C] px-10 py-4 font-semibold text-[#1A1A1A] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(242,201,76,0.4)]"
          >
            <span className="relative z-10">{ctaTitle}</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>
        </div>
      </section>
    </>
  );
}
