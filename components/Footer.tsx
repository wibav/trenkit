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
            <h4>Trenkit</h4>
            <p>We create mobile apps and games that empower your idea.</p>
          </div>

          <div className={styles.section}>
            <h4>Links</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/apps">Apps</Link>
              </li>
              <li>
                <Link href="/games">Games</Link>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Legal</h4>
            <ul>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Trenkit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
