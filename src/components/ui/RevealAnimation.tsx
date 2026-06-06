"use client";

import React from 'react';
import { motion, type MotionProps } from 'framer-motion';

type RevealAnimationProps = {
  children: React.ReactNode;
  variant?: 'fadeUp' | 'slideFade' | 'staggerChildren' | 'fadeUpFast';
  delayMs?: number;
  className?: string;
};

const baseTransition: MotionProps['transition'] = {
  duration: 0.65,
  ease: 'easeOut',
};

export default function RevealAnimation({
  children,
  variant = 'fadeUp',
  delayMs = 0,
  className,
}: RevealAnimationProps) {
  const initial =
    variant === 'slideFade'
      ? { opacity: 0, y: 18 }
      : variant === 'fadeUpFast'
        ? { opacity: 0, y: 10 }
        : { opacity: 0, y: 16 };

  const whileInView = { opacity: 1, y: 0 };

  // For staggerChildren we switch to a parent variant.
  if (variant === 'staggerChildren') {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: delayMs / 1000 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ ...baseTransition, delay: delayMs / 1000 }}
    >
      {children}
    </motion.div>
  );
}

