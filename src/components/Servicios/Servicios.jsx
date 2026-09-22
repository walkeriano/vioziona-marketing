"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faChartLine,
  faCode,
  faPalette,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "@/i18n/LanguageProvider";
import styles from "./Servicios.module.css";

const featuredServices = [
  {
    image: "/services/social-media.png",
    imageHeight: 287,
    icon: faBullhorn,
  },
  {
    image: "/services/web-development.png",
    imageHeight: 285,
    icon: faCode,
  },
];

const compactServices = [
  { icon: faChartLine },
  { icon: faPalette },
  { icon: faRobot },
];

export default function Servicios() {
  const { t } = useLanguage();

  return (
    <section className={styles.section} id="servicios" aria-labelledby="servicios-title">
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.label}>{t.servicios.label}</p>
          <h2 className={styles.title} id="servicios-title">
            <span>{t.servicios.title[0]}</span>
            <span>{t.servicios.title[1]}</span>
          </h2>
        </div>

        <div className={styles.featuredList}>
          {featuredServices.map((service, index) => {
            const content = t.servicios.featured[index];

            return (
              <article className={styles.featuredCard} key={content.title} style={{ "--index": index }}>
                <div className={styles.imageFrame}>
                  <Image
                    src={service.image}
                    alt={content.alt}
                    width={797}
                    height={service.imageHeight}
                    className={styles.image}
                    priority={index === 0}
                  />
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.metaRow}>
                    <span className={styles.iconBubble} aria-hidden="true">
                      <FontAwesomeIcon icon={service.icon} />
                    </span>
                    {content.eyebrow ? <span className={styles.badge}>{content.eyebrow}</span> : null}
                  </div>
                  <h3 className={styles.cardTitle}>
                    {content.title}
                    <span className={styles.arrow} aria-hidden="true">
                      →
                    </span>
                  </h3>
                  <p className={styles.description}>{content.description}</p>
                  <a className={styles.link} href="#contacto">
                    {t.servicios.proposal}
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className={styles.compactGrid} aria-label={t.servicios.othersAria}>
          {compactServices.map((service, index) => (
            <article
              className={styles.compactCard}
              key={t.servicios.compact[index].title}
              style={{ "--index": index + featuredServices.length }}
            >
              <span className={styles.compactIcon} aria-hidden="true">
                <FontAwesomeIcon icon={service.icon} />
              </span>
              <h3>{t.servicios.compact[index].title}</h3>
              <p>{t.servicios.compact[index].description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
