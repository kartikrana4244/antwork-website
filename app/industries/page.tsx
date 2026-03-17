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
  {
    name: 'Food & Beverage',
    Icon: UtensilsCrossed,
    description: 'Restaurants, QSR, cloud kitchens, and F&B brands looking to franchise or expand.',
    image: '/picture/food.jpg',
  },
  {
    name: 'Education',
    Icon: GraduationCap,
    description: 'Ed-tech, coaching, preschools, and skill development brands.',
    image: '/picture/education.jpg',
  },
  {
    name: 'Retail & Lifestyle',
    Icon: ShoppingCart,
    description: 'Single and multi-brand retail, specialty stores, and retail franchise models.',
    image: '/picture/retail.jpg',
  },
  {
    name: 'Healthcare',
    Icon: HeartPulse,
    description: 'Clinics, diagnostics, wellness centers, and healthcare delivery brands.',
    image: '/picture/healthcare.jpg',
  },
  {
    name: 'Beauty & Wellness',
    Icon: Sparkles,
    description: 'Salons, spas, beauty chains, and wellness franchises.',
    image: '/picture/beauty.jpg',
  },
  {
    name: 'Manufacturing',
    Icon: Factory,
    description: 'B2B manufacturing and B2B brands seeking growth and channel expansion.',
    image: '/picture/manufacturing.jpg',
  },
  {
    name: 'Services & B2B',
    Icon: Settings,
    description: 'Professional services, facility management, and B2B service brands.',
    image: '/picture/services.jpg',
  },
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

      <section className="relative overflow-hidden bg-[#f8f9fb] py-16 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(242,201,76,0.06),transparent_55%),linear-gradient(to_bottom,#f9fafb,#edf1f7)]"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ name, Icon, description, image }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as const }}
                className="group relative overflow-hidden rounded-3xl border border-[#e5e7eb] bg-white text-[#111827] shadow-[0_14px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.015] hover:border-[#F2C94C]/60 hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)]"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/70 via-[#020617]/10 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F2C94C] text-[#111827] shadow-[0_0_18px_rgba(242,201,76,0.45)] transition-all duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-[-8deg]" strokeWidth={2} aria-hidden />
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-lg font-bold text-[#111827] sm:text-xl">{name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#4b5563]">{description}</p>
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
