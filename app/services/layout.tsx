import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Franchise Development Services India | AntWork Consultants",
  description:
    "Complete franchise development services including franchise consulting, franchise expansion, exhibition management, business resale and M&A advisory for brands across India.",
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children;
}
