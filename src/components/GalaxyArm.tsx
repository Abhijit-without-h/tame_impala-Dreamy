import { AnimatedSphere } from './AnimatedSphere';
import { generateSpiralPositions } from './utils/spiralPositions';

interface GalaxyArmProps {
  armIndex: number;
  totalArms: number;
  sphereCount: number;
}

export const GalaxyArm = ({ armIndex, totalArms, sphereCount }: GalaxyArmProps) => {
  const positions = generateSpiralPositions(sphereCount, totalArms, 15);
  const colors = [
    '#ff66cc', '#66ffff', '#ff99ff', '#99ffff', 
    '#cc99ff', '#9966ff', '#ff99cc', '#99ccff'
  ];
  
  return (
    <>
      {positions.slice(
        armIndex * sphereCount,
        (armIndex + 1) * sphereCount
      ).map((pos, i) => (
        <AnimatedSphere
          key={`arm-${armIndex}-${i}`}
          position={pos}
          scale={0.2 + Math.random() * 0.15}
          color={colors[Math.floor(Math.random() * colors.length)]}
          speed={0.3 + Math.random() * 0.4}
          distort={0.3 + Math.random() * 0.2}
          orbitRadius={0.8 + Math.random()}
          orbitSpeed={0.15 + Math.random() * 0.25}
          intensity={2}
        />
      ))}
    </>
  );
};