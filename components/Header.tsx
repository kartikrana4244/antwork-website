'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        transparent
          ? 'bg-transparent'
          : 'bg-white/90 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="AntWork Consultants LLP Home">
          <Image
            src="/logo-antwork.svg"
            alt="AntWork Consultants LLP logo"
            width={320}
            height={80}
            priority
            className={`h-[36px] w-auto object-contain transition-all duration-500 sm:h-[50px] lg:h-[60px] ${
              transparent ? 'brightness-0 invert' : ''
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
          {navLinks.map((item) => {
            const active = isActive(item.href, pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors ${
                  transparent
                    ? 'text-white/80 hover:text-white'
                    : 'text-[#555] hover:text-[#1A1A1A]'
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`absolute inset-x-0 -bottom-1.5 h-[2px] origin-left bg-[#F2C94C] transition-transform duration-300 ${
                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center lg:flex">
          <Link
            href="/contact"
            className="group relative overflow-hidden rounded-md bg-[#F2C94C] px-6 py-2.5 text-[13px] font-semibold text-[#1A1A1A] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(242,201,76,0.3)]"
          >
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-600 group-hover:translate-x-full" />
          </Link>
        </div>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors lg:hidden ${
            transparent ? 'text-white hover:bg-white/10' : 'text-[#1A1A1A] hover:bg-black/5'
          }`}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[#eee] bg-white lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="space-y-1 px-4 py-4 sm:px-6">
              {navLinks.map((item) => {
                const active = isActive(item.href, pathname);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                      active ? 'bg-[#F2C94C]/10 text-[#F2C94C]' : 'text-[#555] hover:bg-[#f5f5f5] hover:text-[#1A1A1A]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 flex w-full items-center justify-center rounded-md bg-[#F2C94C] px-4 py-3 text-sm font-semibold text-[#1A1A1A] transition-colors hover:bg-[#E0B429]"
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
