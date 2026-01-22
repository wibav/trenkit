import styles from "./Button.module.scss";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

/**
 * Componente Button reutilizable
 * @param variant - Estilo del botón (primary, secondary, outline)
 * @param size - Tamaño del botón (sm, md, lg)
 */
export default function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
