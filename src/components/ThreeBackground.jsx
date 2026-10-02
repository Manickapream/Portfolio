import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function StarField({ count = 1200 }) {
  const ref = useRef();
  const sphere = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#0ea5e9"
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

function FloatingOrbs() {
  const mesh1 = useRef();
  const mesh2 = useRef();
  const mesh3 = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (mesh1.current) {
      mesh1.current.position.y = Math.sin(t * 0.5) * 0.3;
      mesh1.current.position.x = Math.cos(t * 0.3) * 0.2;
      mesh1.current.rotation.x = t * 0.2;
      mesh1.current.rotation.z = t * 0.1;
    }
    if (mesh2.current) {
      mesh2.current.position.y = Math.sin(t * 0.7 + 2) * 0.4;
      mesh2.current.position.x = Math.cos(t * 0.4 + 1) * 0.3;
      mesh2.current.rotation.y = t * 0.3;
    }
    if (mesh3.current) {
      mesh3.current.position.y = Math.cos(t * 0.4 + 4) * 0.25;
      mesh3.current.position.x = Math.sin(t * 0.5 + 3) * 0.15;
      mesh3.current.rotation.x = t * 0.15;
      mesh3.current.rotation.y = t * 0.2;
    }
  });

  return (
    <>
      {/* Large blue orb */}
      <mesh ref={mesh1} position={[2.5, 0.5, -1]}>
        <icosahedronGeometry args={[0.5, 2]} />
        <meshStandardMaterial
          color="#38bdf8"
          transparent
          opacity={0.18}
          wireframe={false}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>

      {/* Purple orb */}
      <mesh ref={mesh2} position={[-2.8, -0.5, -2]}>
        <octahedronGeometry args={[0.4]} />
        <meshStandardMaterial
          color="#d946ef"
          transparent
          opacity={0.15}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Coral small orb */}
      <mesh ref={mesh3} position={[1, -1.5, -1.5]}>
        <tetrahedronGeometry args={[0.3]} />
        <meshStandardMaterial
          color="#f43f5e"
          transparent
          opacity={0.2}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Ambient lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#0ea5e9" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#d946ef" />
    </>
  );
}

export default function ThreeBackground({ style = {} }) {
  return (
    <div className="particle-canvas" style={style}>
      <Canvas
        camera={{ position: [0, 0, 3], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <StarField />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
}
