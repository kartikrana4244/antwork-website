import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Franchise Consulting',
  description:
    'Turn your business into a scalable franchise with AntWork. Feasibility studies, model structuring, legal documentation, and SOP framework. Get franchise consultation today.',
};

export default function FranchiseConsultingPage() {
  return (
    <ServicePageTemplate
      title="Franchise Consulting"
      heroTitle="Turn Your Business Into a Franchise Empire"
      overview={
        <>
          <p>
            Franchise consulting at AntWork helps business owners convert their proven concept into a scalable, replicable franchise system. We guide you from feasibility assessment to full franchise readiness—including model structuring, financial projections, legal documentation, and SOP frameworks—so you can expand with confidence and attract the right franchisees.
          </p>
        </>
      }
      processSteps={[
        'Franchise Feasibility Study',
        'Model Structuring',
        'Financial Projections',
        'Legal Documentation',
        'SOP Framework',
        'Marketing Support',
      ]}
      whyChooseUs={[
        'Deep experience in Indian franchise regulations and market dynamics.',
        'Structured, step-by-step approach from idea to launch.',
        'Access to a wide network of potential franchisees and investors.',
        'Transparent pricing and clear deliverables at every stage.',
        'Ongoing support beyond the initial franchise setup.',
      ]}
      faqs={[
        { question: 'How long does it take to franchise my business?', answer: 'Typically 4–8 months depending on business complexity, documentation, and legal clearances. We provide a clear timeline after the feasibility study.' },
        { question: 'What documents do I need to start?', answer: 'Basic business registration, financial statements, and a clear description of your operations. We guide you on any additional documents required.' },
        { question: 'Do you help with franchise legal agreements?', answer: 'Yes. We work with legal experts to draft franchise agreements, disclosure documents, and other compliance-related paperwork.' },
        { question: 'Can you help find franchisees?', answer: 'Yes. Our franchise expansion and lead generation services help you identify and onboard the right franchise partners.' },
        { question: 'What industries do you support for franchising?', answer: 'We work across F&B, education, retail, healthcare, beauty & wellness, manufacturing, and services.' },
      ]}
      ctaTitle="Get Franchise Consultation"
    />
  );
}
