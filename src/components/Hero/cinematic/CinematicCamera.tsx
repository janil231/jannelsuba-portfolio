"use client";

import { useRef, type RefObject } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import type { NormalizedMouse } from "@/hooks/useMouseRef";

interface CinematicCameraProps {
  mouseRef: RefObject<NormalizedMouse>;
  intensity?: number;
}

const BASE = new THREE.Vector3(0, 0.85, 6.2);
const LOOK = new THREE.Vector3(0, 0.35, -1.5);

export default function CinematicCamera({
  mouseRef,
  intensity = 1,
}: CinematicCameraProps) {
  const { camera } = useThree();
  const drift = useRef({ x: 0, y: 0, t: 0 });

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const { x: mx, y: my } = mouseRef.current ?? { x: 0, y: 0 };

    drift.current.x = THREE.MathUtils.lerp(drift.current.x, mx, 0.04);
    drift.current.y = THREE.MathUtils.lerp(drift.current.y, my, 0.04);

    const swayX =
      drift.current.x * 0.55 * intensity +
      Math.sin(t * 0.22) * 0.06 * intensity;
    const swayY =
      -drift.current.y * 0.28 * intensity +
      Math.sin(t * 0.17 + 1.2) * 0.04 * intensity;
    const swayZ = Math.sin(t * 0.11) * 0.12 * intensity;

    camera.position.set(
      BASE.x + swayX,
      BASE.y + swayY,
      BASE.z + swayZ
    );
    camera.lookAt(
      LOOK.x + drift.current.x * 0.15,
      LOOK.y + drift.current.y * 0.08,
      LOOK.z
    );
  });

  return null;
}
