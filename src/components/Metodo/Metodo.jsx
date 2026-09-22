"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import styles from "./Metodo.module.css";

const numbers = ["01", "02", "03", "04"];
const processNumbers = ["1", "2", "3", "4"];

export default function Metodo() {
  const { t } = useLanguage();

  return (
    <section className={styles.section} id="metodo" aria-labelledby="metodo-title">
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>{t.metodo.eyebrow}</p>
            <h2 className={styles.title} id="metodo-title">
              {t.metodo.title[0]}
              <br />
              {t.metodo.title[1]}
              <br />
              {t.metodo.title[2]} <span>{t.metodo.title[3]}</span>
            </h2>
          </div>

          <div className={styles.cardGrid}>
            {t.metodo.principles.map((item, index) => (
              <article className={styles.principleCard} key={item.title}>
                <span className={styles.cardNumber}>{numbers[index]}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className={styles.processPanel} aria-label={t.metodo.processAria}>
          <p className={styles.processLabel}>{t.metodo.processLabel}</p>
          <ol className={styles.timeline}>
            {t.metodo.process.map((step, index) => (
              <li className={styles.step} key={step.title}>
                <span className={index === 3 ? styles.activeMarker : styles.marker}>{processNumbers[index]}</span>
                <div className={styles.stepText}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <a className={styles.cta} href="#contacto">
            {t.metodo.proposal}
            <span aria-hidden="true">→</span>
          </a>
        </aside>
      </div>
    </section>
  );
}
