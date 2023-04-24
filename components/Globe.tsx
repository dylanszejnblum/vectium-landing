import createGlobe from "cobe";
import { useEffect, useRef } from "react";

// https://github.com/shuding/cobe

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1.0, 1.0, 1.0],
      markerColor: [0.1, 0.5, 0.8],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [40.7128, -74.006], size: 0.07 },
        { location: [-34.603683, -58.381557], size: 0.07 },
        { location: [26.228516, 50.586048], size: 0.07 },
        { location: [19.432608, -99.133209], size: 0.07 },
        { location: [1.352083, 103.819839], size: 0.07 },
        { location: [1.352083, 103.819839], size: 0.07 },
        { location: [6.49985, 3.340319], size: 0.07 },
        { location: [-26.263469, 28.062964], size: 0.07 },
        { location: [52.281729, 21.02983], size: 0.07 },
        { location: [-23.5795, -46.691517], size: 0.07 },
        { location: [4.59435, -73.921071], size: 0.07 },
        { location: [12.890784, 77.711931], size: 0.07 },
        { location: [36.87438, 127.893411], size: 0.07 },
        { location: [-33.787342, 150.912041], size: 0.07 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      />
    </>
  );
}
