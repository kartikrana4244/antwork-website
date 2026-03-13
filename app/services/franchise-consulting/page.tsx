import type { Metadata } from 'next';
import Script from 'next/script';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Franchise Consulting in India | Franchise Expansion Consultants',
  description:
    'Expert franchise consulting services to convert your business into a scalable franchise model. AntWork helps brands expand across India through structured franchise development and expansion.',
};

export default function FranchiseConsultingPage() {
  return (
    <>
      <ServicePageTemplate
      title="Franchise Consulting"
      heroTitle="Turn Your Business Into a Franchise Empire"
      heroImage="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200"
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
      <Script
        id="faq-schema-franchise-consulting"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What does a franchise consulting firm like AntWork do in India?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'As a franchise consulting firm in India, AntWork Consultants LLP helps you assess franchise feasibility, structure the franchise model, prepare documentation, and build a scalable franchise development roadmap for your brand.',
                },
              },
              {
                '@type': 'Question',
                name: 'How can AntWork help expand my brand through franchise development?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'AntWork designs your franchise model, defines territories and commercials, prepares legal and operational documents, and works with our franchise expansion consultants to help you sign the right franchise partners across cities in India.',
                },
              },
              {
                '@type': 'Question',
                name: 'When should I hire franchise business consultants in India?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'You should consider hiring franchise business consultants when your concept is proven in at least one or two locations and you are ready to scale through a structured franchise development and expansion strategy in India.',
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
