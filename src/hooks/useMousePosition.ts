"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
  smoothX: number;
  smoothY: number;
}

export function useMousePosition() {
  const [mouse, setMouse] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
    smoothX: 0,
    smoothY: 0,
  });

  const smoothRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const nx = (e.clientX / window.innerWidth) * 2 - 1;
    const ny = -(e.clientY / window.innerHeight) * 2 + 1;

    setMouse((prev) => ({
      ...prev,
      x: e.clientX,
      y: e.clientY,
      normalizedX: nx,
      normalizedY: ny,
    }));

    smoothRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    let prev = { x: 0, y: 0 };
    const smooth = () => {
      prev.x += (smoothRef.current.x - prev.x) * 0.08;
      prev.y += (smoothRef.current.y - prev.y) * 0.08;
      setMouse((m) => ({
        ...m,
        smoothX: prev.x,
        smoothY: prev.y,
      }));
      rafRef.current = requestAnimationFrame(smooth);
    };
    rafRef.current = requestAnimationFrame(smooth);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return mouse;
}
