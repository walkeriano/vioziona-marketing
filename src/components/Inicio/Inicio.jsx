"use client";

import styles from "./Inicio.module.css";
import Image from "next/image";
import Header from "./Header";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Inicio() {
  const { t } = useLanguage();

  return (
    <section className={styles.section} id="inicio">
      <Header />
      <div className={styles.content}>
        <div className={styles.copy}>
          <p className={styles.label}>{t.inicio.label}</p>
          <h1>
            <span>{t.inicio.title[0]}</span>
            <span>{t.inicio.title[1]}</span>
            <strong>{t.inicio.title[2]}</strong>
          </h1>
          <p className={styles.text}>{t.inicio.text}</p>

          <div className={styles.buttons}>
            <a className={styles.primaryButton} href="#contacto">
              {t.inicio.primaryCta}
              <span aria-hidden="true">→</span>
            </a>
            <a className={styles.secondaryButton} href="#servicios">
              {t.inicio.secondaryCta}
            </a>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/bg-oficial.png"
            alt={t.inicio.imageAlt}
            width={1672}
            height={941}
            className={styles.heroImage}
            priority
          />
        </div>
      </div>

      <a className={styles.scrollHint} href="#nosotros">
        {t.inicio.scrollHint}
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
