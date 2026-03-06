import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Franchise Consultants India | AntWork Consultants LLP",
  description:
    "Get in touch with India’s trusted franchise business consultants. Contact AntWork Consultants LLP for franchise consulting, franchise expansion, business resale, exhibition management and M&A advisory support.",
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
