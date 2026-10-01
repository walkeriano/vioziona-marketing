"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBullhorn,
  faCamera,
  faChartLine,
  faCheck,
  faCrown,
  faGear,
  faPalette,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "@/i18n/LanguageProvider";
import styles from "./Suscripciones.module.css";

const planIcons = [faSeedling, faChartLine, faCrown];
const addOnIcons = [faBullhorn, faCamera, faPalette, faGear];

export default function Suscripciones() {
  const { t } = useLanguage();

  return (
    <section className={styles.section} id="suscripciones" aria-labelledby="suscripciones-title">
      <div className={styles.content}>
        <div className={styles.plansPanel}>
          <header className={styles.header}>
            <div>
              <p className={styles.eyebrow}>{t.suscripciones.eyebrow}</p>
              <h2 className={styles.title} id="suscripciones-title">
                <span>{t.suscripciones.title[0]}</span>
                <span>{t.suscripciones.title[1]}</span>
              </h2>
            </div>
            <p className={styles.intro}>{t.suscripciones.intro}</p>
          </header>

          <div className={styles.grid} aria-label={t.suscripciones.cardsAria}>
            {t.suscripciones.plans.map((plan, index) => (
              <article className={`${styles.card} ${plan.featured ? styles.featured : ""}`} key={plan.name}>
                {plan.badge ? <p className={styles.badge}>{plan.badge}</p> : null}

                <div className={styles.cardHeader}>
                  <span className={styles.icon} aria-hidden="true">
                    <FontAwesomeIcon icon={planIcons[index]} />
                  </span>
                  <h3>{plan.name}</h3>
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
        </div>

        <aside className={styles.sidePanel}>
          <div className={styles.addOns}>
            <div className={styles.addOnsHeader}>
              <p className={styles.eyebrow}>{t.suscripciones.addOns.eyebrow}</p>
              <h3>{t.suscripciones.addOns.title}</h3>
              <p>{t.suscripciones.addOns.intro}</p>
              <strong>{t.suscripciones.addOns.pricing}</strong>
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

          <div className={styles.guidance}>
            <div>
              <h3>{t.suscripciones.guidance.title}</h3>
              <p>{t.suscripciones.guidance.text}</p>
            </div>
            <a className={styles.guidanceCta} href="#contacto">
              {t.suscripciones.guidance.cta}
              <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
