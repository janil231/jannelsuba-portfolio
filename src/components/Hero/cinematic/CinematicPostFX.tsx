"use client";

import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { usePerformance } from "@/contexts/PerformanceContext";

export default function CinematicPostFX() {
  const profile = usePerformance();

  if (!profile.enablePostProcessing) return null;

  return (
    <EffectComposer multisampling={0}>
      <Bloom
        luminanceThreshold={0.2}
        luminanceSmoothing={0.9}
        intensity={0.45}
      />
      <Vignette eskil={false} offset={0.25} darkness={0.55} />
    </EffectComposer>
  );
}
