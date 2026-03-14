'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Script from 'next/script';
import ContactForm from '@/components/ContactForm';
import PageHero from '@/components/PageHero';

const sectionReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' as const },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export default function InvestorZonePage() {
  const imgRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <>
      <PageHero
        title="Invest in India's Growing Franchise Market"
        subtitle="Explore curated franchise and business opportunities with transparency and end-to-end support."
        backgroundImage="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Investor Zone' }]}
      />

      <motion.section ref={imgRef} {...sectionReveal} className="relative overflow-hidden bg-white py-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_80%,rgba(242,201,76,0.05),transparent)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F2C94C]/20 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">For Investors</p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-[#1A1A1A] sm:text-3xl">Why Invest With Us</h2>
              <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-3 h-[2px] w-12 origin-left bg-[#F2C94C]" />
              <div className="mt-8 space-y-4">
                {[
                  'Curated pipeline of 1600+ brands and vetted business opportunities.',
                  'Transparent process: clear documentation, valuations, and terms.',
                  'Support from first meeting to deal closure and beyond.',
                  'Options across sectors: F&B, education, retail, healthcare, and more.',
                  'Confidentiality and professionalism at every step.',
                  'Flexible investment ranges to match your budget and goals.',
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex gap-3 text-[#555]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F2C94C] text-xs font-bold text-[#1A1A1A]">✓</span>
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }} className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]">
              <motion.div className="absolute -inset-4" style={{ y: imgY }}>
                <Image src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800" alt="Investment opportunities" fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 50vw" />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="relative overflow-hidden bg-[#1A1A1A] py-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_20%,rgba(242,201,76,0.04),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">Opportunities</p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-white sm:text-3xl">Current Opportunities</h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-3 h-[2px] w-12 origin-left bg-[#F2C94C]" />
          <p className="mt-5 text-white/55">
            We regularly add new franchise and business resale opportunities. Share your preferences below to get matched with relevant deals.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'F&B Franchise', sector: 'Food & Beverage', range: '15–50 Lakhs' },
              { title: 'Education Brand', sector: 'Education', range: '20–80 Lakhs' },
              { title: 'Retail Business Resale', sector: 'Retail', range: 'Varies' },
            ].map((card, i) => (
              <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="rounded-2xl border border-white/8 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-[#F2C94C]/30 hover:bg-white/[0.06] hover:shadow-[0_15px_40px_rgba(0,0,0,0.3),0_0_20px_rgba(242,201,76,0.06)]">
                <h3 className="font-heading text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-1 text-sm text-white/40">{card.sector}</p>
                <p className="mt-2 text-sm font-semibold text-[#F2C94C]">{card.range}</p>
                <p className="mt-4 text-sm text-white/45">Submit the form to express interest and get detailed information.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="relative overflow-hidden bg-white py-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_20%,rgba(242,201,76,0.03),transparent)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F2C94C]/20 to-transparent" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">Returns</p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-[#1A1A1A] sm:text-3xl">ROI Expectations</h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-3 h-[2px] w-12 origin-left bg-[#F2C94C]" />
          <p className="mt-6 leading-relaxed text-[#555]">
            Returns vary by sector, brand, and format. We provide detailed financial projections and historical performance data (where available) for each opportunity so you can make an informed decision. We do not guarantee specific returns—we focus on transparent information and a structured process.
          </p>
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="relative overflow-hidden bg-[#1A1A1A] py-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(242,201,76,0.04),transparent)]" />
        <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">Get Started</p>
            <h2 className="mt-2 font-heading text-xl font-bold text-white sm:text-2xl">Express Your Interest</h2>
            <div className="mt-3 h-[2px] w-10 bg-[#F2C94C]" />
            <p className="mt-4 text-white/55">Share your details and preferences. Our team will get in touch with relevant opportunities.</p>
            <div className="mt-8">
              <ContactForm variant="investor" theme="dark" />
            </div>
          </div>
        </div>
      </motion.section>

      <Script
        id="faq-schema-investor-zone"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'What types of franchise investment opportunities does AntWork offer in India?', acceptedAnswer: { '@type': 'Answer', text: 'AntWork Consultants LLP curates franchise investment opportunities across sectors such as food and beverage, education, retail, healthcare, beauty and wellness, and services—covering both established brands and emerging concepts.' } },
              { '@type': 'Question', name: 'Are there low investment franchise opportunities available?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. AntWork regularly works on low investment franchise opportunities in India, across multiple ticket sizes, so investors can choose options that match their capital and risk appetite.' } },
              { '@type': 'Question', name: 'How does AntWork support investors during the franchise selection process?', acceptedAnswer: { '@type': 'Answer', text: 'AntWork provides curated deal flow, transparent brand information, basic financials and projections shared by brands, and coordinates discussions so investors can evaluate and select the right franchise opportunities in India.' } },
            ],
          }),
        }}
      />
    </>
  );
}
