"use client";

import styles from "./Welcome.module.css";

export default function Welcome({ commons }) {
  const section = commons.welcome;
  return (
    <section
      className={styles.welcome} 
      id="welcome"
    >
      {" "}
      <div className={styles.container}>
        {" "}
        <div className={styles.intro}>
          {" "}
          <p className={styles.eyebrow}>{section.eyebrow}</p>{" "}
          <h2>{section.title}</h2>{" "}
        </div>
        <div className={styles.copy}>
          <p className={styles.paragraph}>{section.paragraph}</p>

          <div className={styles.note}>
            <span aria-hidden="true" />
            <p>{section.note}</p>
            <span aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
