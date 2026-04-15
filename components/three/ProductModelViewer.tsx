'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

function Model({ path }: { path: string }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={1.5} />;
}

function FallbackBox() {
  return (
    <mesh>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#F5C518" />
    </mesh>
  );
}

interface ProductModelViewerProps {
  modelPath?: string;
}

export default function ProductModelViewer({ modelPath }: ProductModelViewerProps) {
  const hasModel = modelPath && modelPath !== '/models/sample.glb';

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 relative">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          {hasModel ? <Model path={modelPath} /> : <FallbackBox />}
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enablePan={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
      {!hasModel && (
        <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-gray-500">
          Place your .glb file at public/models/sample.glb
        </div>
      )}
    </div>
  );
}
