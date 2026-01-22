import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Card from "@/components/Card";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Video Game Development | Trenkit",
  description:
    "We create addictive and immersive video games with Unity and C#. Casual games, prototypes, and complete game solutions.",
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
      <main>
        {/* Hero Section */}
        <Section variant="gradient" className={styles.hero}>
          <h1 style={{ color: "white", marginBottom: "1rem" }}>
            Immersive Video Game Experiences
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.95)",
              fontSize: "1.25rem",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            We create addictive and engaging video games that make an impact.
            From concept to launch on global App Stores with proven monetization
            strategies.
          </p>
        </Section>

        {/* Game Types */}
        <Section
          title="Our Game Development Services"
          subtitle="Specialties in mobile video game development"
          variant="light"
        >
          <div className={styles.gamesGrid}>
            {gameTypes.map((game, index) => (
              <Card
                key={index}
                title={game.title}
                description={game.description}
                icon={game.icon}
              >
                <ul className={styles.featuresList}>
                  {game.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        {/* Game Engines */}
        <Section
          title="Engines and Technologies"
          subtitle="Professional video game development stack"
        >
          <div className={styles.engineGrid}>
            <div className={styles.engineCard}>
              <h4>Unity with C#</h4>
              <p>
                The most popular engine for mobile games. Advanced physics,
                complete development tools, and powerful C# scripting.
              </p>
              <div className={styles.techTags}>
                <span>C#</span>
                <span>3D/2D</span>
                <span>Physics Engine</span>
                <span>Networking</span>
              </div>
            </div>
            <div className={styles.engineCard}>
              <h4>Game Design</h4>
              <p>
                Complete game design pipeline from concept art to release.
                Mechanics design, level design, and user experience
                optimization.
              </p>
              <div className={styles.techTags}>
                <span>Level Design</span>
                <span>UI/UX</span>
                <span>Game Balance</span>
                <span>Narrative</span>
              </div>
            </div>
            <div className={styles.engineCard}>
              <h4>Performance & Optimization</h4>
              <p>
                Optimized for mobile devices. Graphics optimization, memory
                management, and smooth 60+ FPS gameplay.
              </p>
              <div className={styles.techTags}>
                <span>GDScript</span>
                <span>2D/3D</span>
                <span>Ligero</span>
                <span>Open Source</span>
              </div>
            </div>
            <div className={styles.engineCard}>
              <h4>Custom</h4>
              <p>
                Desarrollo personalizado con tecnologías a medida según
                requerimientos específicos del juego.
              </p>
              <div className={styles.techTags}>
                <span>WebGL</span>
                <span>React Three Fiber</span>
                <span>Babylon.js</span>
                <span>Custom Engine</span>
              </div>
            </div>
          </div>
        </Section>

        {/* Ciclo de Desarrollo */}
        <Section title="Ciclo de Desarrollo de Juegos" variant="light">
          <div className={styles.cyclGrid}>
            <div className={styles.cycleItem}>
              <div className={styles.cycleNumber}>1</div>
              <h4>Concepto</h4>
              <p>
                Brainstorming, análisis de mercado y definición del concepto del
                juego.
              </p>
            </div>
            <div className={styles.cycleItem}>
              <div className={styles.cycleNumber}>2</div>
              <h4>Game Design</h4>
              <p>
                Documento de diseño, mecánicas, progresión y objetivos de
                gameplay.
              </p>
            </div>
            <div className={styles.cycleItem}>
              <div className={styles.cycleNumber}>3</div>
              <h4>Prototipo</h4>
              <p>
                Prototipo jugable para validar mecánicas y experiencia de
                usuario.
              </p>
            </div>
            <div className={styles.cycleItem}>
              <div className={styles.cycleNumber}>4</div>
              <h4>Producción</h4>
              <p>
                Desarrollo completo de arte, audio, código y sistemas del juego.
              </p>
            </div>
            <div className={styles.cycleItem}>
              <div className={styles.cycleNumber}>5</div>
              <h4>Testing</h4>
              <p>QA, bug fixing, optimización de rendimiento y playtesting.</p>
            </div>
            <div className={styles.cycleItem}>
              <div className={styles.cycleNumber}>6</div>
              <h4>Lanzamiento</h4>
              <p>
                Publicación en stores, marketing y estrategia de monetización.
              </p>
            </div>
          </div>
        </Section>

        {/* Monetización */}
        <Section title="Estrategias de Monetización">
          <div className={styles.monetizationGrid}>
            <div className={styles.monetizationCard}>
              <h4>Publicidad Integrada</h4>
              <p>
                Banners, intersticiales y rewarded ads que generan ingresos sin
                afectar la experiencia.
              </p>
            </div>
            <div className={styles.monetizationCard}>
              <h4>Compras In-App</h4>
              <p>
                Skins, power-ups, coins y contenido premium dentro del juego.
              </p>
            </div>
            <div className={styles.monetizationCard}>
              <h4>Suscripciones</h4>
              <p>
                Pases de batalla, membresías y acceso a contenido exclusivo con
                renovación periódica.
              </p>
            </div>
            <div className={styles.monetizationCard}>
              <h4>Híbrido</h4>
              <p>
                Combinación de múltiples estrategias para maximizar ingresos
                según el perfil de usuario.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
