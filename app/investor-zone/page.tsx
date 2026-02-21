import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Investor Zone',
  description:
    'Invest in India\'s growing franchise market. Explore franchise and business resale opportunities with AntWork. Transparent process, curated deals, and expert support.',
};

export default function InvestorZonePage() {
  return (
    <>
      <section className="bg-[#4F4F4F] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/80" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#F2C94C]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Investor Zone</span>
          </nav>
          <div className="mt-4 h-1 w-16 bg-[#F2C94C]" aria-hidden="true" />
          <h1 className="mt-6 font-heading text-4xl font-bold text-white sm:text-5xl">
            Invest in India&apos;s Growing Franchise Market
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Explore curated franchise and business opportunities. We connect serious investors with quality brands and running businesses—with transparency and end-to-end support.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-[#4F4F4F]">Why Invest With Us</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Curated pipeline of 1600+ brands and vetted business opportunities.',
              'Transparent process: clear documentation, valuations, and terms.',
              'Support from first meeting to deal closure and beyond.',
              'Options across sectors: F&B, education, retail, healthcare, and more.',
              'Confidentiality and professionalism at every step.',
              'Flexible investment ranges to match your budget and goals.',
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F2C94C] text-sm font-bold text-[#4F4F4F]">
                  ✓
                </span>
                <span className="text-[#4F4F4F]/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#F8F8F8] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-[#4F4F4F]">Current Opportunities</h2>
          <p className="mt-2 text-[#4F4F4F]/80">
            We regularly add new franchise and business resale opportunities. Share your preferences below to get matched with relevant deals.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'F&B Franchise', sector: 'Food & Beverage', range: '15–50 Lakhs' },
              { title: 'Education Brand', sector: 'Education', range: '20–80 Lakhs' },
              { title: 'Retail Business Resale', sector: 'Retail', range: 'Varies' },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-heading font-semibold text-[#4F4F4F]">{card.title}</h3>
                <p className="mt-1 text-sm text-[#4F4F4F]/70">{card.sector}</p>
                <p className="mt-2 text-sm font-medium text-[#F2C94C]">{card.range}</p>
                <p className="mt-4 text-sm text-[#4F4F4F]/80">
                  Submit the form to express interest and get detailed information.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-[#4F4F4F]">ROI Expectations</h2>
          <p className="mt-4 max-w-3xl text-[#4F4F4F]/90">
            Returns vary by sector, brand, and format. We provide detailed financial projections and historical performance data (where available) for each opportunity so you can make an informed decision. We do not guarantee specific returns—we focus on transparent information and a structured process.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F8F8] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="font-heading text-2xl font-bold text-[#4F4F4F]">Express Your Interest</h2>
            <p className="mt-2 text-[#4F4F4F]/80">
              Share your details and preferences. Our team will get in touch with relevant opportunities.
            </p>
            <div className="mt-8">
              <ContactForm variant="investor" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
