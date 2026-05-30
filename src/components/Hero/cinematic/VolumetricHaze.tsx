"use client";

interface VolumetricHazeProps {
  layers?: number;
}

export default function VolumetricHaze({ layers = 2 }: VolumetricHazeProps) {
  return (
    <group>
      {Array.from({ length: layers }).map((_, i) => (
        <mesh
          key={i}
          position={[0, -0.5 + i * 0.4, -7 - i * 4]}
          rotation={[-Math.PI / 2 + 0.12 * i, 0, 0]}
        >
          <planeGeometry args={[24 + i * 3, 12]} />
          <meshBasicMaterial
            color="#00f0ff"
            transparent
            opacity={0.015 + i * 0.006}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}
