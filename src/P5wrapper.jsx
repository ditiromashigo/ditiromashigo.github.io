import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const P5Wrapper = () => {
  const containerRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(400, 400);
        p.background(0);
      };

      p.draw = () => {
        p.background(0); // clear with black every frame
        p.fill(255);
        p.ellipse(p.mouseX, p.mouseY, 100, 100); // circle follows mouse
      };
    };

    const p5Instance = new p5(sketch, containerRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={containerRef}></div>;
};

export default P5Wrapper;
