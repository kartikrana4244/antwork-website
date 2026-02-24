import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore consulting services from AntWork Consultants LLP, including franchise consulting, franchise expansion, exhibition management, business resale, mergers and acquisitions, and B2B strategic consulting.",
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children;
}
