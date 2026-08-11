'use client';

import { motion } from 'framer-motion';

export interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export function TextReveal({
  text,
  className = '',
  delay = 0,
  tag = 'h2',
}: TextRevealProps) {
  const words = text.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  const Tag = tag;

  return (
    <Tag className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{ display: 'inline-block', flexWrap: 'wrap' }}
      >
        {words.map((word, index) => (
          <span key={index} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.25em' }}>
            <motion.span variants={childVariants} style={{ display: 'inline-block' }}>
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
