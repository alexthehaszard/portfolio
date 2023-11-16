import { ReactNode } from "react";
import styles from "./page.module.css";

export default function Section(props: {
  content: ReactNode;
  title: string;
  delay: number;
}) {
  return (
    <section
      className={styles.section}
      style={{ animationDelay: `${props.delay / 5}s` }}
    >
      <h1>{props.title}</h1>
      {props.content}
    </section>
  );
}
