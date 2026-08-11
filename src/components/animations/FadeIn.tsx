'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className = '',
}: FadeInProps) {
  const getVariants = () => {
    const distance = 40;
    switch (direction) {
      case 'up':
        return { hidden: { opacity: 0, y: distance }, visible: { opacity: 1, y: 0 } };
      case 'down':
        return { hidden: { opacity: 0, y: -distance }, visible: { opacity: 1, y: 0 } };
      case 'left':
        return { hidden: { opacity: 0, x: distance }, visible: { opacity: 1, x: 0 } };
      case 'right':
        return { hidden: { opacity: 0, x: -distance }, visible: { opacity: 1, x: 0 } };
      case 'none':
      default:
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
