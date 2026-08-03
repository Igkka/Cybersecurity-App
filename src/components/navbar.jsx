"use client";

import "./style/navbar.css";

export default function Navbar() {
  return (
    <header>

        <nav className="navbar">

          <div className="logo">PulseGuard</div>

          <ul className="nav-links">
            <a href="#home">Home</a>
            <a href="#pricing">Pricing</a>
            <a href="#documents">Documents</a>
          </ul>

          <div className="auth-buttons">
            <button className="login">Login</button>
            <button className="register">Register</button>
          </div>

        </nav>

    </header>
  );
}