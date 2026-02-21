import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact AntWork Consultants LLP for franchise consulting, business resale, exhibitions, and growth advisory. Book a consultation or reach us via email and phone.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#4F4F4F] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/80" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#F2C94C]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </nav>
          <div className="mt-4 h-1 w-16 bg-[#F2C94C]" aria-hidden="true" />
          <h1 className="mt-6 font-heading text-4xl font-bold text-white sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Get in touch for franchise consulting, business resale, exhibitions, or any growth-related query. We respond within 24–48 hours.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-bold text-[#4F4F4F]">Send a Message</h2>
              <p className="mt-2 text-[#4F4F4F]/80">
                Fill in the form and we&apos;ll get back to you at the earliest.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-[#4F4F4F]">Get in Touch</h2>
              <address className="mt-6 not-italic">
                <p className="font-semibold text-[#4F4F4F]">AntWork Consultants LLP</p>
                <p className="mt-4 text-[#4F4F4F]/90">India</p>
                <p className="mt-4">
                  <a href="mailto:info@antwork.in" className="font-medium text-[#F2C94C] hover:underline">
                    info@antwork.in
                  </a>
                </p>
                <p className="mt-2">
                  <a href="tel:+919876543210" className="font-medium text-[#F2C94C] hover:underline">
                    +91 98765 43210
                  </a>
                </p>
              </address>
              <div className="mt-8 aspect-video w-full overflow-hidden rounded-xl bg-[#F8F8F8]" aria-hidden="true">
                <div className="flex h-full w-full items-center justify-center text-[#4F4F4F]/50">
                  Map placeholder — embed Google Map here
                </div>
              </div>
              <Link href="/contact#" className="btn-primary mt-6 rounded-xl px-6 py-3">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
