"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 1800;

function Particles() {
  const ref = useRef();

  const { positions, colors, sizes } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const sizes = new Float32Array(COUNT);

    const accent = new THREE.Color("#00ff99");
    const mid = new THREE.Color("#448866");
    const dim = new THREE.Color("#aaaaaa");

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 32;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 18;

      const r = Math.random();
      const c = r > 0.92 ? accent : r > 0.78 ? mid : dim;
      colors[i * 3]     = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      sizes[i] = Math.random() * 0.035 + 0.012;
    }

    return { positions, colors, sizes };
  }, []);

  useFrame(({ clock, mouse }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.y = mouse.x * 0.12 + t * 0.012;
    ref.current.rotation.x = mouse.y * -0.08 + Math.sin(t * 0.08) * 0.06;
    ref.current.rotation.z = Math.cos(t * 0.05) * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={COUNT} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color"    count={COUNT} array={colors}    itemSize={3} />
        <bufferAttribute attach="attributes-size"     count={COUNT} array={sizes}     itemSize={1} />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        transparent
        opacity={0.55}
        sizeAttenuation
        size={0.06}
        depthWrite={false}
      />
    </points>
  );
}

export default function ParticleField() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 58 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
