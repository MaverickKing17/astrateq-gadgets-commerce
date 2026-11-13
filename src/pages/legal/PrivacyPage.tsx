import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-48 pb-20">
        <div className="container-wide max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-electric-cyan" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold gradient-text-light">Privacy Policy</h1>
          </div>
          <p className="text-muted-foreground mb-2">Last updated: March 1, 2026</p>
          <p className="text-muted-foreground mb-8 text-sm">Effective date: March 15, 2026</p>

          <div className="prose prose-lg max-w-none text-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Astrateq Gadgets Inc. ("Astrateq," "we," "our," or "us"), legally headquartered in Carson City, Nevada, USA, with its principal marketing operations at 100 King Street West, Toronto, ON M5X 1A9, Canada, is committed to protecting your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information in compliance with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA), applicable provincial privacy legislation including Ontario's Consumer Protection Act, 2002, and all other applicable Canadian and international data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">2. Information We Collect</h2>
              <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">2.1 Information You Provide Directly</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li><strong>Account Information:</strong> Name, email address, phone number, mailing address, and account credentials when you create an account or make a purchase.</li>
                <li><strong>Payment Information:</strong> Credit/debit card numbers, billing address, and payment method details. All payment data is processed by PCI-DSS Level 1 compliant processors — we never store full card numbers on our servers.</li>
                <li><strong>Vehicle Information:</strong> Vehicle make, model, year, VIN (optional), and OBD-II diagnostic data when you connect our products to your vehicle.</li>
                <li><strong>Communication Data:</strong> Messages, support tickets, chat transcripts (including AstraBot AI conversations), survey responses, and product reviews.</li>
                <li><strong>Cryptocurrency Wallet Addresses:</strong> If you choose to pay with ETH, SOL, or USDC, we collect your public wallet address for transaction verification.</li>
              </ul>

              <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">2.2 Information Collected Automatically</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li><strong>Device & Telemetry Data:</strong> Driving behaviour patterns, speed, acceleration, braking force, GPS coordinates (with consent), engine diagnostics, battery health metrics (EV users), and predictive maintenance signals.</li>
                <li><strong>Usage Analytics:</strong> Pages visited, features used, session duration, click patterns, and app interaction data.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, operating system, device identifiers, and mobile advertising IDs.</li>
                <li><strong>AI Model Training Data:</strong> Anonymized and aggregated telemetry patterns used to improve our predictive algorithms. Individual data is never used for model training without explicit opt-in consent.</li>
              </ul>

              <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">2.3 Information from Third Parties</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Vehicle manufacturer APIs (with your authorization) for enhanced diagnostic data.</li>
                <li>Payment processors for transaction verification and fraud prevention.</li>
                <li>Analytics providers (Google Analytics 4, Mixpanel) for website usage insights.</li>
                <li>Social media platforms when you interact with our social accounts or use social login.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">3. Consent Under PIPEDA</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In accordance with PIPEDA Principle 3 (Consent), we obtain your meaningful consent before collecting, using, or disclosing your personal information. Consent may be:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Express Consent:</strong> Required for sensitive information such as precise location data, driving behaviour records, and marketing communications.</li>
                <li><strong>Implied Consent:</strong> May be relied upon where the collection is reasonably expected in the context of our product and service relationship.</li>
                <li><strong>Opt-Out Consent:</strong> You may withdraw consent at any time, subject to legal or contractual restrictions, by contacting us at privacy@astrateq.com.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We will inform you of the purposes for collection at or before the time of collection, and will not use information for new purposes without obtaining fresh consent unless permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">4. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Product Delivery & Functionality:</strong> Processing orders, delivering AI coaching insights, providing predictive maintenance alerts, and powering real-time safety features.</li>
                <li><strong>Safety & Emergency Services:</strong> Crash detection, automatic emergency response activation, and location sharing with emergency contacts (Emergency Response AI users only).</li>
                <li><strong>AI Improvement:</strong> Using anonymized, aggregated data to enhance prediction accuracy and develop new safety features. We achieved 96.2% prediction accuracy in Q1 2026 through these improvements.</li>
                <li><strong>Customer Support:</strong> Responding to inquiries, troubleshooting issues, and providing technical assistance via live chat, email, phone, and AstraBot AI.</li>
                <li><strong>Marketing & Communications:</strong> Sending product updates, safety alerts, promotional offers, and newsletter content (with your express consent). You can opt out at any time in compliance with Canada's Anti-Spam Legislation (CASL).</li>
                <li><strong>Fraud Prevention & Security:</strong> Detecting unauthorized access, preventing payment fraud, and maintaining platform integrity.</li>
                <li><strong>Legal Compliance:</strong> Meeting regulatory obligations under Canadian federal and provincial law.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">5. PIPEDA Principles Compliance</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We adhere to all ten PIPEDA Fair Information Principles:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Accountability:</strong> Our Privacy Officer is responsible for compliance and can be reached at dpo@astrateq.com.</li>
                <li><strong>Identifying Purposes:</strong> Purposes for collection are identified at or before the time of collection.</li>
                <li><strong>Consent:</strong> Knowledge and consent are obtained for collection, use, and disclosure.</li>
                <li><strong>Limiting Collection:</strong> We collect only information necessary for identified purposes.</li>
                <li><strong>Limiting Use, Disclosure, and Retention:</strong> Personal information is used only for stated purposes and retained only as long as necessary.</li>
                <li><strong>Accuracy:</strong> We keep personal information accurate, complete, and up-to-date.</li>
                <li><strong>Safeguards:</strong> Enterprise-grade security protects all personal information (see Section 7).</li>
                <li><strong>Openness:</strong> This policy and our practices are readily available.</li>
                <li><strong>Individual Access:</strong> You may request access to your personal information (see Section 9).</li>
                <li><strong>Challenging Compliance:</strong> You may challenge our compliance by contacting our Privacy Officer.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">6. Data Sharing & Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We do not sell your personal information. We share data only in these circumstances:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Service Providers:</strong> Cloud hosting (AWS ca-central-1 and us-east-1), payment processing (Stripe, PayPal), shipping carriers (Canada Post, FedEx, UPS, DHL), and customer support tools — all bound by contractual privacy obligations.</li>
                <li><strong>Emergency Services:</strong> Location and crash data shared with 911/emergency services when automatic crash detection is triggered (Emergency Response AI only).</li>
                <li><strong>Legal Requirements:</strong> When required by Canadian law, court order, or to comply with a valid legal process.</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (you will be notified in advance).</li>
                <li><strong>Cross-Border Transfers:</strong> Some data may be processed in the United States. We ensure comparable levels of protection through contractual safeguards as required by PIPEDA.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">7. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement enterprise-grade security measures including: AES-256 encryption at rest, TLS 1.3 encryption in transit, SOC 2 Type II certification (renewed January 2026), ISO 27001:2022 compliance, regular penetration testing by independent security firms, multi-factor authentication for all internal systems, and 24/7 security operations centre (SOC) monitoring. Payment data is processed through PCI-DSS Level 1 compliant payment processors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">8. Data Retention</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Account Data:</strong> Retained while your account is active and for 30 days after deletion request.</li>
                <li><strong>Vehicle Telemetry:</strong> Raw data retained for 24 months; anonymized aggregates retained indefinitely for AI model improvement.</li>
                <li><strong>Transaction Records:</strong> Retained for 7 years for tax and legal compliance under the Canada Revenue Agency requirements.</li>
                <li><strong>Support Communications:</strong> Retained for 3 years after case resolution.</li>
                <li><strong>Marketing Consent Records:</strong> Retained for the duration of consent plus 3 years as required under CASL.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">9. Your Rights Under Canadian Law</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Under PIPEDA and applicable provincial legislation, you have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Access:</strong> Request a copy of all personal information we hold about you.</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</li>
                <li><strong>Withdraw Consent:</strong> Withdraw your consent to collection, use, or disclosure at any time (subject to legal or contractual obligations).</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information where no legal retention obligation exists.</li>
                <li><strong>Challenge Compliance:</strong> Challenge our compliance with PIPEDA by contacting our Privacy Officer.</li>
                <li><strong>Complaint to the OPC:</strong> File a complaint with the Office of the Privacy Commissioner of Canada if you believe your rights have been violated.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise any of these rights, contact us at <strong>privacy@astrateq.com</strong> or call <strong>1-888-ASTRATEQ</strong>. We will respond within 30 days as required by PIPEDA.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">10. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our products and services are not directed to children under 16. We do not knowingly collect personal information from children under 16. The Teen Driver Monitoring product requires parental consent and account ownership by a parent or legal guardian who is at least 18 years old. If we discover we have inadvertently collected data from a child under 16, we will delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">11. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy periodically. Material changes will be communicated via email, in-app notification, and a prominent notice on our website at least 30 days before taking effect. Continued use after the effective date constitutes acceptance. Previous versions are archived and available upon request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">12. Contact Us</h2>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p><strong>Privacy Officer:</strong> dpo@astrateq.com</p>
                <p><strong>Privacy Inquiries:</strong> privacy@astrateq.com</p>
                <p><strong>Phone:</strong> 1-888-ASTRATEQ (1-888-278-7283)</p>
                <p><strong>Marketing Office:</strong> 100 King Street West, Toronto, ON M5X 1A9, Canada</p>
                <p><strong>Legal Headquarters:</strong> Astrateq Gadgets Inc., Carson City, Nevada, USA</p>
                <p className="mt-4">
                  If you are not satisfied with our response, you have the right to file a complaint with the <strong>Office of the Privacy Commissioner of Canada</strong> at <a href="https://www.priv.gc.ca" className="text-electric-cyan hover:underline" target="_blank" rel="noopener noreferrer">www.priv.gc.ca</a>.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
