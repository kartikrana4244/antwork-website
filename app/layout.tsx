import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.antworkconsultants.com"),
  title: {
    default: "AntWork Consultants LLP | Franchise Consulting & Business Expansion",
    template: "%s | AntWork Consultants LLP",
  },
  description:
    "AntWork Consultants LLP is a growth-focused consulting firm helping brands expand through franchise consulting, exhibition management, business resale, and mergers & acquisitions across India.",
  keywords: [
    "AntWork Consultants LLP",
    "Franchise Consulting India",
    "Business Expansion Consulting",
    "Franchise Consultants",
    "Exhibition Management Consulting",
    "Mergers and Acquisitions Consulting India",
    "Business Consulting India",
    "Franchise Expansion Experts",
  ],
  authors: [{ name: "AntWork Consultants LLP" }],
  creator: "AntWork Consultants LLP",
  publisher: "AntWork Consultants LLP",
  openGraph: {
    title: "AntWork Consultants LLP",
    description:
      "Growth-focused consulting firm helping brands expand, scale, and succeed through franchise consulting and strategic advisory.",
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
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
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
              email: "office@antworkconsultants.com",
              telephone: "+91 9217167326",
              sameAs: [
                "https://www.linkedin.com/in/alok-tripathi-97718254",
                "https://linkedin.com/in/yash-sharma-b9826021b",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body className="min-w-0 font-sans antialiased overflow-x-hidden">
        <Header />
        <main className="min-h-screen min-w-0 overflow-x-hidden">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
