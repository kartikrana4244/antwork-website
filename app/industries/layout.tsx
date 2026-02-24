import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Discover the industries AntWork Consultants LLP serves, including F&B, education, retail, healthcare, beauty & wellness, manufacturing, and services across India.",
};

export default function IndustriesLayout({ children }: { children: ReactNode }) {
  return children;
}
