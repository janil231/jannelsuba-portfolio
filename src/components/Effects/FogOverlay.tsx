"use client";

import { useRef, useEffect } from "react";

export default function FogOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: {
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }[] = [];

    const particleCount = 18;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 200,
        radius: 80 + Math.random() * 200,
        speedX: (Math.random() - 0.5) * 0.1,
        speedY: -(0.1 + Math.random() * 0.2),
        opacity: 0.03 + Math.random() * 0.04,
      });
    }

    const animate = () => {
      if (!ctx || !canvas) return;
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX + Math.sin(time + p.y * 0.01) * 0.15;
        p.y += p.speedY;
        p.radius += Math.sin(time + p.x * 0.01) * 0.2;

        if (p.y + p.radius < 0) {
          p.y = canvas.height + p.radius;
          p.x = Math.random() * canvas.width;
        }
        if (p.x + p.radius < 0) p.x = canvas.width + p.radius;
        if (p.x - p.radius > canvas.width) p.x = -p.radius;

        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius
        );
        gradient.addColorStop(0, `rgba(0, 240, 255, ${p.opacity})`);
        gradient.addColorStop(0.3, `rgba(0, 150, 200, ${p.opacity * 0.5})`);
        gradient.addColorStop(1, "rgba(0, 240, 255, 0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(
          p.x - p.radius,
          p.y - p.radius,
          p.radius * 2,
          p.radius * 2
        );
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
