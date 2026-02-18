import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
   return (
      <div className={styles.page}>
         <main className={styles.main}>
            <p>
               The craft of William Laurel Alvarez, a creative software engineer with a
               passion for design
            </p>
            <p>📍 Vancouver, Canada</p>
            <p>2026 portfolio — currently in progress</p>
            <a
               href="https://portfolio-v2-git-main-wilyyy.vercel.app/"
               target="_blank"
               rel="noopener noreferrer"
               className={styles.cta}
            >
               {"2022 Portfolio (Unfinished)"}
            </a>
         </main>
      </div>
   );
}
