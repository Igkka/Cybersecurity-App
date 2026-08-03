"use client";

import { useState } from "react";
import "./sphere.css";

export default function Sphere() {
  const [glow, setGlow] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setGlow({ x, y });
  };

  return (
    <div className="scene" onMouseMove={handleMouseMove}>
      <div
        className="sphere"
        style={{
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(120, 255, 160, 0.35) 0%, rgba(35, 63, 45, 0.9) 35%, rgba(22, 42, 22, 0.75) 65%, rgba(15, 31, 15, 0.55) 100%)`,
        }}
      />
    </div>
  );
}