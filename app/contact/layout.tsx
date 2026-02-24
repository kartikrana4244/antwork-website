import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact AntWork Consultants LLP for franchise consulting, business resale, exhibition management, mergers and acquisitions, and strategic growth advisory.",
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
