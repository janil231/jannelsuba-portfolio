"use client";

import { useMemo, useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { NormalizedMouse } from "@/hooks/useMouseRef";

interface FloatingDataCoreProps {
  mouseRef: RefObject<NormalizedMouse>;
  detail: number;
  showRings: boolean;
  ringSegments: number;
  showOrbitNodes: boolean;
}

const ORBIT_NODE_COUNT = 8;

export default function FloatingDataCore({
  mouseRef,
  detail,
  showRings,
  ringSegments,
  showOrbitNodes,
}: FloatingDataCoreProps) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Group>(null);
  const orbitRef = useRef<THREE.Group>(null);

  const icoDetail = detail > 40 ? 1 : 0;

  const shellGeometry = useMemo(
    () => new THREE.IcosahedronGeometry(1.15, icoDetail),
    [icoDetail]
  );

  const innerGeometry = useMemo(
    () => new THREE.OctahedronGeometry(0.55, 0),
    []
  );

  const orbitNodes = useMemo(() => {
    return Array.from({ length: ORBIT_NODE_COUNT }, (_, i) => {
      const angle = (i / ORBIT_NODE_COUNT) * Math.PI * 2;
      const radius = 1.75;
      return new THREE.Vector3(
        Math.cos(angle) * radius,
        Math.sin(angle * 2) * 0.25,
        Math.sin(angle) * radius
      );
    });
  }, []);

  const orbitWireGeometry = useMemo(
    () =>
      new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.75, 0)),
    []
  );

  useFrame((state) => {
    if (!groupRef.current) return;

    const { x: mouseX, y: mouseY } = mouseRef.current ?? { x: 0, y: 0 };
    const t = state.clock.elapsedTime;

    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      mouseX * 0.45,
      0.03
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      -mouseY * 0.45 + Math.sin(t * 0.3) * 0.25,
      0.03
    );

    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.12;
      coreRef.current.rotation.x = Math.sin(t * 0.1) * 0.08;
    }

    if (orbitRef.current) {
      orbitRef.current.rotation.y = -t * 0.18;
    }
  });

  return (
    <group ref={groupRef}>
      <group ref={coreRef}>
        <mesh geometry={innerGeometry}>
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={0.35}
            roughness={0.15}
            metalness={0.9}
            transparent
            opacity={0.9}
          />
        </mesh>

        <mesh geometry={shellGeometry}>
          <meshBasicMaterial
            color="#00f0ff"
            wireframe
            transparent
            opacity={0.22}
          />
        </mesh>

        <mesh geometry={shellGeometry} scale={1.08}>
          <meshBasicMaterial
            color="#00f0ff"
            transparent
            opacity={0.04}
            side={THREE.BackSide}
          />
        </mesh>
      </group>

      {showOrbitNodes && (
        <group ref={orbitRef}>
          {orbitNodes.map((pos, i) => (
            <mesh key={i} position={pos}>
              <sphereGeometry args={[0.045, 8, 8]} />
              <meshBasicMaterial color="#00f0ff" transparent opacity={0.85} />
            </mesh>
          ))}
          <lineSegments geometry={orbitWireGeometry}>
            <lineBasicMaterial color="#00f0ff" transparent opacity={0.12} />
          </lineSegments>
        </group>
      )}

      {showRings &&
        Array.from({ length: 3 }).map((_, i) => (
          <mesh key={i} rotation={[Math.PI / 2, 0, (i * Math.PI * 2) / 3]}>
            <ringGeometry
              args={[1.55 + i * 0.28, 1.65 + i * 0.28, ringSegments]}
            />
            <meshBasicMaterial
              color="#00f0ff"
              transparent
              opacity={0.14 - i * 0.035}
              side={THREE.DoubleSide}
              depthWrite={false}
            />
          </mesh>
        ))}

      <pointLight color="#00f0ff" intensity={2.2} distance={8} decay={2} />
    </group>
  );
}
