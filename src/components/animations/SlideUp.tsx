'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  staggerChildren?: number;
}

export function SlideUp({
  children,
  delay = 0,
  className = '',
  staggerChildren = 0.1,
}: SlideUpProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideUpItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
