'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  UtensilsCrossed,
  GraduationCap,
  ShoppingCart,
  HeartPulse,
  Sparkles,
  Factory,
  Settings,
} from 'lucide-react';
import PageBanner from '@/components/PageBanner';

const industries = [
  { name: 'F&B', Icon: UtensilsCrossed, description: 'Restaurants, QSR, cloud kitchens, and F&B brands looking to franchise or expand.' },
  { name: 'Education', Icon: GraduationCap, description: 'Ed-tech, coaching, preschools, and skill development brands.' },
  { name: 'Retail', Icon: ShoppingCart, description: 'Single and multi-brand retail, specialty stores, and retail franchise models.' },
  { name: 'Healthcare', Icon: HeartPulse, description: 'Clinics, diagnostics, wellness centers, and healthcare delivery brands.' },
  { name: 'Beauty & Wellness', Icon: Sparkles, description: 'Salons, spas, beauty chains, and wellness franchises.' },
  { name: 'Manufacturing', Icon: Factory, description: 'B2B manufacturing and B2B brands seeking growth and channel expansion.' },
  { name: 'Services', Icon: Settings, description: 'Professional services, facility management, and B2B service brands.' },
];

export default function IndustriesPage() {
  return (
    <>
      <PageBanner
        title="Industries We Serve"
        subtitle="We work across sectors to help brands scale, franchise, and grow. Our expertise spans F&B, education, retail, healthcare, beauty & wellness, manufacturing, and services."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Industries' }]}
      />

      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-b from-white to-[#F8F8F8] py-16 sm:py-24"
      >
        <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ name, Icon, description }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl p-[1px] bg-gradient-to-br from-[#F2C94C]/30 via-white to-[#4F4F4F]/10"
              >
                <div className="min-w-0 rounded-2xl border border-white/40 bg-white/70 p-5 shadow-lg backdrop-blur-xl transition-all duration-300 hover:shadow-xl sm:p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#F2C94C]/15 text-[#4F4F4F]">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h2 className="mt-4 font-heading text-lg font-semibold text-[#4F4F4F] sm:text-xl">{name}</h2>
                  <p className="mt-3 min-w-0 break-words text-sm leading-relaxed text-[#4F4F4F]/80">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#F8F8F8] py-16"
      >
        <div className="mx-auto min-w-0 max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="break-words text-lg text-[#4F4F4F]/90">
            Your industry not listed? We often work with adjacent sectors. <Link href="/contact" className="font-semibold text-[#F2C94C] hover:underline">Get in touch</Link> to discuss your requirements.
          </p>
        </div>
      </motion.section>
    </>
  );
}
