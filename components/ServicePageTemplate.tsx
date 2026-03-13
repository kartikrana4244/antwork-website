'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import GoldDivider from '@/components/GoldDivider';

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
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
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

  return (
    <div className="bg-[#0A0A0A] text-white">
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

      <GoldDivider />

      {highlight && (
        <div className="border-b border-[rgba(242,201,76,0.1)] bg-[#111111]">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <p className="inline-block rounded-sm bg-[#F2C94C] px-4 py-2 text-sm font-semibold text-[#0A0A0A]">
              {highlight}
            </p>
          </div>
        </div>
      )}

      <motion.section
        {...sectionReveal}
        className="relative overflow-hidden bg-[#0A0A0A] py-16 sm:py-24"
      >
        {heroImage && (
          <Image
            src={heroImage}
            alt=""
            fill
            className="pointer-events-none object-cover opacity-[0.02]"
            sizes="100vw"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" aria-hidden="true" />
        <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(242,201,76,0.05)_0%,transparent_70%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-white">Overview</h2>
          <div className="mt-1 h-0.5 w-10 bg-[#F2C94C]" />
          <div className="mt-6 text-base leading-relaxed text-[#A0A0A0] sm:text-lg">{overview}</div>
        </div>
      </motion.section>

      {list.length > 0 && (
        <>
          <GoldDivider />
          <motion.section
            {...sectionReveal}
            className="relative overflow-hidden bg-[#111111] py-16 sm:py-24"
          >
            <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(242,201,76,0.04)_0%,transparent_70%)]" aria-hidden="true" />
            <div className="pointer-events-none absolute right-0 top-0 h-[350px] w-[350px] bg-[radial-gradient(circle,rgba(242,201,76,0.03)_0%,transparent_70%)]" aria-hidden="true" />
            <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-heading text-2xl font-bold text-white">
                {processSteps ? 'Our Process' : servicesList ? 'Services' : 'Focus Areas'}
              </h2>
              <div className="mt-1 h-0.5 w-10 bg-[#F2C94C]" />
              <div className="mt-8 rounded-2xl border border-[rgba(242,201,76,0.12)] bg-[rgba(255,255,255,0.02)] p-4 backdrop-blur-sm sm:p-8">
                <ol className="space-y-4">
                  {list.map((step, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex gap-3 sm:gap-4"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[rgba(242,201,76,0.3)] bg-[rgba(242,201,76,0.1)] text-sm font-bold text-[#F2C94C]">
                        {i + 1}
                      </span>
                      <span className="text-[#A0A0A0]">{step}</span>
                    </motion.li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.section>
        </>
      )}

      {whyChooseUs && whyChooseUs.length > 0 && (
        <>
          <GoldDivider />
          <motion.section
            {...sectionReveal}
            className="relative overflow-hidden bg-[#0A0A0A] py-16 sm:py-24"
          >
            <div className="pointer-events-none absolute right-0 bottom-0 h-[350px] w-[350px] bg-[radial-gradient(circle,rgba(242,201,76,0.04)_0%,transparent_70%)]" aria-hidden="true" />
            <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-heading text-2xl font-bold text-white">Why Choose Us</h2>
              <div className="mt-1 h-0.5 w-10 bg-[#F2C94C]" />
              <div className="mt-8 rounded-2xl border border-[rgba(242,201,76,0.12)] bg-[rgba(255,255,255,0.02)] p-6 backdrop-blur-sm sm:p-8">
                <ul className="space-y-3">
                  {whyChooseUs.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex gap-3 text-[#A0A0A0]"
                    >
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(242,201,76,0.15)] text-xs text-[#F2C94C]">✓</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>
        </>
      )}

      {faqs && faqs.length > 0 && (
        <>
          <GoldDivider />
          <motion.section
            {...sectionReveal}
            className="relative overflow-hidden bg-[#111111] py-16 sm:py-24"
          >
            <div className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(242,201,76,0.03)_0%,transparent_70%)]" aria-hidden="true" />
            <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-heading text-2xl font-bold text-white">Frequently Asked Questions</h2>
              <div className="mt-1 h-0.5 w-10 bg-[#F2C94C]" />
              <div className="mt-8 space-y-4">
                {faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group rounded-xl border border-[rgba(242,201,76,0.12)] bg-[rgba(255,255,255,0.02)] p-4 transition-colors [&[open]]:border-[rgba(242,201,76,0.35)] [&[open]]:shadow-[0_0_20px_rgba(242,201,76,0.05)]"
                  >
                    <summary className="min-h-[44px] cursor-pointer py-2 font-semibold text-white [&::-webkit-details-marker]:hidden">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-[#A0A0A0]">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </motion.section>
        </>
      )}

      <GoldDivider />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden py-16"
      >
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920"
          alt=""
          fill
          className="pointer-events-none object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div
          className="absolute inset-0 animate-[gradientShift_6s_ease_infinite] opacity-70"
          style={{
            background: 'linear-gradient(135deg, rgba(242,201,76,0.3) 0%, transparent 25%, rgba(242,201,76,0.2) 50%, transparent 75%, rgba(242,201,76,0.3) 100%)',
            backgroundSize: '300% 300%',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">Ready to get started?</h2>
          <Link
            href={ctaHref}
            className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[#F2C94C] px-8 py-4 font-semibold text-[#0A0A0A] transition-all duration-200 hover:scale-[1.02] hover:bg-[#E0B429]"
          >
            {ctaTitle}
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
