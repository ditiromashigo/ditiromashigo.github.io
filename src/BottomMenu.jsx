import { useState } from "react";
import "./App.css";
import AboutModal from "./AboutModal";
import { Mail, Smile } from "lucide-react"; // or use your own SVGs

import smileIcon from "../images/face-smile.svg";
import emailIcon from "../images/email.svg";
import instagramIcon from "../images/logo-instagram.svg";

export default function BottomMenu() {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  return (
    <>
      <div className="bottom-menu">
        <div
          onClick={() => openModal("about")}
          className="menu-button"
          title="About"
        >
          <img src={smileIcon} alt="About" width={24} height={24} />
        </div>

        <a
          href="mailto:ditiro23.dm@gmail.com"
          className="menu-button"
          title="Email"
        >
          <img src={emailIcon} alt="Email" width={24} height={24} />
        </a>

        <a
          href="https://www.instagram.com/ditiro.mashigo/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
          className="menu-button"
        >
          <img src={instagramIcon} alt="Instagram" width={24} height={24} />
        </a>
      </div>

      {modalContent === "about" && (
  <AboutModal onClose={closeModal}>
    <>
      <h2>Ditiro Mashigo</h2>
      <p>Ditiro Mashigo is a multidisciplinary artist working with...</p>

      <div className="bio-section">
        <strong>Background</strong>
        <p>Born in... based in...</p>
      </div>

      <div className="exhibitions">
        <h3>Selected Exhibitions</h3>
        <ul>
          <li>2024 – Title, Gallery</li>
          <li>2023 – Title, Institution</li>
        </ul>
      </div>
    </>
  </AboutModal>
)}
    </>
  );
}
