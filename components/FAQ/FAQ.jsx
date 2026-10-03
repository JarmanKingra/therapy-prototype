import styles from "./FAQ.module.css";

export default function FAQ({ commons }) {
  const section = commons.faqs;

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>{section.eyebrow}</p>

            <h2>{section.title}</h2>

            <a href="#contact" className={styles.questionLink}>
              Still have a question?
              <span>Get in touch →</span>
            </a>
          </div>

          <div className={styles.list}>
            {section.items.map((item) => (
              <details key={item.question} className={styles.item}>
                <summary>
                  <span className={styles.question}>
                    {item.question}
                  </span>

                  <span className={styles.icon}>+</span>
                </summary>

                <div className={styles.answer}>
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}