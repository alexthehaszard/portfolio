import Section from "./Section";
import styles from "./page.module.css";

export default function ExperiencePage() {
  const content = [
    {
      title: "Academic Record",
      content: (
        <ul>
          <li>
            <h3>COMP161 - Computer Programming</h3>
            <p>Learned basics of software development using Java.</p>
            <h4>A+</h4>
          </li>
          <li>
            <h3>COMP162 - Foundations of Computer Science</h3>
            <p>More advanced software development ideas in Java & C</p>
            <h4>A+</h4>
          </li>
          <li>
            <h3>COMP101 - Foundations of Information Systems</h3>
            <p>Basic solution designing, including SQL and database design</p>
            <h4>A+</h4>
          </li>
          <li>
            <h3>COMO101 - Modelling and Computation</h3>
            <p>
              Learned simple modelling, including Ordinary Differential
              Equations and Initial Value Problems
            </p>
            <h4>A-</h4>
          </li>
          <li>
            <h3>MATH130 - Fundamentals Of Modern Mathematics</h3>
            <p>
              Built on Calculus and Algebra with higher dimensional models and
              problems
            </p>
            <h4>B+</h4>
          </li>
          <li>
            <h3>MATH140 - Fundamentals Of Modern Mathematics 2</h3>
            <p>
              Built on understanding of Calculus and Complex numbers from
              MATH130, and introduced Truth and Falsehood, and Matrices and
              Subspaces.
            </p>
            <h4>B-</h4>
          </li>
          <li>
            <h3>MART112 - Marketing</h3>
            <p>
              Learned basic marketing techniques, and the ability to produce
              marketing plans.
            </p>
            <h4>B-</h4>
          </li>
          <li>
            <h3>COSC201 - Algorithms and Data Structures</h3>
            <p>
              Learned all common data structures and techniques, and gave a full
              understanding of C programming.
            </p>
            <h4>A</h4>
          </li>
          <li>
            <h3>COSC202 - Software Development</h3>
            <p>
              Learned tools such as Git, and how working as a group should be
              tackled. During the semester, we produced a group project which
              involved image convolution and image filtering using Java.
            </p>
            <h4>A</h4>
          </li>
          <li>
            <h3>COSC203 - Web, Databases and Networks</h3>
            <p>
              Learned Client/Server architectures, TCP/IP stack, information
              storage and retreival, and security concepts.
            </p>
            <h4>A</h4>
          </li>
          <li>
            <h3>COSC204 - Computer Systems</h3>
            <p>
              Learned all details of computer system starting from electronic
              components, up to operating systems, and how computer hardware
              works. Any programming was done in 6809 Assembly and C.
            </p>
            <h4>A</h4>
          </li>
          <li>
            <h3>COMP210 - Information Assurance</h3>
            <p>
              Learned about finding vulnerabilities in software products. Built
              a technical and theoretical understanding of many vulnerabilities
              and solutions.
            </p>
            <h4>A</h4>
          </li>
          <li>
            <h3>MATH202 - Linear Algebra</h3>
            <p>
              Advanced my knowledge on Linear Algebra. Explored subjects such as
              vector spaces, linear transformations, orthogonality, eigenvalues
              & eigenvectors.
            </p>
            <h4>B-</h4>
          </li>
          <li>
            <h3>COMO204 - Differential Equations</h3>
            <p>
              Advanced my knowledge on Ordinary Differential Equations. Explored
              subjects such as analytical methods, graphical analysis and
              numerical techniques.
            </p>
            <h4>C+</h4>
          </li>
          <li>
            <h3>COSC326 - Computational Problem Solving</h3>
            <p>
              Advanced my knowledge on problem solving, testing, working with
              clients and working in a team.
            </p>
            <h4>A</h4>
          </li>
          <li>
            <h3>COSC344 - Database Theory and Applications</h3>
            <p>
              Learned about relational databases, database design, graph
              databases, and big data.
            </p>
            <h4>A-</h4>
          </li>
          <li>
            <h3>COSC342 - Visual Computing</h3>
            <p>
              Learned OpenGL using C++, focusing on the topics of image
              processing, computer graphics and computer vision.
            </p>
            <h4>A</h4>
          </li>
          <li>
            <h3>COMO303 - Numerical Methods</h3>
            <p>
              Learned about matrix computation, data fitting, and numerical
              solutions. For any programming we used Matlab.
            </p>
            <h4>B+</h4>
          </li>
          <li>
            <h3>COSC343 - Artificial Intelligence</h3>
            <p>Paper not started.</p>
            <h4>N/A</h4>
          </li>
          <li>
            <h3>COSC345 - Software Engineering</h3>
            <p>Paper not started.</p>
            <h4>N/A</h4>
          </li>
          <li>
            <h3>COSC349 - Cloud Computing Architecture</h3>
            <p>Paper not started.</p>
            <h4>N/A</h4>
          </li>
        </ul>
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
