import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About Us | Franchise Business Consultants India | AntWork",
  description:
    "AntWork Consultants LLP is a results-driven franchise development company helping brands and investors find the right franchise and business expansion opportunities across India.",
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
