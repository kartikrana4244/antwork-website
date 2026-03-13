'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function useCountUp(end: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - (1 - progress) ** 4;
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

function StatCard({ value, suffix, label, start, index }: { value: number; suffix: string; label: string; start: boolean; index: number }) {
  const count = useCountUp(value, 2400, start);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={start ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] as const }}
      className="relative text-center"
    >
      <p className="font-heading text-5xl font-extrabold text-white drop-shadow-md sm:text-6xl lg:text-7xl">
        {count.toLocaleString()}{suffix}
      </p>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={start ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 + index * 0.2, ease: [0.22, 1, 0.36, 1] as const }}
        className="mx-auto mt-4 h-[2px] w-10 origin-center bg-[#F2C94C]"
      />
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/70 sm:text-sm">
        {label}
      </p>
    </motion.div>
  );
}

const stats = [
  { value: 1600, suffix: '+', label: 'Brands in Pipeline' },
  { value: 32, suffix: '', label: 'Cities' },
  { value: 2500, suffix: '+', label: 'Deals Facilitated' },
];

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-12"
      aria-label="Key statistics"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} start={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
