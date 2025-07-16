import { useState, useRef, useEffect } from "react";
import "./ProjectModal.css";
import closeIcon from "../images/close.svg";
import leftButton from "../images/left-arrow.svg"
import rightButton from "../images/right-arrow.svg"
import backHome from "../images/airdroid.svg"

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
        <img
          src={closeIcon}
          alt="Close modal"
          className="modal-close-icon"
          onClick={onClose}
        />

        <h2 className="project-title">
          <em>{project.title}</em>, {project.year}
        </h2>

        <div className="carousel-wrapper">
          <img
            src={leftButton}
            alt="Arrow left"
            className="arrow-left"
            onClick={() => scrollTo(Math.max(currentIndex - 1, 0))}
          />

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

          <img
            src={rightButton}
            alt="Arrow Right"
            className="arrow-right"
            onClick={() =>
              scrollTo(Math.min(currentIndex + 1, project.images.length - 1))
            }
          />
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
              <strong>Image:</strong> {project.captions[currentIndex]}
            </p>
          </div>
        )}

        <p className="project-description">{project.description}</p>

        <button className="close-button" onClick={onClose}>
          <img src={backHome} alt="back home" className="back-home" /><div>back home</div>
        </button>
      </div>
    </div>
  );
}
