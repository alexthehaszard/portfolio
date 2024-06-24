import styles from "./page.module.css";
import Background from "./background";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={`${styles.content} blur-backdrop`}>
        <h2>Hey, I&apos;m</h2>
        <h1>Alex Haszard</h1>
        <h3>and I like to make software.</h3>
      </div>
    </main>
  );
}
