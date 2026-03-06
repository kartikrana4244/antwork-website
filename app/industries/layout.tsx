import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Franchise Development Company India | Industries We Serve",
  description:
    "AntWork Consultants LLP is a franchise development company in India serving F&B, education, retail, healthcare, beauty & wellness, manufacturing and services brands with expert franchise consulting and expansion support.",
};

export default function IndustriesLayout({ children }: { children: ReactNode }) {
  return children;
}
