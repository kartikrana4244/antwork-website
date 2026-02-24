'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  {
    label: 'Services',
    children: [
      { href: '/services/franchise-consulting', label: 'Franchise Consulting' },
      { href: '/services/franchise-expansion', label: 'Franchise Expansion' },
      { href: '/services/exhibition-management', label: 'Exhibition & Fest Management' },
      { href: '/services/business-resale', label: 'Business Resale' },
      { href: '/services/mergers-acquisitions', label: 'Mergers & Acquisitions' },
      { href: '/services/b2b-consulting', label: 'B2B Strategic Consulting' },
    ],
  },
  { href: '/industries', label: 'Industries' },
  { href: '/investor-zone', label: 'Investor Zone' },
  { href: '/contact', label: 'Contact' },
];

function isActive(href: string, pathname: string) {
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href);
}

function isServicesActive(pathname: string) {
  return pathname.startsWith('/services');
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const unsub = scrollY.on('change', (v) => setScrolled(v > 20));
    return () => unsub();
  }, [scrollY]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 shadow-md backdrop-blur-xl backdrop-saturate-150'
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label="AntWork Consultants LLP Home">
          <img
            src="/logo-new.jpeg"
            alt="AntWork Consultants LLP"
            className="hidden h-[120px] max-w-full w-auto object-contain md:block"
          />
          <img
            src="/logo-new.jpeg"
            alt="AntWork Consultants LLP"
            className="block h-[60px] max-w-full w-auto object-contain md:hidden"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navLinks.map((item) =>
            'children' in item ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 font-medium transition-colors ${
                    isServicesActive(pathname) ? 'text-[#F2C94C]' : 'text-[#4F4F4F] hover:text-[#F2C94C]'
                  }`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  {item.label}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {servicesOpen && 'children' in item && item.children && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full pt-2"
                    >
                      <div className="w-56 rounded-lg border border-gray-100 bg-white py-2 shadow-lg">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-2 text-sm font-medium transition-colors hover:bg-[#F8F8F8] hover:text-[#F2C94C] ${
                              pathname === child.href ? 'bg-[#F8F8F8] text-[#F2C94C]' : 'text-[#4F4F4F]'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href, pathname) ? 'text-[#F2C94C]' : 'text-[#4F4F4F] hover:text-[#F2C94C]'
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/contact"
            className="btn-primary rounded-xl px-5 py-2.5"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile menu button - 44px min touch target */}
        <button
          type="button"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-[#4F4F4F] hover:bg-[#F8F8F8] active:bg-[#F8F8F8] lg:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-gray-100 bg-white lg:hidden"
          >
            <nav className="flex flex-col gap-0 px-4 py-4" aria-label="Mobile navigation">
              {navLinks.map((item) =>
                'children' in item ? (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`flex min-h-[44px] w-full items-center justify-between py-3 font-medium ${
                        isServicesActive(pathname) ? 'text-[#F2C94C]' : 'text-[#4F4F4F]'
                      }`}
                    >
                      {item.label}
                      <svg
                        className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {servicesOpen && 'children' in item && item.children && (
                      <div className="flex flex-col pl-4 pb-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className={`py-2 text-sm ${
                              pathname === child.href ? 'text-[#F2C94C]' : 'text-[#4F4F4F]'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex min-h-[44px] items-center py-3 font-medium ${
                      isActive(item.href, pathname) ? 'text-[#F2C94C]' : 'text-[#4F4F4F]'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-4 flex min-h-[44px] items-center justify-center rounded-xl px-5 py-3 text-center"
              >
                Book Consultation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
