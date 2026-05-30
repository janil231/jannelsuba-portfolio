"use client";

import { useMemo } from "react";
import * as THREE from "three";

interface AtmosphereProps {
  fogNear?: number;
  fogFar?: number;
}

export default function Atmosphere({
  fogNear = 6,
  fogFar = 42,
}: AtmosphereProps) {
  const skyMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      depthWrite: false,
      side: THREE.BackSide,
      uniforms: {
        uTop: { value: new THREE.Color("#020408") },
        uHorizon: { value: new THREE.Color("#0a1a28") },
        uGlow: { value: new THREE.Color("#00f0ff") },
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uTop;
        uniform vec3 uHorizon;
        uniform vec3 uGlow;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition).y * 0.5 + 0.5;
          vec3 col = mix(uHorizon, uTop, pow(h, 1.2));
          col += uGlow * pow(max(0.0, 1.0 - abs(h - 0.35) * 3.0), 3.0) * 0.08;
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
  }, []);

  return (
    <>
      <color attach="background" args={["#050508"]} />
      <fog attach="fog" args={["#08080a", fogNear, fogFar]} />
      <mesh scale={60} material={skyMaterial}>
        <sphereGeometry args={[1, 16, 12]} />
      </mesh>
    </>
  );
}
