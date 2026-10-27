export type PerformanceTier = "lite" | "mobile" | "balanced" | "cinematic";

export interface PerformanceProfile {
  tier: PerformanceTier;
  enable3D: boolean;
  enablePostProcessing: boolean;
  particleCount: number;
  particleSpeed: number;
  enableFog: boolean;
  enableLenis: boolean;
  enableCustomCursor: boolean;
  planetSegments: number;
  wireframeSegments: number;
  animateMountains: boolean;
  useDistortMaterial: boolean;
  showRings: boolean;
  ringSegments: number;
  dpr: number | [number, number];
  antialias: boolean;
  reduceMotion: boolean;
}

export const PERFORMANCE_PROFILES: Record<PerformanceTier, PerformanceProfile> = {
  mobile: {
    tier: "mobile",
    enable3D: true,
    enablePostProcessing: false,
    particleCount: 120,
    particleSpeed: 0.08,
    enableFog: false,
    enableLenis: false,
    enableCustomCursor: false,
    planetSegments: 32,
    wireframeSegments: 24,
    animateMountains: false,
    useDistortMaterial: false,
    showRings: true,
    ringSegments: 20,
    dpr: 1,
    antialias: false,
    reduceMotion: true,
  },
  lite: {
    tier: "lite",
    enable3D: false,
    enablePostProcessing: false,
    particleCount: 0,
    particleSpeed: 0,
    enableFog: false,
    enableLenis: false,
    enableCustomCursor: false,
    planetSegments: 32,
    wireframeSegments: 24,
    animateMountains: false,
    useDistortMaterial: false,
    showRings: false,
    ringSegments: 24,
    dpr: 1,
    antialias: false,
    reduceMotion: true,
  },
  balanced: {
    tier: "balanced",
    enable3D: true,
    enablePostProcessing: false,
    particleCount: 500,
    particleSpeed: 0.12,
    enableFog: false,
    enableLenis: false,
    enableCustomCursor: false,
    planetSegments: 48,
    wireframeSegments: 40,
    animateMountains: false,
    useDistortMaterial: false,
    showRings: true,
    ringSegments: 32,
    dpr: 1,
    antialias: false,
    reduceMotion: false,
  },
  cinematic: {
    tier: "cinematic",
    enable3D: true,
    enablePostProcessing: true,
    particleCount: 800,
    particleSpeed: 0.15,
    enableFog: true,
    enableLenis: true,
    enableCustomCursor: true,
    planetSegments: 64,
    wireframeSegments: 56,
    animateMountains: false,
    useDistortMaterial: false,
    showRings: true,
    ringSegments: 28,
    dpr: 1,
    antialias: false,
    reduceMotion: false,
  },
};

export function detectPerformanceTier(): PerformanceTier {
  if (typeof window === "undefined") return "lite";

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const narrowViewport = window.innerWidth < 768;

  if (reducedMotion) {
    return "lite";
  }

  if (coarsePointer || narrowViewport) {
    return "mobile";
  }

  const nav = navigator as Navigator & {
    deviceMemory?: number;
    connection?: { saveData?: boolean };
  };

  const lowMemory =
    typeof nav.deviceMemory === "number" && nav.deviceMemory < 8;
  const lowCores =
    typeof nav.hardwareConcurrency === "number" &&
    nav.hardwareConcurrency <= 4;
  const saveData = nav.connection?.saveData === true;

  if (lowMemory || lowCores || saveData) {
    return "balanced";
  }

  return "cinematic";
}
