"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleFieldProps {
  count?: number;
  color?: string;
  speed?: number;
  size?: number;
  animate?: boolean;
}

export default function ParticleField({
  count = 2000,
  color = "#00f0ff",
  speed = 0.2,
  size = 0.02,
  animate = true,
}: ParticleFieldProps) {
  const meshRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30 - 10;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!animate || !meshRef.current) return;
    const attr = meshRef.current.geometry.attributes.position;
    if (!attr) return;
    const pos = attr.array as Float32Array;
    const time = state.clock.elapsedTime * speed;

    for (let i = 0; i < count; i++) {
      pos[i * 3] += Math.sin(time + i) * 0.001;
      pos[i * 3 + 1] += Math.cos(time + i * 0.5) * 0.001;
      pos[i * 3 + 2] += Math.sin(time * 0.5 + i * 0.3) * 0.001;

      if (Math.abs(pos[i * 3]) > 15) pos[i * 3] *= -0.9;
      if (Math.abs(pos[i * 3 + 1]) > 10) pos[i * 3 + 1] *= -0.9;
      if (Math.abs(pos[i * 3 + 2]) > 15) pos[i * 3 + 2] *= -0.9;
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}
