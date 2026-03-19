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
  title: "Trenkit — Mobile Apps & Games Development Studio",
  description:
    "We build high-performance mobile applications and immersive video games. From MVP to production — iOS, Android, Web & Unity.",
  openGraph: {
    title: "Trenkit — Mobile Apps & Games Development Studio",
    description:
      "We build high-performance mobile applications and immersive video games. From MVP to production — iOS, Android, Web & Unity.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <Section id="home" variant="gradient" className={styles.heroSection}>
          {/* Decorative grid background */}
          <div className={styles.gridBg} aria-hidden="true" />

          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                Studio Online
              </span>
              <h1 className={styles.heroTitle}>
                Build&nbsp;The&nbsp;Future
                <br />
                <span className={styles.gradientText}>
                  With Apps&nbsp;&amp;&nbsp;Games
                </span>
              </h1>
              <p className={styles.heroSubtitle}>
                We transform ideas into exceptional mobile applications and
                immersive video games. Cutting-edge technology for the digital
                frontier.
              </p>
              <div className={styles.heroButtons}>
                <Link href="#contact">
                  <Button size="lg">Start Your Project</Button>
                </Link>
                <Link href="/apps">
                  <Button variant="secondary" size="lg">
                    Explore Portfolio
                  </Button>
                </Link>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.logoFrame}>
                <div className={styles.logoGlow} aria-hidden="true" />
                <Image
                  src="/trenkit_logo.png"
                  alt="Trenkit — Apps & Games Development"
                  width={360}
                  height={360}
                  priority
                  className={styles.logoImg}
                />
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className={styles.statsBar}>
            {[
              { value: "50+", label: "Projects Shipped" },
              { value: "5+", label: "Years Experience" },
              { value: "3", label: "Platforms" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Apps ── */}
        <Section
          title="Mobile & Web Applications"
          subtitle="Professional development for iOS, Android, and Web — built for performance and scale"
          variant="light"
        >
          <div className={styles.grid}>
            <Card
              title="React Native"
              description="Cross-platform mobile apps for iOS and Android from a single codebase. Native performance, seamless UX, and rapid time-to-market.\n\n• iOS & Android optimized\n• Performance monitoring & analytics"
              icon="📱"
            />
            <Card
              title="Web Applications"
              description="Modern web apps built with React and Next.js. Progressive, server-rendered, and SEO-ready solutions for all devices.\n\n• SEO optimized & fast loading\n• Responsive & accessible design"
              icon="🌐"
            />
            <Card
              title="Custom Solutions"
              description="Tailored development based on your specific stack and requirements. From MVP to enterprise-scale with clean, maintainable architecture.\n\n• Scalable by design\n• Long-term support included"
              icon="⚙️"
            />
          </div>
          <div className={styles.ctaRow}>
            <Link href="/apps">
              <Button>See All App Services</Button>
            </Link>
          </div>
        </Section>

        {/* ── Games ── */}
        <Section
          title="Video Game Development"
          subtitle="Immersive gaming experiences built with Unity and C# — from casual mechanics to complex systems"
          variant="default"
        >
          <div className={styles.grid}>
            <Card
              title="Unity Games"
              description="Professional Unity + C# development. Engaging gameplay, advanced graphics and physics, ready for multi-platform deployment.\n\n• Mobile-first engagement design\n• Monetization optimization"
              icon="🎮"
            />
            <Card
              title="Game Design"
              description="Full production pipeline — from concept to App Store. We handle design, development, art direction, and publishing.\n\n• Complete game creation cycle\n• Multi-platform deployment"
              icon="🎨"
            />
            <Card
              title="Prototypes & MVPs"
              description="Validate your game concept fast. Test mechanics, loops, and user engagement before committing to full production.\n\n• Rapid prototyping\n• User feedback integration"
              icon="🚀"
            />
          </div>
          <div className={styles.ctaRow}>
            <Link href="/games">
              <Button>See All Game Services</Button>
            </Link>
          </div>
        </Section>

        {/* ── Tech Stack ── */}
        <Section
          id="stack"
          title="Technology Stack"
          subtitle="Proven tools powering every project we ship"
          variant="light"
        >
          <div className={styles.techGrid}>
            {[
              { icon: "⚛️", label: "React Native" },
              { icon: "▲", label: "Next.js" },
              { icon: "🟢", label: "Node.js" },
              { icon: "🎮", label: "Unity" },
              { icon: "🔷", label: "TypeScript" },
              { icon: "🔥", label: "Firebase" },
              { icon: "🐘", label: "PostgreSQL" },
              { icon: "☁️", label: "AWS / GCP" },
            ].map((t) => (
              <div key={t.label} className={styles.techItem}>
                <span className={styles.techIcon}>{t.icon}</span>
                <span className={styles.techLabel}>{t.label}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── About ── */}
        <Section id="about" title="About Trenkit" variant="default">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutCard}>
              <span className={styles.aboutAccent}>01</span>
              <h3>Our Mission</h3>
              <p>
                Transform ideas into world-class mobile applications and video
                games. We combine technological innovation with exceptional
                design to build products that make a real impact.
              </p>
            </div>
            <div className={styles.aboutCard}>
              <span className={styles.aboutAccent}>02</span>
              <h3>Our Vision</h3>
              <p>
                To be the trusted partner for startups and companies seeking to
                bring their ideas to the digital market — focused on excellence,
                speed, and measurable results.
              </p>
            </div>
            <div className={styles.aboutCard}>
              <span className={styles.aboutAccent}>03</span>
              <h3>Our Values</h3>
              <p>
                Innovation, quality, transparency, and commitment to client
                success. Every project is an opportunity to exceed expectations
                and push the frontier forward.
              </p>
            </div>
          </div>
        </Section>

        {/* ── CTA Contact ── */}
        <Section id="contact" variant="gradient" className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Ready to Build Something?</h2>
            <p>
              Tell us about your project and let&apos;s turn it into a
              world-class digital experience.
            </p>
            <a href="mailto:hello@trenkit.com" className={styles.ctaEmail}>
              hello@trenkit.com
            </a>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
