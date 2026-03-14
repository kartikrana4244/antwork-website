'use client';

import Link from 'next/link';
import Image from 'next/image';
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
import PageHero from '@/components/PageHero';

const industries = [
  { name: 'F&B', Icon: UtensilsCrossed, description: 'Restaurants, QSR, cloud kitchens, and F&B brands looking to franchise or expand.', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=75' },
  { name: 'Education', Icon: GraduationCap, description: 'Ed-tech, coaching, preschools, and skill development brands.', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=75' },
  { name: 'Retail', Icon: ShoppingCart, description: 'Single and multi-brand retail, specialty stores, and retail franchise models.', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=75' },
  { name: 'Healthcare', Icon: HeartPulse, description: 'Clinics, diagnostics, wellness centers, and healthcare delivery brands.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=75' },
  { name: 'Beauty & Wellness', Icon: Sparkles, description: 'Salons, spas, beauty chains, and wellness franchises.', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=75' },
  { name: 'Manufacturing', Icon: Factory, description: 'B2B manufacturing and B2B brands seeking growth and channel expansion.', image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=75' },
  { name: 'Services', Icon: Settings, description: 'Professional services, facility management, and B2B service brands.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=75' },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries We Serve"
        subtitle="We work across sectors to help brands scale, franchise, and grow."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Industries' }]}
      />

      <section className="relative overflow-hidden bg-white py-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_20%,rgba(242,201,76,0.05),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ name, Icon, description, image }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as const }}
                className="group relative overflow-hidden rounded-2xl border border-[#e8e8e8] bg-white transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] hover:border-[#F2C94C]/50 hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)]"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image src={image} alt="" fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#F2C94C] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(242,201,76,0.4)]">
                    <Icon className="h-5 w-5 text-[#1A1A1A] transition-transform duration-300 group-hover:rotate-[-8deg]" strokeWidth={2} aria-hidden />
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-lg font-bold text-[#1A1A1A] sm:text-xl">{name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#666]">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1A1A1A] py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(242,201,76,0.04),transparent)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F2C94C]/20 to-transparent" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-white/55"
          >
            Your industry not listed? We often work with adjacent sectors.{' '}
            <Link href="/contact" className="font-semibold text-[#F2C94C] transition-colors hover:text-[#E0B429]">
              Get in touch
            </Link>{' '}
            to discuss your requirements.
          </motion.p>
        </div>
      </section>
    </>
  );
}
