import Section from "./Section";
import styles from "./page.module.css";

export default function ExperiencePage() {
  const content = [
    {
      title: "Personal Experience",
      content: (
        <p>
          For the past 5 years, I have been teaching myself how to build fun,
          SEO oriented websites using many technologies such as react & nextjs.
          I am able to take designs to the next level and bring web pages alive.
          I believe that a simple yet fun website it a great way to secure
          business, and I am able to leverage SSR (sever-side rendering) & ISR
          (incremental static regeneration) in nextjs to improve my
          website&apos;s search engine optimization (SEO).
        </p>
      ),
    },
    {
      title: "Tertiary Experience",
      content: (
        <>
          <p>
            I also have experience in a tertiary setting, while studying
            Computer Science at Otago University. This allowed me to hone my
            skills, and has given me the skills to not only create great looking
            websites, but also create solid and secure systems using many
            different languages.
            <br />
            The technologies and languages that I have experienced in this
            tertiary setting are:
          </p>
          <ul>
            <li>HTML, CSS & JS</li>
            <li>Java, C#, Python</li>
            <li>Matlab</li>
            <li>C</li>
            <li>Bash</li>
            <li>Git - GitHub & GitLab</li>
            <li>6809 Assembly</li>
          </ul>
        </>
      ),
    },
  ];
  return (
    <main style={{ display: "none" }} className={styles.main}>
      {content.map((m, i) => {
        return (
          <Section
            key={m.title}
            title={m.title}
            content={m.content}
            delay={i}
          ></Section>
        );
      })}
    </main>
  );
}
