import styles from "./page.module.css";
import { Project } from "./Project";
import Card from "./Card";
import { promises as fs } from "fs";

export default async function ProjectsPage() {
  const file = await fs.readFile(
    process.cwd() + "/app/projects/projects.json",
    "utf8"
  );
  const data = JSON.parse(file);

  return (
    <main className={styles.main}>
      {data.map((m: Project, i: number) => {
        return <Card key={m.name} project={m} delay={i}></Card>;
      })}
    </main>
  );
}
