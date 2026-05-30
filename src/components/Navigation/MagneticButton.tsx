"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { usePerformance } from "@/contexts/PerformanceContext";

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  onClick,
  className = "",
  strength = 0.3,
}: MagneticButtonProps) {
  const profile = usePerformance();
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  if (profile.tier !== "cinematic") {
    return (
      <div ref={ref} onClick={onClick} className={`inline-block ${className}`}>
        {children}
      </div>
    );
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    setPosition({ x: distX * strength, y: distY * strength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`inline-block ${className}`}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.8 }}
    >
      <motion.div
        animate={{
          scale: hovered ? 1.12 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
