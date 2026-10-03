import styles from "./Testimonials.module.css";

export default function Testimonials({ commons }) {
  const section = commons.testimonials;

  return (
    <section className={styles.section} id="testimonials">
      <div className="container">
        <div className={styles.heading}>
          <p className={styles.eyebrow}>{section.eyebrow}</p>
          <h2 className={styles.sectionTitle}>{section.title}</h2>
        </div>

        <div className={styles.grid}>
          {section.items.map((item) => (
            <figure className={styles.card} key={item.quote}>
              <div className={styles.stars}>★★★★★</div>
              <blockquote>“{item.quote}”</blockquote>
              <figcaption>{item.name}</figcaption>
            </figure>
          ))}
        </div>

        <p className={styles.disclaimer}>{section.disclaimer}</p>
      </div>
    </section>
  );
}