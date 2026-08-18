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
    const distance = 80;
    switch (direction) {
      case 'up':
        return { hidden: { opacity: 0, y: distance, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1 } };
      case 'down':
        return { hidden: { opacity: 0, y: -distance, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1 } };
      case 'left':
        return { hidden: { opacity: 0, x: distance, scale: 0.9 }, visible: { opacity: 1, x: 0, scale: 1 } };
      case 'right':
        return { hidden: { opacity: 0, x: -distance, scale: 0.9 }, visible: { opacity: 1, x: 0, scale: 1 } };
      case 'none':
      default:
        return { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, type: "spring", bounce: 0.4 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
