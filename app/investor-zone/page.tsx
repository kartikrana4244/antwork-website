'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Script from 'next/script';
import ContactForm from '@/components/ContactForm';
import PageHero from '@/components/PageHero';
import GoldDivider from '@/components/GoldDivider';

const sectionReveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

export default function InvestorZonePage() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      <PageHero
        title="Invest in India's Growing Franchise Market"
        subtitle="Explore curated franchise and business opportunities. We connect serious investors with quality brands and running businesses—with transparency and end-to-end support."
        backgroundImage="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Investor Zone' }]}
      />

      <GoldDivider />

      <motion.section
        {...sectionReveal}
        className="relative overflow-hidden bg-[#0A0A0A] py-16 sm:py-24"
      >
        <Image
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920"
          alt=""
          fill
          className="pointer-events-none object-cover opacity-[0.03]"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" aria-hidden="true" />
        <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(242,201,76,0.05)_0%,transparent_70%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="h-0.5 w-10 bg-[#F2C94C]" />
              <h2 className="mt-4 font-heading text-2xl font-bold text-white">Why Invest With Us</h2>
              <div className="mt-8 space-y-4">
                {[
                  'Curated pipeline of 1600+ brands and vetted business opportunities.',
                  'Transparent process: clear documentation, valuations, and terms.',
                  'Support from first meeting to deal closure and beyond.',
                  'Options across sectors: F&B, education, retail, healthcare, and more.',
                  'Confidentiality and professionalism at every step.',
                  'Flexible investment ranges to match your budget and goals.',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-3"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(242,201,76,0.15)] text-xs text-[#F2C94C]">✓</span>
                    <span className="text-[#A0A0A0]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800"
                alt="Investment opportunities visualization"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[rgba(242,201,76,0.2)]" />
              <div className="absolute inset-0 shadow-[0_0_40px_rgba(242,201,76,0.08)]" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <GoldDivider />

      <motion.section
        {...sectionReveal}
        className="relative overflow-hidden bg-[#111111] py-16 sm:py-24"
      >
        <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(242,201,76,0.04)_0%,transparent_70%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute left-0 top-0 h-[350px] w-[350px] bg-[radial-gradient(circle,rgba(242,201,76,0.03)_0%,transparent_70%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-white">Current Opportunities</h2>
          <div className="mt-1 h-0.5 w-10 bg-[#F2C94C]" />
          <p className="mt-4 text-[#A0A0A0]">
            We regularly add new franchise and business resale opportunities. Share your preferences below to get matched with relevant deals.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'F&B Franchise', sector: 'Food & Beverage', range: '15–50 Lakhs' },
              { title: 'Education Brand', sector: 'Education', range: '20–80 Lakhs' },
              { title: 'Retail Business Resale', sector: 'Retail', range: 'Varies' },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-[rgba(242,201,76,0.12)] bg-[rgba(255,255,255,0.02)] p-5 backdrop-blur-sm transition-all duration-300 hover:border-[rgba(242,201,76,0.4)] hover:shadow-[0_0_20px_rgba(242,201,76,0.06)] sm:p-6"
              >
                <h3 className="font-heading font-semibold text-white">{card.title}</h3>
                <p className="mt-1 text-sm text-[#666]">{card.sector}</p>
                <p className="mt-2 text-sm font-medium text-[#F2C94C]">{card.range}</p>
                <p className="mt-4 text-sm text-[#A0A0A0]">
                  Submit the form to express interest and get detailed information.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <GoldDivider />

      <motion.section
        {...sectionReveal}
        className="relative overflow-hidden bg-[#0A0A0A] py-16 sm:py-24"
      >
        <div className="pointer-events-none absolute left-0 bottom-0 h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(242,201,76,0.04)_0%,transparent_70%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-white">ROI Expectations</h2>
          <div className="mt-1 h-0.5 w-10 bg-[#F2C94C]" />
          <div className="mt-6 max-w-3xl rounded-2xl border border-[rgba(242,201,76,0.12)] bg-[rgba(255,255,255,0.02)] p-6 backdrop-blur-sm sm:p-8">
            <p className="leading-relaxed text-[#A0A0A0]">
              Returns vary by sector, brand, and format. We provide detailed financial projections and historical performance data (where available) for each opportunity so you can make an informed decision. We do not guarantee specific returns—we focus on transparent information and a structured process.
            </p>
          </div>
        </div>
      </motion.section>

      <GoldDivider />

      <motion.section
        {...sectionReveal}
        className="relative overflow-hidden bg-[#111111] py-16 sm:py-24"
      >
        <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(242,201,76,0.03)_0%,transparent_70%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl rounded-2xl border border-[rgba(242,201,76,0.15)] bg-[rgba(255,255,255,0.02)] p-5 backdrop-blur-sm sm:p-8">
            <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">Express Your Interest</h2>
            <div className="mt-1 h-0.5 w-10 bg-[#F2C94C]" />
            <p className="mt-3 text-[#A0A0A0]">
              Share your details and preferences. Our team will get in touch with relevant opportunities.
            </p>
            <div className="mt-8">
              <ContactForm variant="investor" />
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
              {
                '@type': 'Question',
                name: 'What types of franchise investment opportunities does AntWork offer in India?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AntWork Consultants LLP curates franchise investment opportunities across sectors such as food and beverage, education, retail, healthcare, beauty and wellness, and services—covering both established brands and emerging concepts.',
                },
              },
              {
                '@type': 'Question',
                name: 'Are there low investment franchise opportunities available?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. AntWork regularly works on low investment franchise opportunities in India, across multiple ticket sizes, so investors can choose options that match their capital and risk appetite.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does AntWork support investors during the franchise selection process?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AntWork provides curated deal flow, transparent brand information, basic financials and projections shared by brands, and coordinates discussions so investors can evaluate and select the right franchise opportunities in India.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
