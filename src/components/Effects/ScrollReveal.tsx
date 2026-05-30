"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { usePerformance } from "@/contexts/PerformanceContext";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  once?: boolean;
}

const directionOffsets = {
  up: { y: 32 },
  down: { y: -32 },
  left: { x: 32 },
  right: { x: -32 },
};

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.8,
  once = true,
}: ScrollRevealProps) {
  const profile = usePerformance();

  const animateMotion =
    profile.tier === "cinematic" && !profile.reduceMotion;

  if (!animateMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = directionOffsets[direction];
  const fullClass = className.includes("h-full")
    ? `${className} h-full w-full`
    : className;

  return (
    <motion.div
      className={fullClass}
      initial={{ opacity: 1, x: 0, y: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.12, margin: "0px 0px -60px 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
