import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Investor Zone",
  description:
    "Explore AntWork Consultants LLP’s Investor Zone for curated franchise and business opportunities, transparent processes, and investment support across sectors in India.",
};

export default function InvestorZoneLayout({ children }: { children: ReactNode }) {
  return children;
}
