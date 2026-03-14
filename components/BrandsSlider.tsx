'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const brands = [
  { name: 'FreshBite', logo: '/brands/brand-1.svg' },
  { name: 'UrbanNest', logo: '/brands/brand-2.svg' },
  { name: 'EduSpark', logo: '/brands/brand-3.svg' },
  { name: 'MediCare+', logo: '/brands/brand-4.svg' },
  { name: 'StyleHub', logo: '/brands/brand-5.svg' },
  { name: 'GreenLeaf', logo: '/brands/brand-6.svg' },
  { name: 'TechVista', logo: '/brands/brand-7.svg' },
  { name: 'FitZone', logo: '/brands/brand-8.svg' },
  { name: 'CaféRoast', logo: '/brands/brand-9.svg' },
  { name: 'RetailMax', logo: '/brands/brand-10.svg' },
];

export default function BrandsSlider() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-14 sm:py-16" aria-label="Brands we work with">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(242,201,76,0.04),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e8e8e8] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#e8e8e8] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-10 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">
            Trusted Partners
          </p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-[#1A1A1A] sm:text-3xl">
            Brands We Work With
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-3 h-[2px] w-12 origin-center bg-[#F2C94C]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={20}
            loop
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              480: { slidesPerView: 3, spaceBetween: 24 },
              768: { slidesPerView: 4, spaceBetween: 28 },
              1024: { slidesPerView: 5, spaceBetween: 32 },
              1280: { slidesPerView: 6, spaceBetween: 36 },
            }}
            className="brands-slider"
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.name}>
                <div className="group flex h-20 items-center justify-center rounded-xl border border-[#e8e8e8] bg-white px-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F2C94C]/40 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={140}
                    height={40}
                    className="h-8 w-auto object-contain grayscale opacity-50 transition-all duration-300 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100 sm:h-9"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
