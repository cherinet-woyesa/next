'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D } from '@react-three/drei';
import * as THREE from 'three';

const TechSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState<string | null>(null);

  // Tech stack data with positions on a sphere
  const techItems = [
    { name: 'React', position: [1.2, 0.5, 0], color: '#61DAFB', size: 0.8 },
    { name: 'Next.js', position: [-1, 0.8, 0.5], color: '#000000', size: 0.8 },
    { name: 'TypeScript', position: [0, 1, 0.8], color: '#3178C6', size: 0.7 },
    { name: 'Node.js', position: [0.5, -0.8, 1], color: '#68A063', size: 0.7 },
    { name: 'MongoDB', position: [-0.5, -1, 0.5], color: '#47A248', size: 0.7 },
    { name: 'AWS', position: [0, 0.5, -1.2], color: '#FF9900', size: 0.8 },
    { name: 'Docker', position: [1, -0.5, -0.5], color: '#2496ED', size: 0.7 },
    { name: 'Python', position: [-1.2, 0, -0.5], color: '#3776AB', size: 0.7 },
  ];

  // Animation for the sphere
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Central sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial 
          color="#6D28D9" 
          transparent 
          opacity={0.2} 
          roughness={0.7} 
          metalness={0.1}
        />
      </mesh>

      {/* Tech items floating around */}
      {techItems.map((tech, index) => (
        <group key={index} position={tech.position as [number, number, number]}>
          <mesh
            onPointerOver={() => setHover(tech.name)}
            onPointerOut={() => setHover(null)}
          >
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial 
              color={hovered === tech.name ? '#FFFFFF' : tech.color} 
              emissive={tech.color}
              emissiveIntensity={hovered === tech.name ? 1 : 0.3}
            />
          </mesh>
          
          {/* Text label */}
          {hovered === tech.name && (
            <Text3D
              font="/fonts/helvetiker_regular.typeface.json"
              size={0.3}
              height={0.05}
              position={[0, 0.3, 0]}
              rotation={[0, Math.PI / 4, 0]}
            >
              {tech.name}
              <meshStandardMaterial color="white" />
            </Text3D>
          )}

          {/* Connection line to center */}
          <line>
            <bufferGeometry attach="geometry">
              <bufferAttribute
                attach="attributes-position"
                args={[new Float32Array([0, 0, 0, ...tech.position]), 3]}
              />
            </bufferGeometry>
            <lineBasicMaterial attach="material" color="#6D28D9" opacity={0.5} transparent />
          </line>
        </group>
      ))}
    </group>
  );
};

const TechVisualizer = () => {
  const [activeTech, setActiveTech] = useState<string | null>(null);
  
  return (
    <div className="relative h-96 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ antialias: true }}
        className="cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <TechSphere />
        
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={5}
          maxDistance={15}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
      
      {/* Info panel */}
      {activeTech && (
        <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
          <h4 className="font-bold text-lg mb-2">{activeTech}</h4>
          <p className="text-sm">
            {activeTech === 'React' && 'A JavaScript library for building user interfaces'}
            {activeTech === 'Next.js' && 'The React framework for production'}
            {activeTech === 'TypeScript' && 'Typed JavaScript at any scale'}
            {/* Add descriptions for other technologies */}
          </p>
          <button 
            className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
            onClick={() => setActiveTech(null)}
          >
            Close
          </button>
        </div>
      )}
      
      {/* Controls hint */}
      <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 rounded-lg text-xs">
        ← Drag to rotate · Scroll to zoom →
      </div>
    </div>
  );
};

export default TechVisualizer;