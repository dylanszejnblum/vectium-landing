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

    let lastRenderTime = 0;
    const throttleInterval = 1000 / 30; // 30 FPS

    const animate = (timestamp: number) => {
      const elapsedTime = timestamp - lastRenderTime;

      if (elapsedTime > throttleInterval) {
        globe.render();
        lastRenderTime = timestamp;
      }

      frameId = requestAnimationFrame(animate);
    };

    animate(performance.now());

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

export default React.memo(Globe);
