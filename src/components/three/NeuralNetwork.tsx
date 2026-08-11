'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const NODE_COUNT = 80;
const CONNECTION_DISTANCE = 1.2;

const colorPalette = [
  new THREE.Color('#D4AF37'), // Gold
  new THREE.Color('#00D4FF'), // Cyan
  new THREE.Color('#FFFFFF'), // White
];

function Network() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  const { positions, colors, sizes, connections } = useMemo(() => {
    const pos = new Float32Array(NODE_COUNT * 3);
    const col = new Float32Array(NODE_COUNT * 3);
    const siz = new Float32Array(NODE_COUNT);
    const nodeVectors: THREE.Vector3[] = [];

    // Generate nodes
    for (let i = 0; i < NODE_COUNT; i++) {
      // Random position in a sphere radius ~3
      const radius = 3 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      nodeVectors.push(new THREE.Vector3(x, y, z));

      // Colors
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;

      // Sizes (0.02 to 0.08)
      siz[i] = 0.02 + Math.random() * 0.06;
    }

    // Generate connections
    const conn: number[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        if (nodeVectors[i].distanceTo(nodeVectors[j]) < CONNECTION_DISTANCE) {
          conn.push(
            nodeVectors[i].x, nodeVectors[i].y, nodeVectors[i].z,
            nodeVectors[j].x, nodeVectors[j].y, nodeVectors[j].z
          );
        }
      }
    }

    return {
      positions: pos,
      colors: col,
      sizes: siz,
      connections: new Float32Array(conn),
      nodeVectors
    };
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (meshRef.current) {
      for (let i = 0; i < NODE_COUNT; i++) {
        const x = positions[i * 3];
        const y = positions[i * 3 + 1];
        const z = positions[i * 3 + 2];
        
        // Gentle floating
        const t = state.clock.elapsedTime;
        const offsetY = Math.sin(t + i) * 0.1;
        
        dummy.position.set(x, y + offsetY, z);
        dummy.scale.setScalar(sizes[i]);
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(i, dummy.matrix);
      }
      meshRef.current.instanceMatrix.needsUpdate = true;
    }

    if (groupRef.current) {
      // Slow rotation
      groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.x += 0.0005;

      // Subtle mouse follow
      const targetX = mouse.x * 0.2;
      const targetY = mouse.y * 0.2;
      
      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
      groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, NODE_COUNT]}>
        <sphereGeometry args={[1, 16, 16]}>
          <instancedBufferAttribute attach="attributes-color" args={[colors, 3]} />
        </sphereGeometry>
        <meshBasicMaterial vertexColors toneMapped={false} />
      </instancedMesh>
      
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[connections, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#ffffff" transparent opacity={0.15} />
      </lineSegments>
    </group>
  );
}

export default function NeuralNetwork() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ position: 'absolute', inset: 0 }}
      >
        <ambientLight intensity={0.5} />
        <Network />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
