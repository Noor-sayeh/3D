// GiftBoxPage.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function GiftBoxModel({ boxColor, lidColor, ribbonColor }) {
  const { scene } = useGLTF("/models/box.glb");
  const groupRef = useRef();

  useEffect(() => {
    console.log("🧩 Traversing gift box model...");
    scene.traverse((child) => {
      if (child.isMesh) {
        console.log("➡️ Mesh name:", child.name);

        if (child.name === "Node1") {
          child.material = new THREE.MeshStandardMaterial({ color: ribbonColor }); // الشبرة
        } else if (child.name === "Node2") {
          child.material = new THREE.MeshStandardMaterial({ color: boxColor  }); // box
        } else if (child.name === "Node3") {
          child.material = new THREE.MeshStandardMaterial({ color: lidColor}); // الغطاء
        }
      }
    });
  }, [scene, boxColor, lidColor, ribbonColor]);

  return <primitive ref={groupRef} object={scene} scale={0.1} position={[0, 0, 0]} />;
}

export default function GiftBoxPage() {
  const [boxColor, setBoxColor] = useState("#FFB8B8");
const [lidColor, setLidColor] = useState("#FFB8B8");
const [ribbonColor, setRibbonColor] = useState("#923A3A");


  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", background: "#f7f7f7" }}>
      <div style={{ padding: 20 }}>
        <label style={{ display: "block", marginBottom: 20 }}>
          🎁 <b>Box Color:</b>
          <br />
          <input
            type="color"
            value={boxColor}
            onChange={(e) => setBoxColor(e.target.value)}
            style={{ width: 50, height: 30, marginTop: 5 }}
          />
        </label>

        <label style={{ display: "block", marginBottom: 20 }}>
  📦 <b>Lid Color:</b>
  <br />
  <input
    type="color"
    value={lidColor}
    onChange={(e) => setLidColor(e.target.value)}
    style={{ width: 50, height: 30, marginTop: 5 }}
  />
  <br />
  <button
    onClick={() => setLidColor(boxColor)}
    style={{
      marginTop: 8,
      padding: "4px 10px",
      background: "#923A3A",
      border: "1px solid #999",
      borderRadius: 4,
      cursor: "pointer",
      fontSize: 12
    }}
  >
    Match Lid to Box
  </button>
 </label>


        <label style={{ display: "block", marginBottom: 20 }}>
          🎀 <b>Ribbon Color:</b>
          <br />
          <input
            type="color"
            value={ribbonColor}
            onChange={(e) => setRibbonColor(e.target.value)}
            style={{ width: 50, height: 30, marginTop: 5 }}
          />
        </label>
      </div>

      <div style={{ flex: 1 }}>
        <Canvas camera={{ position: [0, 0, 10], fov: 40 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <OrbitControls />
          <GiftBoxModel
            boxColor={boxColor}
            lidColor={lidColor}
            ribbonColor={ribbonColor}
          />
        </Canvas>
      </div>
    </div>
  );
}
