"use client";

import styles from "./Contact.module.css";
import { FaSquareArrowUpRight } from "react-icons/fa6";

export default function Contact({ business, commons }) {
  const section = commons.contactSection;
  const { contact } = business;

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>{section.eyebrow}</p>

            <h2>{section.title}</h2>

            <p className={styles.description}>
              {section.description}
            </p>

            <div className={styles.reassurance}>
              {section.reassurance}
            </div>

            <div className={styles.details}>
              <a href={`mailto:${contact.email}`}>
                {contact.email}
              </a>

              <a
                href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
              >
                {contact.phone}
              </a>

              <span>{contact.city}</span>
            </div>
          </div>

          <form
            className={styles.form}
            onSubmit={(event) => event.preventDefault()}
          >
            <div className={styles.formIntro}>
              <span>Send a message</span>
              <p>
                You don't need to have everything figured out.
              </p>
            </div>

            <div className={styles.fields}>
              {section.form.fields.map((field) => (
                <label key={field.name}>
                  <span>{field.label}</span>

                  {field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      placeholder={field.placeholder}
                      rows="5"
                    />
                  ) : (
                    <input
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                    />
                  )}
                </label>
              ))}
            </div>

            <button type="submit">
              {section.form.button}
              <FaSquareArrowUpRight />
            </button>

            <small>
              By sending this form, you are only requesting contact.
              It does not create a therapist-client relationship.
            </small>
          </form>
        </div>
      </div>
    </section>
  );
}