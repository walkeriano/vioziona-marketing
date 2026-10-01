"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChartLine, faClock, faImage, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "@/i18n/LanguageProvider";
import styles from "./Metodo.module.css";

const situationIcons = [faClock, faLaptop, faImage, faChartLine];
const processNumbers = ["01", "02", "03", "04"];

export default function Metodo() {
  const { t } = useLanguage();

  return (
    <section className={styles.section} id="metodo" aria-labelledby="metodo-title">
      <div className={styles.content}>
        <div className={styles.situationsPanel}>
          <p className={styles.eyebrow}>{t.metodo.eyebrow}</p>
          <h2 className={styles.title} id="metodo-title">
            <span>{t.metodo.title[0]}</span>
            <strong>{t.metodo.title[1]}</strong>
          </h2>

          <div className={styles.situationsGrid}>
            {t.metodo.situations.map((item, index) => (
              <article className={styles.situationCard} key={item.description}>
                <span className={styles.situationIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={situationIcons[index]} />
                </span>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <p className={styles.claim}>
            <span>{t.metodo.claim[0]}</span>
            <strong>{t.metodo.claim[1]}</strong>
          </p>
        </div>

        <aside className={styles.processPanel} aria-label={t.metodo.processAria}>
          <p className={styles.eyebrow}>{t.metodo.processLabel}</p>
          <h3 className={styles.processTitle}>
            <span>{t.metodo.processTitle[0]}</span>
            <span>
              <strong>{t.metodo.processTitle[1]}</strong>
            </span>
          </h3>

          <ol className={styles.timeline}>
            {t.metodo.process.map((step, index) => (
              <li className={styles.step} key={step.title}>
                <span className={styles.marker}>{processNumbers[index]}</span>
                <div className={styles.stepText}>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <a className={styles.cta} href="#contacto">
            {t.metodo.proposal}
            <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
          </a>
        </aside>
      </div>
    </section>
  );
}
