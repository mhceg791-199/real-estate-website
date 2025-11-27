import React, { Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";
import img from '../../../assets/shared/world_mask111.png';

const GlobeMesh = () => {
  const texture = useLoader(TextureLoader, img);

  const ref = React.useRef();
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const WorldLocation = ({ country }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-56 h-56">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <Suspense fallback={null}>
            <GlobeMesh />
          </Suspense>
          <OrbitControls autoRotate enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
      <p className="mt-2 text-center font-semibold">{country}</p>
    </div>
  );
};

export default WorldLocation;