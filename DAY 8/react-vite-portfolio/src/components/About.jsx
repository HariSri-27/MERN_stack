import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2>About Me</h2>

      <div className={styles.content}>
        <h3>Education</h3>
        <p>Bachelor of Computer Science</p>

        <h3>Skills</h3>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>Git & GitHub</li>
        </ul>
      </div>
    </section>
  );
}

export default About;