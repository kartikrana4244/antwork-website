'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

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

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Footer() {
  return (
    <footer className="min-w-0 overflow-x-hidden bg-[#111111] text-white">
      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-[#F2C94C]/20 to-transparent" />
      <motion.div
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={fadeUp} className="min-w-0 space-y-5">
            <Link href="/" className="inline-block font-heading text-xl font-bold sm:text-2xl" aria-label="AntWork Home">
              <span className="text-[#F2C94C]">Ant</span>
              <span className="text-white">Work</span>
              <span className="ml-1.5 align-middle text-xs font-normal text-white/40 sm:text-sm">Consultants LLP</span>
            </Link>
            <p className="break-words text-sm leading-relaxed text-white/40">
              AntWork Consultants LLP is a growth-based consulting firm helping brands expand through
              franchise routes, business resale, and exhibitions. Ethical Excellence in every engagement.
            </p>
            <div className="pt-1">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">Newsletter</p>
              <form className="mt-3 flex min-h-[44px] flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()} aria-label="Newsletter signup">
                <input
                  type="email"
                  placeholder="Your email"
                  className="min-h-[44px] flex-1 rounded-md border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-white/25 transition-all duration-300 focus:border-[#F2C94C] focus:outline-none focus:ring-1 focus:ring-[#F2C94C]/30 focus:shadow-[0_0_12px_rgba(242,201,76,0.1)]"
                  aria-label="Email for newsletter"
                />
                <button type="submit" className="group relative min-h-[44px] shrink-0 overflow-hidden rounded-md bg-[#F2C94C] px-5 py-2.5 text-sm font-semibold text-[#1A1A1A] shadow-[0_1px_4px_rgba(242,201,76,0.12)] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_10px_28px_rgba(242,201,76,0.35),0_0_0_1px_rgba(242,201,76,0.15)]">
                  <span className="relative z-10">Subscribe</span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="min-w-0">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">Company</h3>
            <ul className="mt-5 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/40 transition-colors duration-200 hover:text-[#F2C94C]">{link.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="min-w-0">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">Services</h3>
            <ul className="mt-5 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/40 transition-colors duration-200 hover:text-[#F2C94C]">{link.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="min-w-0 space-y-7">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">Contact</h3>
              <address className="mt-5 space-y-2 text-sm not-italic text-white/40">
                <p className="font-medium text-white/60">AntWork Consultants LLP</p>
                <p>India</p>
                <div className="space-y-2 pt-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/20">Primary Email</p>
                  <p><a href="mailto:office@antworkconsultants.com" className="break-words transition-colors duration-200 hover:text-[#F2C94C]">office@antworkconsultants.com</a></p>
                  <p className="pt-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/20">Alternate Email</p>
                  <p><a href="mailto:antworkconsultants@gmail.com" className="break-words transition-colors duration-200 hover:text-[#F2C94C]">antworkconsultants@gmail.com</a></p>
                  <p className="pt-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/20">Phone</p>
                  <p><a href="tel:+919289228898" className="text-sm text-white/40 transition-colors duration-200 hover:text-[#F2C94C]">+91 92892 28898</a></p>
                </div>
              </address>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">Social</h3>
              <div className="mt-4 flex gap-3">
                <a href="https://www.linkedin.com/company/antwork-consultants/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F2C94C] hover:text-[#F2C94C] hover:shadow-[0_0_15px_rgba(242,201,76,0.15)]" aria-label="LinkedIn">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/antworkconsultants/?hl=en" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F2C94C] hover:text-[#F2C94C] hover:shadow-[0_0_15px_rgba(242,201,76,0.15)]" aria-label="Instagram">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61585828679019"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F2C94C] hover:text-[#F2C94C] hover:shadow-[0_0_15px_rgba(242,201,76,0.15)]"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22 12.07C22 6.52 17.52 2 12 2S2 6.52 2 12.07C2 17.1 5.66 21.29 10.44 22v-7.01H7.9v-2.92h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.58v1.9h2.78l-.44 2.92h-2.34V22C18.34 21.29 22 17.1 22 12.07z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 border-t border-white/8 pt-7"
        >
          <div className="flex flex-col items-center gap-4 text-center text-xs text-white/25 sm:flex-row sm:justify-between sm:text-sm">
            <p>© 2026 AntWork Consultants LLP. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
              <Link href="/privacy" className="transition-colors duration-200 hover:text-[#F2C94C]">Privacy Policy</Link>
              <Link href="/terms" className="transition-colors duration-200 hover:text-[#F2C94C]">Terms</Link>
              <Link href="/disclaimer" className="transition-colors duration-200 hover:text-[#F2C94C]">Disclaimer</Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
