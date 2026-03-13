'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import PageHero from '@/components/PageHero';

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch for franchise consulting, business resale, exhibitions, or any growth-related query."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,rgba(242,201,76,0.04),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-[#e8e8e8] bg-white p-7 shadow-sm sm:p-9"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">Message</p>
              <h2 className="mt-2 font-heading text-xl font-bold text-[#1A1A1A] sm:text-2xl">Send a Message</h2>
              <div className="mt-3 h-[2px] w-10 bg-[#F2C94C]" />
              <p className="mt-4 text-[#666]">Fill in the form and we&apos;ll get back to you at the earliest.</p>
              <div className="mt-8">
                <ContactForm theme="light" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-7"
            >
              <div className="rounded-2xl border border-[#e8e8e8] bg-white p-7 shadow-sm sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">Details</p>
                <h2 className="mt-2 font-heading text-xl font-bold text-[#1A1A1A] sm:text-2xl">Get in Touch</h2>
                <div className="mt-3 h-[2px] w-10 bg-[#F2C94C]" />
                <address className="mt-6 space-y-2 not-italic">
                  <p className="font-semibold text-[#1A1A1A]">AntWork Consultants LLP</p>
                  <p className="text-[#666]">India</p>
                  <p className="pt-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#999]">Primary Email</p>
                  <p>
                    <a href="mailto:office@antworkconsultants.com" className="font-medium text-[#1A1A1A] transition-colors hover:text-[#F2C94C]">
                      office@antworkconsultants.com
                    </a>
                  </p>
                  <p className="pt-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#999]">Alternate Email</p>
                  <p>
                    <a href="mailto:antworkconsultants@gmail.com" className="font-medium text-[#1A1A1A] transition-colors hover:text-[#F2C94C]">
                      antworkconsultants@gmail.com
                    </a>
                  </p>
                  <p className="pt-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#999]">Phone</p>
                  <p>
                    <a href="tel:+919217167326" className="font-medium text-[#1A1A1A] transition-colors hover:text-[#F2C94C]">
                      +91 9217167326
                    </a>
                  </p>
                </address>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:aspect-auto lg:h-[300px]">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
                  alt="Modern corporate office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="h-[400px] w-full overflow-hidden rounded-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3506.312177399638!2d77.16721707549598!3d28.500253975737195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMwJzAwLjkiTiA3N8KwMTAnMTEuMyJF!5e0!3m2!1sen!2sin!4v1771919862622!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  aria-label="AntWork Consultants LLP location on map"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
