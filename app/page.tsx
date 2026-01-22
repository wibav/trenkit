import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Trenkit - Mobile Apps & Games Development",
  description:
    "We create innovative mobile applications and video games that empower your idea. Professional development services.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <Section id="home" variant="gradient" className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className="fade-in-up">
                Empowering Your Ideas with Apps & Games
              </h1>
              <p
                className={`${styles.subtitle} fade-in-up`}
                style={{ animationDelay: "0.2s" }}
              >
                Innovative solutions and cutting-edge technology to transform
                your vision into reality. Professional development of mobile
                applications and video games.
              </p>
              <div
                className={styles.heroButtons}
                style={{ animationDelay: "0.4s" }}
              >
                <Link href="#contact">
                  <Button size="lg">Let's Talk About Your Idea</Button>
                </Link>
                <Link href="/apps">
                  <Button variant="secondary" size="lg">
                    View Our Portfolio
                  </Button>
                </Link>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.placeholder}>
                <Image
                  src="/trenkit_logo.png"
                  alt="Trenkit - Apps and Games Development"
                  width={400}
                  height={400}
                  priority
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Mobile Apps Services */}
        <Section
          title="Apps Development"
          subtitle="We develop professional mobile applications with cutting-edge technologies for iOS, Android, and Web"
          variant="light"
        >
          <div className={styles.grid}>
            <Card
              title="React Native"
              description="Cross-platform mobile applications for iOS and Android optimized for performance and scalability. Build once, deploy everywhere with native experience.\n\n• iOS & Android optimized for speed\n• Performance monitoring & analytics"
              icon="📱"
            />
            <Card
              title="Web Applications"
              description="Modern web applications built with React, Next.js, and Vue.js. Progressive, responsive, and SEO-friendly solutions for all devices.\n\n• SEO optimized & fast loading\n• Responsive & accessible design"
              icon="🌐"
            />
            <Card
              title="Custom Solutions"
              description="Tailored development solutions based on your specific needs. From MVP to enterprise-level applications with cutting-edge tech stacks.\n\n• Scalable architecture\n• Long-term support included"
              icon="⚙️"
            />
          </div>
          <div className={styles.ctaContainer}>
            <Link href="/apps">
              <Button>Learn More About Apps</Button>
            </Link>
          </div>
        </Section>

        {/* Video Games */}
        <Section
          title="Video Game Development"
          subtitle="Creating immersive gaming experiences with Unity and C#. From casual to complex gameplay mechanics"
        >
          <div className={styles.grid}>
            <Card
              title="Unity Games"
              description="Professional game development using Unity and C#. Create engaging, immersive gaming experiences with advanced graphics and physics.\n\n• Mobile games focused on engagement\n• Monetization optimization strategies"
              icon="🎮"
            />
            <Card
              title="Game Design"
              description="Full game design and development pipeline. From concept to launch, we handle design, development, art, and publishing.\n\n• Complete game creation cycle\n• Multi-platform deployment"
              icon="🎨"
            />
            <Card
              title="Prototypes & MVPs"
              description="Validate your game concept with a functional prototype. Test mechanics, gameplay loops, and user engagement before full production investment.\n\n• Rapid prototyping\n• User feedback integration"
              icon="🚀"
            />
          </div>
          <div className={styles.ctaContainer}>
            <Link href="/games">
              <Button>Learn More About Games</Button>
            </Link>
          </div>
        </Section>

        {/* About Section */}
        <Section id="about" title="About Trenkit" variant="light">
          <div className={styles.aboutContent}>
            <div className={styles.aboutSection}>
              <h3>Our Mission</h3>
              <p>
                Transform ideas into world-class mobile applications and video
                games. We combine technological innovation with exceptional
                design to create products that make an impact.
              </p>
            </div>
            <div className={styles.aboutSection}>
              <h3>Our Vision</h3>
              <p>
                To be the trusted partner for startups and companies seeking to
                bring their ideas to the mobile market. Focused on excellence,
                speed, and measurable results.
              </p>
            </div>
            <div className={styles.aboutSection}>
              <h3>Our Values</h3>
              <p>
                Innovation, quality, transparency, and commitment to our
                clients' success. Every project is an opportunity to exceed
                expectations.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
