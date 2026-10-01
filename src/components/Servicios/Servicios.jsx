"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBullhorn,
  faChartLine,
  faCheck,
  faCode,
  faGear,
  faPalette,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "@/i18n/LanguageProvider";
import styles from "./Servicios.module.css";

const serviceVisuals = [
  {
    image: "/service-1.png",
    width: 797,
    height: 287,
    icon: faPaperPlane,
  },
  {
    image: "/service-2.png",
    width: 797,
    height: 285,
    icon: faCode,
  },
  {
    image: "/service-3.png",
    width: 860,
    height: 832,
    icon: faChartLine,
  },
  {
    image: "/service-4.png",
    width: 797,
    height: 287,
    icon: faBullhorn,
  },
  {
    image: "/service-5.png",
    width: 953,
    height: 197,
    icon: faPalette,
  },
];

export default function Servicios() {
  const { t } = useLanguage();

  return (
    <section className={styles.section} id="servicios" aria-labelledby="servicios-title">
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <p className={styles.label}>{t.servicios.label}</p>
            <h2 className={styles.title} id="servicios-title">
              <span>{t.servicios.title[0]}</span>
              <strong>{t.servicios.title[1]}.</strong>
            </h2>
          </div>
          <p className={styles.intro}>{t.servicios.intro}</p>
        </header>
        <div className={styles.grid} aria-label={t.servicios.cardsAria}>
          {t.servicios.items.map((service, index) => {
            const visual = serviceVisuals[index];
            return (
              <article className={styles.card} key={service.title}>
                <div className={styles.imageFrame}>
                  <Image
                    src={visual.image}
                    alt={service.alt}
                    width={visual.width}
                    height={visual.height}
                    className={styles.image}
                  />
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.icon} aria-hidden="true">
                    <FontAwesomeIcon icon={visual.icon} />
                  </span>
                  <h3>
                    {service.title}
                    <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
                  </h3>
                  <p className={styles.description}>{service.description}</p>
                  <ul className={styles.features}>
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <FontAwesomeIcon icon={faCheck} aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a className={styles.cta} href="#contacto" aria-label={`${t.servicios.ctaAria} ${service.title}`}>
                    {service.cta}
                    <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
        <aside className={styles.smartCard}>
          <span className={styles.smartIcon} aria-hidden="true">
            <FontAwesomeIcon icon={faGear} />
          </span>
          <h3>{t.servicios.smart.title}</h3>
          <p>{t.servicios.smart.description}</p>
          <a href="#contacto">
            {t.servicios.smart.cta}
            <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
          </a>
        </aside>
      </div>
    </section>
  );
}
