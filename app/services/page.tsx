import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'AntWork offers franchise consulting, franchise expansion, exhibition management, business resale, M&A advisory, and B2B strategic consulting. End-to-end growth solutions.',
};

const services = [
  { href: '/services/franchise-consulting', title: 'Franchise Consulting', description: 'Convert your business into a scalable franchise model with structured systems and documentation.' },
  { href: '/services/franchise-expansion', title: 'Franchise Expansion', description: 'Scale your franchise across cities and regions with territory planning and investor matching.' },
  { href: '/services/exhibition-management', title: 'Exhibition & Fest Management', description: 'Showcase your brand at high-impact business exhibitions and networking events.' },
  { href: '/services/business-resale', title: 'Business Resale', description: 'Smooth, confidential resale of running businesses with end-to-end deal support.' },
  { href: '/services/mergers-acquisitions', title: 'Mergers & Acquisitions', description: 'Strategic M&A advisory with top-notch confidentiality and deal structuring.' },
  { href: '/services/b2b-consulting', title: 'B2B Strategic Consulting', description: 'Result-oriented growth strategies, market entry, and operational efficiency.' },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#4F4F4F] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/80" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#F2C94C]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Services</span>
          </nav>
          <div className="mt-4 h-1 w-16 bg-[#F2C94C]" aria-hidden="true" />
          <h1 className="mt-6 font-heading text-4xl font-bold text-white sm:text-5xl">Our Services</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            End-to-end consulting solutions to help your brand scale, expand, and succeed. From franchise development to M&A and exhibitions, we deliver ethical, result-driven advisory.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-xl border border-gray-200 bg-[#F8F8F8] p-6 shadow-sm transition-all hover:border-[#F2C94C] hover:shadow-md"
              >
                <h2 className="font-heading text-xl font-semibold text-[#4F4F4F] group-hover:text-[#F2C94C]">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm text-[#4F4F4F]/80">{service.description}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#F2C94C] group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
