'use client';

import { motion } from 'framer-motion';

const orbs = [
  { size: 420, x: '-5%', y: '8%', delay: 0, duration: 22 },
  { size: 350, x: '85%', y: '15%', delay: 3, duration: 26 },
  { size: 300, x: '60%', y: '55%', delay: 6, duration: 20 },
  { size: 260, x: '10%', y: '70%', delay: 2, duration: 24 },
  { size: 200, x: '75%', y: '80%', delay: 8, duration: 18 },
];

export default function FloatingOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, rgba(242,201,76,0.04) 0%, rgba(242,201,76,0.01) 40%, transparent 70%)`,
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 30, -20, 15, 0],
            y: [0, -25, 15, -10, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1] as const,
          }}
        />
      ))}
    </div>
  );
}
