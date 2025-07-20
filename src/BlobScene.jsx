import { useState, useEffect } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import projects from "./data/projects";
import Blob from "./Blob";
import ProjectModal from "./ProjectModal";
import { useMediaQuery } from "react-responsive";

function AdjustCamera({ isMobile }) {
  const { camera } = useThree();

  useEffect(() => {
    if (isMobile) {
      camera.position.set(-5.27, -23.91, -5.44); // ⬅️ Lower Y and closer Z
      camera.lookAt(-2, -20, 0); // ⬅️ Look slightly upwards
    } else {
      camera.position.set(16, 15, -25);
      camera.lookAt(0, 0, 0);
    }
  }, [camera, isMobile]);

  // useEffect(() => {
  //   const logCamera = () => {
  //     console.log("Camera position:", camera.position.toArray());
  //     const dir = new THREE.Vector3();
  //     camera.getWorldDirection(dir);
  //     console.log("Camera looking toward:", dir.toArray());
  //   };

  //   window.addEventListener("click", logCamera);
  //   return () => window.removeEventListener("click", logCamera);
  // }, [camera]);

  return null;
}




function BlobScene({ activeProject, setActiveProject }) {
  // const [selected, setSelected] = useState(null);
  const [showHint, setShowHint] = useState(true);

  const isMobile = useMediaQuery({ maxWidth: 768 });

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
          camera={{
            position: isMobile ? [0, 10, 40] : [15, 5, 30],
            fov: isMobile ? 35 : 30, //higher number = smaller
          }}
          gl={{ toneMappingExposure: 1.5 }}
        >

<AdjustCamera isMobile={isMobile} />
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={false} />

          {projects.map((project, i) => {
            const angle = (i / projects.length) * Math.PI * 5;
            const radius = 6;

            let x, y, z;

            if (isMobile) {
              // More vertical stack for mobile
              x = Math.sin(angle * 0.5) * 3; // slight left-right movement
              y = i * 3; // space blobs vertically
              z = Math.cos(angle * 0.5) * 3;
            } else {
              // Original spiral
              x = Math.cos(angle) * radius;
              z = Math.sin(angle) * radius;
              y = Math.sin(i * 0.5) * 4;
            }

            return (
              <Blob
                key={project.id}
                position={[x, y, z]}
                texture={textures[i]}
                onClick={() => setActiveProject(project)}
              />
            );
          })}
        </Canvas>
        {showHint && <div className="drag-hint">👆 Drag to explore</div>}
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
}

export default BlobScene;
