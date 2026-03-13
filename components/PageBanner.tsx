'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

type PageBannerProps = {
  title: string;
  subtitle?: string;
  breadcrumb: { label: string; href?: string }[];
  image?: string;
};

export default function PageBanner({ title, subtitle, breadcrumb, image }: PageBannerProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {image && (
        <Image
          src={image}
          alt=""
          fill
          className="pointer-events-none absolute inset-0 object-cover opacity-[0.12]"
          sizes="100vw"
          priority
        />
      )}
      <div className="absolute inset-0 bg-[#0A0A0A]" style={{ zIndex: image ? -1 : 0 }} aria-hidden="true" />
      {image && <div className="absolute inset-0 bg-[#0A0A0A]/85" aria-hidden="true" />}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_0%,rgba(242,201,76,0.08)_0%,transparent_50%)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="text-xs text-[#A0A0A0] sm:text-sm" aria-label="Breadcrumb">
          {breadcrumb.map((item, i) => (
            <span key={i}>
              {item.href ? (
                <Link href={item.href} className="transition-colors hover:text-[#F2C94C]">
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#F2C94C]">{item.label}</span>
              )}
              {i < breadcrumb.length - 1 && <span className="mx-2 text-[#555]">/</span>}
            </span>
          ))}
        </nav>
        <div className="mt-4 h-0.5 w-12 bg-[#F2C94C]" aria-hidden="true" />
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-3 max-w-2xl text-base text-[#A0A0A0] sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </motion.section>
  );
}
