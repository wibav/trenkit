"use client";

import { useState, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.scss";

/**
 * Navbar fija con navegación principal
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const smoothScrollTo = (targetY: number) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = 450;
    let startTime: number | null = null;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      window.scrollTo(0, startY + distance * eased);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const handleLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const [path, hash] = href.split("#");
    const targetPath = path || pathname;
    const isSamePath = targetPath === pathname;

    if (hash && isSamePath) {
      event.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - 72;
        smoothScrollTo(top);
      }
      setIsMenuOpen(false);
      return;
    }

    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Servicios", href: "/#home" },
    { label: "Nosotros", href: "/#vision" },
    { label: "Tecnologías", href: "/#technologies" },
    { label: "Proyectos", href: "/apps" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.content}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <span className={styles.logoMark} aria-hidden="true" />
            <span className={styles.logoText}>Trenkit Studio</span>
          </Link>

          {/* Menu button mobile */}
          <button
            className={`${styles.menuButton} ${isMenuOpen ? styles.active : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation items */}
          <div className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={styles.navLink}
                onClick={(event) => handleLinkClick(event, item.href)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className={styles.navCta}
              onClick={(event) => handleLinkClick(event, "#contact")}
            >
              Empecemos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
