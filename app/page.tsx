import type { Metadata } from 'next';
import HomeHero from '@/components/HomeHero';
import StatsBar from '@/components/StatsBar';
import AboutSnapshot from '@/components/AboutSnapshot';
import ExperienceStrip from '@/components/ExperienceStrip';
import ServicesGrid from '@/components/ServicesGrid';
import HowWeWork from '@/components/HowWeWork';
import IndustriesStrip from '@/components/IndustriesStrip';
import CTABanner from '@/components/CTABanner';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title: 'Franchise Consulting in India | AntWork Consultants LLP',
  description:
    "India's leading franchise consulting firm helping brands expand through franchise routes. 1600+ brands in pipeline, 32 cities, 2500+ deals facilitated.",
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <StatsBar />
      <AboutSnapshot />
      <ExperienceStrip />
      <ServicesGrid />
      <HowWeWork />
      <IndustriesStrip />
      <CTABanner />
      <Testimonials />
    </>
  );
}
