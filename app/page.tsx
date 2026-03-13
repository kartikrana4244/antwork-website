import type { Metadata } from 'next';
import HomeHero from '@/components/HomeHero';
import StatsBar from '@/components/StatsBar';
import AboutSnapshot from '@/components/AboutSnapshot';
import ServicesGrid from '@/components/ServicesGrid';
import HowWeWork from '@/components/HowWeWork';
import IndustriesStrip from '@/components/IndustriesStrip';
import CTABanner from '@/components/CTABanner';
import Testimonials from '@/components/Testimonials';
import CursorGlow from '@/components/CursorGlow';
import GoldDivider from '@/components/GoldDivider';

export const metadata: Metadata = {
  title: 'Franchise Consulting in India | AntWork Consultants LLP',
  description:
    "India's leading franchise consulting firm helping brands expand through franchise routes. 1600+ brands in pipeline, 32 cities, 2500+ deals facilitated.",
};

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] text-white">
      <CursorGlow />
      <HomeHero />
      <GoldDivider />
      <StatsBar />
      <GoldDivider />
      <AboutSnapshot />
      <GoldDivider />
      <ServicesGrid />
      <GoldDivider />
      <HowWeWork />
      <GoldDivider />
      <IndustriesStrip />
      <GoldDivider />
      <CTABanner />
      <GoldDivider />
      <Testimonials />
    </main>
  );
}
