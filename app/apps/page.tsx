import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Card from "@/components/Card";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Mobile App Development for iOS & Android | Trenkit",
  description:
    "Professional mobile application development for iOS, Android, and Web. React Native, React, Next.js, and Vue.js solutions. From MVP to enterprise-scale apps.",
};

export default function AppsPage() {
  const services = [
    {
      title: "React Native",
      description:
        "Cross-platform mobile development with React Native. Build high-performance applications for iOS and Android from a single codebase.\n\nPerfect for: Startups seeking rapid time-to-market and cost-effective native-like apps.",
      features: [
        "iOS & Android",
        "Shared Codebase",
        "Native Performance",
        "Rapid Development",
      ],
    },
    {
      title: "React Web Apps",
      description:
        "Modern web applications built with React and Next.js. Fast, scalable, and SEO-friendly solutions for all platforms.\n\nPerfect for: Enterprises needing server-rendered, SEO-optimized web applications.",
      features: [
        "React & Next.js",
        "Responsive Design",
        "SEO Optimized",
        "Server-Side Rendering",
      ],
    },
    {
      title: "Vue.js Applications",
      description:
        "Progressive web applications with Vue.js. Lightweight, flexible, and highly performant web solutions.\n\nPerfect for: Projects requiring rapid development with a gentle learning curve.",
      features: [
        "Vue 3",
        "Nuxt Framework",
        "Component-Based",
        "Easy Integration",
      ],
    },
    {
      title: "Web Technologies",
      description:
        "Full-stack web development using modern JavaScript frameworks. Custom solutions tailored to your specific business needs.\n\nPerfect for: Complex applications requiring custom integrations and specialized tech stacks.",
      features: [
        "Full-Stack Development",
        "API Integration",
        "Database Design",
        "Cloud Deployment",
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
            Professional Mobile & Web Application Development
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.95)",
              fontSize: "1.25rem",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            We create world-class applications for iOS, Android, and Web. Our
            specialized team transforms your idea into high-performance,
            production-ready products.
          </p>
        </Section>

        {/* Services */}
        <Section
          title="Our Services"
          subtitle="Complete mobile and web development solutions with cutting-edge technologies"
          variant="light"
        >
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <Card
                key={index}
                title={service.title}
                description={service.description}
                icon={["📱", "🌐", "🎨", "⚡"][index]}
              >
                <ul className={styles.featuresList}>
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        {/* Process */}
        <Section
          title="Our Process"
          subtitle="Proven methodology for successful projects"
        >
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Discovery</h3>
              <p>
                We understand your idea, goals, and requirements. We perform
                market analysis and define the project scope.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Design</h3>
              <p>
                We create wireframes and iterative prototypes. Validate UX/UI
                before starting development.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Development</h3>
              <p>
                Quality code following best practices. Agile sprints with
                constant deliverables.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Testing</h3>
              <p>
                Comprehensive QA, real device testing, and performance checks.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>5</div>
              <h3>Launch</h3>
              <p>
                App Store deployment, listing optimization, and coordinated
                release.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>6</div>
              <h3>Support</h3>
              <p>Continuous maintenance, updates, and post-launch support.</p>
            </div>
          </div>
        </Section>

        {/* Technologies */}
        <Section
          title="Technologies"
          subtitle="Modern and proven technology stack"
          variant="light"
        >
          <div className={styles.techGrid}>
            <div className={styles.techCard}>
              <h4>React Native</h4>
              <div className={styles.techList}>
                <span>JavaScript</span>
                <span>React</span>
                <span>Native Modules</span>
                <span>Performance</span>
              </div>
            </div>
            <div className={styles.techCard}>
              <h4>React & Next.js</h4>
              <div className={styles.techList}>
                <span>React 18+</span>
                <span>Next.js 15</span>
                <span>TypeScript</span>
                <span>Tailwind CSS</span>
              </div>
            </div>
            <div className={styles.techCard}>
              <h4>Vue.js</h4>
              <div className={styles.techList}>
                <span>Vue 3</span>
                <span>Nuxt</span>
                <span>Vuex</span>
                <span>Web Components</span>
              </div>
            </div>
            <div className={styles.techCard}>
              <h4>Infrastructure</h4>
              <div className={styles.techList}>
                <span>Git</span>
                <span>Firebase</span>
                <span>AWS</span>
                <span>Docker</span>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
