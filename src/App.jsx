import { useState, useEffect } from "react";
import BlobScene from "./BlobScene";
import TopMenu from "./TopMenu";
import ProjectModal from "./ProjectModal";
import BottomMenu from "./BottomMenu";
import SoundToggle from "./SoundToggle";
import Papa from "papaparse";
import "./App.css";

function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [aboutData, setAboutData] = useState({});
  const [showColophon, setShowColophon] = useState(false);
  const [exhibitions, setExhibitions] = useState([]);
  const [awards, setAwards] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored
      ? stored === "true"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Only run side effects when darkMode changes
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

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

    // Fetch awards
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRzL3JGR-kjrREbNa6qJFqiAT8u1kdFAi2_4HbiDogDk1dSgLqZIo7TI4HhwTG0R4oLaaYQSbrFz9d_/pub?gid=1758434368&single=true&output=csv"
    )
      .then((res) => res.text())
      .then((csv) => {
        const parsed = Papa.parse(csv, { header: true, skipEmptyLines: true });
        setAwards(parsed.data);
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
      <div className="top-menu">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="set-dark"
          aria-label="Toggle dark mode"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
            fill="currentColor"
            className="dark-mode-icon"
          >
            <path d="M233.3,400c0,92,74.6,166.7,166.7,166.7V233.3c-92,0-166.7,74.6-166.7,166.7Z" />
            <path d="M400,33.3c-202.5,0-366.7,164.2-366.7,366.7s164.2,366.7,366.7,366.7,366.7-164.2,366.7-366.7c.9-201.6-161.7-365.7-363.3-366.7-1.1,0-2.2,0-3.3,0ZM49,400c-.6-166.7,132-353.1,351-353v186.3c92,0,166.7,74.6,166.7,166.7s-74.6,166.7-166.7,166.7v188.3c-217,0-355-188.3-351-355Z" />
          </svg>
        </button>
        <TopMenu onReset={reset} /> <SoundToggle />{" "}
      </div>


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
        awards={awards}
        showColophon={showColophon}
        setShowColophon={setShowColophon}
        setActiveProject={setActiveProject} // In case future use
        reset={reset}
      />
    </>
  );
}

export default App;
