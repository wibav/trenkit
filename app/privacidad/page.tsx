import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Política de Privacidad | Trenkit",
  description: "Política de privacidad de Trenkit. Cómo protegemos tus datos.",
};

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Section className={styles.header}>
          <h1>Política de Privacidad</h1>
          <p className={styles.lastUpdated}>
            Última actualización: 22 de enero de 2026
          </p>
        </Section>

        <Section variant="light">
          <div className={styles.content}>
            <h2>1. Introducción</h2>
            <p>
              Trenkit (&quot;Empresa&quot;, &quot;Nosotros&quot; o
              &quot;Nuestro&quot;) opera el sitio web trenkit.com. Esta página
              informa políticas sobre la recopilación, el uso y la divulgación
              de datos personales cuando utiliza nuestro sitio web y toma
              decisiones sobre nuestra privacidad.
            </p>

            <h2>2. Interpretación y Definiciones</h2>
            <p>
              <strong>Datos Personales:</strong> Información sobre un individuo
              identificado o identificable.
              <br />
              <strong>Uso:</strong> La información recopilada se utiliza para
              mejorar nuestros servicios.
              <br />
              <strong>Cookies:</strong> Pequeños archivos colocados en tu
              dispositivo.
            </p>

            <h2>3. Recopilación y Uso de Datos</h2>
            <p>Podemos recopilar los siguientes tipos de datos personales:</p>
            <ul>
              <li>
                Información de contacto (nombre, correo electrónico, teléfono)
              </li>
              <li>
                Información de navegación (páginas visitadas, tiempo de
                permanencia)
              </li>
              <li>
                Información técnica (tipo de navegador, dirección IP, sistema
                operativo)
              </li>
              <li>
                Información de dispositivo (modelo, sistema operativo,
                identificadores únicos)
              </li>
            </ul>

            <h2>4. Uso de Datos</h2>
            <p>Usamos los datos personales para:</p>
            <ul>
              <li>Proporcionar y mantener nuestros servicios</li>
              <li>Notificarte cambios en nuestros servicios</li>
              <li>
                Permitirte participar en funciones interactivas de nuestro
                servicio
              </li>
              <li>Proporcionar soporte al cliente</li>
              <li>
                Recopilar análisis, datos demográficos y otra información
                similar
              </li>
              <li>Mejorar, personalizar y expandir nuestro servicio</li>
            </ul>

            <h2>5. Seguridad de los Datos</h2>
            <p>
              La seguridad de tus datos es importante para nosotros, pero
              recuerda que ningún método de transmisión por Internet o método de
              almacenamiento electrónico es 100% seguro. Aunque nos esforzamos
              por utilizar medios comercialmente aceptables para proteger tus
              datos personales, no podemos garantizar su seguridad absoluta.
            </p>

            <h2>6. Enlaces a Sitios Web de Terceros</h2>
            <p>
              Nuestro servicio puede contener enlaces a otros sitios web que no
              son operados por nosotros. Si haces clic en un enlace de terceros,
              serás dirigido al sitio de ese tercero. Te recomendamos que
              revises la Política de Privacidad de cada sitio que visites.
            </p>

            <h2>7. Cambios en esta Política de Privacidad</h2>
            <p>
              Podemos actualizar nuestra Política de Privacidad de vez en
              cuando. Te notificaremos cualquier cambio mediante la publicación
              de la nueva Política de Privacidad en esta página.
            </p>

            <h2>8. Contacto</h2>
            <p>
              Si tienes preguntas sobre esta Política de Privacidad, ponte en
              contacto con nosotros:
              <br />
              <strong>Email:</strong> info@trenkit.com
              <br />
              <strong>Empresa:</strong> Trenkit
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
