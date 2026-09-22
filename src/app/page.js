import styles from "./page.module.css";
import Inicio from "@/components/Inicio/Inicio";
import Nosotros from "@/components/Nosotros/Nosotros";
import Servicios from "@/components/Servicios/Servicios";
import Metodo from "@/components/Metodo/Metodo";
import Contacto from "@/components/Contacto/Contacto";

export default function Home() {
  return (
    <main className={styles.home}>
      <Inicio />
      <Nosotros />
      <Servicios />
      <Metodo />
      <Contacto />
    </main>
  );
}
