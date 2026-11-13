import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Shield } from "lucide-react";
import { storeConfig } from "@/config/store";

export default function PrivacyPage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold">
              Privacy Policy
            </h1>
          </div>
          <p className="text-muted-foreground mb-8 text-sm">
            Last updated: March 2026
          </p>

          <div className="space-y-8 text-muted-foreground text-sm sm:text-base leading-relaxed">
            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                1. Introduction
              </h2>
              <p>
                {storeConfig.legalName} (legally headquartered in {storeConfig.address.headquarters}, with marketing operations at {storeConfig.address.office}) is committed to respecting your personal information in accordance with Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable consumer privacy laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                2. Information You Provide & Storefront Status
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Inquiries & Support:</strong> Name, email address, vehicle details, and messages when you contact our team for compatibility checks or support.
                </li>
                <li>
                  <strong className="text-foreground">Shopping Cart Storage:</strong> Your shopping cart selection is saved locally in your browser&apos;s storage so your selections persist across page reloads.
                </li>
                <li>
                  <strong className="text-foreground">Payment Data:</strong> Online card checkout is currently disabled on this storefront, so payment card numbers are not collected or stored here.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                3. Cookies & Analytics
              </h2>
              <p>
                Optional site analytics load only if you grant consent via the cookie banner. You may decline optional analytics at any time without affecting browsing or cart functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                4. Data Security & Retention
              </h2>
              <p>
                Website communications are served over encrypted HTTPS connections. Inquiry records are retained only as long as reasonably necessary to respond to your request or fulfill legal obligations. We do not sell personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                5. Your Privacy Rights & Contact
              </h2>
              <p className="mb-3">
                You may request access to, correction of, or deletion of personal information you have shared with us, or withdraw consent at any time.
              </p>
              <div className="space-y-1.5">
                <p><strong className="text-foreground">Privacy Inquiries:</strong> {storeConfig.support.privacyEmail}</p>
                <p><strong className="text-foreground">Phone:</strong> {storeConfig.support.phone}</p>
                <p><strong className="text-foreground">Marketing Office:</strong> {storeConfig.address.office}</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
