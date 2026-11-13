import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Accessibility } from "lucide-react";

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-48 pb-20">
        <div className="container-wide max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <Accessibility className="w-8 h-8 text-electric-cyan" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold gradient-text-light">Accessibility Statement</h1>
          </div>
          <p className="text-muted-foreground mb-2">Our Commitment to Digital Accessibility</p>
          <p className="text-muted-foreground mb-8 text-sm">Last updated: March 1, 2026</p>

          <div className="prose prose-lg max-w-none text-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">1. Our Commitment</h2>
              <p className="text-muted-foreground leading-relaxed">
                Astrateq Gadgets Inc. (legally headquartered in Carson City, Nevada, USA) is committed to ensuring that our website, mobile applications, and digital products are accessible to all people, including individuals with disabilities. We are guided by the Accessibility for Ontarians with Disabilities Act, 2005 (AODA), the Integrated Accessibility Standards Regulation (O. Reg. 191/11), and the Canadian Charter of Rights and Freedoms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">2. Standards & Conformance</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We strive to conform to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>WCAG 2.2 Level AA:</strong> Web Content Accessibility Guidelines published by the W3C, as required by the AODA for large organizations.</li>
                <li><strong>AODA (Accessibility for Ontarians with Disabilities Act):</strong> Full compliance with the Information and Communications Standards under O. Reg. 191/11.</li>
                <li><strong>ADA Title III:</strong> Americans with Disabilities Act requirements, applicable to our US legal headquarters.</li>
                <li><strong>EN 301 549:</strong> European standard for ICT accessibility, relevant to our international customer base.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">3. Accessibility Features</h2>
              <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">Website & Web Application</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Full keyboard navigation support throughout all pages and interactive elements.</li>
                <li>Skip navigation links for screen reader users.</li>
                <li>Semantic HTML5 with proper heading hierarchy.</li>
                <li>ARIA landmarks, roles, and labels for complex interactive components.</li>
                <li>Alt text for all meaningful images.</li>
                <li>Colour contrast ratios meeting WCAG 2.2 Level AA minimums (4.5:1 for normal text, 3:1 for large text).</li>
                <li>Resizable text up to 200% without loss of content or functionality.</li>
                <li>Focus indicators visible on all interactive elements.</li>
                <li>Bilingual support (English and French) for key content.</li>
              </ul>

              <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">Mobile Applications</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>VoiceOver (iOS) and TalkBack (Android) screen reader compatibility.</li>
                <li>Dynamic Type / font scaling support.</li>
                <li>Sufficient touch target sizes (minimum 44x44 CSS pixels).</li>
                <li>Haptic feedback for critical alerts and notifications.</li>
                <li>Audio descriptions for critical driving alerts.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">4. AODA Compliance</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As part of our commitment to the AODA, we:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide accessible formats and communication supports upon request.</li>
                <li>Train all staff and volunteers on accessible customer service and the Ontario Human Rights Code.</li>
                <li>Maintain an accessibility policy and multi-year accessibility plan.</li>
                <li>File accessibility compliance reports as required by the Ontario government.</li>
                <li>Provide feedback mechanisms for accessibility concerns.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">5. Known Limitations</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Some older blog posts (pre-2025) may have images without alt text — we are updating these.</li>
                <li>Third-party embedded content may have accessibility gaps outside our direct control.</li>
                <li>Some complex data visualizations are being enhanced with data table alternatives.</li>
                <li>Video content published before 2026 may lack audio descriptions — we are adding these.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">6. Feedback & Contact</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We welcome your feedback. If you encounter accessibility barriers or need content in an alternative format, please contact us:
              </p>
              <div className="bg-card rounded-xl border border-border p-6 text-muted-foreground leading-relaxed space-y-2">
                <p><strong>Accessibility Coordinator:</strong> accessibility@astrateq.com</p>
                <p><strong>Phone:</strong> 1-888-ASTRATEQ (1-888-278-7283) — ask for Accessibility Support</p>
                <p><strong>TTY/TDD:</strong> 1-888-278-7284</p>
                <p><strong>Marketing Office:</strong> 100 King Street West, Toronto, ON M5X 1A9, Canada</p>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We respond to accessibility inquiries within 2 business days and resolve reported issues within 30 days where technically feasible. Accessible formats of this document are available upon request.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
