import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import StatsBar from '@/components/StatsBar';
import AboutSnapshot from '@/components/AboutSnapshot';
import ServicesGrid from '@/components/ServicesGrid';
import HowWeWork from '@/components/HowWeWork';
import IndustriesStrip from '@/components/IndustriesStrip';
import CTABanner from '@/components/CTABanner';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'AntWork Consultants LLP is a growth-focused consulting firm specializing in franchise consulting, franchise expansion, exhibition management, business resale, mergers and acquisitions, and B2B strategic consulting across India.',
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <AboutSnapshot />
      <ServicesGrid />
      <HowWeWork />
      <IndustriesStrip />
      <CTABanner />
      <Testimonials />
    </>
  );
}
