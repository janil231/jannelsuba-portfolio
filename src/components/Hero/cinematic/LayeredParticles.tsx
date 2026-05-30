"use client";

import { useMemo, useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { NormalizedMouse } from "@/hooks/useMouseRef";
import { useFrameSkip } from "@/hooks/useFrameSkip";

interface ParticleLayerConfig {
  count: number;
  size: number;
  opacity: number;
  spread: number;
  zOffset: number;
  speed: number;
  parallax: number;
}

interface LayeredParticlesProps {
  mouseRef: RefObject<NormalizedMouse>;
  layers: ParticleLayerConfig[];
  animate?: boolean;
}

function ParticleLayer({
  config,
  mouseRef,
  animate,
}: {
  config: ParticleLayerConfig;
  mouseRef: RefObject<NormalizedMouse>;
  animate: boolean;
}) {
  const pointsRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);
  const shouldAnimate = useFrameSkip(3);

  const positions = useMemo(() => {
    const pos = new Float32Array(config.count * 3);
    for (let i = 0; i < config.count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * config.spread;
      pos[i * 3 + 1] = (Math.random() - 0.5) * config.spread * 0.6;
      pos[i * 3 + 2] =
        (Math.random() - 0.5) * config.spread - 8 + config.zOffset;
    }
    return pos;
  }, [config.count, config.spread, config.zOffset]);

  useFrame((state) => {
    const { x, y } = mouseRef.current ?? { x: 0, y: 0 };

    if (groupRef.current) {
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        x * config.parallax,
        0.05
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        -y * config.parallax * 0.5,
        0.05
      );
    }

    if (!animate || !pointsRef.current || !shouldAnimate()) return;

    const attr = pointsRef.current.geometry.attributes.position;
    const pos = attr.array as Float32Array;
    const t = state.clock.elapsedTime * config.speed;
    const step = 3;

    for (let i = 0; i < config.count; i += step) {
      pos[i * 3] += Math.sin(t + i) * 0.002;
      pos[i * 3 + 1] += Math.cos(t + i * 0.5) * 0.0015;
      pos[i * 3 + 2] += Math.sin(t * 0.5 + i * 0.3) * 0.001;
    }
    attr.needsUpdate = true;
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={config.size}
          color="#00f0ff"
          transparent
          opacity={config.opacity}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

export default function LayeredParticles({
  mouseRef,
  layers,
  animate = true,
}: LayeredParticlesProps) {
  return (
    <>
      {layers.map((layer, i) => (
        <ParticleLayer
          key={i}
          config={layer}
          mouseRef={mouseRef}
          animate={animate}
        />
      ))}
    </>
  );
}
