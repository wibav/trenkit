import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Terms and Conditions | Trenkit",
  description: "Terms and conditions for using Trenkit services.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Section variant="gradient" className={styles.header}>
          <h1 style={{ color: "white" }}>Terms and Conditions</h1>
          <p style={{ color: "rgba(255,255,255,0.9)" }}>
            Last updated: January 22, 2026
          </p>
        </Section>

        <Section variant="light" className={styles.content}>
          <div className={styles.termsContent}>
            <h2>1. Terms</h2>
            <p>
              These Terms and Conditions (&quot;Terms&quot;) govern the use of
              trenkit.com (the &quot;Site&quot;) operated by Trenkit
              (&quot;Company&quot;, &quot;We&quot; or &quot;Us&quot;).
            </p>

            <h2>2. Agreement to Terms</h2>
            <p>
              By accessing and using this Site, you accept and agree to be bound
              by the terms and provision of this agreement. If you do not agree
              to abide by the above, please do not use this service.
            </p>

            <h2>3. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the
              materials (information or software) on Trenkit&apos;s Site for
              personal, non-commercial transitory viewing only. This is the
              grant of a license, not a transfer of title, and under this
              license you may not:
            </p>
            <ul>
              <li>Modifying or copying the materials</li>
              <li>
                Using the materials for any commercial purpose or for any public
                display
              </li>
              <li>Attempting to decompile or reverse engineer any software</li>
              <li>
                Transferring the materials to another person or
                &quot;mirror&quot; the materials on any other server
              </li>
              <li>
                Attempting to circumvent or evade any security features or
                measures of the Site
              </li>
            </ul>

            <h2>4. Disclaimer</h2>
            <p>
              The materials on Trenkit&apos;s Site are provided &quot;as
              is&quot;. Trenkit makes no warranties, expressed or implied, and
              hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </p>

            <h2>5. Limitations</h2>
            <p>
              In no event shall Trenkit or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              or inability to use the materials on Trenkit&apos;s Site, even if
              Trenkit or a Trenkit authorized representative has been notified
              orally or in writing of the possibility of such damage.
            </p>

            <h2>6. Accuracy of Materials</h2>
            <p>
              The materials appearing on Trenkit&apos;s Site could include
              technical, typographical, or photographic errors. Trenkit does not
              warrant that any of the materials on its Site are accurate,
              complete, or current. Trenkit may make changes to the materials
              contained on its Site at any time without notice.
            </p>

            <h2>7. Links</h2>
            <p>
              Trenkit has not reviewed all of the sites linked to its Site and
              is not responsible for the contents of any such linked site. The
              inclusion of any link does not imply endorsement by Trenkit of the
              site. Use of any such linked website is at the user&apos;s own
              risk.
            </p>

            <h2>8. Modifications</h2>
            <p>
              Trenkit may revise these Terms and Conditions for its Site at any
              time without notice. By using this Site, you are agreeing to be
              bound by the then current version of these Terms and Conditions.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws of the jurisdiction in which Trenkit
              operates, and you irrevocably submit to the exclusive jurisdiction
              of the courts in that location.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about these Terms and Conditions, please
              contact us at:
            </p>
            <ul>
              <li>By email: legal@trenkit.com</li>
            </ul>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
