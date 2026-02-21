import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Disclaimer for AntWork Consultants LLP website and advisory services.',
};

export default function DisclaimerPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <nav className="text-sm text-[#4F4F4F]/80" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#F2C94C]">Home</Link>
        <span className="mx-2">/</span>
        <span>Disclaimer</span>
      </nav>
      <h1 className="mt-6 font-heading text-3xl font-bold text-[#4F4F4F]">Disclaimer</h1>
      <p className="mt-6 text-[#4F4F4F]/90">
        This is a placeholder. Please add your disclaimer content here. The information on this website is for general purposes only. AntWork Consultants LLP does not guarantee specific outcomes; all advisory is subject to your situation and market conditions.
      </p>
      <Link href="/" className="mt-8 inline-block font-medium text-[#F2C94C] hover:underline">
        ← Back to Home
      </Link>
    </section>
  );
}
