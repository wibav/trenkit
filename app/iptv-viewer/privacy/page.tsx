import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import styles from "../page.module.scss";

// Política ESPECÍFICA de la app IPTV Viewer (com.trenkit.iptv), separada de
// la política general de Trenkit (/privacy): Google Play compara lo que dice
// la política con el formulario de seguridad de datos, y la general describe
// tratamientos (contactos, SMS, llamadas, publicidad) que esta app no hace.
//
// Bilingüe porque la ficha de Play está en español (idioma por defecto) e
// inglés, y la política tiene que poder leerse en ambos.

export const metadata: Metadata = {
  title: "IPTV Viewer · Privacy Policy | Trenkit",
  description:
    "Privacy policy for the IPTV Viewer app for Android TV (com.trenkit.iptv): what stays on your device, what reaches our servers, and for how long.",
};

export default function IptvViewerPrivacyPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Section variant="gradient" className={styles.header}>
          <h1 style={{ color: "white" }}>IPTV Viewer · Privacy Policy</h1>
          <p style={{ color: "rgba(255,255,255,0.9)" }}>
            Android TV · com.trenkit.iptv · Effective Date: September 21, 2026
          </p>
        </Section>

        <Section variant="light" className={styles.content}>
          <div className={styles.policyContent}>
            <h2>Español</h2>
            <p>
              IPTV Viewer es un reproductor.{" "}
              <strong>
                No incluye, vende ni distribuye ningún canal, película o serie.
              </strong>{" "}
              Solo reproduce el contenido de la lista o del servicio IPTV que tú
              mismo añades, y de cuyo uso legal eres responsable.
            </p>

            <h3>Qué se queda en tu dispositivo</h3>
            <ul>
              <li>
                <strong>Datos de acceso a tu proveedor</strong> (servidor,
                usuario y contraseña, o la URL de tu lista). Se guardan cifrados
                en el almacenamiento seguro del sistema y solo se usan para
                conectar con ese proveedor.
              </li>
              <li>
                El catálogo descargado, tu historial, tus favoritos y el PIN del
                control parental.
              </li>
            </ul>
            <p>
              Nada de esto se envía a nuestros servidores, salvo lo que se
              detalla a continuación.
            </p>

            <h3>Qué se envía a nuestros servidores</h3>
            <p>
              Usamos Google Firebase (Cloud Functions y Firestore) en la región
              de São Paulo, Brasil.
            </p>
            <ul>
              <li>
                <strong>Si activas «Sincronizar entre dispositivos»</strong>{" "}
                (desactivado por defecto): tu historial de reproducción
                (identificador del contenido, nombre, posición y duración) y tus
                favoritos (identificador y nombre). Se guardan bajo una huella
                cifrada (SHA-256) de tu cuenta del proveedor;{" "}
                <strong>
                  nunca se envían el servidor, el usuario ni la contraseña
                </strong>
                . Se conservan mientras uses la función: si borras algo en un
                dispositivo, se borra en los demás.
              </li>
              <li>
                <strong>Cuando el reproductor o la app fallan</strong>: un
                informe técnico (tipo de error, mensaje, identificador del
                contenido, posición de reproducción, versión de la app y tipo de
                dispositivo). Las direcciones web se eliminan en el propio
                dispositivo antes de enviarlo. Se conserva 30 días.
              </li>
              <li>
                <strong>
                  Si añades un proveedor desde el teléfono escaneando el código
                  QR
                </strong>
                : los datos que escribes en el formulario, para entregarlos a tu
                TV. Se borran en cuanto la TV los recibe, y como máximo a los 10
                minutos.
              </li>
            </ul>
            <p>
              Ninguno de estos datos incluye tu nombre, correo, ubicación ni
              identificadores publicitarios. No hay cuentas de usuario,
              publicidad ni analítica de terceros, y no vendemos ni compartimos
              datos con nadie.
            </p>

            <h3>Conexiones con terceros</h3>
            <p>
              La app se conecta directamente con el proveedor IPTV que añadas y
              descarga las imágenes que ese proveedor indica. Esas conexiones se
              rigen por la política de privacidad de tu proveedor, no por esta.
            </p>

            <h3>Tus opciones</h3>
            <ul>
              <li>Desactivar la sincronización en <em>Configuración</em>.</li>
              <li>
                Usar <em>Configuración → Borrar mis datos</em> para eliminar tu
                historial y tus favoritos. Con la sincronización activada, el
                borrado también se aplica a nuestros servidores y a tus otros
                dispositivos.
              </li>
              <li>
                Eliminar un proveedor, o desinstalar la app, borra todos los
                datos guardados en el dispositivo.
              </li>
              <li>
                Pedirnos el borrado por correo. Los pasos concretos están en{" "}
                <a href="/iptv-viewer/delete-data">Eliminar tus datos</a>.
              </li>
            </ul>

            <h3>Menores</h3>
            <p>
              La app no está dirigida a menores de 13 años. El control parental
              por PIN permite ocultar las categorías para adultos.
            </p>

            <h3>Contacto</h3>
            <p>
              <a href="mailto:wolcutor@gmail.com">wolcutor@gmail.com</a>
            </p>

            <h2>English</h2>
            <p>
              IPTV Viewer is a player.{" "}
              <strong>
                It does not include, sell or distribute any channel, film or
                series.
              </strong>{" "}
              It only plays content from the IPTV playlist or service you add
              yourself, and whose lawful use is your responsibility.
            </p>

            <h3>What stays on your device</h3>
            <ul>
              <li>
                <strong>Your provider credentials</strong> (server, username and
                password, or your playlist URL), stored encrypted in the
                system&apos;s secure storage and used only to connect to that
                provider.
              </li>
              <li>
                The downloaded catalogue, your history, your favourites and the
                parental control PIN.
              </li>
            </ul>
            <p>
              None of this reaches our servers, except for what is listed below.
            </p>

            <h3>What reaches our servers</h3>
            <p>
              We use Google Firebase (Cloud Functions and Firestore) in the São
              Paulo, Brazil region.
            </p>
            <ul>
              <li>
                <strong>
                  If you turn on &quot;Sync across devices&quot;
                </strong>{" "}
                (off by default): your playback history (content id, name,
                position and duration) and your favourites (id and name), stored
                under a hashed (SHA-256) fingerprint of your provider account;{" "}
                <strong>
                  the server, username and password are never sent
                </strong>
                . Kept while you use the feature: deleting something on one
                device deletes it on the others.
              </li>
              <li>
                <strong>When the player or the app fails</strong>: a technical
                report (error kind, message, content id, playback position, app
                version and device type). Web addresses are stripped on the
                device before sending. Kept for 30 days.
              </li>
              <li>
                <strong>
                  If you add a provider from your phone by scanning the QR code
                </strong>
                : the details you type into the form, so they can be delivered
                to your TV. Deleted as soon as the TV receives them, and after
                10 minutes at the latest.
              </li>
            </ul>
            <p>
              None of this data includes your name, email, location or
              advertising identifiers. There are no user accounts, no ads and no
              third-party analytics, and we neither sell nor share data with
              anyone.
            </p>

            <h3>Third-party connections</h3>
            <p>
              The app connects directly to the IPTV provider you add and
              downloads the images that provider points to. Those connections
              are governed by your provider&apos;s privacy policy, not by this
              one.
            </p>

            <h3>Your choices</h3>
            <ul>
              <li>Turn sync off in <em>Settings</em>.</li>
              <li>
                Use <em>Settings → Delete my data</em> to remove your history
                and favourites. With sync on, the deletion also applies to our
                servers and to your other devices.
              </li>
              <li>
                Removing a provider, or uninstalling the app, deletes everything
                stored on the device.
              </li>
              <li>
                Ask us to delete it by email — see{" "}
                <a href="/iptv-viewer/delete-data">Delete your data</a>.
              </li>
            </ul>

            <h3>Children</h3>
            <p>
              The app is not directed to children under 13. The parental control
              PIN hides adult categories.
            </p>

            <h3>Contact</h3>
            <p>
              <a href="mailto:wolcutor@gmail.com">wolcutor@gmail.com</a>
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
