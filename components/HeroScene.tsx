'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ACCENT = new THREE.Color('#b08968');
const ACCENT2 = new THREE.Color('#9a9fa8');
const NODE_COUNT = 42;
const LINK_DIST = 2.3;

function NetworkField() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const nodes = useMemo(
    () =>
      Array.from({ length: NODE_COUNT }, () => ({
        pos: new THREE.Vector3((Math.random() - 0.5) * 16, (Math.random() - 0.5) * 9, (Math.random() - 0.5) * 4),
        vel: new THREE.Vector3((Math.random() - 0.5) * 0.4, (Math.random() - 0.5) * 0.4, 0),
        color: Math.random() < 0.5 ? ACCENT : ACCENT2,
      })),
    []
  );

  const positions = useMemo(() => new Float32Array(NODE_COUNT * 3), []);
  const colors = useMemo(() => new Float32Array(NODE_COUNT * 3), []);
  const linePositions = useMemo(() => new Float32Array(NODE_COUNT * NODE_COUNT * 6), []);
  const lineColors = useMemo(() => new Float32Array(NODE_COUNT * NODE_COUNT * 6), []);

  useFrame((_, delta) => {
    const dt = Math.min(0.05, delta);
    let lineCount = 0;

    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      n.pos.addScaledVector(n.vel, dt);
      if (n.pos.x < -8 || n.pos.x > 8) n.vel.x *= -1;
      if (n.pos.y < -4.5 || n.pos.y > 4.5) n.vel.y *= -1;
      positions[i * 3] = n.pos.x;
      positions[i * 3 + 1] = n.pos.y;
      positions[i * 3 + 2] = n.pos.z;
      colors[i * 3] = n.color.r;
      colors[i * 3 + 1] = n.color.g;
      colors[i * 3 + 2] = n.color.b;
    }

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].pos.distanceTo(nodes[j].pos);
        if (dist < LINK_DIST && lineCount < NODE_COUNT * NODE_COUNT) {
          const idx = lineCount * 6;
          linePositions[idx] = nodes[i].pos.x;
          linePositions[idx + 1] = nodes[i].pos.y;
          linePositions[idx + 2] = nodes[i].pos.z;
          linePositions[idx + 3] = nodes[j].pos.x;
          linePositions[idx + 4] = nodes[j].pos.y;
          linePositions[idx + 5] = nodes[j].pos.z;
          const alpha = 1 - dist / LINK_DIST;
          for (let k = 0; k < 2; k++) {
            lineColors[idx + k * 3] = 0.65 * alpha * 0.55;
            lineColors[idx + k * 3 + 1] = 0.58 * alpha * 0.55;
            lineColors[idx + k * 3 + 2] = 0.53 * alpha * 0.55;
          }
          lineCount++;
        }
      }
    }

    if (pointsRef.current) {
      const geo = pointsRef.current.geometry;
      geo.attributes.position.needsUpdate = true;
      geo.attributes.color.needsUpdate = true;
    }
    if (linesRef.current) {
      const geo = linesRef.current.geometry;
      geo.setDrawRange(0, lineCount * 2);
      geo.attributes.position.needsUpdate = true;
      geo.attributes.color.needsUpdate = true;
    }
  });

  return (
    <group>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
          <bufferAttribute attach="attributes-color" args={[lineColors, 3]} />
        </bufferGeometry>
        <lineBasicMaterial vertexColors transparent opacity={0.32} />
      </lineSegments>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.06} vertexColors transparent opacity={0.55} sizeAttenuation />
      </points>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      style={{ position: 'absolute', inset: 0 }}
      camera={{ position: [0, 0, 8], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.75]}
    >
      <NetworkField />
    </Canvas>
  );
}
