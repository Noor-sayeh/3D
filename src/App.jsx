// App.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import CupModel from "./models/CupModel";

export default function App() {
  const [color, setColor] = useState("#998BCF");
  const [stickerUrl, setStickerUrl] = useState("");
  const [cupModelPath, setCupModelPath] = useState("/models/3d_cup_model_highpoly.glb");

  const cupOptions = [
    { name: "Classic Cup", path: "/models/3d_cup_model_highpoly.glb" },
    { name: "Plastic Cup", path: "/models/mugblack.glb" },
    { name: "new Cup", path: "/models/cup3.glb" },
  ];

  // Configurations for each cup model
  const cupConfigs = {
    "/models/3d_cup_model_highpoly.glb": {
      scale: 5,
      stickerPosition: [0, 0.15, 0.23],
      stickerSize: [0.2, 0.2],
    },
    "/models/mugblack.glb": {
       scale: 0.5,
       stickerPosition: [0, 2.4, 1.8],
       stickerSize: [2,2],
    },
    "/models/cup3.glb": {
       scale: 0.035,
       stickerPosition: [2, 30,40],
       stickerSize: [40,40],
    },
  };

  const stickers = [
    "/stickers/heart.png",
    "/stickers/flower.png",
    "/stickers/butter1.png",
    "/stickers/butter2.png",
    "/stickers/butter3.png",
    "/stickers/eng.png",
    "/stickers/pal.png",
    "/stickers/cat.webp",
    "/stickers/cats.png",
    "/stickers/gm.png",
  ];

  return (
    <>
      <Canvas camera={{ position: [0, 0, 10], fov: 40 }}>
        <color attach="background" args={["#f0f0f0"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls />
        <CupModel
          modelPath={cupModelPath}
          color={color}
          stickerUrl={stickerUrl}
          config={cupConfigs[cupModelPath]}
        />
      </Canvas>

      <div style={{ position: "absolute", top: 20, left: 20, zIndex: 10 }}>
        <label>
          Pick a color:
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{ marginBottom: 20, display: "block" }}
          />
        </label>

        <p>Select a cup:</p>
        {cupOptions.map((cup, i) => (
          <button
            key={i}
            onClick={() => setCupModelPath(cup.path)}
            style={{
              marginBottom: 5,
              display: "block",
              backgroundColor: cupModelPath === cup.path ? "#998BCF" : "white",
              color: cupModelPath === cup.path ? "white" : "#333",
              border: "1px solid #ccc",
              borderRadius: 4,
              padding: "4px 8px",
              cursor: "pointer",
            }}
          >
            {cup.name}
          </button>
        ))}

        <p style={{ marginTop: 20 }}>Select a sticker:</p>
        {stickers.map((url, i) => (
          <img
            key={i}
            src={url}
            alt="sticker"
            style={{
              width: 50,
              height: 50,
              border: stickerUrl === url ? "2px solid black" : "1px solid gray",
              marginBottom: 10,
              cursor: "pointer",
              display: "block",
            }}
            onClick={() => setStickerUrl(url)}
          />
        ))}
      </div>
    </>
  );
}
