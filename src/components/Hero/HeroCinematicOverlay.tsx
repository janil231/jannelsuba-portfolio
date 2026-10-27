"use client";

import { useEffect, useRef, type RefObject } from "react";
import type { NormalizedMouse } from "@/hooks/useMouseRef";

interface HeroCinematicOverlayProps {
  mouseRef: RefObject<NormalizedMouse>;
}

export default function HeroCinematicOverlay({
  mouseRef,
}: HeroCinematicOverlayProps) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let last = 0;
    const smooth = { x: 0, y: 0 };
    const interval = 1000 / 30;

    const mobileMq = window.matchMedia("(max-width: 767px)");

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (now - last < interval) return;
      last = now;

      const { x, y } = mouseRef.current;
      smooth.x += (x - smooth.x) * 0.12;
      smooth.y += (y - smooth.y) * 0.12;

      if (layerRef.current) {
        const parallaxX = mobileMq.matches ? 6 : 20;
        const parallaxY = mobileMq.matches ? 4 : 12;
        layerRef.current.style.transform = `translate3d(${smooth.x * parallaxX}px, ${smooth.y * parallaxY}px, 0)`;
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [mouseRef]);

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      <div
        ref={layerRef}
        className="absolute -inset-[15%] will-change-transform"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_25%,rgba(0,240,255,0.1),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_55%,rgba(0,240,255,0.05),transparent_50%)]" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[65%] bg-gradient-to-t from-[#08080a] via-[#08080a]/50 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-[#08080a]/85 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#08080a]/50 to-transparent" />
    </div>
  );
}
