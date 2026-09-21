import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import styles from "../page.module.scss";

// URL de eliminación de datos declarada en Google Play para IPTV Viewer
// (com.trenkit.iptv). Bilingüe, igual que la política: la ficha está en
// español e inglés.

export const metadata: Metadata = {
  title: "IPTV Viewer · Delete your data | Trenkit",
  description:
    "How to delete the data the IPTV Viewer app for Android TV keeps, on your device and on our servers.",
};

export default function IptvViewerDeleteDataPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Section variant="gradient" className={styles.header}>
          <h1 style={{ color: "white" }}>IPTV Viewer · Eliminar tus datos</h1>
          <p style={{ color: "rgba(255,255,255,0.9)" }}>
            Android TV · com.trenkit.iptv · Delete your data
          </p>
        </Section>

        <Section variant="light" className={styles.content}>
          <div className={styles.policyContent}>
            <h2>Español</h2>
            <p>
              IPTV Viewer no tiene cuentas de usuario: no hay registro, ni
              correo, ni contraseña nuestra. Casi todo lo que guarda la app vive
              únicamente en tu dispositivo. El detalle completo está en la{" "}
              <a href="/iptv-viewer/privacy">política de privacidad</a>.
            </p>

            <h3>Desde la propia app (lo más rápido)</h3>
            <p>
              <strong>Configuración → Borrar mis datos</strong> elimina tu
              historial de reproducción y tus favoritos de todos tus
              proveedores. Si tienes activada la sincronización, ese borrado
              también se aplica a nuestros servidores y a tus otros
              dispositivos. No toca tus proveedores, sus datos de acceso, el
              catálogo descargado ni el PIN parental.
            </p>

            <h3>Borrar los datos de tu dispositivo</h3>
            <ul>
              <li>
                <strong>Desinstalar la app</strong> elimina todo lo que guarda
                en el dispositivo: datos de acceso, catálogo, historial,
                favoritos y PIN.
              </li>
              <li>
                Sin desinstalar, en <em>Configuración → Proveedores</em> puedes
                eliminar un proveedor y con él su catálogo.
              </li>
            </ul>

            <h3>Qué hay en nuestros servidores y cuánto dura</h3>
            <ul>
              <li>
                <strong>Historial y favoritos sincronizados</strong> (solo si
                activaste la sincronización, que viene desactivada): se borran
                con <em>Borrar mis datos</em>, o pidiéndolo por correo.
              </li>
              <li>
                <strong>Informes técnicos de errores</strong>: se eliminan solos
                a los 30 días. No contienen tu nombre, tu correo ni las
                direcciones de tu proveedor.
              </li>
              <li>
                <strong>Datos del formulario del código QR</strong>: se eliminan
                en cuanto la TV los recibe, y como máximo a los 10 minutos.
              </li>
            </ul>

            <h3>Pedirnos el borrado por correo</h3>
            <p>
              Escribe a{" "}
              <a href="mailto:wolcutor@gmail.com">wolcutor@gmail.com</a> con el
              asunto <strong>«Eliminar mis datos»</strong>. Como no hay cuentas,
              para localizar tus datos sincronizados necesitamos el{" "}
              <em>servidor</em> y el <em>usuario</em> de tu proveedor:{" "}
              <strong>no nos envíes nunca tu contraseña</strong>. Respondemos
              con la confirmación en un plazo máximo de 30 días.
            </p>

            <h3>Qué no podemos borrar</h3>
            <p>
              El contenido que ves no es nuestro: lo sirve el proveedor IPTV que
              tú añadiste. Los datos que ese proveedor tenga sobre ti se rigen
              por su propia política, y hay que pedírselos a él.
            </p>

            <h2>English</h2>
            <p>
              IPTV Viewer has no user accounts: no sign-up, no email, no
              password of ours. Almost everything the app stores lives only on
              your device. Full detail in the{" "}
              <a href="/iptv-viewer/privacy">privacy policy</a>.
            </p>

            <h3>From the app itself (fastest)</h3>
            <p>
              <strong>Settings → Delete my data</strong> removes your playback
              history and your favourites across all your providers. If sync is
              on, that deletion also applies to our servers and to your other
              devices. It does not touch your providers, their credentials, the
              downloaded catalogue or the parental PIN.
            </p>

            <h3>Deleting the data on your device</h3>
            <ul>
              <li>
                <strong>Uninstalling the app</strong> removes everything it
                stores on the device: credentials, catalogue, history,
                favourites and PIN.
              </li>
              <li>
                Without uninstalling, <em>Settings → Providers</em> lets you
                remove a provider along with its catalogue.
              </li>
            </ul>

            <h3>What is on our servers, and for how long</h3>
            <ul>
              <li>
                <strong>Synced history and favourites</strong> (only if you
                turned sync on; it ships off): deleted with{" "}
                <em>Delete my data</em>, or on request by email.
              </li>
              <li>
                <strong>Technical error reports</strong>: deleted automatically
                after 30 days. They contain no name, email or provider
                addresses.
              </li>
              <li>
                <strong>QR form data</strong>: deleted as soon as the TV
                receives it, and after 10 minutes at the latest.
              </li>
            </ul>

            <h3>Requesting deletion by email</h3>
            <p>
              Write to{" "}
              <a href="mailto:wolcutor@gmail.com">wolcutor@gmail.com</a> with
              the subject <strong>&quot;Delete my data&quot;</strong>. As there
              are no accounts, to locate your synced data we need your
              provider&apos;s <em>server</em> and <em>username</em>:{" "}
              <strong>never send us your password</strong>. We confirm within 30
              days at most.
            </p>

            <h3>What we cannot delete</h3>
            <p>
              The content you watch is not ours: it is served by the IPTV
              provider you added. Whatever data that provider holds about you is
              governed by their own policy, and must be requested from them.
            </p>

            <h2>Last Updated</h2>
            <p>September 21, 2026.</p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
