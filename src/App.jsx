import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import CupModel from "./models/CupModel";

export default function App() {
  const [color, setColor] = useState("#998BCF");
  const [stickerUrl, setStickerUrl] = useState("");

  const stickers = [
    "/stickers/heart.png",
    "/stickers/flower.png",
    "/stickers/butter1.png",
    "/stickers/butter2.png",
    "/stickers/butter3.png",
    "/stickers/eng.png",
    "/stickers/pal.png"
  ];

  return (
    <>
      <Canvas camera={{ position: [0, 0, 10], fov: 40 }}>
        <color attach="background" args={["#f0f0f0"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls />
        <CupModel color={color} stickerUrl={stickerUrl} />
      </Canvas>

      <div style={{ position: "absolute", top: 20, left: 20, zIndex: 10 }}>
        <label>
          Pick a color:
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{ marginBottom: 20 }}
          />
        </label>

        <p>Select a sticker:</p>
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
              display: "block"
            }}
            onClick={() => setStickerUrl(url)}
          />
        ))}
      </div>
    </>
  );
}
