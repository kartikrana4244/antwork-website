import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact AntWork Consultants LLP for franchise consulting, business resale, exhibitions, and growth advisory. Book a consultation or reach us via email and phone.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
