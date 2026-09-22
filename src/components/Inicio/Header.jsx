"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";
import styles from "./Header.module.css";

const navigation = [
  { key: "inicio", href: "#inicio" },
  { key: "nosotros", href: "#nosotros" },
  { key: "servicios", href: "#servicios" },
  { key: "contacto", href: "#contacto" },
];

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className={styles.header}>
      <a className={styles.logoLink} href="#inicio" aria-label="Viziona">
        <Image src="/logo.png" alt="Viziona" width={953} height={197} className={styles.logo} priority />
      </a>

      <nav className={styles.nav} aria-label={t.header.aria.main}>
        {navigation.map((item) => (
          <a href={item.href} key={item.href}>
            {t.header.nav[item.key]}
          </a>
        ))}
      </nav>

      <div className={styles.actions}>
        <a className={styles.budgetLink} href="#contacto">
          {t.header.budget}
          <span aria-hidden="true">→</span>
        </a>
        <div className={styles.languages} aria-label={t.header.aria.languages}>
          <button
            className={language === "es" ? styles.activeLanguage : undefined}
            type="button"
            onClick={() => setLanguage("es")}
          >
            ESP
          </button>
          <button
            className={language === "ca" ? styles.activeLanguage : undefined}
            type="button"
            onClick={() => setLanguage("ca")}
          >
            CAT
          </button>
        </div>
      </div>
    </header>
  );
}
