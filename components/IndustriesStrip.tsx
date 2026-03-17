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
  {
    name: 'Food & Beverage',
    Icon: UtensilsCrossed,
    img: '/picture/food.jpg',
    description: 'Quick-service, casual and premium dining franchise formats.',
  },
  {
    name: 'Education',
    Icon: GraduationCap,
    img: '/picture/education.jpg',
    description: 'K–12, coaching, skilling and edtech institutions.',
  },
  {
    name: 'Retail & Lifestyle',
    Icon: ShoppingCart,
    img: '/picture/retail.jpg',
    description: 'Fashion, electronics and omni-channel retail brands.',
  },
  {
    name: 'Healthcare',
    Icon: HeartPulse,
    img: '/picture/healthcare.jpg',
    description: 'Clinics, diagnostics, wellness and healthcare networks.',
  },
  {
    name: 'Beauty & Wellness',
    Icon: Sparkles,
    img: '/picture/beauty.jpg',
    description: 'Salons, spas and holistic wellness concepts.',
  },
  {
    name: 'Manufacturing',
    Icon: Factory,
    img: '/picture/manufacturing.jpg',
    description: 'B2B, industrial and contract manufacturing units.',
  },
  {
    name: 'Services & B2B',
    Icon: Settings,
    img: '/picture/services.jpg',
    description: 'Professional, financial and business support services.',
  },
];

export default function IndustriesStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.02, 1, 1.02]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-16 sm:py-24" id="industries">
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
        <Image
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1920&auto=format&fit=crop&q=80"
          alt=""
          fill
          className="pointer-events-none object-cover opacity-40"
          sizes="100vw"
        />
      </motion.div>
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(242,201,76,0.16),transparent_55%),linear-gradient(to_bottom,_rgba(3,3,3,0.9),rgba(6,6,6,0.96))]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">Sectors</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
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
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
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
                <motion.div
                  className="h-full"
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                >
                  <Link
                    href="/industries"
                    className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-center shadow-[0_18px_45px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-300 hover:border-[#F2C94C]/70 hover:shadow-[0_26px_70px_rgba(0,0,0,0.7)]"
                  >
                    <div className="relative h-40 w-full overflow-hidden sm:h-44">
                      <Image
                        src={ind.img}
                        alt={ind.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between px-5 pb-5 pt-4 text-left">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F2C94C] text-[#1A1A1A] shadow-[0_0_18px_rgba(242,201,76,0.35)] transition-transform duration-300 group-hover:scale-[1.03]">
                            <ind.Icon
                              className="h-5 w-5 transition-transform duration-300 group-hover:rotate-[-4deg] group-hover:scale-[1.05]"
                              strokeWidth={1.75}
                              aria-hidden
                            />
                          </div>
                          <h3 className="font-heading text-base font-semibold text-white sm:text-lg">
                            {ind.name}
                          </h3>
                        </div>
                        <p className="text-sm text-white/65">{ind.description}</p>
                      </div>
                      <span className="mt-3 inline-flex items-center text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                        View sector opportunities
                        <span className="ml-1 inline-block h-px w-6 bg-white/35 transition-all duration-300 group-hover:w-9 group-hover:bg-[#F2C94C]" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
