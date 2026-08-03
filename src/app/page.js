import Image from "next/image";
import styles from "./page.module.css";
import Sphere from "@/components/sphere";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Sphere/>
      </main>
    </div>
  );
}
