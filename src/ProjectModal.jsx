import { useState, useRef, useEffect } from "react";
import "./ProjectModal.css";


export default function ProjectModal({ project, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef();

  const handleScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const width = scrollRef.current.offsetWidth;
    const newIndex = Math.round(scrollLeft / width);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const el = scrollRef.current;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (index) => {
    const container = scrollRef.current;
    const width = container.offsetWidth;
    container.scrollTo({
      left: index * width,
      behavior: "smooth",
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="menu-button">
          <svg
            className="modal-close-icon"
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClose}
          >
            <line x1="42.5" y1="42.5" x2="26.5" y2="26.5" />
            <line x1="42.5" y1="5.5" x2="26.5" y2="21.5" />
            <path d="M5.5,42.5,21.1716,26.8284a4,4,0,0,0,0-5.6568L5.5,5.5" />
          </svg>
        </div>

        <h2 className="project-title">
          <em>{project.title}</em>, {project.year}
        </h2>

        <div className="carousel-wrapper">
          <div
            className="menu-button"
            onClick={() => scrollTo(Math.max(currentIndex - 1, 0))}
          >
            <svg
              className="arrow-left"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16.7px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 800"
            >
              <polyline points="595.3 717.2 263.4 389.6 594.6 61.2" />
            </svg>
          </div>
          <div className="carousel-container" ref={scrollRef}>
            {project.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Slide ${i}`}
                className="carousel-image"
              />
            ))}
          </div>
          <div
            className="menu-button"
            onClick={() =>
              scrollTo(Math.min(currentIndex + 1, project.images.length - 1))
            }
          >
            <svg
              className="arrow-right"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16.7px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 800"
            >
              <polyline points="263.4 61.4 595 389.4 263.4 717.4" />
            </svg>
          </div>
        </div>

        <div className="carousel-lines">
          {project.images.map((_, i) => (
            <div
              key={i}
              className={`line ${i === currentIndex ? "active" : ""}`}
            ></div>
          ))}
        </div>

        {project.captions?.[currentIndex] && (
          <div className="image-caption">
            <p>
              <strong>Image:</strong>{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: project.captions[currentIndex],
                }}
              />
            </p>
          </div>
        )}

        <p
          className="project-description"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />

        <button className="close-button" onClick={onClose}>
          {/* <img src={backHome} alt="back home" className="back-home" /> */}
          <svg
            className="back-home"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              className="c"
              points="43.5 9.7306 4.5 24 33.1323 24 43.5 9.7306"
            />
            <polyline
              className="c"
              points="36.0033 12.4735 37.183 7.7371 4.5 24"
            />
            <polygon
              className="c"
              points="43.5 38.2694 4.5 24 33.1323 24 43.5 38.2694"
            />
            <polyline
              className="c"
              points="36.0033 35.5265 37.183 40.2629 4.5 24"
            />
          </svg>

          <div>back home</div>
        </button>
      </div>
    </div>
  );
}
