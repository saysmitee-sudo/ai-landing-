"use client";

import { motion, useReducedMotion } from "framer-motion";

type GradientBlobProps = {
  className?: string;
  duration?: number;
};

export function GradientBlob({
  className = "",
  duration = 10,
}: GradientBlobProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      animate={
        shouldReduceMotion
          ? undefined
          : {
              x: [0, 18, -8, 0],
              y: [0, -16, 12, 0],
              scale: [1, 1.05, 0.98, 1],
            }
      }
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
