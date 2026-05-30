"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { PerformanceProvider, usePerformance } from "@/contexts/PerformanceContext";
import HeroSection from "@/components/Hero/HeroSection";
import Navbar from "@/components/Navigation/Navbar";
import IdentitySection from "@/components/Sections/IdentitySection";
import ArchiveSection from "@/components/Sections/ArchiveSection";
import SystemSection from "@/components/Sections/SystemSection";
import VisionsSection from "@/components/Sections/VisionsSection";
import TransmissionSection from "@/components/Sections/TransmissionSection";
import CustomCursor from "@/components/Effects/CustomCursor";

function HomeContent() {
  const profile = usePerformance();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!profile.enableLenis) return;

    const lenis = new Lenis({
      duration: 1.8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [profile.enableLenis]);

  return (
    <>
      {profile.enableCustomCursor && <CustomCursor />}
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <IdentitySection />
        <ArchiveSection />
        <SystemSection />
        <VisionsSection />
        <TransmissionSection />
      </main>

      <div className="pointer-events-none fixed inset-0 z-[9997] border-[12px] border-[#08080a]/50" />
    </>
  );
}

export default function Home() {
  return (
    <PerformanceProvider>
      <HomeContent />
    </PerformanceProvider>
  );
}
