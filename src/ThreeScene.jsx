import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";

const ThreeScene = () => {
  return (
    <Canvas style={{ height: "100vh" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <OrbitControls />
      <Box>
        <meshStandardMaterial attach="material" color="#f50057" />
      </Box>
    </Canvas>
  );
};

export default ThreeScene;
