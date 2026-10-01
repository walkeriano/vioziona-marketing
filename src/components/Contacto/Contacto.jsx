"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleUser,
  faClock,
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "@/i18n/LanguageProvider";
import styles from "./Contacto.module.css";

const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
const detailIcons = [faPhoneVolume, faEnvelope, faLocationDot, faClock];

export default function Contacto() {
  const { t } = useLanguage();
  const [status, setStatus] = useState("idle");

  const isSubmitting = status === "submitting";

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formspreeEndpoint) {
      setStatus("missingEndpoint");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("website")) {
      setStatus("success");
      form.reset();
      return;
    }

    formData.append("_subject", "Nuevo contacto desde la web de Viziona");

    setStatus("submitting");

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Formspree request failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

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

          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.honeypot} aria-hidden="true">
              Website
              <input type="text" name="website" tabIndex="-1" autoComplete="off" />
            </label>

            <label className={styles.field}>
              <span className={styles.srOnly}>{t.contacto.form.company}</span>
              <input type="text" name="empresa" placeholder={t.contacto.form.companyPlaceholder} required />
              <FontAwesomeIcon icon={faCircleUser} aria-hidden="true" />
            </label>

            <label className={styles.field}>
              <span className={styles.srOnly}>{t.contacto.form.phone}</span>
              <input type="tel" name="telefono" placeholder={t.contacto.form.phonePlaceholder} required />
              <FontAwesomeIcon icon={faPhoneVolume} aria-hidden="true" />
            </label>

            <label className={styles.field}>
              <span className={styles.srOnly}>{t.contacto.form.email}</span>
              <input type="email" name="email" placeholder={t.contacto.form.emailPlaceholder} required />
              <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
            </label>

            <label className={styles.messageField}>
              <span className={styles.srOnly}>{t.contacto.form.project}</span>
              <textarea name="proyecto" placeholder={t.contacto.form.projectPlaceholder} rows="4" required />
            </label>

            <div className={styles.actions}>
              <button className={styles.submitButton} type="submit" disabled={isSubmitting}>
                {isSubmitting ? t.contacto.form.sending : t.contacto.form.submit}
                <FontAwesomeIcon icon={faPaperPlane} aria-hidden="true" />
              </button>
              <a className={styles.whatsappButton} href="https://wa.me/34602047678">
                {t.contacto.form.whatsapp}
              </a>
            </div>

            {status !== "idle" && status !== "submitting" ? (
              <div className={status === "success" ? styles.successMessage : styles.errorMessage} role="status">
                {status === "success" ? (
                  <span className={styles.successIcon} aria-hidden="true">
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                ) : null}
                <p>{t.contacto.form[status]}</p>
              </div>
            ) : null}
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
            {t.contacto.details.map((item, index) => (
              <div className={styles.detail} key={item.label}>
                <span className={styles.detailIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={detailIcons[index]} />
                </span>
                <div>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
