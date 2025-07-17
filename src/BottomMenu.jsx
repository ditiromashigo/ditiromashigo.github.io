import "./App.css";
import AboutModal from "./AboutModal";
import smileIcon from "../images/mona.svg";
import emailIcon from "../images/paper.svg";
import instagramIcon from "../images/instagram-thin.svg";
import colophonIcon from "../images/underhand.svg";

export default function BottomMenu({
  showAbout,
  setShowAbout,
  showColophon,
  setShowColophon,
  aboutData,
  exhibitions,
  reset,
}) {
  const openModal = () => setShowAbout(true);
  const openColophon = () => setShowColophon(true);
  const closeModal = () => setShowAbout(false);

  return (
    <>
      <div className="bottom-menu">
        <div onClick={openModal} className="menu-button" title="About">
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

        <div onClick={openColophon} className="menu-button" title="Colophon">
          <img src={colophonIcon} alt="Colophon" width={50} height={50} />
        </div>
      </div>

      {showAbout && (
        <AboutModal onClose={reset}>
          <>
            <br />
            <img src="./images/kala04.JPG" alt="Ditiro Mashigo" />
            <div className="image-caption">
              <p>
                <strong>Image:</strong> {aboutData.caption}
              </p>
              <br />
            </div>
            <p>
              {aboutData.about?.split("\n").map((line, i) => (
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

{showColophon && (
        <AboutModal onClose={reset}>
          <>
          <div>This is a Colophon</div>

          </>
        </AboutModal>
      )}
    </>
  );
}
