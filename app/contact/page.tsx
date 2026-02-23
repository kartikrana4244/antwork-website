'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import PageBanner from '@/components/PageBanner';

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch for franchise consulting, business resale, exhibitions, or any growth-related query. We respond within 24–48 hours."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-b from-white to-[#F8F8F8] py-16 sm:py-24"
      >
        <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl p-[1px] bg-gradient-to-br from-[#F2C94C]/30 via-white to-[#4F4F4F]/10"
            >
              <div className="min-w-0 rounded-2xl border border-white/40 bg-white/70 p-5 shadow-lg backdrop-blur-xl sm:p-8">
                <h2 className="font-heading text-xl font-bold text-[#4F4F4F] sm:text-2xl">Send a Message</h2>
                <p className="mt-2 text-[#4F4F4F]/80">
                  Fill in the form and we&apos;ll get back to you at the earliest.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl p-[1px] bg-gradient-to-br from-[#F2C94C]/30 via-white to-[#4F4F4F]/10"
            >
              <div className="min-w-0 rounded-2xl border border-white/40 bg-white/70 p-5 shadow-lg backdrop-blur-xl sm:p-8">
                <h2 className="font-heading text-xl font-bold text-[#4F4F4F] sm:text-2xl">Get in Touch</h2>
                <address className="mt-6 not-italic">
                  <p className="font-semibold text-[#4F4F4F]">AntWork Consultants LLP</p>
                  <p className="mt-4 text-[#4F4F4F]/90">India</p>
                  <p className="mt-4">
                    <a href="mailto:info@antwork.in" className="font-medium text-[#F2C94C] hover:underline transition-colors">
                      info@antwork.in
                    </a>
                  </p>
                  <p className="mt-2">
                    <a href="tel:+919876543210" className="font-medium text-[#F2C94C] hover:underline transition-colors">
                      +91 98765 43210
                    </a>
                  </p>
                </address>
                <div className="mt-8 aspect-video min-w-0 w-full max-w-full overflow-hidden rounded-xl border border-white/40 bg-white/50 backdrop-blur-sm" aria-hidden="true">
                  <div className="flex h-full w-full items-center justify-center text-[#4F4F4F]/50">
                    Map placeholder — embed Google Map here
                  </div>
                </div>
                <Link href="/contact#" className="btn-primary mt-6 inline-flex min-h-[48px] items-center justify-center rounded-xl px-6 py-3">
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
