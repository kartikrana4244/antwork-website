import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'AntWork offers franchise consulting, franchise expansion, exhibition management, business resale, M&A advisory, and B2B strategic consulting. End-to-end growth solutions.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
