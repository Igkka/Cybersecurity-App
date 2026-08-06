"use client";

import "./style/navbar.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DEFAULT_AVATAR, getSession, logout } from "@/lib/auth";

export default function Navbar() {

  const [session, setSession] = useState({
    isAuth: false,
    username: "",
    avatar: DEFAULT_AVATAR,
    plan:""
  });

  
  
  useEffect(() => {
    setSession(getSession());
  }, []);

  const handleLogout = () => {
    logout();
    setSession({ isAuth: false, username: "", avatar: DEFAULT_AVATAR });
    window.location.href = "/";
  };
console.log(localStorage.getItem("plan"));

  return (
    <header>
      <nav className="navbar">
        <div className="logo">PulseGuard</div>

        <ul className="nav-links">
          <Link href="/">Home</Link>
          <a href="/#rates">Rates</a>
          <Link href="/doc">Documents</Link>
        </ul>

        {session.isAuth ? (
          <div className="user-profile">
            <img
              className="user-avatar"
              src={session.avatar}
              alt={`${session.username} avatar`}
            />
            <h2>{session.username }   {
                  session.plan === "free"
                    ? "ᶠʳᵉᵉ"
                  : session.plan === "pro"
                    ? "ᴾᴿᴼ"
                  : ""
              }</h2>

            <button type="button" className="logout-btn" onClick={handleLogout}>
              Log out
            </button>
          </div>
        ) : (
          <div className="auth-buttons">
            <Link href="/login" className="login">
              Sign In
            </Link>
            <Link href="/registration" className="register">
              Sign Up
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
