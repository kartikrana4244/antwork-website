'use client';

import { motion } from 'framer-motion';

export default function GoldDivider() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="h-px w-full origin-left"
      style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(242,201,76,0.4) 30%, rgba(242,201,76,0.4) 70%, transparent 100%)',
      }}
      aria-hidden="true"
    />
  );
}
