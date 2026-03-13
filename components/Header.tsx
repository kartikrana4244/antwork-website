'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { href: '/services', label: 'Our Services' },
  { href: '/about', label: 'About' },
  { href: '/investor-zone', label: 'Investors' },
  { href: '/contact', label: 'Contact' },
];

function isActive(href: string, pathname: string) {
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[rgba(242,201,76,0.1)] bg-[rgba(10,10,10,0.8)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="AntWork Consultants LLP Home">
          <Image
            src="/logo-antwork.svg"
            alt="AntWork Consultants LLP logo"
            width={320}
            height={80}
            priority
            className="h-[40px] w-auto object-contain sm:h-[60px] lg:h-[72px]"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navLinks.map((item) => {
            const active = isActive(item.href, pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                <span>{item.label}</span>
                <span
                  className={`absolute inset-x-0 -bottom-1 h-[2px] origin-left bg-[#F2C94C] transition-transform duration-200 ${
                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center lg:flex">
          <Link
            href="/contact"
            className="rounded-md bg-[#F2C94C] px-5 py-2 text-sm font-semibold text-[#0A0A0A] shadow-sm transition-transform transition-colors duration-200 hover:scale-[1.02] hover:bg-[#E0B429]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="border-t border-[rgba(242,201,76,0.12)] bg-[rgba(10,10,10,0.9)] backdrop-blur-xl lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="space-y-1 px-4 py-3 sm:px-6">
              {navLinks.map((item) => {
                const active = isActive(item.href, pathname);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between rounded-md px-2 py-2 text-sm font-medium ${
                      active ? 'text-[#F2C94C]' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex w-full items-center justify-center rounded-md bg-[#F2C94C] px-4 py-2 text-sm font-semibold text-[#0A0A0A] transition-transform duration-200 hover:scale-[1.02] hover:bg-[#E0B429]"
              >
                Get Started
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
