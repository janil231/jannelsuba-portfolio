"use client";

import { useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { NormalizedMouse } from "@/hooks/useMouseRef";

interface DistantWorldProps {
  mouseRef: RefObject<NormalizedMouse>;
  parallax?: number;
}

export default function DistantWorld({
  mouseRef,
  parallax = 0.06,
}: DistantWorldProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    const { x, y } = mouseRef.current ?? { x: 0, y: 0 };

    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      x * parallax * 2,
      0.03
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      y * parallax,
      0.03
    );
  });

  return (
    <group ref={groupRef} position={[0, -2.5, -22]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 24]} />
        <meshBasicMaterial color="#06080c" />
      </mesh>

      {[
        [-10, 0, -3],
        [6, 0, -5],
        [0, 0, -7],
      ].map((pos, i) => (
        <mesh
          key={i}
          position={pos as [number, number, number]}
          scale={[0.8, 2.5 + (i % 2), 0.8]}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color="#0a0e14" transparent opacity={0.85} />
        </mesh>
      ))}

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.4, -5]}>
        <torusGeometry args={[7, 0.02, 6, 32]} />
        <meshBasicMaterial
          color="#00f0ff"
          transparent
          opacity={0.07}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
