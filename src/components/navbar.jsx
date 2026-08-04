"use client";

import "./style/navbar.css";
import Link from "next/link";

let links = [
  "/doc",
  "/home"
]

export default function Navbar() {
 const [isIn, setIsIn] = useState(false);
 const [isUp, setIsUp] = useState(false);

  return (
    <header>

        <nav className="navbar">

          <div className="logo">PulseGuard</div>

          <ul className="nav-links">
            <Link href="/home">Home</Link>
            <a href="#rates">Rates</a>
            <Link href="/doc">Documents</Link>
          </ul>

          <div className="auth-buttons">
            <button onClick={() => setIsIn(true)} className="login" >
              Sign in
            </button>
            <button onClick={() => setIsUp(true)} className="register" >
              Sign up
            </button>
          </div>

        </nav>

    </header>
  );
}