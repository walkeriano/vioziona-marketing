"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";
import styles from "./Nosotros.module.css";

const pillars = [
  {
    number: "01",
    index: 0,
  },
  {
    number: "02",
    index: 1,
  },
  {
    number: "03",
    index: 2,
  },
  {
    number: "04",
    index: 3,
  },
];

export default function Nosotros() {
  const { t } = useLanguage();
  const partnerImages = ["/socia-1.png", "/socia-2.png"];

  return (
    <section
      className={styles.section}
      id="nosotros"
      aria-labelledby="nosotros-title"
    >
      <div className={styles.content}>
        <div className={styles.copy}>
          <p className={styles.label}>{t.nosotros.label}</p>
          <h2 className={styles.title} id="nosotros-title">
            <span>{t.nosotros.title[0]}</span>
            <span>
              {t.nosotros.title[1]} <strong>{t.nosotros.title[2]}</strong>
            </span>
            <strong>{t.nosotros.title[3]}</strong>
          </h2>

          <p className={styles.description}>{t.nosotros.description}</p>

          <div className={styles.pillars} aria-label={t.nosotros.pillarsLabel}>
            {pillars.map((pillar) => (
              <div className={styles.pillar} key={pillar.number}>
                <span>{pillar.number}</span>
                <p>{t.nosotros.pillars[pillar.index]}</p>
              </div>
            ))}
          </div>

          <figure className={styles.quote}>
            <blockquote>{t.nosotros.quote}</blockquote>
          </figure>
        </div>

        <div className={styles.imageWrap}>
          {t.nosotros.partnerImages.map((alt, index) => (
            <div className={styles.imagePanel} key={alt}>
              <Image
                src={partnerImages[index]}
                alt={alt}
                width={1672}
                height={941}
                className={index === 0 ? styles.imageLeft : styles.imageRight}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
