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
            <p>2026 portfolio — currently in progress</p>
            <button className={styles.cta}>
               <a>{"2022 Portfolio (Unfinished)"}</a>
            </button>
         </main>
      </div>
   );
}
