import { Environment } from '@react-three/drei';
import { Bloom, EffectComposer, ChromaticAberration, LensFlare } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { DynamicLights } from './DynamicLights';
import { GalaxyCore } from './GalaxyCore';
import { GalaxyArm } from './GalaxyArm';
import { StarField } from './StarField';

export const Scene = () => {
  const ARMS = 6;
  const SPHERES_PER_ARM = 40;

  return (
    <>
      <color attach="background" args={['#030012']} />
      <fog attach="fog" args={['#030012', 8, 35]} />
      
      <StarField count={2000} />
      <DynamicLights />
      <GalaxyCore />
      
      {[...Array(ARMS)].map((_, i) => (
        <GalaxyArm
          key={`galaxy-arm-${i}`}
          armIndex={i}
          totalArms={ARMS}
          sphereCount={SPHERES_PER_ARM}
        />
      ))}

      <Environment preset="night" />

      <EffectComposer>
        <Bloom
          intensity={2}
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={[0.004, 0.004]}
        />
      </EffectComposer>
    </>
  );
};