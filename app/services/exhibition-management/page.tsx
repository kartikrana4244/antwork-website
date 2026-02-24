import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Exhibition Management',
  description:
    'Showcase your brand at high-impact business exhibitions. AntWork handles exhibition planning, brand participation, sponsorship, and investor networking. Grow your visibility.',
};

export default function ExhibitionManagementPage() {
  return (
    <ServicePageTemplate
      title="Exhibition Management"
      heroTitle="Showcase Your Brand to Thousands"
      overview={
        <>
          <p>
            Exhibitions and business festivals offer unmatched visibility and networking. AntWork helps brands participate effectively—from planning and booth design to sponsorship strategy and investor networking—so you can showcase your brand to thousands of potential partners and investors in one place.
          </p>
        </>
      }
      servicesList={[
        'Exhibition Planning',
        'Brand Participation',
        'Sponsorship Strategy',
        'Investor Networking',
        'Event Marketing',
      ]}
      whyChooseUs={[
        'Experience in organizing and managing large-scale business events.',
        'Strong network of exhibitors, sponsors, and attendees.',
        'End-to-end support from registration to post-event follow-up.',
        'Options for custom branding and sponsorship packages.',
        'Focus on lead quality and meaningful connections, not just footfall.',
      ]}
      faqs={[
        { question: 'What types of exhibitions do you manage?', answer: 'We focus on business and franchise exhibitions where brands meet investors, franchisees, and B2B partners.' },
        { question: 'Can I only participate, or also sponsor?', answer: 'You can participate as an exhibitor, sponsor, or both. We help design the right package for your goals and budget.' },
        { question: 'How do you measure exhibition ROI?', answer: 'We track leads, meetings conducted, and follow-up conversions, and provide a post-event report with recommendations.' },
        { question: 'Do you organize exhibitions in multiple cities?', answer: 'Yes. We work across multiple cities and can align with your expansion geography.' },
        { question: 'What support do you provide on the event day?', answer: 'On-ground coordination, booth support, meeting scheduling, and real-time lead capture and handover.' },
      ]}
      ctaTitle="Discuss Exhibition Participation"
    />
  );
}
