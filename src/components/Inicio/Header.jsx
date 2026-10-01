"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/i18n/LanguageProvider";
import styles from "./Header.module.css";

const navigation = [
  { key: "inicio", href: "#inicio" },
  { key: "nosotros", href: "#nosotros" },
  { key: "servicios", href: "#servicios" },
  { key: "suscripciones", href: "#suscripciones" },
  { key: "contacto", href: "#contacto" },
];

export default function Header() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const isHome = pathname === "/";
  const resolveHref = (href) => (isHome ? href : `/${href}`);

  return (
    <header className={styles.header}>
      <a className={styles.logoLink} href={resolveHref("#inicio")} aria-label="Viziona">
        <Image src="/logo-oficial.png" alt="Viziona" width={150} height={35} className={styles.logo} priority />
      </a>

      <nav className={styles.nav} aria-label={t.header.aria.main}>
        {navigation.map((item) => (
          <a href={resolveHref(item.href)} key={item.href}>
            {t.header.nav[item.key]}
          </a>
        ))}
      </nav>

      <div className={styles.actions}>
        <a className={styles.budgetLink} href={resolveHref("#contacto")}>
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
