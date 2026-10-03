import styles from "./Welcome.module.css";

export default function Welcome({ commons }) {
  const section = commons.welcome;

  return (
    <section className={styles.welcome}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>{section.eyebrow}</p>

          <h2>{section.title}</h2>
        </div>

        <div className={styles.copy}>
          <p>{section.paragraph}</p>

          <div className={styles.note}>
            <p>{section.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
