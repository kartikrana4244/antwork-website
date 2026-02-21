import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'B2B Strategic Consulting',
  description:
    'Accelerate your business growth with AntWork B2B consulting. Market entry, revenue growth, channel partnerships, operational efficiency, and performance optimization.',
};

export default function B2BConsultingPage() {
  return (
    <ServicePageTemplate
      title="B2B Strategic Consulting"
      heroTitle="Accelerate Your Business Growth"
      overview={
        <>
          <p>
            B2B strategic consulting at AntWork helps businesses grow through clearer strategy, better execution, and stronger partnerships. We focus on market entry, revenue growth, channel partnerships, operational efficiency, and performance optimization—delivering actionable plans and support to achieve your targets.
          </p>
        </>
      }
      focusAreas={[
        'Market Entry Strategy',
        'Revenue Growth',
        'Channel Partnerships',
        'Operational Efficiency',
        'Performance Optimization',
      ]}
      whyChooseUs={[
        'Practical, result-oriented strategies tailored to your business.',
        'Experience across multiple sectors and business models.',
        'Focus on implementation, not just reports.',
        'Transparent engagement models and clear deliverables.',
        'Long-term partnership approach for sustained growth.',
      ]}
      faqs={[
        { question: 'What does B2B consulting typically include?', answer: 'It can include strategy workshops, market research, go-to-market design, channel strategy, and operational improvement projects—scoped to your needs.' },
        { question: 'How long is a typical engagement?', answer: 'Engagements can range from a few weeks for a focused project to several months for broader strategy and implementation support.' },
        { question: 'Do you work with startups or only established businesses?', answer: 'We work with both. We tailor our approach to your stage, resources, and goals.' },
        { question: 'What industries do you serve?', answer: 'We serve F&B, education, retail, healthcare, beauty & wellness, manufacturing, and services, among others.' },
        { question: 'How do you measure success?', answer: 'We define success metrics at the start—e.g., revenue growth, market share, cost reduction—and track progress through the engagement.' },
      ]}
      ctaTitle="Get B2B Consulting"
    />
  );
}
