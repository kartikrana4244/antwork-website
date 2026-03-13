'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import PageHero from '@/components/PageHero';
import GoldDivider from '@/components/GoldDivider';

export default function ContactPage() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      <PageHero
        title="Contact Us"
        subtitle="Get in touch for franchise consulting, business resale, exhibitions, or any growth-related query. We respond within 24–48 hours."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <GoldDivider />

      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden bg-[#0A0A0A] py-16 sm:py-24"
      >
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920"
          alt=""
          fill
          className="pointer-events-none object-cover opacity-[0.03]"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" aria-hidden="true" />
        <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(242,201,76,0.05)_0%,transparent_70%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(242,201,76,0.04)_0%,transparent_70%)]" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-[rgba(242,201,76,0.15)] bg-[rgba(255,255,255,0.02)] p-5 backdrop-blur-sm sm:p-8"
            >
              <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">Send a Message</h2>
              <div className="mt-1 h-0.5 w-10 bg-[#F2C94C]" />
              <p className="mt-3 text-[#A0A0A0]">
                Fill in the form and we&apos;ll get back to you at the earliest.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="rounded-2xl border border-[rgba(242,201,76,0.15)] bg-[rgba(255,255,255,0.02)] p-5 backdrop-blur-sm sm:p-8">
                <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">Get in Touch</h2>
                <div className="mt-1 h-0.5 w-10 bg-[#F2C94C]" />
                <address className="mt-6 space-y-2 not-italic">
                  <p className="font-semibold text-white">AntWork Consultants LLP</p>
                  <p className="text-[#A0A0A0]">India</p>
                  <p className="pt-2 text-sm text-[#666]">Primary Email</p>
                  <p>
                    <a href="mailto:office@antworkconsultants.com" className="font-medium text-[#F2C94C] transition-colors hover:text-[#E0B429]">
                      office@antworkconsultants.com
                    </a>
                  </p>
                  <p className="pt-1 text-sm text-[#666]">Alternate Email</p>
                  <p>
                    <a href="mailto:antworkconsultants@gmail.com" className="font-medium text-[#F2C94C] transition-colors hover:text-[#E0B429]">
                      antworkconsultants@gmail.com
                    </a>
                  </p>
                  <p className="pt-1 text-sm text-[#666]">Phone</p>
                  <p>
                    <a href="tel:+919217167326" className="font-medium text-[#F2C94C] transition-colors hover:text-[#E0B429]">
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
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[rgba(242,201,76,0.2)]" />
              </div>

              <div className="h-[400px] w-full overflow-hidden rounded-2xl border border-[rgba(242,201,76,0.1)]">
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
      </motion.section>
    </div>
  );
}
