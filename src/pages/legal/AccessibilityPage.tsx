import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Accessibility } from "lucide-react";
import { storeConfig } from "@/config/store";

export default function AccessibilityPage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <Accessibility className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold">
              Accessibility Statement
            </h1>
          </div>
          <p className="text-muted-foreground mb-2">
            Our Commitment to Digital Accessibility
          </p>
          <p className="text-muted-foreground mb-8 text-sm">
            Last updated: March 2026
          </p>

          <div className="space-y-8 text-muted-foreground text-sm sm:text-base leading-relaxed">
            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                1. Our Commitment
              </h2>
              <p>
                {storeConfig.legalName} (legally headquartered in{" "}
                {storeConfig.address.headquarters}) is committed to ensuring that
                our website and storefront experience are accessible to all
                visitors, including individuals with disabilities. We are guided
                by the Accessibility for Ontarians with Disabilities Act, 2005
                (AODA), WCAG 2.2 Level AA guidelines, and applicable North
                American accessibility standards.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                2. Accessibility Features Implemented
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Keyboard-accessible navigation, menus, product filters, cart
                  controls, and modal dialogs.
                </li>
                <li>
                  Semantic HTML5 landmarks and structured heading hierarchy
                  across storefront pages.
                </li>
                <li>
                  Descriptive alternative text on product and cockpit imagery.
                </li>
                <li>
                  High-contrast dark palette pairing crisp white typography with
                  restrained cyan and amber accents.
                </li>
                <li>
                  Responsive layouts designed for mobile, tablet, and desktop
                  viewports without horizontal overflow.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                3. Ongoing Improvements
              </h2>
              <p>
                We continuously review storefront templates, interactive
                controls, and linked documentation to identify and resolve
                barriers. Third-party external links or embedded content may fall
                outside our direct control.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                4. Feedback & Contact
              </h2>
              <p className="mb-4">
                If you encounter an accessibility barrier or require product or
                policy information in an alternative format, please reach out to
                our team:
              </p>
              <div className="bg-card rounded-xl border border-border p-6 space-y-2">
                <p>
                  <strong className="text-foreground">Support Email:</strong>{" "}
                  {storeConfig.support.email}
                </p>
                <p>
                  <strong className="text-foreground">Phone:</strong>{" "}
                  {storeConfig.support.phone} ({storeConfig.support.hours})
                </p>
                <p>
                  <strong className="text-foreground">Marketing Office:</strong>{" "}
                  {storeConfig.address.office}
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
