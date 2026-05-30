"use client";

import { useEffect, useRef } from "react";

export interface NormalizedMouse {
  x: number;
  y: number;
}

export function useMouseRef() {
  const mouseRef = useRef<NormalizedMouse>({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return mouseRef;
}
