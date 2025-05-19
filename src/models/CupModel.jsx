// CupModel.jsx
import { useGLTF, useTexture, Html } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function CupModel({ modelPath, color, stickerUrl, name, config }) {
  const { scene } = useGLTF(modelPath);
  const groupRef = useRef();
  const texture = useTexture(stickerUrl || "/stickers/blank.png");

  useEffect(() => {
    console.log("Traversing model...");
    scene.traverse((child) => {
      if (child.isMesh) {
          if (modelPath.includes("mugblack") && child.name === "Node1") {
        child.visible = false; // 🔥 اخفي الطاولة فقط في هذا الموديل
        return;
       }

        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(color),
        });
      }
      
    });
  }, [scene, color]);

  if (!config) return null;

  return (
    <group ref={groupRef} scale={config.scale} position={[0, -1, 0]}>
      <primitive object={scene} />

      {stickerUrl && (
        <mesh position={config.stickerPosition} rotation={[0, 0, 0]}>
          <planeGeometry args={config.stickerSize} />
          <meshBasicMaterial map={texture} transparent />
        </mesh>
      )}

      {name && (
        <Html position={config.namePosition} center>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#fff",
              textShadow: "1px 1px 4px #000",
            }}
          >
            {name}
          </div>
        </Html>
      )}
    </group>
  );
}

export default CupModel;
