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

const industries = [
  { name: 'F&B', Icon: UtensilsCrossed },
  { name: 'Education', Icon: GraduationCap },
  { name: 'Retail', Icon: ShoppingCart },
  { name: 'Healthcare', Icon: HeartPulse },
  { name: 'Beauty & Wellness', Icon: Sparkles },
  { name: 'Manufacturing', Icon: Factory },
  { name: 'Services', Icon: Settings },
];

export default function IndustriesStrip() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#F8F8F8] py-16 sm:py-20"
      id="industries"
    >
      <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center font-heading text-3xl font-bold text-[#4F4F4F] sm:text-4xl"
        >
          Industries We Serve
        </motion.h2>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
            >
              <Link
                href="/industries"
                className="flex min-h-[88px] min-w-[120px] flex-col items-center justify-center rounded-xl border-2 border-transparent bg-white px-6 py-5 shadow-sm transition-colors duration-300 hover:border-[#F2C94C] hover:shadow-md sm:px-8 sm:py-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F2C94C]/15 text-[#4F4F4F]">
                  <ind.Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </div>
                <span className="mt-3 font-heading font-semibold text-[#4F4F4F]">{ind.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
