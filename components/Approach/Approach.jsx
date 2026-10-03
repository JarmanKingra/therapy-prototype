import styles from "./Approach.module.css";

export default function Approach({ commons }) {
  const section = commons.approach;

  return (
    <section className={styles.section} id="approach">
      <div className={styles.container}>
        <div className={styles.intro}>
          <div className={styles.introLeft}>
            <p className={styles.eyebrow}>{section.eyebrow}</p>
            <h2>{section.title}</h2>
            <p className={styles.description}>{section.description}</p>
          </div>
        </div>

        {/* <div className={styles.divider} /> */}

        <div className={styles.steps}>
          {section.cards.map((card, index) => (
            <article className={styles.step} key={card.title}>
              <span className={styles.number}>0{index + 1}</span>

              <div className={styles.stepContent}>
                <h3>{card.title}</h3>

                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
