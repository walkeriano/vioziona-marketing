"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBullhorn,
  faCamera,
  faChartLine,
  faCheck,
  faGear,
  faPalette,
  faRocket,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "@/i18n/LanguageProvider";
import styles from "./Suscripciones.module.css";

const planIcons = [faSeedling, faChartLine, faRocket];
const addOnIcons = [faBullhorn, faCamera, faPalette, faGear];

export default function Suscripciones() {
  const { t } = useLanguage();

  return (
    <section className={styles.section} id="suscripciones" aria-labelledby="suscripciones-title">
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{t.suscripciones.eyebrow}</p>
          <h2 className={styles.title} id="suscripciones-title">
            {t.suscripciones.title[0]} <span>{t.suscripciones.title[1]}</span>
          </h2>
          <p className={styles.intro}>
            {t.suscripciones.intro}
            <strong>{t.suscripciones.introStrong}</strong>
          </p>
        </div>

        <div className={styles.grid} aria-label={t.suscripciones.cardsAria}>
          {t.suscripciones.plans.map((plan, index) => (
            <article
              className={`${styles.card} ${plan.featured ? styles.featured : ""}`}
              key={plan.name}
              style={{ "--index": index }}
            >
              <div className={styles.decorTop} aria-hidden="true">
                <span />
                <span />
              </div>

              <div className={styles.cardHeader}>
                <span className={styles.icon} aria-hidden="true">
                  <FontAwesomeIcon icon={planIcons[index]} />
                </span>
                <div>
                  <h3>{plan.name}</h3>
                  {plan.badge ? <p className={styles.badge}>{plan.badge}</p> : null}
                </div>
              </div>

              <p className={styles.promise}>{plan.promise}</p>
              <p className={styles.platforms}>{plan.platforms}</p>

              <ul className={styles.features}>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <p className={styles.ideal}>
                <strong>{t.suscripciones.idealLabel}</strong> {plan.ideal}
              </p>

              <a className={styles.cta} href="#contacto">
                {plan.cta}
                <span aria-hidden="true">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </a>
            </article>
          ))}
        </div>

        <div className={styles.addOns}>
          <div className={styles.addOnsHeader}>
            <p className={styles.eyebrow}>{t.suscripciones.addOns.eyebrow}</p>
            <h3>{t.suscripciones.addOns.title}</h3>
            <p>{t.suscripciones.addOns.intro}</p>
          </div>

          <div className={styles.addOnsGrid}>
            {t.suscripciones.addOns.items.map((item, index) => (
              <article className={styles.addOnCard} key={item.title}>
                <span className={styles.addOnIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={addOnIcons[index]} />
                </span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className={styles.guidance}>
          <div>
            <h3>{t.suscripciones.guidance.title}</h3>
            <p>{t.suscripciones.guidance.text}</p>
          </div>
          <a className={styles.guidanceCta} href="#contacto">
            {t.suscripciones.guidance.cta}
            <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
          </a>
        </aside>
      </div>
    </section>
  );
}
