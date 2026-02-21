import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Mergers & Acquisitions',
  description:
    'Strategic M&A advisory with top-notch confidentiality. AntWork supports target identification, financial assessment, deal structuring, negotiation, and post-merger integration.',
};

export default function MergersAcquisitionsPage() {
  return (
    <ServicePageTemplate
      title="Mergers & Acquisitions"
      heroTitle="Strategic M&A Advisory with Top-Notch Confidentiality"
      overview={
        <>
          <p>
            Mergers and acquisitions can transform your market position—when done right. AntWork provides end-to-end M&A advisory: target identification, financial assessment, deal structuring, negotiation support, and post-merger integration. We maintain strict confidentiality and work to align deals with your strategic goals.
          </p>
        </>
      }
      servicesList={[
        'Target Identification',
        'Financial Assessment',
        'Deal Structuring',
        'Negotiation Support',
        'Post-Merger Integration',
      ]}
      whyChooseUs={[
        'Confidential process that protects both buyers and sellers.',
        'Structured approach from target shortlist to closure.',
        'Experience across sectors and deal sizes.',
        'Clear communication and milestone-based progress.',
        'Support for integration planning and execution.',
      ]}
      faqs={[
        { question: 'Do you represent buyers, sellers, or both?', answer: 'We work with both. Our role is to facilitate a fair, structured process and maintain confidentiality for all parties.' },
        { question: 'What deal sizes do you handle?', answer: 'We work across mid-market and growth-stage deals. Contact us to discuss your deal size and sector.' },
        { question: 'How do you ensure confidentiality?', answer: 'Strict NDAs, need-to-know sharing, and process controls ensure that only qualified parties receive sensitive information.' },
        { question: 'Do you assist with post-merger integration?', answer: 'Yes. We can support integration planning and coordination so the combined entity realizes the intended synergies.' },
        { question: 'What documents are typically involved in M&A?', answer: 'Term sheets, due diligence reports, valuation memos, and definitive agreements. We guide you through each stage.' },
      ]}
      ctaTitle="Discuss M&A Opportunity"
    />
  );
}
