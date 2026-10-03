import styles from "./AboutTherapist.module.css";

export default function AboutTherapist({ business, commons }) {
  const t = commons.therapist;

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.photoWrap}>
            <div className={styles.photo}>
              <img src={business.therapist.image} alt={t.name} />

              <div className={styles.photoShade}></div>

              <div className={styles.caption}>
                <span>Hi, I'm</span>

                <strong>{business.therapist.name}</strong>

                <small>{t.title}</small>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <p className={styles.eyebrow}>{t.eyebrow}</p>

            <h2>{t.intro}</h2>

            <div className={styles.paragraphs}>
              {t.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <a href={business.therapist.cta.href} className={styles.readMore}>
              {business.therapist.cta.text}
              <span> →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
