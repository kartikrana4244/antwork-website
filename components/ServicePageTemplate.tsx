import Link from 'next/link';

type FAQItem = { question: string; answer: string };

type ServicePageTemplateProps = {
  title: string;
  heroTitle: string;
  heroSubtitle?: string;
  overview: React.ReactNode;
  processSteps?: string[];
  servicesList?: string[];
  focusAreas?: string[];
  whyChooseUs?: string[];
  faqs?: FAQItem[];
  ctaTitle: string;
  ctaHref?: string;
  highlight?: string; // e.g. "100% Confidentiality"
};

export default function ServicePageTemplate({
  title,
  heroTitle,
  heroSubtitle,
  overview,
  processSteps,
  servicesList,
  focusAreas,
  whyChooseUs,
  faqs,
  ctaTitle,
  ctaHref = '/contact',
  highlight,
}: ServicePageTemplateProps) {
  const list = processSteps ?? servicesList ?? focusAreas ?? [];

  return (
    <>
      {/* Hero */}
      <section className="bg-[#4F4F4F] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/80" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#F2C94C]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-[#F2C94C]">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{title}</span>
          </nav>
          <div className="mt-4 h-1 w-16 bg-[#F2C94C]" aria-hidden="true" />
          <h1 className="mt-6 font-heading text-4xl font-bold text-white sm:text-5xl">
            {heroTitle}
          </h1>
          {heroSubtitle && <p className="mt-3 text-lg text-white/90">{heroSubtitle}</p>}
          {highlight && (
            <p className="mt-4 inline-block rounded-xl bg-[#F2C94C] px-4 py-2 font-semibold text-[#4F4F4F]">
              {highlight}
            </p>
          )}
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-[#4F4F4F]">Overview</h2>
          <div className="mt-6 text-lg leading-relaxed text-[#4F4F4F]/90">{overview}</div>
        </div>
      </section>

      {/* Process / Services / Focus */}
      {list.length > 0 && (
        <section className="bg-[#F8F8F8] py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-[#4F4F4F]">
              {processSteps ? 'Our Process' : servicesList ? 'Services' : 'Focus Areas'}
            </h2>
            <ol className="mt-8 space-y-4">
              {list.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F2C94C] text-sm font-bold text-[#4F4F4F]">
                    {i + 1}
                  </span>
                  <span className="text-[#4F4F4F]/90">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      {whyChooseUs && whyChooseUs.length > 0 && (
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-[#4F4F4F]">Why Choose Us</h2>
            <ul className="mt-8 list-inside list-disc space-y-3 text-[#4F4F4F]/90">
              {whyChooseUs.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs && faqs.length > 0 && (
        <section className="bg-[#F8F8F8] py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-[#4F4F4F]">Frequently Asked Questions</h2>
            <div className="mt-8 space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group rounded-lg border border-gray-200 bg-white p-4">
                  <summary className="cursor-pointer font-semibold text-[#4F4F4F]">{faq.question}</summary>
                  <p className="mt-3 text-[#4F4F4F]/80">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#4F4F4F] py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-white">Ready to get started?</h2>
          <Link href={ctaHref} className="btn-primary mt-6 rounded-xl px-8 py-4">
            {ctaTitle}
          </Link>
        </div>
      </section>
    </>
  );
}
