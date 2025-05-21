import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import GiftBoxModel from "../models/GiftBoxModel"; // صحح المسار حسب مشروعك

export default function GiftBoxPage() {
  const [modelPath, setModelPath] = useState("/models/box.glb");
  const [boxColor, setBoxColor] = useState("#8D1111");
  const [lidColor, setLidColor] = useState("#8D1111");
  const [ribbonColor, setRibbonColor] = useState("#F0EA47");

  const boxOptions = [
    { name: "Box 1", path: "/models/box.glb" },
    { name: "Box 2", path: "/models/box2.glb" },
    { name: "Box 3", path: "/models/box3.glb" },
   
  ];

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <div style={{ padding: 20 }}>
        <label>
          🎁 <b>Box Color:</b><br />
          <input type="color" value={boxColor} onChange={(e) => setBoxColor(e.target.value)} />
        </label>
        <br /><br />

        <label>
          📦 <b>Lid Color:</b><br />
          <input type="color" value={lidColor} onChange={(e) => setLidColor(e.target.value)} />
          <br />
          <button onClick={() => setLidColor(boxColor)} style={{ marginTop: 8 }}>
            Match Lid to Box
          </button>
        </label>
        <br /><br />

        <label>
          🎀 <b>Ribbon Color:</b><br />
          <input type="color" value={ribbonColor} onChange={(e) => setRibbonColor(e.target.value)} />
        </label>

        <div style={{ marginTop: 20 }}>
          <p><b>Choose Gift Box Model:</b></p>
          {boxOptions.map((box, i) => (
            <button
              key={i}
              onClick={() => setModelPath(box.path)}
              style={{
                marginBottom: 6,
                backgroundColor: modelPath === box.path ? "#923A3A" : "#ddd",
                color: modelPath === box.path ? "#fff" : "#000",
                padding: "6px 10px",
                borderRadius: 4,
                border: "1px solid #aaa"
              }}
            >
              {box.name}
            </button>
          ))}
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <Canvas camera={{ position: [0, 0, 10], fov: 40 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <OrbitControls />
          <GiftBoxModel
            modelPath={modelPath}
            boxColor={boxColor}
            lidColor={lidColor}
            ribbonColor={ribbonColor}
          />
        </Canvas>
      </div>
    </div>
  );
}
