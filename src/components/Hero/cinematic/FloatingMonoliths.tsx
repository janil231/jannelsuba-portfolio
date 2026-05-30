"use client";

import { useMemo, useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { NormalizedMouse } from "@/hooks/useMouseRef";

interface MonolithConfig {
  position: [number, number, number];
  scale: [number, number, number];
  rotation: [number, number, number];
}

interface FloatingMonolithsProps {
  mouseRef: RefObject<NormalizedMouse>;
  count?: number;
  parallax?: number;
}

const BOX_EDGES = new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1));

function createMonoliths(count: number): MonolithConfig[] {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2 + 0.4;
    const radius = 5 + (i % 3) * 1.8;
    return {
      position: [
        Math.cos(angle) * radius,
        -1.2 + (i % 2) * 0.4,
        -4 - (i % 4) * 2.5,
      ],
      scale: [0.35 + (i % 3) * 0.12, 2.2 + (i % 2) * 1.2, 0.25 + (i % 2) * 0.1],
      rotation: [0, angle + Math.PI / 4, 0],
    };
  });
}

export default function FloatingMonoliths({
  mouseRef,
  count = 5,
  parallax = 0.28,
}: FloatingMonolithsProps) {
  const groupRef = useRef<THREE.Group>(null);
  const monoliths = useMemo(() => createMonoliths(count), [count]);

  useFrame(() => {
    if (!groupRef.current) return;
    const { x, y } = mouseRef.current ?? { x: 0, y: 0 };

    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      x * parallax,
      0.04
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      -y * parallax * 0.4,
      0.04
    );
  });

  return (
    <group ref={groupRef}>
      {monoliths.map((m, i) => (
        <group
          key={i}
          position={m.position}
          rotation={m.rotation}
          scale={m.scale}
        >
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color="#0a1018"
              emissive="#00f0ff"
              emissiveIntensity={0.06}
              roughness={0.4}
              metalness={0.85}
            />
          </mesh>
          <lineSegments geometry={BOX_EDGES} scale={1.02}>
            <lineBasicMaterial color="#00f0ff" transparent opacity={0.3} />
          </lineSegments>
        </group>
      ))}
    </group>
  );
}
