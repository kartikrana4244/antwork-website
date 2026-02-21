import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Franchise Expansion',
  description:
    'Scale your franchise across India with AntWork. Territory planning, investor identification, location strategy, and franchise sales management. Expand with confidence.',
};

export default function FranchiseExpansionPage() {
  return (
    <ServicePageTemplate
      title="Franchise Expansion"
      heroTitle="Scale Your Franchise Across India"
      overview={
        <>
          <p>
            Once your franchise model is ready, expansion is the next critical step. AntWork&apos;s franchise expansion services help you grow systematically—through territory planning, investor identification, location strategy, and franchise sales management—so you can scale across cities and regions with the right partners and locations.
          </p>
        </>
      }
      servicesList={[
        'Territory Planning',
        'Investor Identification',
        'Location Strategy',
        'Lead Generation',
        'Franchise Sales Management',
      ]}
      whyChooseUs={[
        'Proven process for identifying and qualifying franchise investors.',
        'Data-driven territory and location recommendations.',
        'Dedicated support through the entire franchisee onboarding cycle.',
        'Alignment with your brand standards and growth targets.',
        'Transparent reporting and pipeline management.',
      ]}
      faqs={[
        { question: 'How do you find franchise investors?', answer: 'We use a mix of our investor database, exhibitions, digital campaigns, and referrals to generate qualified leads aligned with your brand.' },
        { question: 'What is territory planning?', answer: 'We help define exclusive or non-exclusive territories, prioritize cities/regions, and avoid conflict between franchisees.' },
        { question: 'Do you help with franchisee training?', answer: 'We can coordinate training programs and connect you with training partners; detailed training design is often part of franchise consulting.' },
        { question: 'Can you support multi-brand expansion?', answer: 'Yes. We can support brands with multiple formats or sub-brands under a common expansion strategy.' },
        { question: 'What metrics do you track during expansion?', answer: 'We track leads, conversions, pipeline value, and time-to-close, and align with your expansion targets.' },
      ]}
      ctaTitle="Start Franchise Expansion"
    />
  );
}
