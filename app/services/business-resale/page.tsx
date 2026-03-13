import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Business Resale Services India | AntWork Consultants LLP',
  description:
    'Confidential business resale advisory services in India. AntWork Consultants LLP helps running businesses find the right buyers with valuation support, buyer-seller matching, due diligence and 100% confidentiality.',
};

export default function BusinessResalePage() {
  return (
    <ServicePageTemplate
      title="Business Resale"
      heroTitle="Sell Your Business. Confidentially. Profitably."
      heroImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200"
      highlight="100% Confidentiality"
      overview={
        <>
          <p>
            Selling a running business requires discretion, the right buyers, and a structured process. AntWork provides end-to-end business resale support—valuation, buyer-seller matching, due diligence, confidential deal structuring, and transition support—so you can exit or transition with confidence and minimal disruption.
          </p>
        </>
      }
      servicesList={[
        'Business Valuation',
        'Buyer-Seller Matching',
        'Due Diligence',
        'Confidential Deal Structuring',
        'Transition Support',
      ]}
      whyChooseUs={[
        'Strict confidentiality protocols so your sale stays discreet.',
        'Curated pool of serious buyers and investors.',
        'Structured process that protects both seller and buyer interests.',
        'Support through documentation, negotiations, and handover.',
        'Transparent communication and clear timelines.',
      ]}
      faqs={[
        { question: 'How is confidentiality maintained?', answer: 'We use NDAs, controlled data sharing, and anonymous listings until serious interest is established. Only qualified buyers get detailed information.' },
        { question: 'How do you value a business?', answer: 'We consider financials, assets, market position, growth potential, and industry benchmarks to arrive at a fair valuation range.' },
        { question: 'What sectors do you cover for resale?', answer: 'We work across F&B, retail, education, healthcare, services, and other sectors where we have buyer and sector expertise.' },
        { question: 'How long does a typical resale take?', answer: 'Depending on business size and market, it can take 3–9 months from listing to closure. We give a more precise estimate after the first assessment.' },
        { question: 'Do you help with partial stake sale?', answer: 'Yes. We support both full and partial stake sales, depending on your objectives.' },
      ]}
      ctaTitle="Start Business Resale Process"
    />
  );
}
