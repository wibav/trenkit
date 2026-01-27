import Link from "next/link";
import styles from "./Footer.module.scss";

/**
 * Footer con enlaces y copyright
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.section}>
            <h4>Trenkit Studio</h4>
            <p>
              Creamos experiencias digitales con diseño impecable y tecnología
              de punta.
            </p>
          </div>

          <div className={styles.section}>
            <h4>Explorar</h4>
            <ul>
              <li>
                <Link href="/#home">Inicio</Link>
              </li>
              <li>
                <Link href="/#technologies">Tecnologías</Link>
              </li>
              <li>
                <Link href="/apps">Proyectos</Link>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Legal</h4>
            <ul>
              <li>
                <Link href="/privacy">Privacidad</Link>
              </li>
              <li>
                <Link href="/terms">Términos</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p>
            &copy; {currentYear} Trenkit Studio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
