// components/ui/ScrollProgressBar.tsx
'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-emerald-500 to-[#195e49] origin-left z-[999] pointer-events-none shadow-xs"
      style={{ scaleX }}
    />
  );
};
