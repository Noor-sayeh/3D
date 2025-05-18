import { Canvas } from "@react-three/fiber";
import { OrbitControls, Decal, useTexture } from "@react-three/drei";
import * as THREE from "three";

function DecalBox() {
  const texture = useTexture("/stickers/heart.png");

  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"white"} />
      <Decal
        position={[0, 0, 1]} // front face
        rotation={[0, 0, 0]}
        scale={1}
        map={texture}
        depthTest={true}
        depthWrite={false}
        polygonOffset={true}
        polygonOffsetFactor={-4}
      />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} />
      <OrbitControls />
      <DecalBox />
    </Canvas>
  );
}
