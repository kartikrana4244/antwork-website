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
      className="bg-[#F8F8F8] py-16 sm:py-24"
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
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
                className="group flex min-h-[120px] min-w-[140px] flex-col items-center justify-center rounded-xl border-2 border-transparent bg-white p-6 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:border-[#F2C94C] hover:shadow-xl sm:p-7 lg:p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F2C94C]/20 text-[#4F4F4F] transition-colors duration-300 group-hover:bg-[#F2C94C]">
                  <ind.Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
                </div>
                <span className="mt-4 font-heading text-lg font-semibold text-[#4F4F4F] sm:text-xl">
                  {ind.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
