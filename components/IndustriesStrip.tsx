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
  { name: 'F&B', Icon: UtensilsCrossed, img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=75' },
  { name: 'Education', Icon: GraduationCap, img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=75' },
  { name: 'Retail', Icon: ShoppingCart, img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=75' },
  { name: 'Healthcare', Icon: HeartPulse, img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=75' },
  { name: 'Beauty & Wellness', Icon: Sparkles, img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=75' },
  { name: 'Manufacturing', Icon: Factory, img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=75' },
  { name: 'Services', Icon: Settings, img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=75' },
];

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function IndustriesStrip() {
  return (
    <section className="bg-white py-24 sm:py-32" id="industries">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">Sectors</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            Industries We Serve
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-4 h-[2px] w-14 origin-center bg-[#F2C94C]"
          />
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {industries.map((ind) => (
            <motion.div key={ind.name} variants={cardVariant}>
              <Link
                href="/industries"
                className="group relative flex aspect-[4/5] flex-col items-center justify-end overflow-hidden rounded-2xl text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)]"
              >
                <Image
                  src={ind.img}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-colors group-hover:from-black/70" />
                <div className="relative z-10 w-full p-5">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F2C94C] text-[#1A1A1A] shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <ind.Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </div>
                  <span className="font-heading text-base font-semibold text-white sm:text-lg">
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
