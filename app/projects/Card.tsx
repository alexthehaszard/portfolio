import styles from "./page.module.css";
import { Project } from "./Project";
import Image from "next/image";

interface Props {
  project: Project;
  delay: number;
}

interface LinkProps {
  href?: string;
}

export default function Card({ project, delay }: Props) {
  const linkProps: LinkProps = {};

  if (project.github) linkProps.href = project.github;

  return (
    <div className={styles.card} style={{ animationDelay: `${delay / 5}s` }}>
      <h1>{project.name}</h1>
      <a href={project.link}>
        <Image
          src={`/${project.photo}`}
          width="300"
          height="150"
          alt={project.name}
        />
      </a>
      <div className={styles.link_container}>
        <a href={project.link}>View project</a>
        <a {...linkProps} className={project.github ? "" : styles.disabled}>
          View code
        </a>
      </div>
    </div>
  );
}
