import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Trenkit Studio - Experiencias Digitales",
  description:
    "Creamos experiencias digitales con tecnología de punta: apps, web y videojuegos.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero} id="home">
          <div className="container">
            <Reveal>
              <div className={styles.heroContent}>
                <div className={styles.heroText}>
                  <span className={styles.eyebrow}>Trenkit Studio</span>
                  <h1>
                    Creamos Experiencias Digitales:
                    <span>De la Idea al Juego</span>
                  </h1>
                  <p>
                    Transformamos tu visión en productos digitales memorables.
                    Apps, juegos y plataformas con diseño de alto impacto y
                    tecnología de vanguardia.
                  </p>
                  <div className={styles.heroActions}>
                    <Link className={styles.primaryButton} href="#contact">
                      Reservar Proyecto
                    </Link>
                    <Link className={styles.secondaryButton} href="/apps">
                      Ver Portafolio
                    </Link>
                  </div>
                </div>
                <div className={styles.heroGlow} aria-hidden="true" />
              </div>
            </Reveal>
          </div>
        </section>

        <section className={styles.vision} id="vision">
          <div className="container">
            <Reveal>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionEyebrow}>
                  PROPÓSITO Y DIRECCIÓN
                </span>
                <h2>Nuestra Visión</h2>
                <p>
                  Nuestra filosofía une tecnología, creatividad y estrategia
                  para construir productos digitales que destacan.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className={styles.visionGrid}>
                <article className={styles.visionCard}>
                  <div className={`${styles.visionIcon} ${styles.cyan}`}>◆</div>
                  <h3>Impacto en el usuario</h3>
                  <p>
                    Diseñamos experiencias centradas en el usuario para
                    maximizar adopción y retención.
                  </p>
                </article>
                <article className={styles.visionCard}>
                  <div className={`${styles.visionIcon} ${styles.blue}`}>⬡</div>
                  <h3>Ejecución estratégica</h3>
                  <p>
                    Combinamos análisis, prototipado y desarrollo ágil para
                    cumplir objetivos de negocio.
                  </p>
                </article>
                <article className={styles.visionCard}>
                  <div className={`${styles.visionIcon} ${styles.purple}`}>●</div>
                  <h3>Escalabilidad real</h3>
                  <p>
                    Arquitecturas sólidas y seguras listas para crecer con tu
                    producto y tu comunidad.
                  </p>
                </article>
              </div>
            </Reveal>
          </div>
        </section>

        <section className={styles.technologies} id="technologies">
          <div className="container">
            <Reveal>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionEyebrow}>CODE STACK</span>
                <h2>Nuestras Tecnologías</h2>
                <p>
                  Desarrollamos soluciones a la medida con frameworks modernos
                  y motores líderes del mercado.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className={styles.techGrid}>
                <article className={styles.techCard}>
                  <div className={`${styles.techIcon} ${styles.unity}`}>U</div>
                  <h3>Unity Development</h3>
                  <p>
                    Experiencias 3D y 2D con gameplay fluido, arte inmersivo y
                    rendimiento optimizado para todas las plataformas.
                  </p>
                </article>
                <article className={styles.techCard}>
                  <div className={`${styles.techIcon} ${styles.web}`}>R</div>
                  <h3>React & Web</h3>
                  <p>
                    Interfaces modernas con Next.js, animaciones suaves y
                    performance superior para marcas que buscan destacar.
                  </p>
                </article>
                <article className={styles.techCard}>
                  <div className={`${styles.techIcon} ${styles.mobile}`}>RN</div>
                  <h3>React Native</h3>
                  <p>
                    Apps móviles escalables con experiencia nativa, listas para
                    crecer con tu producto y tu comunidad.
                  </p>
                </article>
              </div>
            </Reveal>
          </div>
        </section>

        <section className={styles.innovation} id="about">
          <div className="container">
            <Reveal>
              <div className={styles.innovationGrid}>
                <div className={styles.planetCard}>
                  <div className={styles.planet} aria-hidden="true" />
                  <div className={styles.planetBadge}>
                    <strong>100+</strong>
                    <span>Proyectos finalizados</span>
                  </div>
                </div>
                <div className={styles.innovationContent}>
                  <span className={styles.sectionEyebrowAlt}>NUESTRA VISIÓN</span>
                  <h2>Innovación en cada línea de código</h2>
                  <p>
                    Creamos productos digitales que elevan marcas y conquistan
                    usuarios. De la estrategia al despliegue, trabajamos
                    contigo en cada detalle.
                  </p>
                  <ul className={styles.checkList}>
                    <li>Metodologías ágiles y entregas continuas.</li>
                    <li>Diseño UI/UX centrado en el usuario.</li>
                    <li>Arquitectura escalable y segura.</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
