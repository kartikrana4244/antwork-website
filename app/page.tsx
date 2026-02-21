import HeroSection from '@/components/HeroSection';
import StatsBar from '@/components/StatsBar';
import AboutSnapshot from '@/components/AboutSnapshot';
import ServicesGrid from '@/components/ServicesGrid';
import HowWeWork from '@/components/HowWeWork';
import IndustriesStrip from '@/components/IndustriesStrip';
import CTABanner from '@/components/CTABanner';
import Testimonials from '@/components/Testimonials';

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
