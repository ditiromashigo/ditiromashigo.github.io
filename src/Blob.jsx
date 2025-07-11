import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";


export default function Blob({ position, texture, onClick }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Animate rotation and scale on hover
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x += 0.003;

      // Smooth scale animation
      const targetScale = hovered ? 1.3 : 1.1;
      meshRef.current.scale.lerp(
        { x: targetScale, y: targetScale, z: targetScale },
        0.1
      );
    }
  });

  const { scale } = useSpring({
    from: { scale: [0, 0, 0] },
    to: { scale: [1, 1, 1] },
    config: { tension: 10, friction: 10 },
    delay: Math.random() * 500, // staggered load
  });

  return (
    <a.group scale={scale}>
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
        document.body.style.cursor = "default";
      }}
    >
      <sphereGeometry args={[1.1, 64, 64]} />
      <MeshDistortMaterial
        map={texture}
        distort={hovered ? 0.5 : 0}
        speed={2}
        radius={1}
        roughness={0.2}
        metalness={0.0}
      />
    </mesh>
    </a.group>
  );
}
