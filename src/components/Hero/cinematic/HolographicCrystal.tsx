"use client";

import { useMemo, useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { NormalizedMouse } from "@/hooks/useMouseRef";
import { useFrameSkip } from "@/hooks/useFrameSkip";

interface HolographicCrystalProps {
  mouseRef: RefObject<NormalizedMouse>;
  detail?: number;
  showRings?: boolean;
  ringSegments?: number;
}

export default function HolographicCrystal({
  mouseRef,
  detail = 0,
  showRings = true,
  ringSegments = 24,
}: HolographicCrystalProps) {
  const groupRef = useRef<THREE.Group>(null);
  const crystalRef = useRef<THREE.Group>(null);
  const ringsRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  const shouldRunHeavy = useFrameSkip(2);

  const crystalGeo = useMemo(
    () => new THREE.OctahedronGeometry(0.95, detail),
    [detail]
  );
  const shellGeo = useMemo(
    () => new THREE.IcosahedronGeometry(1.28, detail),
    [detail]
  );

  useFrame((state) => {
    if (!groupRef.current) return;

    const { x: mouseX, y: mouseY } = mouseRef.current ?? { x: 0, y: 0 };
    const t = state.clock.elapsedTime;

    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      mouseX * 0.45,
      0.05
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      -mouseY * 0.35 + Math.sin(t * 0.35) * 0.15,
      0.05
    );

    if (crystalRef.current) {
      crystalRef.current.rotation.y = t * 0.1;
      if (shouldRunHeavy()) {
        crystalRef.current.rotation.x = Math.sin(t * 0.12) * 0.1;
      }
    }

    if (ringsRef.current) {
      ringsRef.current.rotation.z = t * 0.08;
    }

    if (lightRef.current && shouldRunHeavy()) {
      lightRef.current.intensity = 2.2 + Math.sin(t * 1.5) * 0.35;
    }
  });

  return (
    <group ref={groupRef} position={[1.2, 0.2, -0.5]}>
      <mesh scale={1.45}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshBasicMaterial
          color="#00f0ff"
          transparent
          opacity={0.06}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      <group ref={crystalRef}>
        <mesh geometry={crystalGeo}>
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={0.5}
            roughness={0.15}
            metalness={0.65}
            transparent
            opacity={0.88}
          />
        </mesh>

        <mesh geometry={shellGeo}>
          <meshBasicMaterial
            color="#00f0ff"
            wireframe
            transparent
            opacity={0.12}
          />
        </mesh>
      </group>

      {showRings && (
        <group ref={ringsRef} rotation={[Math.PI / 2, 0, 0]}>
          {[1.65, 2.15].map((radius, i) => (
            <mesh key={i}>
              <torusGeometry args={[radius, 0.01, 6, ringSegments]} />
              <meshBasicMaterial
                color="#00f0ff"
                transparent
                opacity={0.3 - i * 0.08}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
              />
            </mesh>
          ))}
        </group>
      )}

      <pointLight
        ref={lightRef}
        color="#00f0ff"
        intensity={2.2}
        distance={10}
        decay={2}
      />
    </group>
  );
}
