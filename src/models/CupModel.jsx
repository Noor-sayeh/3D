import { useGLTF, useTexture } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function CupModel({ color, stickerUrl }) {
  const { scene } = useGLTF("/models/3d_cup_model_highpoly.glb");
  const groupRef = useRef();
  const texture = useTexture(stickerUrl || "/stickers/blank.png");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(color),
        });
      }
    });
  }, [scene, color]);

  return (
    <group ref={groupRef} scale={3} position={[0, -1, 0]}>
      <primitive object={scene} />

      {/* استيكر بمكان واضح */}
      {stickerUrl && (
        <mesh position={[0, 0.15, 0.23]}>
          <planeGeometry args={[0.2, 0.2]} />
          <meshBasicMaterial map={texture} transparent />
        </mesh>
      )}
    </group>
  );
}

export default CupModel;
