import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AntWork Consultants LLP, our mission, leadership, and expertise in franchise consulting, business expansion, and strategic advisory across India.",
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
