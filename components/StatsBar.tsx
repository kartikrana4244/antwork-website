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

function StatCard({
  value,
  suffix,
  label,
  start,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
  index: number;
}) {
  const count = useCountUp(value, 2200, start);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={start ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] as const }}
      className="text-center"
    >
      <p className="font-heading text-3xl font-bold text-[#F2C94C] sm:text-4xl lg:text-5xl">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="mt-2 text-xs font-medium uppercase tracking-widest text-[#A0A0A0] sm:text-sm">
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
      className="relative overflow-hidden border-y border-[rgba(242,201,76,0.15)] bg-[#111111] py-12 sm:py-16 lg:py-20"
      aria-label="Key statistics"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] bg-[radial-gradient(circle,rgba(242,201,76,0.04)_0%,transparent_70%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              start={inView}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
