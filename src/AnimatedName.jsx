import { useState, useEffect } from "react";
import "./AnimatedName.css";

const AnimatedName = ({ name }) => {
  const [hovered, setHovered] = useState(false);
  const [transforms, setTransforms] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleHover = () => {
    setHovered(true);
    const newTransforms = name.split("").map(() => {
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;
      const r = (Math.random() - 0.5) * 100;
      return { x, y, r };
    });
    setTransforms(newTransforms);

    // On mobile, auto-reset after a short delay
    if (isMobile) {
      setTimeout(() => {
        setHovered(false);
      }, 1000); // adjust delay to taste
    }
  };

  const handleLeave = () => {
    if (!isMobile) {
      setHovered(false);
    }
  };

  return (
    <h1
      className="animated-name"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      onTouchStart={handleHover}
    >
      {name.split("").map((char, i) => {
        const transform = transforms[i] || { x: 0, y: 0, r: 0 };
        return (
          <span
            key={i}
            className="letter"
            style={{
              transform: hovered
                ? `translate(${transform.x}px, ${transform.y}px) rotate(${transform.r}deg)`
                : `translate(0, 0) rotate(0)`,
              transition: "transform 0.4s ease, opacity 0.4s ease",
              transitionDelay: `${i * 30}ms`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </h1>
  );
};

export default AnimatedName;
