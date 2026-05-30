"use client";

import {
  Suspense,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import { Canvas } from "@react-three/fiber";
import type { NormalizedMouse } from "@/hooks/useMouseRef";
import { usePerformance } from "@/contexts/PerformanceContext";
import CinematicCamera from "./cinematic/CinematicCamera";
import CinematicLighting from "./cinematic/CinematicLighting";
import Atmosphere from "./cinematic/Atmosphere";
import DistantMoon from "./cinematic/DistantMoon";
import DistantWorld from "./cinematic/DistantWorld";
import VolumetricHaze from "./cinematic/VolumetricHaze";
import FloatingMonoliths from "./cinematic/FloatingMonoliths";
import HolographicCrystal from "./cinematic/HolographicCrystal";
import LayeredParticles from "./cinematic/LayeredParticles";
import CinematicPostFX from "./cinematic/CinematicPostFX";

interface Scene3DProps {
  mouseRef: RefObject<NormalizedMouse>;
}

const CINEMATIC_PARTICLES = [
  { count: 120, size: 0.01, opacity: 0.22, spread: 26, zOffset: 2, speed: 0.1, parallax: 0.1 },
  { count: 160, size: 0.014, opacity: 0.35, spread: 20, zOffset: 0, speed: 0.12, parallax: 0.22 },
  { count: 90, size: 0.018, opacity: 0.45, spread: 14, zOffset: -6, speed: 0.15, parallax: 0.4 },
];

const BALANCED_PARTICLES = [
  { count: 100, size: 0.012, opacity: 0.3, spread: 20, zOffset: 0, speed: 0.12, parallax: 0.18 },
  { count: 120, size: 0.016, opacity: 0.4, spread: 16, zOffset: -5, speed: 0.14, parallax: 0.35 },
];

export default function Scene3D({ mouseRef }: Scene3DProps) {
  const profile = usePerformance();
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  const isCinematic = profile.tier === "cinematic";

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const particleLayers = isCinematic ? CINEMATIC_PARTICLES : BALANCED_PARTICLES;

  return (
    <div ref={containerRef} className="absolute inset-0 z-0">
      <Canvas
        frameloop={visible ? "always" : "never"}
        camera={{ position: [0, 0.85, 6.2], fov: 52, near: 0.1, far: 80 }}
        dpr={profile.dpr}
        shadows={false}
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: "high-performance",
          stencil: false,
        }}
      >
        <Suspense fallback={null}>
          <CinematicCamera
            mouseRef={mouseRef}
            intensity={isCinematic ? 0.85 : 0.5}
          />

          <Atmosphere fogNear={6} fogFar={isCinematic ? 36 : 30} />
          <CinematicLighting animated={isCinematic} />

          <DistantMoon mouseRef={mouseRef} parallax={0.08} />
          <DistantWorld mouseRef={mouseRef} parallax={0.06} />

          {isCinematic && <VolumetricHaze layers={2} />}

          <LayeredParticles
            mouseRef={mouseRef}
            layers={particleLayers}
            animate
          />

          <FloatingMonoliths
            mouseRef={mouseRef}
            count={isCinematic ? 5 : 3}
            parallax={0.25}
          />

          <HolographicCrystal
            mouseRef={mouseRef}
            detail={0}
            showRings={profile.showRings}
            ringSegments={Math.min(profile.ringSegments, 28)}
          />

          <CinematicPostFX />
        </Suspense>
      </Canvas>
    </div>
  );
}
