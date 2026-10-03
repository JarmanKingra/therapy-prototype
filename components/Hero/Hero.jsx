import styles from "./Hero.module.css";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Hero({ business, commons }) {
  const { brand } = business;
  const { hero } = commons;

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>{hero.eyebrow}</p>

            <h1>{hero.title}</h1>

            <p className={styles.description}>{hero.description}</p>

            <div className={styles.actions}>
              <a href="#contact" className={styles.primaryCta}>
                {hero.primaryCta}
                <FaArrowRightLong />
              </a>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.imageWrap}>
              <img src={hero.image} alt={`${brand.name} therapy space`} />

              <div className={styles.imageOverlay}></div>
            </div>

            <div className={styles.accentShape}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
