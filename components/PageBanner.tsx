'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

type PageBannerProps = {
  title: string;
  subtitle?: string;
  breadcrumb: { label: string; href?: string }[];
};

export default function PageBanner({ title, subtitle, breadcrumb }: PageBannerProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
      style={{
        background: 'linear-gradient(135deg, #3d3d3d 0%, #4F4F4F 40%, #5a5a5a 100%)',
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_0%,rgba(242,201,76,0.15)_0%,transparent_50%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 min-w-0 sm:px-6 lg:px-8">
        <nav className="text-xs text-white/80 sm:text-sm" aria-label="Breadcrumb">
          {breadcrumb.map((item, i) => (
            <span key={i}>
              {item.href ? (
                <Link href={item.href} className="hover:text-[#F2C94C] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-white">{item.label}</span>
              )}
              {i < breadcrumb.length - 1 && <span className="mx-2">/</span>}
            </span>
          ))}
        </nav>
        <div className="mt-4 h-1 w-16 bg-[#F2C94C]" aria-hidden="true" />
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 break-words font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-3 break-words text-base text-white/90 sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </motion.section>
  );
}
