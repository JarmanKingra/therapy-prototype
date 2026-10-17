// import styles from "./HowItWorks.module.css";

// export default function HowItWorks({ commons }) {
//   const section = commons.howItWorks;

//   return (
//     <section className={styles.section} id="how-it-works">
//       <div className={styles.container}>
//         <div className={styles.heading}>
//           <p className={styles.eyebrow}>{section.eyebrow}</p>

//           <h2>{section.title}</h2>
//         </div>

//         <div className={styles.steps}>
//           {section.steps.map((step, index) => (
//             <article className={styles.step} key={step.number}>
//               <div className={styles.number}>{step.number}</div>

//               <div className={styles.content}>
//                 <h3>{step.title}</h3>

//                 <p>{step.text}</p>
//               </div>

//               {index < section.steps.length - 1 && (
//                 <span className={styles.connector} />
//               )}
//             </article>
//           ))}
//         </div>

//         <div className={styles.bottom}>
//           <a href="#contact" className={styles.link}>
//             I'm ready to reach out <span>→</span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

import styles from "./HowItWorks.module.css";

export default function HowItWorks({ commons }) {
  const section = commons.howItWorks;

  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.container}>
        <header className={styles.heading}>
          <span className={styles.eyebrow}>{section.eyebrow}</span>

          <h2>{section.title}</h2>

          <p className={styles.intro}>
            Taking the first step can feel difficult. Here’s what reaching out
            can look like.
          </p>
        </header>

        <div className={styles.steps}>
          {section.steps.map((step, index) => (
            <article
              className={styles.card}
              key={step.number}
              style={{ "--step-index": index }}
            >
              <div className={styles.cardTop}>
                <span className={styles.number}>
                  {String(step.number).padStart(2, "0")}
                </span>

                <span className={styles.stepLabel}>
                  STEP {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className={styles.cardContent}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>

              <div className={styles.cardBottom}>
                <span className={styles.cardLine} />

                <span className={styles.arrow} aria-hidden="true">
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomText}>
            <span className={styles.bottomDot} />
            <p>Whenever you feel ready, I'm here.</p>
          </div>

          <a href="#contact" className={styles.cta}>
            <span>I'm ready to reach out</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
