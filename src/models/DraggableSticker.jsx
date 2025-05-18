import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

function DraggableSticker({ textureUrl, initialPosition }) {
  const meshRef = useRef();
  const texture = useTexture(textureUrl);
  const [position, setPosition] = useState(initialPosition);
  const [rotationZ, setRotationZ] = useState(0);
  const isDragging = useRef(false);
  const offset = useRef(new THREE.Vector3());

  const handlePointerDown = (e) => {
    isDragging.current = true;
    offset.current.copy(e.point).sub(meshRef.current.position);
    e.stopPropagation();
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const handlePointerMove = (e) => {
    if (isDragging.current) {
      const newPos = e.point.clone().sub(offset.current);
      setPosition([newPos.x, newPos.y, newPos.z]);
    }
  };

  const rotateLeft = () => {
    setRotationZ((prev) => prev - Math.PI / 8);
  };

  const rotateRight = () => {
    setRotationZ((prev) => prev + Math.PI / 8);
  };

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z = rotationZ;
    }
  });

  return (
    <>
      <mesh
        ref={meshRef}
        position={position}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerMove={handlePointerMove}
      >
        <planeGeometry args={[0.4, 0.4]} />
        <meshBasicMaterial map={texture} transparent />
      </mesh>

      {/* أزرار التدوير */}
      <Html position={position}>
        <div style={{ display: "flex", gap: "5px" }}>
          <button onClick={rotateLeft}>↺</button>
          <button onClick={rotateRight}>↻</button>
        </div>
      </Html>
    </>
  );
}

export default DraggableSticker;
