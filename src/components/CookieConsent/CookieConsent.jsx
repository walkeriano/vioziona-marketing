"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite, faSliders } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "@/i18n/LanguageProvider";
import styles from "./CookieConsent.module.css";

const STORAGE_KEY = "viziona_cookie_consent_v1";

export default function CookieConsent() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsVisible(!window.localStorage.getItem(STORAGE_KEY));
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const saveConsent = (nextPreferences) => {
    const consent = {
      necessary: true,
      ...nextPreferences,
      savedAt: new Date().toISOString(),
    };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    window.dispatchEvent(new CustomEvent("viziona:cookies", { detail: consent }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay} role="presentation">
      <section className={styles.panel} aria-labelledby="cookie-consent-title" role="dialog" aria-modal="true">
        <div className={styles.icon} aria-hidden="true">
          <FontAwesomeIcon icon={faCookieBite} />
        </div>

        <div className={styles.copy}>
          <p className={styles.eyebrow}>{t.cookieConsent.eyebrow}</p>
          <h2 id="cookie-consent-title">{t.cookieConsent.title}</h2>
          <p>
            {t.cookieConsent.text}{" "}
            <Link href="/politica-cookies">{t.cookieConsent.link}</Link>
          </p>

          {isConfigOpen ? (
            <div className={styles.preferences}>
              <label className={styles.preference}>
                <span>
                  <strong>{t.cookieConsent.necessary.title}</strong>
                  {t.cookieConsent.necessary.text}
                </span>
                <input type="checkbox" checked disabled readOnly />
              </label>

              <label className={styles.preference}>
                <span>
                  <strong>{t.cookieConsent.analytics.title}</strong>
                  {t.cookieConsent.analytics.text}
                </span>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(event) =>
                    setPreferences((current) => ({ ...current, analytics: event.target.checked }))
                  }
                />
              </label>

              <label className={styles.preference}>
                <span>
                  <strong>{t.cookieConsent.marketing.title}</strong>
                  {t.cookieConsent.marketing.text}
                </span>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(event) =>
                    setPreferences((current) => ({ ...current, marketing: event.target.checked }))
                  }
                />
              </label>
            </div>
          ) : null}
        </div>

        <div className={styles.actions}>
          <button className={styles.secondaryButton} type="button" onClick={() => saveConsent({ analytics: false, marketing: false })}>
            {t.cookieConsent.reject}
          </button>
          <button className={styles.configButton} type="button" onClick={() => setIsConfigOpen((value) => !value)}>
            <FontAwesomeIcon icon={faSliders} aria-hidden="true" />
            {isConfigOpen ? t.cookieConsent.hideConfig : t.cookieConsent.config}
          </button>
          <button
            className={styles.primaryButton}
            type="button"
            onClick={() =>
              saveConsent(isConfigOpen ? preferences : { analytics: true, marketing: true })
            }
          >
            {isConfigOpen ? t.cookieConsent.save : t.cookieConsent.accept}
          </button>
        </div>
      </section>
    </div>
  );
}
