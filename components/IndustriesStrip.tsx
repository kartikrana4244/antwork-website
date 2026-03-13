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

const industries = [
  { name: 'F&B', Icon: UtensilsCrossed, img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=60' },
  { name: 'Education', Icon: GraduationCap, img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=60' },
  { name: 'Retail', Icon: ShoppingCart, img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=60' },
  { name: 'Healthcare', Icon: HeartPulse, img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=60' },
  { name: 'Beauty & Wellness', Icon: Sparkles, img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=60' },
  { name: 'Manufacturing', Icon: Factory, img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&q=60' },
  { name: 'Services', Icon: Settings, img: '' },
];

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function IndustriesStrip() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-20 sm:py-28" id="industries">
      <div className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(242,201,76,0.03)_0%,transparent_70%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-[48px]">
            Industries We Serve
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-[#F2C94C]" aria-hidden="true" />
        </motion.div>

        <motion.div
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {industries.map((ind) => (
            <motion.div key={ind.name} variants={cardVariant}>
              <Link
                href="/industries"
                className="group relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-[rgba(242,201,76,0.15)] bg-[rgba(255,255,255,0.03)] p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-[rgba(242,201,76,0.5)] hover:shadow-[0_0_30px_rgba(242,201,76,0.08)] sm:p-8"
              >
                {ind.img && (
                  <Image
                    src={ind.img}
                    alt=""
                    fill
                    className="pointer-events-none absolute inset-0 object-cover opacity-[0.07] transition-opacity duration-500 group-hover:opacity-[0.14]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                )}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[rgba(242,201,76,0.1)] text-[#F2C94C] transition-colors duration-300 group-hover:bg-[rgba(242,201,76,0.2)]">
                    <ind.Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
                  </div>
                  <span className="mt-4 font-heading text-base font-semibold text-white sm:text-lg">
                    {ind.name}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
