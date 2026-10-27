"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface WireframeMountainsProps {
  segments: number;
  animate: boolean;
}

function deformHeights(pos: Float32Array, time = 0) {
  for (let i = 0; i < pos.length; i += 3) {
    const x = pos[i];
    const z = pos[i + 2];
    pos[i + 1] =
      Math.sin(x * 0.3 + time) * 0.4 +
      Math.sin(x * 0.7 + z * 0.5 + time * 0.5) * 0.3 +
      Math.cos(z * 0.4 + x * 0.2 + time * 0.3) * 0.25 +
      Math.sin(x * 1.2 + z * 0.8 + time) * 0.15;
  }
}

export default function WireframeMountains({
  segments,
  animate,
}: WireframeMountainsProps) {
  const solidRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);

  const solidGeometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(20, 8, segments, segments);
    geo.rotateX(-Math.PI / 2);
    deformHeights(geo.attributes.position.array as Float32Array);
    geo.computeVertexNormals();
    return geo;
  }, [segments]);

  const wireGeometry = useMemo(
    () => solidGeometry.clone(),
    [solidGeometry]
  );

  useFrame((state) => {
    if (!animate) return;

    const solid = solidRef.current?.geometry;
    const wire = wireRef.current?.geometry;
    if (!solid || !wire) return;

    const pos = solid.attributes.position.array as Float32Array;
    deformHeights(pos, state.clock.elapsedTime * 0.15);

    solid.attributes.position.needsUpdate = true;
    solid.computeVertexNormals();

    (wire.attributes.position.array as Float32Array).set(pos);
    wire.attributes.position.needsUpdate = true;
  });

  return (
    <group position={[0, -1.5, -3]}>
      <mesh ref={solidRef} geometry={solidGeometry}>
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={0.08}
          transparent
          opacity={0.15}
          roughness={0.3}
          metalness={0.7}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={wireRef} geometry={wireGeometry}>
        <meshBasicMaterial
          color="#00f0ff"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>
    </group>
  );
}
