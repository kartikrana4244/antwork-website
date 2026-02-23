'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import PageBanner from '@/components/PageBanner';

export default function InvestorZonePage() {
  return (
    <>
      <PageBanner
        title="Invest in India's Growing Franchise Market"
        subtitle="Explore curated franchise and business opportunities. We connect serious investors with quality brands and running businesses—with transparency and end-to-end support."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Investor Zone' }]}
      />

      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="bg-white py-16 sm:py-24"
      >
        <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-[#4F4F4F]">Why Invest With Us</h2>
          <div className="mt-8 min-w-0 rounded-2xl border border-white/40 bg-white/60 p-4 shadow-lg backdrop-blur-xl sm:p-8">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                'Curated pipeline of 1600+ brands and vetted business opportunities.',
                'Transparent process: clear documentation, valuations, and terms.',
                'Support from first meeting to deal closure and beyond.',
                'Options across sectors: F&B, education, retail, healthcare, and more.',
                'Confidentiality and professionalism at every step.',
                'Flexible investment ranges to match your budget and goals.',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F2C94C] text-sm font-bold text-[#4F4F4F]">
                    ✓
                  </span>
                  <span className="min-w-0 break-words text-[#4F4F4F]/90">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-b from-[#F8F8F8] to-white py-16 sm:py-24"
      >
        <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-[#4F4F4F]">Current Opportunities</h2>
          <p className="mt-2 text-[#4F4F4F]/80">
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
                className="rounded-2xl p-[1px] bg-gradient-to-br from-[#F2C94C]/30 via-white to-[#4F4F4F]/10"
              >
                <div className="min-w-0 rounded-2xl border border-white/40 bg-white/70 p-5 shadow-lg backdrop-blur-xl sm:p-6">
                  <h3 className="font-heading font-semibold text-[#4F4F4F]">{card.title}</h3>
                  <p className="mt-1 text-sm text-[#4F4F4F]/70">{card.sector}</p>
                  <p className="mt-2 text-sm font-medium text-[#F2C94C]">{card.range}</p>
                  <p className="mt-4 text-sm text-[#4F4F4F]/80">
                    Submit the form to express interest and get detailed information.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white py-16 sm:py-24"
      >
        <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-[#4F4F4F]">ROI Expectations</h2>
          <div className="mt-6 min-w-0 max-w-3xl rounded-2xl border border-white/40 bg-white/60 p-6 shadow-lg backdrop-blur-xl sm:p-8">
            <p className="break-words text-[#4F4F4F]/90">
              Returns vary by sector, brand, and format. We provide detailed financial projections and historical performance data (where available) for each opportunity so you can make an informed decision. We do not guarantee specific returns—we focus on transparent information and a structured process.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-b from-[#F8F8F8] to-white py-16 sm:py-24"
      >
<div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto min-w-0 max-w-xl rounded-2xl p-[1px] bg-gradient-to-br from-[#F2C94C]/40 via-white to-[#4F4F4F]/10">
            <div className="min-w-0 rounded-2xl border border-white/40 bg-white/80 p-5 shadow-xl backdrop-blur-xl sm:p-8">
              <h2 className="font-heading text-xl font-bold text-[#4F4F4F] sm:text-2xl">Express Your Interest</h2>
              <p className="mt-2 text-[#4F4F4F]/80">
                Share your details and preferences. Our team will get in touch with relevant opportunities.
              </p>
              <div className="mt-8">
                <ContactForm variant="investor" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
