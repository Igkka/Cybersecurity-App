"use client"
import styles from "./page.module.css";
import Navbar from "@/components/NavbarLoader";
import Sphere from "@/components/sphere";
import HomePage from "@/components/Home";
import PricingPage from "@/components/Pricing";
import FooterPage from "@/components/Footer";
import FamilPage from "@/components/Famil";


export default function Home() {
  return (
    <div className={styles.page}>

      <Navbar />
      <Sphere/>
      <main>
        <HomePage/>
        <FamilPage/>
        <PricingPage />
      </main>
      <FooterPage />

    </div>
  );
}
