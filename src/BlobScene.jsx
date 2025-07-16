import { useState, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import projects from "./data/projects";
import Blob from "./Blob";
import ProjectModal from "./ProjectModal";
import dragIcon from "../images/underhand.svg";

function BlobScene() {
  const [selected, setSelected] = useState(null);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 4000); // disappear after 4s
    return () => clearTimeout(timer);
  }, []);

  const textures = useLoader(
    TextureLoader,
    projects.map((project) => project.image)
  );

  return (
    <>
      <div className="canvas-container">
        <Canvas
          camera={{ position: [0, 5, 20], fov: 30 }} // Move the camera farther back, higher the number, further away it
          gl={{ toneMappingExposure: 2 }}
        >
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={false} />

          {projects.map((project, i) => (
            <Blob
              key={project.id}
              position={[Math.sin(i) * 3, Math.cos(i * 1.5) * 2, (i - 1) * 2]}
              texture={textures[i]}
              onClick={() => setSelected(project)}
            />
          ))}
        </Canvas>
        {showHint && <div className="drag-hint">👆 Drag to explore</div>}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}

export default BlobScene;
