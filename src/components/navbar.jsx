"use client";

import "./style/navbar.css";
import Link from "next/link";

let links = [
  "/doc",
  "/home"
]

export default function Navbar() {
  return (
    <header>

        <nav className="navbar">

          <div className="logo">PulseGuard</div>

          <ul className="nav-links">
            <Link href="/">Home</Link>
            <a href="#pricing">Pricing</a>
            <Link href="/doc">Documents</Link>
          </ul>

          <div className="auth-buttons">
            <button className="login">Login</button>
            <button className="register">Register</button>
          </div>

        </nav>

    </header>
  );
}