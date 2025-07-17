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
  const openModal = () => {
    setShowAbout(true);
    setShowColophon(false); // 👈 Close Colophon if About is opened
  };

  const openColophon = () => {
    setShowColophon(true);
    setShowAbout(false); // 👈 Close About if Colophon is opened
  };
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
            <img src="./images/Ditiro_01.jpg" alt="Ditiro Mashigo" />
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
            <br />

            <img src="./images/kala04.JPG" alt="Ditiro Mashigo" />
            <div className="image-caption">
              {" "}
              <p>
                <strong>Image:</strong> Portrait of Ditiro Mashigo by Zydia
                Botes
              </p>
            </div>
            <br />
            <div className="colophon-columns">
              <p>
                <strong>Background: </strong>This website is an artist portfolio
                and digital archive of the work of Ditiro Mashigo, created in
                2025
              </p>
              <p>
                <strong>Technology used: </strong>This website was custom coded
                by Lara Koseff, using JavaScript libraries React and Three.js,
                and is hosted on GitHub pages.
              </p>
              <p>
                <strong>Design, fonts and artwork: </strong>The website was
                designed by Lara Koseff. Fonts include Figtree and Remixa.
                Featured artworks throughout are by Ditiro Mashigo and are
                copyright of the artist.
              </p>
              <p>
                <strong>Support: </strong>This project contributed to INCCA's
                “pay it forward” imperative that formed part of their
                Presidential Employment Stimulus Programme (PESP 4) award from
                the National Arts Council South Africa (NAC) in 2023 for their
                project, Art After Baby.
              </p>
            </div>
          </>
        </AboutModal>
      )}
    </>
  );
}
