"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faComment, faHeart, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "@/i18n/LanguageProvider";
import styles from "./Nosotros.module.css";

const pillarIcons = [faComment, faLightbulb, faChartLine, faHeart];

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
        <div className={styles.imagePanel}>
          <Image
            src={partnerImages[0]}
            alt={t.nosotros.partnerImages[0]}
            width={1672}
            height={941}
            className={styles.image}
            priority
          />
        </div>
        <div className={styles.copy}>
          <h2 className={styles.title} id="nosotros-title">
            <span>{t.nosotros.title[0]}</span>
            <span>{t.nosotros.title[1]}</span>
            <span>
              {t.nosotros.title[2]} <strong>{t.nosotros.title[3]}</strong>
            </span>
          </h2>
          <div className={styles.description}>
            {t.nosotros.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className={styles.storyColumn}>
          <div className={styles.pillars} aria-label={t.nosotros.pillarsLabel}>
            {t.nosotros.pillars.map((pillar, index) => (
              <article className={styles.pillar} key={pillar.title}>
                <span className={styles.icon} aria-hidden="true">
                  <FontAwesomeIcon icon={pillarIcons[index]} />
                </span>
                <div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </div>
              </article>
            ))}
          </div>

          <figure className={styles.quote}>
            <blockquote>{t.nosotros.quote}</blockquote>
          </figure>
        </div>
        <div className={styles.imagePanel}>
          <Image
            src={partnerImages[1]}
            alt={t.nosotros.partnerImages[1]}
            width={1672}
            height={941}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
