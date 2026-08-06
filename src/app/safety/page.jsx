"use client";

import Navbar from "@/components/NavbarLoader";
import Sphere from "@/components/sphere";
import { useEffect, useState } from "react";
import { getSession } from "@/lib/auth";
import Link from "next/link";

export default function SafetyPage() {
  const [session, setSession] = useState({ isAuth: false, username: "" });

  useEffect(() => {
    setSession(getSession());
  }, []);

  if (!session.isAuth) {
    return (
      <>
        <Navbar />
        <Sphere />
        <main style={{ minHeight: "100vh", padding: "140px 24px 40px", color: "white" }}>
          <h1>Access denied</h1>
          <p>Please sign in to view the Safety section.</p>
          <Link href="/login" style={{ color: "#8fd3ff" }}>
            Go to login
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Sphere />
      <main style={{ minHeight: "100vh", padding: "140px 24px 40px", color: "white" }}>
        <h1>Safety</h1>
        <p>Hello, {session.username}! This is your personal Safety section.</p>
        <ul>
          <li>Secure account settings</li>
          <li>Privacy protection tips</li>
          <li>Notifications and alerts</li>
        </ul>
      </main>
    </>
  );
}
