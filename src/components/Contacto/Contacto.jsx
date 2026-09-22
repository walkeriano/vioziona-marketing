"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faPaperPlane,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "@/i18n/LanguageProvider";
import styles from "./Contacto.module.css";

export default function Contacto() {
  const { t } = useLanguage();

  return (
    <section className={styles.section} id="contacto" aria-labelledby="contacto-title">
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <p className={styles.eyebrow}>{t.contacto.eyebrow}</p>
          <h2 className={styles.title} id="contacto-title">
            <span>{t.contacto.title[0]}</span>
            <span>{t.contacto.title[1]}</span>
            <span>{t.contacto.title[2]}</span>
          </h2>
          <p className={styles.intro}>{t.contacto.intro}</p>

          <form className={styles.form}>
            <label className={styles.field}>
              <span className={styles.srOnly}>{t.contacto.form.company}</span>
              <input type="text" name="empresa" placeholder={t.contacto.form.companyPlaceholder} />
              <FontAwesomeIcon icon={faCircleUser} aria-hidden="true" />
            </label>

            <label className={styles.field}>
              <span className={styles.srOnly}>{t.contacto.form.phone}</span>
              <input type="tel" name="telefono" placeholder={t.contacto.form.phonePlaceholder} />
              <FontAwesomeIcon icon={faPhoneVolume} aria-hidden="true" />
            </label>

            <label className={styles.messageField}>
              <span className={styles.srOnly}>{t.contacto.form.project}</span>
              <textarea name="proyecto" placeholder={t.contacto.form.projectPlaceholder} rows="4" />
            </label>

            <div className={styles.actions}>
              <button className={styles.submitButton} type="submit">
                {t.contacto.form.submit}
                <FontAwesomeIcon icon={faPaperPlane} aria-hidden="true" />
              </button>
              <a className={styles.whatsappButton} href="https://wa.me/34602047678">
                {t.contacto.form.whatsapp}
              </a>
            </div>
          </form>
        </div>

        <aside className={styles.contactCard} aria-label={t.contacto.cardAria}>
          <p className={styles.cardLabel}>{t.contacto.cardLabel}</p>
          <h3>
            {t.contacto.cardTitle[0]}
            <br />
            {t.contacto.cardTitle[1]}
            <br />
            {t.contacto.cardTitle[2]}
          </h3>

          <dl className={styles.detailsList}>
            {t.contacto.details.map((item) => (
              <div className={styles.detail} key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
