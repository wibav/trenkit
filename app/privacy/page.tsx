import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Privacy Policy | Trenkit",
  description:
    "Privacy policy and data protection information for Trenkit apps, games, and development services.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Section variant="gradient" className={styles.header}>
          <h1 style={{ color: "white" }}>Privacy Policy</h1>
          <p style={{ color: "rgba(255,255,255,0.9)" }}>
            Effective Date: January 22, 2026
          </p>
        </Section>

        <Section variant="light" className={styles.content}>
          <div className={styles.policyContent}>
            <h2>Welcome to Trenkit&apos;s Privacy Policy</h2>
            <p>
              Thank you for using Trenkit (&quot;Company&quot;, &quot;We&quot;,
              &quot;Us&quot;, or &quot;Our&quot;). We are committed to protecting
              your privacy and ensuring transparency about how we collect, use,
              and protect your personal information. This Privacy Policy
              describes:
            </p>
            <ul>
              <li>
                The ways in which we collect personal information about you and
                why we do so
              </li>
              <li>How we use your personal information</li>
              <li>
                The choices and rights you have regarding your personal
                information
              </li>
            </ul>

            <p>
              This Privacy Policy applies to our website, mobile applications,
              games, development services, and all related platforms and
              services (collectively, the &quot;Service&quot;). We may
              periodically update this policy by posting a new version on our
              website. If we make significant changes, we will notify you
              through the Service or by email.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about data protection or wish to
              exercise your rights regarding your personal data, please contact
              us first through our support channels:
            </p>
            <ul>
              <li>Email: privacy@trenkit.com</li>
              <li>Website Support: trenkit.com/contact</li>
            </ul>

            <h2>Information We Collect</h2>

            <h3>Information You Provide Directly</h3>
            <ul>
              <li>Contact information (email address, phone number)</li>
              <li>Account credentials (username, password)</li>
              <li>Profile information (name, profile picture, bio)</li>
              <li>
                Messages and content you send (support tickets, in-game chat,
                feedback)
              </li>
              <li>
                Information from surveys, contests, promotions, and events
              </li>
              <li>
                Information for business inquiries (name, company, phone number
                when requesting development services)
              </li>
              <li>
                Payment information (processed securely by third-party payment
                providers)
              </li>
            </ul>

            <h3>Information We Collect Automatically</h3>
            <ul>
              <li>
                Account and application progress information (game statistics,
                achievements)
              </li>
              <li>
                Device information (IP address, device type, operating system,
                browser type)
              </li>
              <li>Location data (approximate location based on IP address)</li>
              <li>Cookies and similar tracking technologies</li>
              <li>
                Usage data (pages visited, features used, time spent, interactions)
              </li>
              <li>Device identifiers (including advertising identifiers)</li>
            </ul>

            <h3>Information from Third Parties</h3>
            <ul>
              <li>
                Social media platforms (if you link your account to our Service)
              </li>
              <li>Analytics providers and advertising networks</li>
              <li>Fraud prevention services</li>
              <li>Payment processors</li>
            </ul>

            <h2>Why We Collect Your Information</h2>

            <h3>To Operate the Service</h3>
            <ul>
              <li>Create and manage your account</li>
              <li>Provide access to our apps and games</li>
              <li>Process payments and verify transactions</li>
              <li>Send service-related communications</li>
              <li>Provide customer support</li>
            </ul>

            <h3>To Improve Your Experience</h3>
            <ul>
              <li>Enhance and personalize the Service</li>
              <li>Develop new features and improvements</li>
              <li>Analyze how you use our Service</li>
              <li>Test and optimize performance</li>
              <li>Respond to your feedback and suggestions</li>
            </ul>

            <h3>To Keep the Service Safe and Fair</h3>
            <ul>
              <li>Detect and prevent fraud and abuse</li>
              <li>Monitor for and prevent cheating or violation of terms</li>
              <li>Enforce our terms of service</li>
              <li>Protect against security threats</li>
              <li>Moderate content and user behavior</li>
            </ul>

            <h3>For Marketing and Analytics</h3>
            <ul>
              <li>Send promotional information (with your consent)</li>
              <li>Display personalized advertisements</li>
              <li>Conduct market research and analytics</li>
              <li>Understand user behavior and preferences</li>
            </ul>

            <h2>Who Can See Your Information</h2>

            <h3>Other Users</h3>
            <p>
              Depending on your privacy settings, other users may see your
              profile information, in-game activities, achievements, and
              messages.
            </p>

            <h3>Service Providers</h3>
            <p>
              We work with third-party providers who help us operate the
              Service, including:
            </p>
            <ul>
              <li>Hosting and cloud providers</li>
              <li>Customer support platforms</li>
              <li>Payment processors</li>
              <li>Analytics services</li>
              <li>Marketing and advertising partners</li>
            </ul>

            <h3>Legal Compliance</h3>
            <p>
              We may disclose your information to comply with legal obligations,
              respond to legal requests from authorities, or protect our rights
              and the safety of our users.
            </p>

            <h3>Business Partners</h3>
            <p>
              We may share aggregated or anonymized data with business partners
              for analytics and improvement purposes.
            </p>

            <h2>Your Rights and Choices</h2>

            <h3>Opt-Out of Marketing Communications</h3>
            <p>
              You can unsubscribe from promotional emails by clicking the
              &quot;Unsubscribe&quot; link in our messages or by adjusting your
              account settings.
            </p>

            <h3>Opt-Out of Targeted Advertising</h3>
            <p>
              You can limit tracking for targeted advertising through your device
              settings:
            </p>
            <ul>
              <li>iOS: Enable &quot;Limit Ad Tracking&quot;</li>
              <li>Android: Disable &quot;Ads Personalization&quot;</li>
            </ul>

            <h3>Access Your Data</h3>
            <p>
              You have the right to request a copy of the personal information
              we hold about you in a portable format.
            </p>

            <h3>Correct or Delete Your Data</h3>
            <p>
              You can update your profile information or request deletion of your
              account and associated data. Note that we may retain some
              information for legal or business purposes.
            </p>

            <h3>Other Rights</h3>
            <ul>
              <li>Right to object to processing of your data</li>
              <li>Right to restrict how we use your data</li>
              <li>Right to withdraw consent at any time</li>
            </ul>

            <p>
              To exercise any of these rights, please contact us at
              privacy@trenkit.com. We will respond within 30 days of your
              request.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement administrative, technical, and physical security
              measures to protect your personal information against unauthorized
              access, loss, misuse, or alteration. However, no security system
              is 100% secure. We cannot guarantee absolute security of your
              data.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary
              to provide the Service, comply with legal obligations, or as
              otherwise permitted by law. When you delete your account, we will
              remove your information unless we are required by law to retain
              it.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our Service is not directed to children under the age of 13 (or
              the applicable age of digital consent in your region). We do not
              knowingly collect personal information from children under 13.
            </p>
            <p>
              If we learn that a child under 13 has provided us with personal
              information, we will promptly delete such information and terminate
              the child&apos;s account.
            </p>
            <p>
              Parents or guardians who believe their child has provided
              information to us should contact us immediately at
              privacy@trenkit.com.
            </p>

            <h2>Cookies and Similar Technologies</h2>
            <p>
              We use cookies and similar technologies to improve your
              experience, remember your preferences, and analyze how you use our
              Service. You can control cookie settings through your browser:
            </p>
            <ul>
              <li>
                <a href="https://support.apple.com/kb/PH19214" target="_blank">
                  Safari
                </a>
              </li>
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank">
                  Chrome
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/kb/cookies" target="_blank">
                  Firefox
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/en-us/microsoft-edge" target="_blank">
                  Edge
                </a>
              </li>
            </ul>

            <h2>International Data Transfers</h2>
            <p>
              Our Service operates globally, and your information may be
              transferred to countries other than where you reside. We
              implement appropriate safeguards, including standard contractual
              clauses and other legal mechanisms, to protect your data during
              international transfers.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our Service may contain links to third-party websites. We are not
              responsible for their privacy practices. We encourage you to
              review their privacy policies before sharing your information.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Material
              changes will be notified through the Service or by email. Your
              continued use of our Service after such changes constitutes your
              acceptance of the updated policy.
            </p>

            <h2>Last Updated</h2>
            <p>This Privacy Policy was last updated on January 22, 2026.</p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
