import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for AntWork Consultants LLP website and services.',
};

export default function TermsPage() {
  return (
    <section className="mx-auto min-w-0 max-w-3xl overflow-x-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <nav className="text-xs text-[#4F4F4F]/80 sm:text-sm" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#F2C94C]">Home</Link>
        <span className="mx-2">/</span>
        <span>Terms</span>
      </nav>
      <h1 className="mt-6 break-words font-heading text-2xl font-bold text-[#4F4F4F] sm:text-3xl">Terms of Use</h1>
      <p className="mt-6 break-words text-[#4F4F4F]/90">
        This is a placeholder. Please add your terms of use content here. By using this website and our services, you agree to these terms.
      </p>
      <Link href="/" className="mt-8 inline-flex min-h-[44px] items-center font-medium text-[#F2C94C] hover:underline">
        ← Back to Home
      </Link>
    </section>
  );
}
