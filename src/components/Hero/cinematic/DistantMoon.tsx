"use client";

import { useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { NormalizedMouse } from "@/hooks/useMouseRef";

interface DistantMoonProps {
  mouseRef: RefObject<NormalizedMouse>;
  parallax?: number;
}

export default function DistantMoon({
  mouseRef,
  parallax = 0.1,
}: DistantMoonProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    const { x, y } = mouseRef.current ?? { x: 0, y: 0 };

    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      7 + x * parallax * 3,
      0.03
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      4 + y * parallax * 1.5,
      0.03
    );
  });

  return (
    <group ref={groupRef} position={[7, 4, -28]}>
      <mesh>
        <sphereGeometry args={[5.5, 24, 24]} />
        <meshBasicMaterial
          color="#0c1828"
          transparent
          opacity={0.95}
        />
      </mesh>
      <mesh scale={5.7}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial
          color="#00f0ff"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
