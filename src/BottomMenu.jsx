import { useState, useEffect } from "react";
import "./App.css";
import AboutModal from "./AboutModal";
import Papa from "papaparse";

import smileIcon from "../images/mona.svg";
import emailIcon from "../images/paper.svg";
import instagramIcon from "../images/instagram-thin.svg";

export default function BottomMenu() {
  const [modalContent, setModalContent] = useState(null);
  const [aboutData, setAboutData] = useState({});
  const [exhibitions, setExhibitions] = useState([]);

  const openModal = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  // Fetch About content from Google Sheet CSV
  useEffect(() => {
    // ABOUT SHEET
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

    // EXHIBITIONS SHEET
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRzL3JGR-kjrREbNa6qJFqiAT8u1kdFAi2_4HbiDogDk1dSgLqZIo7TI4HhwTG0R4oLaaYQSbrFz9d_/pub?gid=171276663&single=true&output=csv"
    )
      .then((res) => res.text())
      .then((csv) => {
        const parsed = Papa.parse(csv, { header: true, skipEmptyLines: true });
        setExhibitions(parsed.data); // array of { year, title, location }
      });
  }, []);

  return (
    <>
      <div className="bottom-menu">
        <div
          onClick={() => openModal("about")}
          className="menu-button"
          title="About"
        >
          <img src={smileIcon} alt="About" width={50} height={50} />
        </div>

        <a
          href="mailto:ditiro23.dm@gmail.com"
          className="menu-button"
          title="Email"
        >
          <img src={emailIcon} alt="Email" width={50} height={50} />
        </a>

        <a
          href="https://www.instagram.com/ditiro.mashigo/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
          className="menu-button"
        >
          <img src={instagramIcon} alt="Instagram" width={50} height={50} />
        </a>
      </div>

      {modalContent === "about" && (
        <AboutModal onClose={closeModal}>
          <>
            <br />
            <img src="./images/kala04.JPG" alt="Ditiro Mashigo" />
            <div className="image-caption">
              <p>
                <strong>Image:</strong> {aboutData.caption}{" "}
              </p>
              <br />
            </div>
            <p>
              {aboutData.about.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <br />
            <div className="exhibitions">
              <div>
                <strong>Selected Exhibitions</strong>
              </div>
              <br />
              <div>
                {exhibitions.map((ex, i) => (
                  <div key={i}>
                    <strong>{ex.year}</strong> <em>{ex.title}</em>,{" "}
                    {ex.location}
                  </div>
                ))}
              </div>
            </div>
          </>
        </AboutModal>
      )}
    </>
  );
}
