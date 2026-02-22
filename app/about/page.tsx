import type { Metadata } from 'next';
import Link from 'next/link';
import { Scale, Search, TrendingUp, Lightbulb, Handshake } from 'lucide-react';
import LeadershipCard from '@/components/LeadershipCard';

const coreValues = [
  { Icon: Scale, title: 'Integrity' },
  { Icon: Search, title: 'Transparency' },
  { Icon: TrendingUp, title: 'Growth-Oriented Approach' },
  { Icon: Lightbulb, title: 'Innovation' },
  { Icon: Handshake, title: 'Long-Term Partnerships' },
];

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'AntWork Consultants LLP is a dynamic business advisory firm dedicated to building scalable enterprises through franchise consulting, M&A, and exhibitions. Ethical Excellence.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page Banner */}
      <section className="bg-[#4F4F4F] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/80" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#F2C94C]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">About</span>
          </nav>
          <div className="mt-4 h-1 w-16 bg-[#F2C94C]" aria-hidden="true" />
          <h1 className="mt-6 font-heading text-4xl font-bold text-white sm:text-5xl">
            About AntWork Consultants LLP
          </h1>
          <p className="mt-3 text-lg text-white/90">Ethical Excellence in Every Engagement</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="aspect-[4/3] max-w-lg overflow-hidden rounded-2xl bg-gradient-to-br from-[#F2C94C]/20 via-[#F8F8F8] to-[#4F4F4F]/10" aria-hidden="true">
              <div className="flex h-full w-full items-center justify-center">
                <div className="grid grid-cols-3 gap-2 p-8 opacity-60">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="aspect-square rounded-lg bg-[#4F4F4F]/10" />
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-[#4F4F4F]">Who We Are</h2>
              <p className="mt-6 text-lg leading-relaxed text-[#4F4F4F]/90">
                AntWork Consultants LLP is a results-driven consulting firm that accelerates brand expansion through strategic franchise partnerships. We empower investors to find their perfect match, optimize exhibition spaces, and drive M&A activity for thriving franchises and SMEs. Our growth advisory services fuel business transformation and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[#F8F8F8] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-[#4F4F4F]">Our Vision</h2>
              <p className="mt-4 leading-relaxed text-[#4F4F4F]/90">
                To become India&apos;s most trusted and result-driven business consulting firm, empowering brands and entrepreneurs to scale nationally and globally.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-[#4F4F4F]">Our Mission</h2>
              <ul className="mt-4 list-inside list-disc space-y-2 text-[#4F4F4F]/90">
                <li>Develop scalable franchise systems for emerging brands</li>
                <li>Connect investors with profitable business opportunities</li>
                <li>Support businesses in mergers, acquisitions, and strategic restructuring</li>
                <li>Organize impactful business exhibitions and networking platforms</li>
                <li>Provide result-oriented B2B growth strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-bold text-[#4F4F4F]">Core Values</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.map(({ Icon, title }) => (
              <div
                key={title}
                className="flex flex-col items-center rounded-xl border border-gray-200 bg-[#F8F8F8] p-6 text-center transition-all duration-300 hover:border-[#F2C94C]/50 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F2C94C]/15 text-[#4F4F4F]">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="mt-4 font-heading font-semibold text-[#4F4F4F]">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-[#F8F8F8] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-bold text-[#4F4F4F]">Meet Our Leaders</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <LeadershipCard
              name="Alok Tripathi"
              role="Founder & CEO"
              bio="Visionary leader driving AntWork's mission of ethical and scalable business consulting across India."
              linkedInUrl="https://www.linkedin.com/in/alok-tripathi-97718254"
            />
            <LeadershipCard
              name="Yash Sharma"
              role="Director, Exhibition"
              bio="Expert in organizing high-impact business exhibitions and connecting brands with investors."
              linkedInUrl="http://linkedin.com/in/yash-sharma-b9826021b"
            />
          </div>
        </div>
      </section>
    </>
  );
}
