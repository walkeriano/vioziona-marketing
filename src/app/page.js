import styles from "./page.module.css";
import Inicio from "@/components/Inicio/Inicio";
import Nosotros from "@/components/Nosotros/Nosotros";
import Servicios from "@/components/Servicios/Servicios";
import Suscripciones from "@/components/Suscripciones/Suscripciones";
import Metodo from "@/components/Metodo/Metodo";
import Contacto from "@/components/Contacto/Contacto";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.home}>
      <Inicio />
      <Nosotros />
      <Servicios />
      <Suscripciones />
      <Metodo />
      <Contacto />
      <Footer />
    </main>
  );
}
