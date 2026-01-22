import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Trenkit",
  description: "Términos y condiciones de uso de Trenkit.",
};

export default function TerminosPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Section className={styles.header}>
          <h1>Términos y Condiciones</h1>
          <p className={styles.lastUpdated}>
            Última actualización: 22 de enero de 2026
          </p>
        </Section>

        <Section variant="light">
          <div className={styles.content}>
            <h2>1. Introducción</h2>
            <p>
              Bienvenido a Trenkit. Estos Términos y Condiciones rigen el uso de
              nuestro sitio web y servicios. Al acceder y utilizar este sitio,
              aceptas estar vinculado por estos términos. Si no aceptas alguno
              de los términos aquí expuestos, entonces no puedes acceder ni usar
              este sitio.
            </p>

            <h2>2. Uso de Licencia</h2>
            <p>
              Se te otorga permiso para descargar temporalmente una copia de los
              materiales (información o software) en el sitio web de Trenkit
              solo para visualización personal y no comercial. Esta es la
              concesión de una licencia, no una transferencia de título, y bajo
              esta licencia no puedes:
            </p>
            <ul>
              <li>Modificar o copiar los materiales</li>
              <li>
                Usar los materiales para cualquier propósito comercial o para
                cualquier propósito público
              </li>
              <li>
                Intentar compilar o descompilar el código fuente contenido en el
                sitio
              </li>
              <li>
                Transferir los materiales a otro o &quot;reflejar&quot; los
                materiales en cualquier otro servidor
              </li>
              <li>
                Intentar eludir o evadir cualquier medida de seguridad o
                características del sitio
              </li>
            </ul>

            <h2>3. Descargo de Responsabilidad</h2>
            <p>
              Los materiales en el sitio web de Trenkit se proporcionan
              &quot;tal cual&quot;. Trenkit no ofrece garantías, expresas o
              implícitas, y por este medio descarta y niega todas las demás
              garantías. Además, Trenkit no hace garantías con respecto a la
              precisión, contenido probable, o cualquier otra relación
              información contenida en el sitio web.
            </p>

            <h2>4. Limitaciones</h2>
            <p>
              En ningún caso Trenkit o sus proveedores serán responsables de
              daños (incluyendo, sin limitación, daños por pérdida de datos o
              ganancias, o debido a interrupción del negocio) derivados del uso
              o la incapacidad de usar los materiales en el sitio de Trenkit,
              incluso si Trenkit o un representante autorizado de Trenkit ha
              sido notificado oralmente o por escrito de la posibilidad de tal
              daño.
            </p>

            <h2>5. Precisión de Materiales</h2>
            <p>
              Los materiales que aparecen en el sitio web de Trenkit podrían
              incluir errores técnicos, tipográficos o fotográficos. Trenkit no
              garantiza que ninguno de los materiales en su sitio web sean
              precisos, completos o actuales. Trenkit puede hacer cambios en los
              materiales contenidos en su sitio web en cualquier momento sin
              aviso.
            </p>

            <h2>6. Enlaces de Materiales</h2>
            <p>
              Trenkit no ha revisado todos los sitios vinculados a su sitio web
              y no es responsable de los contenidos de ningún sitio vinculado.
              La inclusión de cualquier enlace no implica aprobación por parte
              de Trenkit del sitio. El uso de cualquier sitio web vinculado es
              bajo el riesgo del usuario.
            </p>

            <h2>7. Modificaciones</h2>
            <p>
              Trenkit puede revisar estos términos y condiciones para su sitio
              web en cualquier momento sin previo aviso. Al usar este sitio web,
              aceptas estar vinculado por la versión entonces actual de estos
              términos y condiciones.
            </p>

            <h2>8. Ley Aplicable</h2>
            <p>
              Estos términos y condiciones están regidos por y construidos de
              acuerdo con las leyes del país donde está registrada la Empresa, y
              aceptas la jurisdicción exclusiva de los tribunales ubicados en
              esa ubicación.
            </p>

            <h2>9. Conducta del Usuario</h2>
            <p>Al usar nuestro sitio web, aceptas no:</p>
            <ul>
              <li>Participar en acoso, amenazas o intimidación</li>
              <li>
                Hacer contribuciones que sean ilegales, amenazantes, abusivas,
                difamatorias, obscenas
              </li>
              <li>
                Publicar spambots o intentar enviar publicidad no solicitada
              </li>
              <li>Interferir con el funcionamiento normal del sitio web</li>
              <li>Intentar acceder a áreas restringidas sin autorización</li>
            </ul>

            <h2>10. Propiedad Intelectual</h2>
            <p>
              Todo contenido en el sitio web de Trenkit, incluyendo pero no
              limitado a texto, gráficos, logos, imágenes, y software, es
              propiedad de Trenkit o sus proveedores de contenido y está
              protegido por las leyes internacionales de derechos de autor.
            </p>

            <h2>11. Contacto</h2>
            <p>
              Si tienes preguntas sobre estos Términos y Condiciones, ponte en
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
