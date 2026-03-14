'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import {
  UtensilsCrossed,
  GraduationCap,
  ShoppingCart,
  HeartPulse,
  Sparkles,
  Factory,
  Settings,
} from 'lucide-react';

const industries = [
  { name: 'F&B', Icon: UtensilsCrossed, img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=75' },
  { name: 'Education', Icon: GraduationCap, img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=75' },
  { name: 'Retail', Icon: ShoppingCart, img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=75' },
  { name: 'Healthcare', Icon: HeartPulse, img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=75' },
  { name: 'Beauty & Wellness', Icon: Sparkles, img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=75' },
  { name: 'Manufacturing', Icon: Factory, img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=75' },
  { name: 'Services', Icon: Settings, img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=75' },
];

export default function IndustriesStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.02, 1, 1.02]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-14 sm:py-20" id="industries">
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
        <Image
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920"
          alt=""
          fill
          className="pointer-events-none object-cover opacity-[0.07]"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAFAFA] to-white" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">Sectors</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            Industries We Serve
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
            className="mx-auto mt-4 h-[2px] w-14 origin-center bg-[#F2C94C]"
          />
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={16}
            loop
            speed={6000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="industries-slider"
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
          >
            {industries.map((ind) => (
              <SwiperSlide key={ind.name}>
                <Link
                  href="/industries"
                  className="group relative flex aspect-[4/5] flex-col items-center justify-end overflow-hidden rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
                >
                  <Image
                    src={ind.img}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-all duration-300 group-hover:from-black/70 group-hover:via-black/20" />
                  <div className="relative z-10 w-full p-5">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F2C94C] text-[#1A1A1A] shadow-lg transition-transform duration-300 group-hover:scale-[1.03] group-hover:shadow-[0_0_20px_rgba(242,201,76,0.35)]">
                      <ind.Icon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-[1.03]" strokeWidth={1.75} aria-hidden />
                    </div>
                    <span className="font-heading text-base font-semibold text-white drop-shadow-sm sm:text-lg">
                      {ind.name}
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
