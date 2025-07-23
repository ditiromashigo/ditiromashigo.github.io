import { useState } from "react";
import "./App.css";

export default function TopMenu({ onReset }) {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (onReset) onReset();
  };

  return (
    <div className="name-wrapper">
      <h1
        className="animated-name"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
      >
        <span className={`letter first ${hovered ? "expanded" : "contracted"}`}>D</span>
        <span className={`middle-letters ${hovered ? "appear" : "disappear"}`}>
          itiro&nbsp;
        </span>
        <span className={`letter last ${hovered ? "expanded" : "contracted"}`}>M</span>
        <span className={`middle-letters ${hovered ? "appear" : "disappear"}`}>
          ashigo
        </span>
      </h1>
    </div>
  );
}
