import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'AntWork Consultants LLP is a dynamic business advisory firm dedicated to building scalable enterprises through franchise consulting, M&A, and exhibitions. Ethical Excellence.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
