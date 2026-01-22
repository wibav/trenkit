import styles from "./Card.module.scss";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Componente Card reutilizable para mostrar contenido en tarjetas
 */
export default function Card({
  title,
  description,
  icon,
  children,
  className,
}: CardProps) {
  return (
    <div className={`${styles.card} ${className || ""}`}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {children}
    </div>
  );
}
