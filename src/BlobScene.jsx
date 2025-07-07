import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import projects from "./data/projects";
import Blob from "./Blob";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

function BlobScene() {
  const [selected, setSelected] = useState(null);

  const textures = useLoader(
    TextureLoader,
    projects.map((project) => project.image)
  );

  return (
    <>
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 20 }} // 👈 Move the camera farther back
        gl={{ toneMappingExposure: 2 }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} />

        {projects.map((project, i) => (
          <Blob
            key={project.id} // ✅ FIX: Add a unique key
            position={[Math.sin(i) * 3, Math.cos(i * 1.5) * 2, (i - 1) * 0.5]}
            texture={textures[i]}
            onClick={() => setSelected(project)}
          />
        ))}
      </Canvas>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}

export default BlobScene;
