"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface DepthCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export default function DepthCard({
  children,
  className = "",
  intensity = 10,
}: DepthCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowX, setGlowX] = useState(50);
  const [glowY, setGlowY] = useState(50);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setRotateY((x - centerX) / centerX * intensity);
    setRotateX(-(y - centerY) / centerY * intensity);
    setGlowX((x / rect.width) * 100);
    setGlowY((y / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlowX(50);
    setGlowY(50);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative perspective-[1000px] ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(0, 240, 255, 0.08), transparent 60%)`,
          opacity: 1,
        }}
      />
      <div className="relative z-[1]">{children}</div>
    </motion.div>
  );
}
