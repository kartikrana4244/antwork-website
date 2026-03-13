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
import GoldDivider from '@/components/GoldDivider';

const industries = [
  {
    name: 'F&B',
    Icon: UtensilsCrossed,
    description: 'Restaurants, QSR, cloud kitchens, and F&B brands looking to franchise or expand.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400',
  },
  {
    name: 'Education',
    Icon: GraduationCap,
    description: 'Ed-tech, coaching, preschools, and skill development brands.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400',
  },
  {
    name: 'Retail',
    Icon: ShoppingCart,
    description: 'Single and multi-brand retail, specialty stores, and retail franchise models.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
  },
  {
    name: 'Healthcare',
    Icon: HeartPulse,
    description: 'Clinics, diagnostics, wellness centers, and healthcare delivery brands.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400',
  },
  {
    name: 'Beauty & Wellness',
    Icon: Sparkles,
    description: 'Salons, spas, beauty chains, and wellness franchises.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400',
  },
  {
    name: 'Manufacturing',
    Icon: Factory,
    description: 'B2B manufacturing and B2B brands seeking growth and channel expansion.',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400',
  },
  {
    name: 'Services',
    Icon: Settings,
    description: 'Professional services, facility management, and B2B service brands.',
    image: '',
  },
];

export default function IndustriesPage() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      <PageHero
        title="Industries We Serve"
        subtitle="We work across sectors to help brands scale, franchise, and grow. Our expertise spans F&B, education, retail, healthcare, beauty & wellness, manufacturing, and services."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Industries' }]}
      />

      <GoldDivider />

      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden bg-[#0A0A0A] py-16 sm:py-24"
      >
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920"
          alt=""
          fill
          className="pointer-events-none object-cover opacity-[0.03]"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" aria-hidden="true" />
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(242,201,76,0.05)_0%,transparent_70%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(242,201,76,0.04)_0%,transparent_70%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ name, Icon, description, image }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-[rgba(242,201,76,0.12)] bg-[rgba(255,255,255,0.02)] p-5 backdrop-blur-sm transition-all duration-300 hover:border-[rgba(242,201,76,0.4)] hover:shadow-[0_0_30px_rgba(242,201,76,0.08)] sm:p-6"
              >
                {image && (
                  <Image
                    src={image}
                    alt=""
                    fill
                    className="pointer-events-none object-cover opacity-[0.06] transition-opacity duration-300 group-hover:opacity-[0.12]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}
                <div className="relative">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[rgba(242,201,76,0.1)] text-[#F2C94C]">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h2 className="mt-4 font-heading text-lg font-semibold text-white sm:text-xl">{name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#A0A0A0]">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <GoldDivider />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden bg-[#111111] py-16"
      >
        <div className="pointer-events-none absolute right-0 bottom-0 h-[300px] w-[300px] bg-[radial-gradient(circle,rgba(242,201,76,0.04)_0%,transparent_70%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg text-[#A0A0A0]">
            Your industry not listed? We often work with adjacent sectors.{' '}
            <Link href="/contact" className="font-semibold text-[#F2C94C] transition-colors hover:text-[#E0B429]">
              Get in touch
            </Link>{' '}
            to discuss your requirements.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
