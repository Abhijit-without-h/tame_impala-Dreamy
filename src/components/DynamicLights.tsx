import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const DynamicLights = () => {
  const lights = useRef<THREE.PointLight[]>([]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    lights.current.forEach((light, index) => {
      if (light) {
        const offset = index * (Math.PI * 2) / 3;
        light.position.x = Math.sin(time * 0.6 + offset) * 6;
        light.position.y = Math.cos(time * 0.4 + offset) * 6;
        light.position.z = Math.sin(time * 0.7 + offset) * 6;
        // Pulsating intensity
        light.intensity = 2 + Math.sin(time * 0.5 + offset) * 0.5;
      }
    });
  });

  return (
    <>
      <pointLight ref={(el) => (lights.current[0] = el!)} intensity={2} color="#ff66cc" />
      <pointLight ref={(el) => (lights.current[1] = el!)} intensity={2} color="#66ffff" />
      <pointLight ref={(el) => (lights.current[2] = el!)} intensity={2} color="#9966ff" />
      <ambientLight intensity={0.4} />
    </>
  );
};