import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";

export default function Blob({ position, texture, onClick }) {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.x += 0.001;
    }
  });

  return (
    <mesh ref={meshRef} position={position} onClick={onClick}>
      <sphereGeometry args={[1.1, 64, 64]} />
      <MeshDistortMaterial
        map={texture}
        distort={0.4} // amount of shape deformation
        speed={2}     // speed of animation
        radius={1}
        roughness={0.2}
        metalness={0.0}
      />
    </mesh>
  );
}
