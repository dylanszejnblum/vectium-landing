// src/components/Globe.tsx
import React, { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

type GlobeProps = {
  config: any;
  width: string;
  height: string;
};

const Globe: React.FC<GlobeProps> = ({ config, width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let frameId: number;
    let currentPhi = 0;

    const updatedConfig = {
      ...config,
      onRender: () => {
        currentPhi += 0.000003; // Decrease the increment value to slow down the spinning
        return { phi: currentPhi };
      },
    };

    const globe = createGlobe(canvasRef.current, updatedConfig);

    const animate = () => {
      globe.render();
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      globe.destroy();
    };
  }, [config]);

  return (
    <div className="App">
      <canvas
        ref={canvasRef}
        style={{ width, height, maxWidth: "100%", aspectRatio: 1 }}
      />
    </div>
  );
};

export default Globe;
