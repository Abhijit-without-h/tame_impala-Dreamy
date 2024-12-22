import { Canvas } from '@react-three/fiber';
import { Scene } from './components/Scene';
import { BackgroundMusic } from './components/BackgroundMusic';

export function App() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
        <Scene />
      </Canvas>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-pulse">
            Dreamscape
          </h1>
          <p className="text-xl text-gray-300">
            A mesmerizing journey through space and time
          </p>
        </div>
      </div>
      <BackgroundMusic />
    </div>
  );
}

export default App;