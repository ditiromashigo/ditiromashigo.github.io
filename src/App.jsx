import { useState, useEffect } from "react";
import BlobScene from "./BlobScene";
import TopMenu from "./TopMenu";
import ProjectModal from "./ProjectModal";
import BottomMenu from "./BottomMenu";
import Papa from "papaparse";
import "./App.css";

function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [aboutData, setAboutData] = useState({});
  const [showColophon, setShowColophon] = useState(false);
  const [exhibitions, setExhibitions] = useState([]);

  const reset = () => {
    setActiveProject(null);
    setShowAbout(false);
    setShowColophon(false);
  };

  useEffect(() => {
    // Fetch about text
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRzL3JGR-kjrREbNa6qJFqiAT8u1kdFAi2_4HbiDogDk1dSgLqZIo7TI4HhwTG0R4oLaaYQSbrFz9d_/pub?gid=0&single=true&output=csv"
    )
      .then((res) => res.text())
      .then((csv) => {
        const parsed = Papa.parse(csv, { header: true, skipEmptyLines: true });
        const data = {};
        parsed.data.forEach((row) => {
          if (row.key && row.content) {
            data[row.key.trim()] = row.content.trim();
          }
        });
        setAboutData(data);
      });

    // Fetch exhibitions
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRzL3JGR-kjrREbNa6qJFqiAT8u1kdFAi2_4HbiDogDk1dSgLqZIo7TI4HhwTG0R4oLaaYQSbrFz9d_/pub?gid=171276663&single=true&output=csv"
    )
      .then((res) => res.text())
      .then((csv) => {
        const parsed = Papa.parse(csv, { header: true, skipEmptyLines: true });
        setExhibitions(parsed.data);
      });
  }, []);

  return (
    <>
      <TopMenu onReset={reset} />

      {activeProject && (
        <ProjectModal project={activeProject} onClose={reset} />
      )}

      <BlobScene
        activeProject={activeProject}
        setActiveProject={setActiveProject}
      />

      <BottomMenu
        showAbout={showAbout}
        setShowAbout={setShowAbout}
        aboutData={aboutData}
        exhibitions={exhibitions}
        showColophon={showColophon}
        setShowColophon={setShowColophon}
        setActiveProject={setActiveProject} // In case future use
        reset={reset}
      />
    </>
  );
}

export default App;
