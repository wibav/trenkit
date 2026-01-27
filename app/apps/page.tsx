import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Portafolio de proyectos en Unity y React. Experiencias digitales de alto impacto para marcas y startups.",
};

export default function AppsPage() {
  const projects = [
    {
      title: "Cyber Realms: Online",
      tag: "Unity + Multiplayer",
      description:
        "Mundo inmersivo con narrativa cinematográfica y combate en tiempo real.",
      size: "large",
    },
    {
      title: "FitCheck X-Home",
      tag: "React Native",
      description: "App de salud con paneles en tiempo real y tracking diario.",
      size: "small",
    },
    {
      title: "Starlight Analytics",
      tag: "React + Data",
      description: "Dashboards inteligentes para decisiones de negocio.",
      size: "small",
    },
    {
      title: "Velocity Drive",
      tag: "Unity + 3D",
      description: "Experiencia de conducción con física avanzada.",
      size: "wide",
    },
  ];

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <Reveal>
              <span className={styles.eyebrow}>Trenkit Studio</span>
              <h1>
                Nuestras Creaciones: <span>Unity & React Excellence</span>
              </h1>
              <p>
                Explora nuestra selección de proyectos destacados. Desde
                mundos inmersivos en Unity hasta apps escalables en React.
              </p>
              <div className={styles.heroActions}>
                <Link className={styles.primaryButton} href="#contact">
                  Reservar Proyecto
                </Link>
                <Link className={styles.secondaryButton} href="#projects">
                  Ver Portafolio
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className={styles.projects} id="projects">
          <div className="container">
            <Reveal>
              <div className={styles.projectsGrid}>
                {projects.map((project) => (
                  <article
                    key={project.title}
                    className={`${styles.projectCard} ${styles[project.size]}`}
                  >
                    <div className={styles.projectVisual} aria-hidden="true" />
                    <div className={styles.projectBody}>
                      <span className={styles.projectTag}>{project.tag}</span>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                  </article>
                ))}
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
