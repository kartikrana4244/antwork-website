import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy of AntWork Consultants LLP.',
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto min-w-0 max-w-3xl overflow-x-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <nav className="text-xs text-[#4F4F4F]/80 sm:text-sm" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#F2C94C]">Home</Link>
        <span className="mx-2">/</span>
        <span>Privacy Policy</span>
      </nav>
      <h1 className="mt-6 break-words font-heading text-2xl font-bold text-[#4F4F4F] sm:text-3xl">Privacy Policy</h1>
      <p className="mt-6 break-words text-[#4F4F4F]/90">
        This is a placeholder. Please add your privacy policy content here. AntWork Consultants LLP is committed to protecting your personal information in line with applicable data protection laws.
      </p>
      <Link href="/" className="mt-8 inline-flex min-h-[44px] items-center font-medium text-[#F2C94C] hover:underline">
        ← Back to Home
      </Link>
    </section>
  );
}
