import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "AntWork Consultants LLP | Growth Consulting & Franchise Advisory",
    template: "%s | AntWork Consultants LLP",
  },
  description:
    "AntWork Consultants LLP is India's growth consulting partner. We help brands scale through franchise expansion, business resale, exhibitions, and strategic advisory. Ethical Excellence.",
  keywords: ["franchise consulting", "business resale", "exhibitions", "M&A advisory", "India growth consulting"],
  openGraph: {
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
