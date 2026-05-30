"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    let mx = 0;
    let my = 0;
    let fx = 0;
    let fy = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mx}px, ${my}px)`;
      }
    };

    const animate = () => {
      fx += (mx - fx) * 0.1;
      fy += (my - fy) * 0.1;
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${fx}px, ${fy}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00f0ff]"
        style={{ boxShadow: "0 0 10px rgba(0, 240, 255, 0.5)" }}
      />
      <div
        ref={followerRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00f0ff]/30"
        style={{ transition: "width 0.2s, height 0.2s" }}
      />
    </>
  );
}
