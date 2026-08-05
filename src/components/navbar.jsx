"use client";

import "./style/navbar.css";
import Link from "next/link";


let links = [
  "/doc",
  "/home"
]

export default function Navbar() {

  const isAuth = localStorage.getItem("isAuth");
  const username = localStorage.getItem("currentUser");

  return (
    <header>

        <nav className="navbar">

          <div className="logo">PulseGuard</div>

          <ul className="nav-links">
            <Link href="/home">Home</Link>
            <a href="#rates">Rates</a>
            <Link href="/doc">Documents</Link>
          </ul>

          {isAuth ?(
            <h2>{username}</h2>
          ):          
          <div className="auth-buttons">
            <Link href={"/login"} className="login">Login</Link>
            <Link href="/registration" className="register">Register</Link>
          </div>
          }


        </nav>

    </header>
  );
}