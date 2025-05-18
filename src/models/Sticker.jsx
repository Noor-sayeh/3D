import { Html, useTexture } from "@react-three/drei";
import { useEffect, useState } from "react";

function Sticker({ id, url, position, onRemove }) {
  const [texture, setTexture] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadTexture = async () => {
      try {
        const tex = await useTexture.preload(url);
        setTexture(tex);
        setLoaded(true);
      } catch (e) {
        console.error("❌ Failed to load sticker texture:", url);
      }
    };

    loadTexture();
  }, [url]);

  return (
    <group>
      {loaded && (
        <mesh position={position} rotation={[0, Math.PI, 0]}>
          <planeGeometry args={[0.2, 0.2]} />
          <meshBasicMaterial map={useTexture(url)} transparent />
        </mesh>
      )}

      <Html position={position}>
        <button
          onClick={() => onRemove(id)}
          style={{
            fontSize: "10px",
            backgroundColor: "white",
            border: "1px solid gray",
            borderRadius: "4px",
            padding: "2px 5px",
            cursor: "pointer",
            transform: "translateY(-30px)",
          }}
        >
          🗑️
        </button>
      </Html>
    </group>
  );
}

export default Sticker;
