"use client"
import styles from "./page.module.css";
import Navbar from "@/components/NavbarLoader";
import Sphere from "@/components/sphere";
import HomePage from "@/components/Home";
import PricingPage from "@/components/Pricing";
import FooterPage from "@/components/Footer";
import DocumentsPage from "@/components/Documents";


export default function Home() {
  return (
    <div className={styles.page}>

      <Navbar />
      <main>
        <HomePage />
        <Sphere />
        <PricingPage />
        <DocumentsPage />
      </main>
      <FooterPage />

    </div>
  );
}
