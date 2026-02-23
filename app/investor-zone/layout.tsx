import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investor Zone',
  description:
    "Invest in India's growing franchise market. Explore franchise and business resale opportunities with AntWork. Transparent process, curated deals, and expert support.",
};

export default function InvestorZoneLayout({ children }: { children: React.ReactNode }) {
  return children;
}
