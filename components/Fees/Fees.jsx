import styles from "./Fees.module.css";
import { FaCircleArrowRight } from "react-icons/fa6";

export default function Fees({ commons }) {
  const section = commons.fees;

  return (
    <section className={styles.section} id="fees">
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>{section.eyebrow}</p>

          <h2>{section.title}</h2>

          <p className={styles.description}>
            {section.description}
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.rateHeader}>
            <div>
              <span className={styles.label}>
                {section.session.name}
              </span>

              <h3>{section.session.duration}</h3>
            </div>

            <div className={styles.price}>
              <strong>{section.session.price}</strong>
              <span>{section.session.detail}</span>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.notes}>
            {section.notes.map((note) => (
              <div className={styles.note} key={note}>
                <span>✓</span>
                <p>{note}</p>
              </div>
            ))}
          </div>

          <div className={styles.footer}>
            <a href="#contact">
              Ask a question about fees
              <FaCircleArrowRight />
              {/* <span>↗</span> */}
            </a>

            <span className={styles.reassurance}>
              No pressure. You can ask before deciding.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}