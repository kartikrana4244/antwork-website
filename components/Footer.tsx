'use client';

import Link from 'next/link';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/investor-zone', label: 'Investor Zone' },
  { href: '/contact', label: 'Contact' },
];

const serviceLinks = [
  { href: '/services/franchise-consulting', label: 'Franchise Consulting' },
  { href: '/services/franchise-expansion', label: 'Franchise Expansion' },
  { href: '/services/exhibition-management', label: 'Exhibition Management' },
  { href: '/services/business-resale', label: 'Business Resale' },
  { href: '/services/mergers-acquisitions', label: 'M&A Advisory' },
  { href: '/services/b2b-consulting', label: 'B2B Consulting' },
];

export default function Footer() {
  return (
    <footer className="min-w-0 overflow-x-hidden bg-[#2D2D2D] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Snapshot */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4 font-heading text-lg font-bold sm:text-xl" aria-label="AntWork Home">
              <span className="text-[#F2C94C]">Ant</span><span className="text-white">Work</span>
              <span className="ml-1 text-xs font-normal text-gray-400 sm:text-sm">Consultants LLP</span>
            </Link>
            <p className="break-words text-sm leading-relaxed text-gray-300">
              AntWork Consultants LLP is a growth-based consulting firm helping brands expand through franchise routes, business resale, and exhibitions. Ethical Excellence in every engagement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-[#F2C94C]">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 transition-colors hover:text-[#F2C94C]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-[#F2C94C]">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 transition-colors hover:text-[#F2C94C]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-[#F2C94C]">Contact</h3>
            <address className="not-italic text-sm text-gray-300">
              <p>AntWork Consultants LLP</p>
              <p className="mt-2">India</p>
              <p className="mt-2">
                <a href="mailto:info@antwork.in" className="hover:text-[#F2C94C]">info@antwork.in</a>
              </p>
              <p className="mt-2">
                <a href="tel:+919876543210" className="hover:text-[#F2C94C]">+91 98765 43210</a>
              </p>
            </address>
            <div className="mt-6">
              <h4 className="mb-2 text-sm font-medium text-white">Newsletter</h4>
              <form className="flex min-h-[44px] flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()} aria-label="Newsletter signup">
                <input
                  type="email"
                  placeholder="Your email"
                  className="min-h-[44px] flex-1 rounded border border-gray-600 bg-[#3D3D3D] px-3 py-2 text-base text-white placeholder-gray-500 focus:border-[#F2C94C] focus:outline-none focus:ring-1 focus:ring-[#F2C94C]"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="min-h-[44px] shrink-0 rounded-xl bg-[#F2C94C] px-4 py-2.5 text-sm font-semibold text-[#4F4F4F] transition-all duration-300 hover:bg-[#e5b83d] hover:shadow-md"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="mt-4 flex gap-4">
              <a
                href="https://www.linkedin.com/company/antwork"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-[#F2C94C]"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-600 pt-8 sm:mt-12">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-gray-500 sm:text-sm">© 2026 AntWork Consultants LLP. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-[#F2C94C]">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-500 hover:text-[#F2C94C]">Terms</Link>
              <Link href="/disclaimer" className="text-gray-500 hover:text-[#F2C94C]">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
