'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import PageBanner from '@/components/PageBanner';

type FAQItem = { question: string; answer: string };

type ServicePageTemplateProps = {
  title: string;
  heroTitle: string;
  heroSubtitle?: string;
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
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

export default function ServicePageTemplate({
  title,
  heroTitle,
  heroSubtitle,
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

  return (
    <>
      <PageBanner
        title={heroTitle}
        subtitle={heroSubtitle}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: title },
        ]}
      />
      {highlight && (
        <div className="bg-white/80 backdrop-blur-sm border-b border-gray-100">
          <div className="mx-auto min-w-0 max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <p className="inline-block max-w-full break-words rounded-xl bg-[#F2C94C] px-4 py-2 font-semibold text-[#4F4F4F]">
              {highlight}
            </p>
          </div>
        </div>
      )}

      <motion.section
        {...sectionReveal}
        className="bg-white py-16 sm:py-24"
      >
        <div className="mx-auto min-w-0 max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-[#4F4F4F]">Overview</h2>
          <div className="mt-6 min-w-0 break-words text-lg leading-relaxed text-[#4F4F4F]/90">{overview}</div>
        </div>
      </motion.section>

      {list.length > 0 && (
        <motion.section
          {...sectionReveal}
          className="bg-gradient-to-b from-[#F8F8F8] to-white py-16 sm:py-24"
        >
          <div className="mx-auto min-w-0 max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-[#4F4F4F]">
              {processSteps ? 'Our Process' : servicesList ? 'Services' : 'Focus Areas'}
            </h2>
            <div className="mt-8 min-w-0 rounded-2xl border border-white/40 bg-white/60 p-4 shadow-lg backdrop-blur-xl sm:p-8">
              <ol className="space-y-4">
                {list.map((step, i) => (
                  <li key={i} className="flex gap-3 sm:gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F2C94C] text-sm font-bold text-[#4F4F4F]">
                      {i + 1}
                    </span>
                    <span className="min-w-0 break-words text-[#4F4F4F]/90">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </motion.section>
      )}

      {whyChooseUs && whyChooseUs.length > 0 && (
        <motion.section
          {...sectionReveal}
          className="bg-white py-16 sm:py-24"
        >
<div className="mx-auto min-w-0 max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-[#4F4F4F]">Why Choose Us</h2>
          <div className="mt-8 min-w-0 rounded-2xl border border-white/40 bg-white/60 p-6 shadow-lg backdrop-blur-xl sm:p-8">
            <ul className="list-inside list-disc space-y-3 break-words text-[#4F4F4F]/90">
                {whyChooseUs.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>
      )}

      {faqs && faqs.length > 0 && (
        <motion.section
          {...sectionReveal}
          className="bg-gradient-to-b from-white to-[#F8F8F8] py-16 sm:py-24"
        >
          <div className="mx-auto min-w-0 max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-[#4F4F4F]">Frequently Asked Questions</h2>
            <div className="mt-8 space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-white/40 bg-white/70 p-4 shadow-md backdrop-blur-xl [&[open]]:ring-2 [&[open]]:ring-[#F2C94C]/30"
                >
                  <summary className="min-h-[44px] cursor-pointer py-2 font-semibold text-[#4F4F4F] [&::-webkit-details-marker]:hidden">{faq.question}</summary>
                  <p className="mt-3 min-w-0 break-words text-[#4F4F4F]/80">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden py-16"
        style={{
          background: 'linear-gradient(135deg, #3d3d3d 0%, #4F4F4F 50%, #5a5a5a 100%)',
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(242,201,76,0.2)_0%,transparent_50%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl min-w-0 px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">Ready to get started?</h2>
          <Link href={ctaHref} className="btn-primary mt-6 inline-flex min-h-[48px] items-center justify-center rounded-xl px-8 py-4">
            {ctaTitle}
          </Link>
        </div>
      </motion.section>
    </>
  );
}
