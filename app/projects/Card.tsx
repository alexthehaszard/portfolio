import styles from "./page.module.css";
import Image from "next/image";

interface Props {
  project: Project;
  delay: number;
}

interface LinkProps {
  href?: string;
}

export interface Project {
  name: string;
  photo: string;
  link: string;
  github?: string;
  description: string;
  tools: string;
}

export default function Card({ project, delay }: Props) {
  const linkProps: LinkProps = {};

  if (project.github) linkProps.href = project.github;

  return (
    <div className={styles.card} style={{ animationDelay: `${delay / 5}s` }}>
      <div className={styles.left}>
        <h1>{project.name}</h1>
        <a href={project.link}>
          <Image
            src={`/${project.photo}`}
            width="300"
            height="150"
            alt={project.name}
            className={styles.card_image}
          />
        </a>
        <div className={styles.link_container}>
          <a href={project.link}>View project</a>
          <a {...linkProps} className={!project.github ? styles.disabled : ""}>
            View code
          </a>
        </div>
      </div>
      <div className={styles.right}>
        <h1>Tools Used</h1>
        <p>{project.tools}</p>
        <h1>Description</h1>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
