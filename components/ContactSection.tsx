import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import styles from "./ContactSection.module.scss";

interface ContactSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
}

export default function ContactSection({
  id = "contact",
  title = "Construyamos el futuro juntos",
  subtitle =
    "Cuéntanos tu proyecto y te ayudamos a definir una propuesta clara, realista y con impacto.",
}: ContactSectionProps) {
  return (
    <section id={id} className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <Reveal>
            <div className={styles.info}>
              <span className={styles.eyebrow}>Trenkit Studio</span>
              <h2>{title}</h2>
              <p>{subtitle}</p>

              <ul className={styles.details}>
                <li>
                  <span className={styles.icon}>📍</span>
                  Ciudad de México · Remoto Global
                </li>
                <li>
                  <span className={styles.icon}>✉️</span>
                  contacto@trenkit.com
                </li>
                <li>
                  <span className={styles.icon}>☎️</span>
                  +52 55 0000 0000
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className={styles.card}>
              <h3>Cuéntanos tu proyecto</h3>
              <p>
                Completa el formulario y agendamos una llamada para alinear
                objetivos y tiempos.
              </p>
              <ContactForm variant="dark" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
