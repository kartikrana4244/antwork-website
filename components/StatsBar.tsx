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
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <p className="font-heading text-3xl font-bold text-[#F2C94C] sm:text-4xl">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="mt-1 text-sm font-medium text-white/90">{label}</p>
    </motion.div>
  );
}

const stats = [
  { value: 1600, suffix: '+', label: 'Brands in Pipeline' },
  { value: 32, suffix: '', label: 'Cities' },
  { value: 2500, suffix: '+', label: 'Deals Facilitated' },
  { value: 6, suffix: '', label: 'Core Services' },
];

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="bg-[#4F4F4F] py-12 sm:py-16"
      aria-label="Key statistics"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
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
    </motion.section>
  );
}
