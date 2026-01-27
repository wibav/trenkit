import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Videojuegos",
  description:
    "Desarrollo profesional de videojuegos con Unity, prototipos rápidos y experiencias inmersivas.",
};

export default function GamesPage() {
  const gameTypes = [
    {
      title: "Unity Games",
      description:
        "Professional game development with Unity and C#. Create engaging and immersive gaming experiences with advanced graphics and physics.",
      icon: "🎮",
      features: [
        "C# Programming",
        "Advanced Graphics",
        "Physics Engine",
        "Cross-Platform",
      ],
    },
    {
      title: "Casual Games",
      description:
        "Engaging casual games with fun mechanics and addictive gameplay. Designed for broad audiences with progression systems and monetization.",
      icon: "🎯",
      features: [
        "Fun Mechanics",
        "Progression System",
        "Monetization",
        "Multiplayer Ready",
      ],
    },
    {
      title: "Game Design & Prototypes",
      description:
        "From concept to playable prototype. Validate your game idea before full production investment with rapid iteration.",
      icon: "🚀",
      features: [
        "Rapid Prototyping",
        "Budget Controlled",
        "Agile Iteration",
        "Playable Build",
      ],
    },
    {
      title: "Educational Games",
      description:
        "Games that entertain and teach. Combine gameplay mechanics with educational and didactic objectives.",
      icon: "📚",
      features: [
        "Educational Content",
        "Gamification",
        "Learning Analytics",
        "Offline Mode",
      ],
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
                Videojuegos inmersivos con <span>Unity & Real-Time</span>
              </h1>
              <p>
                Construimos experiencias memorables con mecánicas sólidas,
                dirección artística y performance optimizada.
              </p>
              <div className={styles.heroActions}>
                <Link className={styles.primaryButton} href="#contact">
                  Reservar Proyecto
                </Link>
                <Link className={styles.secondaryButton} href="#services">
                  Ver Servicios
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className={styles.services} id="services">
          <div className="container">
            <Reveal>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionEyebrow}>GAME STACK</span>
                <h2>Especialidades en desarrollo</h2>
                <p>
                  Desde prototipos hasta títulos listos para lanzar, con enfoque
                  en retención y monetización.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className={styles.cardGrid}>
                {gameTypes.map((game) => (
                  <article key={game.title} className={styles.serviceCard}>
                    <div className={styles.serviceIcon}>{game.icon}</div>
                    <h3>{game.title}</h3>
                    <p>{game.description}</p>
                    <ul>
                      {game.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className={styles.stack}>
          <div className="container">
            <Reveal>
              <div className={styles.stackGrid}>
                <article className={styles.stackCard}>
                  <h4>Unity + C#</h4>
                  <p>
                    Pipeline completo con tooling profesional, shaders y
                    optimización avanzada.
                  </p>
                  <div className={styles.tagList}>
                    <span>C#</span>
                    <span>3D/2D</span>
                    <span>Physics</span>
                    <span>Multiplayer</span>
                  </div>
                </article>
                <article className={styles.stackCard}>
                  <h4>Game Design</h4>
                  <p>
                    Diseño de niveles, balance de juego y loops de retención
                    para maximizar engagement.
                  </p>
                  <div className={styles.tagList}>
                    <span>Level Design</span>
                    <span>UX</span>
                    <span>Balance</span>
                    <span>Narrativa</span>
                  </div>
                </article>
                <article className={styles.stackCard}>
                  <h4>Performance</h4>
                  <p>
                    60+ FPS sostenidos, profiling, y ajustes finos para cada
                    dispositivo.
                  </p>
                  <div className={styles.tagList}>
                    <span>Optimization</span>
                    <span>GPU</span>
                    <span>Memory</span>
                    <span>QA</span>
                  </div>
                </article>
                <article className={styles.stackCard}>
                  <h4>Custom Tech</h4>
                  <p>
                    Soluciones personalizadas para experiencias híbridas en
                    WebGL o XR.
                  </p>
                  <div className={styles.tagList}>
                    <span>WebGL</span>
                    <span>XR</span>
                    <span>R3F</span>
                    <span>Custom</span>
                  </div>
                </article>
              </div>
            </Reveal>
          </div>
        </section>

        <section className={styles.cycle}>
          <div className="container">
            <Reveal>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionEyebrowAlt}>PROCESO</span>
                <h2>Del concepto al lanzamiento</h2>
                <p>
                  Metodología clara con entregas continuas y feedback en cada
                  etapa.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className={styles.cycleGrid}>
                {[
                  "Concepto",
                  "Diseño",
                  "Prototipo",
                  "Producción",
                  "Testing",
                  "Lanzamiento",
                ].map((step, index) => (
                  <div key={step} className={styles.cycleItem}>
                    <div className={styles.cycleNumber}>{index + 1}</div>
                    <h4>{step}</h4>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className={styles.monetization}>
          <div className="container">
            <Reveal>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionEyebrow}>MONETIZACIÓN</span>
                <h2>Estrategias rentables</h2>
                <p>
                  Diseñamos modelos híbridos alineados con la experiencia del
                  jugador.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className={styles.monetizationGrid}>
                {[
                  {
                    title: "Publicidad integrada",
                    text: "Banners, interstitials y rewarded ads sin fricción.",
                  },
                  {
                    title: "Compras in-app",
                    text: "Skins, power-ups y contenido premium dentro del juego.",
                  },
                  {
                    title: "Suscripciones",
                    text: "Battle pass y contenido exclusivo con renovación.",
                  },
                  {
                    title: "Modelo híbrido",
                    text: "Combinamos estrategias para maximizar conversión.",
                  },
                ].map((item) => (
                  <article key={item.title} className={styles.monetizationCard}>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
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
