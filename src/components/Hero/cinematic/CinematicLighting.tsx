"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { DirectionalLight } from "three";
import { useFrameSkip } from "@/hooks/useFrameSkip";

interface CinematicLightingProps {
  animated?: boolean;
}

export default function CinematicLighting({ animated = true }: CinematicLightingProps) {
  const keyRef = useRef<DirectionalLight>(null);
  const shouldUpdate = useFrameSkip(2);

  useFrame((state) => {
    if (!animated || !keyRef.current || !shouldUpdate()) return;
    const t = state.clock.elapsedTime;
    keyRef.current.position.set(
      6 + Math.sin(t * 0.12) * 1.2,
      7 + Math.cos(t * 0.1) * 0.8,
      4
    );
  });

  return (
    <>
      <ambientLight intensity={0.14} color="#0a1628" />
      <hemisphereLight args={["#00f0ff", "#08080a", 0.3]} position={[0, 12, 0]} />
      <directionalLight
        ref={keyRef}
        position={[6, 7, 4]}
        intensity={0.95}
        color="#b8f8ff"
      />
      <directionalLight position={[-4, 2, -5]} intensity={0.4} color="#00f0ff" />
    </>
  );
}
