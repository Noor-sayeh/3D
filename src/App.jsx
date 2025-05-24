// App.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import CupModel from "./models/CupModel";
import { useEffect } from "react"; 
export default function App() {
  const [color, setColor] = useState("#998BCF");
  const [stickerUrl, setStickerUrl] = useState("");
  const [cupModelPath, setCupModelPath] = useState("/models/3d_cup_model_highpoly.glb");

  const cupOptions = [
    { name: "Cozy Cup", path: "/models/3d_cup_model_highpoly.glb" },
    { name: "Dreamy Cup", path: "/models/mugblack.glb" },
    { name: "Classic Mug", path: "/models/cup3.glb" },
  ];
  
 useEffect(() => {
  window.getSelectedCupData = function () {
    const cupName = cupOptions.find((cup) => cup.path === cupModelPath)?.name || "Unknown Cup";
    return JSON.stringify({
      cup: cupName,
      cupColor: color,
      sticker: stickerUrl,
    });
  };
}, [cupModelPath, color, stickerUrl]);
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
    
    "/stickers/butter1.png",
    "/stickers/butter2.png",
    "/stickers/butter3.png",

    

    "/stickers/stitch.png",
    "/stickers/stitch2.png",
    "/stickers/stitch3.png",
     
    "/stickers/flower3.png",
    "/stickers/flower (2).png",
    "/stickers/flower2.png",

    "/stickers/dad.png",
    "/stickers/dad2.png",
    
    "/stickers/mom.png",
    
    "/stickers/happybirthday.png",
    
    "/stickers/gm.png",
    "/stickers/pal.png",

    "/stickers/eng.png",
    "/stickers/cats.png",
    
    "/stickers/cat.webp",
  ];

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column" }}>
  
  {/* 🟣 Top Controls (Color + Cup Type) */}
  <div style={{ padding: 16 }}>
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
          marginRight: 6,
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
  </div>

  {/* 🟣 Middle 3D Cup View */}
  <div style={{ flex: 1 }}>
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
  </div>

  {/* 🟣 Bottom Sticker Slider */}
  <div style={{ padding: "10px 16px", background: "#fff" }}>
    <p style={{ fontWeight: "bold", marginBottom: 8 }}>Select a sticker:</p>
    <div
      style={{
        display: "flex",
        overflowX: "auto",
        gap: 10,
        paddingBottom: 10,
      }}
    >
      {stickers.map((url, i) => (
        <img
          key={i}
          src={url}
          alt="sticker"
          onClick={() => setStickerUrl(url)}
          style={{
            width: 60,
            height: 60,
            flex: "0 0 auto",
            border: stickerUrl === url ? "2px solid #998BCF" : "1px solid gray",
            borderRadius: 10,
            cursor: "pointer",
            padding: 4,
            backgroundColor: "#fff",
          }}
        />
      ))}
    </div>
  </div>

</div>

  );
}
