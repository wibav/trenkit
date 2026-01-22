import styles from "./Section.module.scss";
import React from "react";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  variant?: "default" | "gradient" | "light";
  className?: string;
}

/**
 * Componente Section para organizar contenido en secciones
 */
export default function Section({
  id,
  title,
  subtitle,
  children,
  variant = "default",
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${styles.section} ${styles[variant]} ${className || ""}`}
    >
      <div className="container">
        {title && (
          <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
