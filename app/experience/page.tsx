import styles from "./page.module.css";

export default function ExperiencePage() {
  return (
    <main className={styles.main}>
      <div className={`blur-backdrop`}>
        <section>
          <h1>Personal Experience</h1>
          <p>
            For the past 5 years, I have been teaching myself how to build fun,
            SEO oriented websites using many technologies such as react &
            nextjs. I am able to take designs to the next level and bring web
            pages alive. I believe that a simple yet fun website it a great way
            to secure business, and I am able to leverage SSR (sever-side
            rendering) & ISR (incremental static regeneration) in nextjs to
            improve my website&apos;s search engine optimization (SEO).
          </p>
        </section>
        <div className={styles.separator}></div>
        <section>
          <h1>Tertiary Experience</h1>
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
        </section>
      </div>
    </main>
  );
}
