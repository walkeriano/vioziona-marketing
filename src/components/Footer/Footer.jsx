"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "@/i18n/LanguageProvider";
import styles from "./Footer.module.css";

const navLinks = [
  { key: "inicio", href: "/#inicio" },
  { key: "nosotros", href: "/#nosotros" },
  { key: "servicios", href: "/#servicios" },
  { key: "suscripciones", href: "/#suscripciones" },
  { key: "contacto", href: "/#contacto" },
];

const legalLinks = [
  { key: "avisoLegal", href: "/aviso-legal" },
  { key: "privacidad", href: "/politica-privacidad" },
  { key: "cookies", href: "/politica-cookies" },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <Link href="/#inicio" aria-label="Viziona" className={styles.logoLink}>
            <Image src="/logo-oficial.png" alt="Viziona" width={150} height={35} className={styles.logo} />
          </Link>
          <p>{t.footer.tagline}</p>
          <Link className={styles.cta} href="/#contacto">
            {t.footer.cta}
            <FontAwesomeIcon icon={faUpRightFromSquare} aria-hidden="true" />
          </Link>
        </div>

        <nav className={styles.navGroup} aria-label={t.footer.navigationLabel}>
          <h2>{t.footer.navigationLabel}</h2>
          {navLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {t.header.nav[link.key]}
            </Link>
          ))}
        </nav>

        <nav className={styles.navGroup} aria-label={t.footer.legalLabel}>
          <h2>{t.footer.legalLabel}</h2>
          {legalLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {t.footer.legal[link.key]}
            </Link>
          ))}
        </nav>

        <address className={styles.contact}>
          <h2>{t.footer.contactLabel}</h2>
          <a href="mailto:clientes@viziona.es">
            <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
            clientes@viziona.es
          </a>
          <a href="tel:+34602047678">
            <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
            602 047 678 - 668 542 008
          </a>
          <span>
            <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />
            Diputació 390, Barcelona.
          </span>
        </address>
      </div>

      <div className={styles.bottom}>
        <p>{t.footer.copyright}</p>
        <Link href="/#inicio">{t.footer.backHome}</Link>
      </div>
    </footer>
  );
}
