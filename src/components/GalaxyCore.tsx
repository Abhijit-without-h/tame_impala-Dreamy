import { AnimatedSphere } from './AnimatedSphere';

export const GalaxyCore = () => {
  const coreColors = ['#ff99ff', '#99ffff', '#ff99cc', '#cc99ff'];
  
  return (
    <>
      {/* Main core */}
      <AnimatedSphere 
        position={[0, 0, 0]} 
        scale={2.5} 
        color="#ffffff"
        speed={0.3}
        distort={0.3}
        intensity={4}
      />
      
      {/* Inner core spheres */}
      {[...Array(12)].map((_, i) => (
        <AnimatedSphere
          key={`core-${i}`}
          position={[0, 0, 0]}
          scale={0.8}
          color={coreColors[i % coreColors.length]}
          speed={0.6}
          distort={0.4}
          orbitRadius={2}
          orbitSpeed={0.4 + (i * 0.08)}
          intensity={3}
        />
      ))}
      
      {/* Outer core spheres */}
      {[...Array(8)].map((_, i) => (
        <AnimatedSphere
          key={`outer-core-${i}`}
          position={[0, 0, 0]}
          scale={0.5}
          color={coreColors[i % coreColors.length]}
          speed={0.8}
          distort={0.3}
          orbitRadius={3.5}
          orbitSpeed={0.3 + (i * 0.06)}
          intensity={2.5}
        />
      ))}
    </>
  );
};