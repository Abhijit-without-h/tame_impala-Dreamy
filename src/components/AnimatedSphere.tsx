import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface AnimatedSphereProps {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
  distort: number;
  orbitRadius?: number;
  orbitSpeed?: number;
  intensity?: number;
}

export const AnimatedSphere = ({ 
  position, 
  scale, 
  color, 
  speed, 
  distort,
  orbitRadius = 0,
  orbitSpeed = 1,
  intensity = 2.5
}: AnimatedSphereProps) => {
  const ref = useRef<THREE.Mesh>(null);
  const startPosition = useRef(position);
  const time = useRef(Math.random() * 100);

  useFrame((state) => {
    if (!ref.current) return;
    
    time.current += state.clock.getDelta();
    
    if (orbitRadius > 0) {
      ref.current.position.x = startPosition.current[0] + Math.sin(time.current * orbitSpeed) * orbitRadius;
      ref.current.position.z = startPosition.current[2] + Math.cos(time.current * orbitSpeed) * orbitRadius;
    }
    
    ref.current.position.y = position[1] + Math.sin(time.current * speed) * 0.3;
    ref.current.rotation.x = time.current * 0.2;
    ref.current.rotation.y = time.current * 0.3;

    // Pulsating scale
    const pulseFactor = 1 + Math.sin(time.current * speed * 0.5) * 0.1;
    ref.current.scale.set(scale * pulseFactor, scale * pulseFactor, scale * pulseFactor);
  });

  return (
    <Sphere ref={ref} args={[1, 128, 128]} position={position} scale={scale}>
      <MeshDistortMaterial
        color={color}
        envMapIntensity={intensity}
        clearcoat={1}
        clearcoatRoughness={0}
        metalness={0.9}
        roughness={0.1}
        distort={distort}
        speed={2}
        toneMapped={false}
      />
    </Sphere>
  );
};