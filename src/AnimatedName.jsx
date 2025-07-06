import { useState } from "react";
import "./AnimatedName.css";

const AnimatedName = ({ name }) => {
  const [hovered, setHovered] = useState(false);
  const [transforms, setTransforms] = useState([]);

  const handleHover = () => {
    setHovered(true);
    // generate random transforms per character
    const newTransforms = name.split("").map(() => {
      const x = (Math.random() - 0.5) * 100; // px
      const y = (Math.random() - 0.5) * 100;
      const r = (Math.random() - 0.5) * 100; // deg
      return { x, y, r };
    });
    setTransforms(newTransforms);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <h1
      className="animated-name"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
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
            //   opacity: hovered ? 0.3 : 1,
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
