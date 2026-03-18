"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  index?: number;
  className?: string;
}

export function AnimatedCard({ children, index = 0, className = "" }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className={`relative rounded-2xl border border-border-subtle bg-bg-secondary/60 backdrop-blur-sm p-8 hover:border-border-accent transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
