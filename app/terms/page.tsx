import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Terms of Service | Trenkit",
  description:
    "Terms of service for using Trenkit mobile apps, games, and development services.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Section variant="gradient" className={styles.header}>
          <h1 style={{ color: "white" }}>Terms of Service</h1>
          <p style={{ color: "rgba(255,255,255,0.9)" }}>
            Effective Date: January 22, 2026
          </p>
        </Section>

        <Section variant="light" className={styles.content}>
          <div className={styles.termsContent}>
            <h2>Agreement to Terms</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern the use of
              Trenkit&apos;s website, mobile applications, games, and
              development services (collectively, the &quot;Service&quot;)
              operated by Trenkit (&quot;Company&quot;, &quot;We&quot;,
              &quot;Us&quot;, or &quot;Our&quot;). By accessing, downloading, or
              using the Service, you agree to be bound by these Terms. If you do
              not agree to these Terms, please do not use the Service.
            </p>

            <h2>1. Use of the Service</h2>

            <h3>1.1 License</h3>
            <p>
              Subject to your compliance with these Terms, we grant you a
              limited, non-exclusive, non-transferable, and revocable license to
              access and use the Service for lawful purposes. This license does
              not include the right to:
            </p>
            <ul>
              <li>Modify, copy, or adapt the Service or its content</li>
              <li>
                Use the Service for commercial purposes without permission
              </li>
              <li>
                Reverse engineer, decompile, or attempt to derive the source
                code
              </li>
              <li>
                Remove, obscure, or alter any proprietary notices or labels
              </li>
              <li>Transfer, sublicense, or lend your rights to the Service</li>
              <li>Use the Service in any illegal or harmful manner</li>
            </ul>

            <h3>1.2 Account Responsibility</h3>
            <p>
              If you create an account on our Service, you are responsible for:
            </p>
            <ul>
              <li>Maintaining the confidentiality of your login credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of unauthorized access</li>
              <li>
                Ensuring that all information you provide is accurate and up to
                date
              </li>
            </ul>

            <h3>1.3 Prohibited Activities</h3>
            <p>You agree NOT to:</p>
            <ul>
              <li>Harass, abuse, or threaten other users or Trenkit staff</li>
              <li>
                Post abusive, threatening, obscene, defamatory, or offensive
                content
              </li>
              <li>
                Engage in cheating, exploiting bugs, or using unauthorized
                software
              </li>
              <li>
                Attempt to gain unauthorized access to the Service or other
                accounts
              </li>
              <li>
                Disrupt or interfere with the normal operation of the Service
              </li>
              <li>
                Post content that infringes on intellectual property rights
              </li>
              <li>Use the Service for gambling or betting purposes</li>
              <li>Collect or solicit personal information from other users</li>
            </ul>

            <h3>1.4 Termination</h3>
            <p>
              We reserve the right to suspend or terminate your account and
              access to the Service at any time, without notice, if we believe
              you have violated these Terms or engaged in illegal activity. Upon
              termination, your right to use the Service immediately ends, and
              you will not be entitled to refunds for any virtual items,
              purchases, or account balances.
            </p>

            <h2>2. Ownership and Intellectual Property</h2>

            <h3>2.1 Our Rights</h3>
            <p>
              All content in the Service, including but not limited to games,
              applications, artwork, characters, stories, code, designs, and
              documentation, is owned by or licensed to Trenkit and is protected
              by copyright, trademark, patent, and other intellectual property
              laws. You have no ownership rights in any content, features, or
              accounts.
            </p>

            <h3>2.2 Your Content</h3>
            <p>
              Any content you upload, submit, or share through the Service
              (&quot;User Content&quot;) must not:
            </p>
            <ul>
              <li>Infringe on any third-party intellectual property rights</li>
              <li>Be defamatory, offensive, or illegal</li>
              <li>Contain viruses, malware, or harmful code</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>

            <p>
              By submitting User Content, you grant Trenkit a worldwide,
              perpetual, royalty-free license to use, display, and distribute
              your content in connection with the Service and for promotional
              purposes.
            </p>

            <h2>3. Virtual Items and Purchases</h2>

            <h3>3.1 Virtual Goods</h3>
            <p>
              The Service may offer virtual items, currency, or digital goods
              (&quot;Virtual Items&quot;) for purchase. Virtual Items are a
              limited license to use content in the Service and have no real
              monetary value. You do not own Virtual Items; you merely have the
              right to use them within the Service.
            </p>

            <h3>3.2 Purchases and Refunds</h3>
            <p>
              All purchases of Virtual Items, in-app content, or other digital
              products are final and non-refundable. We are not responsible for
              lost, unused, or expired Virtual Items. Trenkit may modify,
              eliminate, or adjust Virtual Items at any time without
              compensation to you.
            </p>

            <h3>3.3 Payment Terms</h3>
            <p>
              You agree to pay all fees and applicable taxes associated with
              your purchases. Pricing for Virtual Items may change at any time.
              If you make a purchase through a third-party app store, their
              refund policies apply.
            </p>

            <h2>4. User-Generated Content and Moderation</h2>

            <h3>4.1 Content Standards</h3>
            <p>
              We monitor and moderate user-generated content within the Service.
              We reserve the right to remove, edit, or disable any content that
              violates these Terms or our community guidelines, without notice.
            </p>

            <h3>4.2 Privacy and Monitoring</h3>
            <p>
              By using the Service, you consent to our monitoring and recording
              of your interactions, including chat messages, for safety and
              compliance purposes. You acknowledge that you have no expectation
              of privacy in such communications.
            </p>

            <h2>5. Disclaimers and Warranties</h2>

            <h3>5.1 &quot;As Is&quot; Service</h3>
            <p>
              The Service is provided &quot;as is&quot; and &quot;as
              available&quot; without warranties of any kind, either express or
              implied. We disclaim all warranties, including merchantability,
              fitness for a particular purpose, and non-infringement. We do not
              warrant that the Service will be error-free, uninterrupted, or
              free from viruses or harmful components.
            </p>

            <h3>5.2 No Guarantees</h3>
            <p>We do not guarantee that:</p>
            <ul>
              <li>The Service will always be available or accessible</li>
              <li>Bugs or defects will be corrected</li>
              <li>Your data will never be lost or corrupted</li>
              <li>The Service will meet your specific needs or expectations</li>
            </ul>

            <h2>6. Limitation of Liability</h2>

            <h3>6.1 No Liability</h3>
            <p>
              To the maximum extent permitted by law, Trenkit shall not be
              liable for any indirect, incidental, consequential, special, or
              punitive damages, including loss of profits, data, or business
              interruption, arising from your use of or inability to use the
              Service, even if we have been advised of the possibility of such
              damages.
            </p>

            <h3>6.2 Cap on Liability</h3>
            <p>
              Our total liability for any claims arising from this Agreement
              shall not exceed the amount you paid to Trenkit in the 12 months
              preceding the claim. If you have not paid anything, our liability
              is limited to $1.
            </p>

            <h2>7. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Trenkit, its officers,
              directors, and employees from any claims, damages, losses, or
              expenses (including legal fees) arising from:
            </p>
            <ul>
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your breach of any law or regulation</li>
              <li>User Content you submit</li>
              <li>Your infringement of others' intellectual property rights</li>
            </ul>

            <h2>8. Dispute Resolution</h2>

            <h3>8.1 Informal Resolution</h3>
            <p>
              Before pursuing legal action, you agree to attempt to resolve any
              dispute informally by contacting our support team at
              support@trenkit.com. Both parties will attempt to resolve the
              dispute in good faith for at least 30 days.
            </p>

            <h3>8.2 Arbitration</h3>
            <p>
              If informal resolution fails, you agree that any dispute shall be
              resolved through binding arbitration rather than in court,
              conducted by a neutral arbitrator under established arbitration
              rules. Arbitration is final and binding.
            </p>

            <h3>8.3 Governing Law</h3>
            <p>
              These Terms are governed by the laws applicable in the
              jurisdiction where Trenkit operates, without regard to conflict of
              law provisions. Both parties consent to the exclusive jurisdiction
              of the courts in that location.
            </p>

            <h2>9. Modifications to Terms</h2>
            <p>
              We may modify these Terms at any time by posting updated terms on
              the Service. Your continued use of the Service after such changes
              constitutes acceptance of the modified Terms. If you do not agree
              to any changes, you must stop using the Service.
            </p>

            <h2>10. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the Service
              at any time and for any reason, including if we believe you have
              violated these Terms. Upon termination, all rights granted to you
              are immediately revoked, and you must cease all use of the
              Service.
            </p>

            <h2>11. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid or
              unenforceable, that provision shall be severed, and the remaining
              provisions shall continue in full force and effect.
            </p>

            <h2>12. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy and any other
              policies referenced herein, constitute the entire agreement
              between you and Trenkit regarding the Service and supersede all
              prior agreements and understandings.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service or need to
              report a violation, please contact us at:
            </p>
            <ul>
              <li>Email: legal@trenkit.com</li>
              <li>Support: trenkit.com/contact</li>
            </ul>

            <h2>14. Effective Date</h2>
            <p>These Terms of Service are effective as of January 22, 2026.</p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
