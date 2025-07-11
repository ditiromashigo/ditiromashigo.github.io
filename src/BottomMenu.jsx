import { useState } from "react";
import "./App.css";
import AboutModal from "./AboutModal";
import { Mail, Smile } from "lucide-react"; // or use your own SVGs

export default function BottomMenu() {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  return (
    <>
      <div className="bottom-menu">
        <button onClick={() => openModal("about")} title="About">
          <Smile />
        </button>
        <button onClick={() => openModal("contact")} title="Contact">
          <Mail />
        </button>
      </div>

      {modalContent && (
        <AboutModal onClose={closeModal}>
          {modalContent === "about" && <p>This is the About modal.</p>}
          {modalContent === "contact" && (
            <p>Email Ditiro at <a href="mailto:ditiro23.dm@gmail.com">ditiro23.dm@gmail.com</a></p>
          )}
        </AboutModal>
      )}
    </>
  );
}
