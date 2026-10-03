import styles from "./Footer.module.css";
import { GiMountains } from "react-icons/gi";
import { TiArrowRightThick } from "react-icons/ti";

export default function Footer({ business }) {
  const { brand, contact } = business;

  const phone = contact.phone.replace(/[^0-9+]/g, "");

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brandArea}>
            <a href="#" className={styles.brand}>
              <span className={styles.mark}><GiMountains /></span>

              <span className={styles.brandText}>
                <strong>{brand.name}</strong>
                <span>{brand.tagline}</span>
              </span>
            </a>

            <p className={styles.description}>
              Compassionate, private therapy for adults looking for
              a little more room to breathe.
            </p>

            <a href="#contact" className={styles.startLink}>
              Take the first step
              <TiArrowRightThick />

            </a>
          </div>

          <div className={styles.column}>
            <h3>Explore</h3>

            <a href="#services">How I help</a>
            <a href="#about">About</a>
            <a href="#approach">Approach</a>
            <a href="#faq">FAQs</a>
            <a href="#fees">Sessions & fees</a>
          </div>

          <div className={styles.column}>
            <h3>Contact</h3>

            <a href={`mailto:${contact.email}`}>
              {contact.email}
            </a>

            <a href={`tel:${phone}`}>
              {contact.phone}
            </a>

            <span>{contact.city}</span>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </span>

          <div>
            <a href="#">Privacy</a>
            <span>·</span>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}