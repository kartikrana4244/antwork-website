import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'AntWork serves F&B, education, retail, healthcare, beauty & wellness, manufacturing, and services. We help brands across sectors scale and succeed.',
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
