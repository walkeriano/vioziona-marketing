import Header from "@/components/Inicio/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./LegalPage.module.css";

function DetailList({ items }) {
  if (!items?.length) return null;

  return (
    <dl className={styles.details}>
      {items.map(([label, value]) => (
        <div className={styles.detail} key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function LegalPage({ page }) {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Viziona MKT</p>
            <h1>{page.title}</h1>
            <p>{page.intro}</p>
          </div>
        </section>

        <article className={styles.article}>
          <DetailList items={page.details} />

          {page.sections.map((section) => (
            <section className={styles.section} key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <DetailList items={section.details} />
              {section.list?.length ? (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {section.links?.length ? (
                <ul className={styles.links}>
                  {section.links.map(([label, href]) => (
                    <li key={href}>
                      <a href={href} target="_blank" rel="noreferrer">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </>
  );
}
