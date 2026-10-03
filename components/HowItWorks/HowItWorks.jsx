import styles from "./HowItWorks.module.css";

export default function HowItWorks({ commons }) {
  const section = commons.howItWorks;

  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>{section.eyebrow}</p>

          <h2>{section.title}</h2>
        </div>

        <div className={styles.steps}>
          {section.steps.map((step, index) => (
            <article className={styles.step} key={step.number}>
              <div className={styles.number}>{step.number}</div>

              <div className={styles.content}>
                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </div>

              {index < section.steps.length - 1 && (
                <span className={styles.connector} />
              )}
            </article>
          ))}
        </div>

        <div className={styles.bottom}>
          <a href="#contact" className={styles.link}>
            I'm ready to reach out <span>→</span>
          </a>

          {/* <span className={styles.note}>
            It's okay if you're still deciding.
          </span> */}
        </div>
      </div>
    </section>
  );
}
