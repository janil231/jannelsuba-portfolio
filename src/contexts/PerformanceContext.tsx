"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  PERFORMANCE_PROFILES,
  detectPerformanceTier,
  type PerformanceProfile,
  type PerformanceTier,
} from "@/lib/performance";

const PerformanceContext = createContext<PerformanceProfile | null>(null);

/** Stable SSR/hydration default — must match server and first client render. */
const SSR_PERFORMANCE_TIER: PerformanceTier = "lite";

export function PerformanceProvider({ children }: { children: ReactNode }) {
  const [tier, setTier] = useState<PerformanceTier>(SSR_PERFORMANCE_TIER);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const update = () => {
      setTier(detectPerformanceTier());
      setPrefersReducedMotion(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    };

    update();

    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerMq = window.matchMedia("(pointer: coarse)");

    motionMq.addEventListener("change", update);
    pointerMq.addEventListener("change", update);
    window.addEventListener("resize", update);

    return () => {
      motionMq.removeEventListener("change", update);
      pointerMq.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const profile = useMemo(() => {
    const base = PERFORMANCE_PROFILES[tier];
    return {
      ...base,
      reduceMotion: base.reduceMotion || prefersReducedMotion,
    };
  }, [tier, prefersReducedMotion]);

  return (
    <PerformanceContext.Provider value={profile}>
      {children}
    </PerformanceContext.Provider>
  );
}

export function usePerformance() {
  const profile = useContext(PerformanceContext);
  if (!profile) {
    throw new Error("usePerformance must be used within PerformanceProvider");
  }
  return profile;
}
