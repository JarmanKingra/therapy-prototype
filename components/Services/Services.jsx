import styles from "./Services.module.css";

export default function Services({ commons }) {
  const section = commons.services;

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>

        <div className={styles.heading}>
          <p className={styles.eyebrow}>
            {section.eyebrow}
          </p>

          <h2>
            {section.title}
          </h2>

          <p className={styles.description}>
            {section.description}
          </p>
        </div>

        <div className={styles.grid}>
          {section.items.map((item, index) => (
            <article
              className={styles.card}
              key={item.title}
            >
              <div className={styles.cardTop}>
                <span className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.arrow}>↗</span>
              </div>

              <div className={styles.cardContent}>
                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}