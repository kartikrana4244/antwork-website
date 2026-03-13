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
    <footer className="min-w-0 overflow-x-hidden bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div className="min-w-0 space-y-4">
            <Link
              href="/"
              className="inline-block font-heading text-xl font-bold sm:text-2xl"
              aria-label="AntWork Home"
            >
              <span className="text-[#F2C94C]">Ant</span>
              <span className="text-white">Work</span>
              <span className="ml-1 align-middle text-xs font-normal text-[#A0A0A0] sm:text-sm">
                Consultants LLP
              </span>
            </Link>
            <p className="break-words text-sm leading-relaxed text-[#A0A0A0]">
              AntWork Consultants LLP is a growth-based consulting firm helping brands expand through
              franchise routes, business resale, and exhibitions. Ethical Excellence in every engagement.
            </p>
            <div className="pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F2C94C]">
                Newsletter
              </h4>
              <form
                className="mt-3 flex min-h-[44px] flex-col gap-2 sm:flex-row"
                onSubmit={(e) => e.preventDefault()}
                aria-label="Newsletter signup"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="min-h-[44px] flex-1 rounded border border-[rgba(242,201,76,0.25)] bg-[#111111] px-3 py-2 text-sm text-white placeholder-[#555] focus:border-[#F2C94C] focus:outline-none focus:ring-1 focus:ring-[#F2C94C]"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="min-h-[44px] shrink-0 rounded-sm bg-[#F2C94C] px-4 py-2 text-sm font-semibold text-[#0A0A0A] transition-transform transition-colors duration-200 hover:scale-[1.02] hover:bg-[#E0B429]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Company / Quick Links */}
          <div className="min-w-0">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F2C94C]">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A0A0A0] transition-colors hover:text-[#F2C94C]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="min-w-0">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F2C94C]">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A0A0A0] transition-colors hover:text-[#F2C94C]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div className="min-w-0 space-y-6">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F2C94C]">
                Contact
              </h3>
              <address className="mt-4 space-y-2 text-sm not-italic text-[#A0A0A0]">
                <p>AntWork Consultants LLP</p>
                <p>India</p>
                <div className="pt-2 space-y-1">
                  <p className="text-xs uppercase tracking-wide text-[#666]">Primary Email</p>
                  <p>
                    <a
                      href="mailto:office@antworkconsultants.com"
                      className="break-words text-sm text-[#A0A0A0] transition-colors hover:text-[#F2C94C]"
                    >
                      office@antworkconsultants.com
                    </a>
                  </p>
                  <p className="pt-1 text-xs uppercase tracking-wide text-[#666]">Alternate Email</p>
                  <p>
                    <a
                      href="mailto:antworkconsultants@gmail.com"
                      className="break-words text-sm text-[#A0A0A0] transition-colors hover:text-[#F2C94C]"
                    >
                      antworkconsultants@gmail.com
                    </a>
                  </p>
                  <p className="pt-1 text-xs uppercase tracking-wide text-[#666]">Phone</p>
                  <p>
                    <a
                      href="tel:+919217167326"
                      className="text-sm text-[#A0A0A0] transition-colors hover:text-[#F2C94C]"
                    >
                      +91 9217167326
                    </a>
                  </p>
                </div>
              </address>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F2C94C]">
                Social
              </h3>
              <div className="mt-4 flex gap-4">
                <a
                  href="https://www.linkedin.com/company/antwork-consultants/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A0A0A0] transition-colors hover:text-[#F2C94C]"
                  aria-label="LinkedIn"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/antworkconsultants/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A0A0A0] transition-colors hover:text-[#F2C94C]"
                  aria-label="Instagram"
                >
                  <svg className="h-7 w-7 -translate-y-[1px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[rgba(242,201,76,0.15)] pt-6 sm:mt-12">
          <div className="flex flex-col items-center gap-4 text-center text-xs text-[#666] sm:flex-row sm:justify-between sm:text-sm">
            <p>© 2026 AntWork Consultants LLP. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link href="/privacy" className="transition-colors hover:text-[#F2C94C]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-[#F2C94C]">
                Terms
              </Link>
              <Link href="/disclaimer" className="transition-colors hover:text-[#F2C94C]">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
