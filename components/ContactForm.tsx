"use client";

import { useState } from "react";
import styles from "./ContactForm.module.scss";
import Button from "./Button";

interface ContactFormProps {
  variant?: "default" | "minimal" | "dark";
}

/**
 * Componente de formulario de contacto
 */
export default function ContactForm({ variant = "default" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Aquí integrarias con tu servicio de emails (SendGrid, Mailgun, etc)
    console.log("Form data:", formData);

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset mensaje de éxito después de 3 segundos
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <form
      className={`${styles.form} ${styles[variant]}`}
      onSubmit={handleSubmit}
    >
      {submitted && (
        <div className={styles.success}>
          ¡Gracias por tu mensaje! Nos contactaremos pronto.
        </div>
      )}

      <div className={styles.group}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Tu nombre"
        />
      </div>

      <div className={styles.group}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="tu@email.com"
        />
      </div>

      <div className={styles.group}>
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Cuéntanos sobre tu proyecto..."
          rows={5}
        />
      </div>

      <Button type="submit" size="lg" className={styles.submitButton}>
        Enviar mensaje
      </Button>
    </form>
  );
}
