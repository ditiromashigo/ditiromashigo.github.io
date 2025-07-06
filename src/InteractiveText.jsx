import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const InteractiveText = () => {
  const containerRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(600, 200);
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(48);
      };

      p.draw = () => {
        p.background(30);
        
        // Map mouseY (0 to height) to a color from blue to red
        const r = p.map(p.mouseY, 0, p.height, 0, 255);
        const b = 255 - r;

        p.fill(r, 0, b);
        p.text('Move your mouse!', p.mouseX, p.height / 2);
      };
    };

    const p5Instance = new p5(sketch, containerRef.current);

    return () => p5Instance.remove();
  }, []);

  return <div ref={containerRef}></div>;
};

export default InteractiveText;
