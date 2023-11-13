import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <main className={styles.main} style={{ display: "none" }}>
      <h1>Contact Me</h1>
      <p>Feel free to email me here:</p>
      <a href="mailto:alex.haszard@gmail.com">
        <h3>alex.haszard@gmail.com</h3>
      </a>
    </main>
  );
}
