import type { Metadata } from 'next';
import Link from 'next/link';
import {
  UtensilsCrossed,
  GraduationCap,
  ShoppingCart,
  HeartPulse,
  Sparkles,
  Factory,
  Settings,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'AntWork serves F&B, education, retail, healthcare, beauty & wellness, manufacturing, and services. We help brands across sectors scale and succeed.',
};

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
      <section className="bg-[#4F4F4F] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/80" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#F2C94C]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Industries</span>
          </nav>
          <div className="mt-4 h-1 w-16 bg-[#F2C94C]" aria-hidden="true" />
          <h1 className="mt-6 font-heading text-4xl font-bold text-white sm:text-5xl">
            Industries We Serve
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            We work across sectors to help brands scale, franchise, and grow. Our expertise spans F&B, education, retail, healthcare, beauty & wellness, manufacturing, and services.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ name, Icon, description }) => (
              <div
                key={name}
                className="rounded-xl border border-gray-200 bg-[#F8F8F8] p-6 shadow-sm transition-all duration-300 hover:border-[#F2C94C]/50 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F2C94C]/15 text-[#4F4F4F]">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </div>
                <h2 className="mt-4 font-heading text-xl font-semibold text-[#4F4F4F]">{name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#4F4F4F]/80">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F8F8] py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg text-[#4F4F4F]/90">
            Your industry not listed? We often work with adjacent sectors. <Link href="/contact" className="font-semibold text-[#F2C94C] hover:underline">Get in touch</Link> to discuss your requirements.
          </p>
        </div>
      </section>
    </>
  );
}
