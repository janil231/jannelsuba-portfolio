"use client";

import { useRef, useEffect, useCallback } from "react";

export function useParallax(speed: number = 0.1) {
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const scrolled = window.scrollY;
    const offset = rect.top + scrolled;
    const y = (scrolled - offset) * speed;
    ref.current.style.transform = `translateY(${y}px)`;
  }, [speed]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return ref;
}
