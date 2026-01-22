"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss";

/**
 * Navbar fija con navegación principal
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Home", href: "/#home" },
    { label: "Apps", href: "/apps" },
    { label: "Games", href: "/games" },
    { label: "About", href: "/#about" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.content}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/trenkit_logo.png"
              alt="Trenkit Apps & Games logo"
              width={100}
              height={100}
              priority
            />
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
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
