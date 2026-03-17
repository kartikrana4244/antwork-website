import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.antworkconsultants.com"),
  title: {
    default:
      "AntWork Consultants LLP | Franchise Consulting & Business Expansion India",
    template: "%s | AntWork Consultants LLP",
  },
  description:
    "AntWork Consultants LLP is India's trusted franchise consulting firm. We help brands expand through franchise development, business resale, exhibition management and M&A advisory across 32+ cities.",
  keywords: [
    "AntWork Consultants LLP",
    "Franchise Consulting India",
    "Business Expansion Consulting",
    "Franchise Consultants",
    "Exhibition Management Consulting",
    "Mergers and Acquisitions Consulting India",
    "Business Consulting India",
    "Franchise Expansion Experts",
    // Primary franchise and brand-side keywords
    "Franchise consulting in India",
    "Franchise expansion consultants",
    "Franchise business consultants",
    "Franchise development company India",
    "Brand franchise expansion services",
    "How to expand brand through franchise",
    "Franchise development services",
    // Investor-side keywords
    "Franchise investment opportunities India",
    "Best franchise opportunities in India",
    "Low investment franchise opportunities",
  ],
  authors: [{ name: "AntWork Consultants LLP" }],
  creator: "AntWork Consultants LLP",
  publisher: "AntWork Consultants LLP",
  openGraph: {
    title:
      "AntWork Consultants LLP | Franchise Consulting & Business Expansion India",
    description:
      "AntWork Consultants LLP is India's trusted franchise consulting and business expansion firm. We help brands with franchise development, franchise expansion, business resale, exhibition management and M&A advisory across 32+ cities in India.",
    url: "https://www.antworkconsultants.com",
    siteName: "AntWork Consultants LLP",
    images: [
      {
        url: "/logo-antwork.svg",
        width: 1200,
        height: 630,
        alt: "AntWork Consultants LLP",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AntWork Consultants LLP",
    description:
      "Professional consulting firm specializing in franchise consulting, expansion, and M&A advisory.",
    images: ["/logo-antwork.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AntWork Consultants LLP",
              url: "https://www.antworkconsultants.com",
              logo: "https://www.antworkconsultants.com/logo-antwork.svg",
              description:
                "AntWork Consultants LLP is India's trusted franchise consulting and business expansion firm. We help brands expand through franchise development, franchise expansion, business resale, exhibition management and M&A advisory across India.",
              email: "office@antworkconsultants.com",
              serviceArea: {
                "@type": "Country",
                name: "India",
              },
              sameAs: [
                "https://www.linkedin.com/in/alok-tripathi-97718254",
                "https://linkedin.com/in/yash-sharma-b9826021b",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "AntWork Consultants LLP Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Franchise Consulting",
                      description:
                        "Franchise consulting services to convert businesses into scalable franchise models across India.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Franchise Expansion",
                      description:
                        "Franchise expansion services to help brands grow their franchise network across Indian cities.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Exhibition Management",
                      description:
                        "Exhibition management services to help brands secure and manage premium exhibition spaces.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Business Resale",
                      description:
                        "Confidential business resale advisory services for running businesses in India.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mergers & Acquisitions",
                      description:
                        "M&A advisory services for acquisitions, mergers, and strategic transactions.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "B2B Strategic Consulting",
                      description:
                        "B2B strategic consulting services for growth, partnerships, and channel development.",
                    },
                  },
                ],
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
            }),
          }}
        />
        <link
          rel="preload"
          as="video"
          href="/videos/hero-section-video-2.mp4"
          type="video/mp4"
        />
      </head>
      <body className="min-w-0 bg-white font-sans text-[#1A1A1A] antialiased overflow-x-hidden">
        <Header />
        <PageTransition>
          <main className="min-h-screen min-w-0 overflow-x-hidden">{children}</main>
        </PageTransition>
        <Footer />
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
