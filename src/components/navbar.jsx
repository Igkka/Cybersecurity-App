"use client";

import LiquidGlass from "liquid-glass-react";
import "./navbar.css";

export default function Navbar() {
  return (
    <header>
      <LiquidGlass
          elasticity={0}
    displacementScale={30}
    blurAmount={0.35}
    saturation={1.2}
    aberrationIntensity={0}
      >

        <nav className="navbar">

          <div className="logo">PulseGuard</div>

          <ul className="nav-links">
            <a href="#home">Home</a>
            <a href="#pricing">Pricing</a>
            <a href="#documents">Documents</a>
          </ul>

          <div className="кreg">
            <button className="login">Login</button>
            <button className="register">Register</button>
          </div>

        </nav>
      </LiquidGlass>
    </header>
  );
}