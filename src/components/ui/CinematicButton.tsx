"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface CinematicButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  external?: boolean;
  download?: boolean | string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function CinematicButton({
  children,
  onClick,
  href,
  external = false,
  download = false,
  variant = "primary",
  size = "md",
  className = "",
}: CinematicButtonProps) {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-12 py-4 text-base",
  };

  const variantClasses = {
    primary:
      "border border-[#00f0ff]/30 bg-[#00f0ff]/10 text-[#00f0ff] hover:bg-[#00f0ff]/20",
    outline:
      "border border-[#00f0ff]/20 text-[#00f0ff]/80 hover:border-[#00f0ff]/40 hover:text-[#00f0ff]",
    ghost:
      "text-[#00f0ff]/60 hover:text-[#00f0ff] hover:bg-[#00f0ff]/5",
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setHovered(false);
  };

  const sharedProps = {
    ref,
    onMouseEnter: () => setHovered(true),
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: `relative inline-flex overflow-hidden rounded-full font-medium tracking-wider uppercase transition-colors duration-300 ${sizeClasses[size]} ${variantClasses[variant]} max-md:min-h-[48px] max-md:touch-manipulation max-md:active:scale-[0.98] ${className}`,
    animate: {
      x: position.x,
      y: position.y,
      scale: hovered ? 1.05 : 1,
    },
    transition: { type: "spring" as const, stiffness: 200, damping: 15, mass: 0.5 },
  };

  const inner = (
    <>
      {hovered && (
        <motion.div
          className="absolute inset-0 -z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.15), transparent 70%)",
          }}
        />
      )}
      <motion.span
        className="relative z-10 flex items-center gap-2"
        animate={{
          textShadow: hovered
            ? "0 0 20px rgba(0, 240, 255, 0.5)"
            : "0 0 0px rgba(0, 240, 255, 0)",
        }}
      >
        {children}
      </motion.span>
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: hovered
              ? [
                  "0 0 20px rgba(0, 240, 255, 0.2)",
                  "0 0 40px rgba(0, 240, 255, 0.4)",
                  "0 0 20px rgba(0, 240, 255, 0.2)",
                ]
              : "0 0 0px rgba(0, 240, 255, 0)",
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...(download
          ? { download: typeof download === "string" ? download : "" }
          : {})}
        {...sharedProps}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} {...sharedProps}>
      {inner}
    </motion.button>
  );
}
