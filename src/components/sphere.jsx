"use client";

import { useEffect, useState } from "react";
import "./style/sphere.css";

export default function Sphere() {
  const [glow, setGlow] = useState({ x: 35, y: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setGlow({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="scene">
      <div
        className="sphere"
        style={{
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%,
            rgba(120,255,160,.35) 0%,
            rgba(35,63,45,.9) 35%,
            rgba(22,42,22,.75) 65%,
            rgba(15,31,15,.55) 100%)`,
        }}
      />
    </div>
  );
}