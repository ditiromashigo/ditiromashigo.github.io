import "./App.css";
import AboutModal from "./AboutModal";

export default function BottomMenu({
  showAbout,
  setShowAbout,
  showColophon,
  setShowColophon,
  aboutData,
  exhibitions,
  awards,
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
          <svg
            className="icon-svg"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect
                x="14.9901"
                y="9.4682"
                width="13.5573"
                height="19.545"
                rx="6.7786"
              />
              <line x1="28.5473" y1="22.2346" x2="28.5473" y2="42.5705" />
              <path d="M21.0908,29.0132v3.7283c-4.8015,0-12.0885,6.27-12.0885,9.829" />
              <path d="M42.5,42.5705s-2.9374-8.9817-7.6416-8.9817V16.211A10.7816,10.7816,0,0,0,24.0769,5.43h0A10.7815,10.7815,0,0,0,13.2954,16.211V33.5888C9.7366,34.888,6.0084,39.972,5.5,42.5705" />
              <path d="M19.029,22.1781c.2633.874,2.5234.9332,2.895,0" />
              <path d="M19.029,17.33c-.283-.874-2.7124-.9332-3.1118,0" />
              <path d="M25.18,17.33c-.283-.874-2.7123-.9332-3.1118,0" />
              <path d="M18.1534,24.4659a3.1642,3.1642,0,0,0,2.3231.7626,3.1783,3.1783,0,0,0,2.4079-.89" />
            </g>
            <circle fill="currentColor" cx="18.0753" cy="17.6796" r="0.75" />
            <circle fill="currentColor" cx="24.4302" cy="17.6796" r="0.75" />
          </svg>
        </div>

        <a
          href="mailto:ditiro23.dm@gmail.com"
          className="menu-button"
          title="Email"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon-svg"
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15.0114,30.0893,5.5,23.01,42.5,6.616,33.764,41.384l-15.51-10.2685L42.5,6.616Z" />
            <path d="M15.0114,30.0893l.8646,9.2952,2.3779-8.2685" />
          </svg>
        </a>

        <a
          href="https://www.instagram.com/ditiro.mashigo/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
          className="menu-button"
        >
          <svg
            className="icon-svg"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M35.38,10.46a2.19,2.19,0,1,0,2.16,2.22v-.06A2.18,2.18,0,0,0,35.38,10.46Z" />
            <path d="M40.55,5.5H7.45a2,2,0,0,0-1.95,2v33.1a2,2,0,0,0,2,2h33.1a2,2,0,0,0,2-2V7.45A2,2,0,0,0,40.55,5.5Z" />
            <path d="M24,15.72A8.28,8.28,0,1,0,32.28,24h0A8.28,8.28,0,0,0,24,15.72Z" />
          </svg>
        </a>

        <div onClick={openColophon} className="menu-button" title="Colophon">
          <svg
            className="icon-svg"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16.36,24.17l-5.21.69c-1.12.15-1.27-.42-1.37-1L7.62,7.88a1,1,0,0,1,.63-1.2L18,4.57c.65-.21,1.12,0,1.34.88l1.89,12.61" />
            <path d="M21.24,18.06l1.17-1.33.78,1-.48,2.45-2.8,4.47-2.16,1L17,35.5l-.87-.6-1.21-9Z" />
            <path d="M19.91,24.69l4.56-2.57 5.38-.71-.05,1.78-3.95,1.43L23,26.9l-1.35.17L20,34.44l1.67-7.37L23,26.9l4.2-1.52 5.8-.2-1.45,2.53-2.6.18-4.06,2.18-2.18,5.67 2.17-5.66 3.71-1.46 4.31.43-1.7,2.12-1.72,0-1.89,1.63-2,5.13 2-5.13 1.89-1.63 1.72,0 3.52,5.65 5.67,2.33V43.5l-8.76-.22-13.53-5-1.25-1.46L17,35.5" />
            <path d="M11.16,16c1.28-4.14,4.64-5.06,6.92-1.37C16.6,17.07,14.08,18.11,11.16,16Z" />
            <path d="M13.82,12.58a2.85,2.85,0,0,1,1.8,4.3" />
            <path d="M13.82,12.58c-1.84,2.45.32,4,1.8,4.3" />
            <path d="M11,13.08l-.92-.62" />
            <path d="M12.32,11.82l-.88-1.16" />
            <path d="M13.92,11.1,13.6,9.75" />
            <path d="M15.72,11.07l.44-1.2" />
            <path d="M17.41,11.72l.69-.93" />
            <path d="M18.13,17l1.14.84" />
            <path d="M16.41,18.15l.66.94" />
            <path d="M14.5,18.57V20" />
            <path d="M12.22,18.24l-.88,1.08" />
            <path d="M14.45,14.25a1.16,1.16,0,0,1,.33,1C14.49,14.86,14.3,14.67,14.45,14.25Z" />
          </svg>
        </div>
      </div>

      {showAbout && (
        <AboutModal onClose={reset}>
          <>
            <h2 className="about-title">Biography & CV</h2>

            {aboutData.image && (
              <>
                <img src={aboutData.image} alt="Ditiro Mashigo" />
                {aboutData.caption && (
                  <div className="image-caption">
                    <p>
                      <strong>Image: </strong>
                      {aboutData.caption}
                    </p>
                    <br />
                  </div>
                )}
              </>
            )}
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
                <strong>Awards</strong>
              </div>
              <br />
              <div>
                {awards.map((ex, i) => (
                  <div key={i}>
                    <strong>{ex.year}</strong> <em>{ex.title}</em>, {ex.entity}
                  </div>
                ))}
              </div>
            </div>
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
            <h2 className="about-title">Colophon</h2>

            <img src="./images/7777.jpg" alt="Ditiro Mashigo" />
            <div className="image-caption">
              {" "}
              <p>
                <strong>Image:</strong> Installation view of Ditiro Mashigo’s
                exhibition titled{" "}
                <em>
                  7.7.7.7 / X9 / ‘Ma Zith iingqondo zethu, / Zimbonge uYehova; /
                  Kuba iinceba zakhe, / Zimi ngonaphakade{" "}
                </em>
                , Keyes Art Mile in Johannesburg, 2023 as part of INCCA’s Art
                After Baby initiative. Photograph by Anthea Pokroy
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
                <strong>Artwork: </strong>
                Featured artworks throughout are by Ditiro Mashigo and are
                copyright of the artist.
              </p>
              <p>
                <strong>Technology, Design & Fonts: </strong>This website was
                custom coded and designed by Lara Koseff, using JavaScript
                libraries React and Three.js, and is hosted on GitHub pages.
                Fonts include Figtree and Remixa.
              </p>

              <p>
                <strong>Support: </strong>This project contributed to INCCA's
                “pay it forward” imperative that formed part of their
                Presidential Employment Stimulus Programme (PESP 5) award from
                the National Arts Council South Africa (NAC) in 2024/5 for their
                project, Art After Baby.
              </p>
            </div>
          </>
        </AboutModal>
      )}
    </>
  );
}
