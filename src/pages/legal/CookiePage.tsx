import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Cookie } from "lucide-react";
import { storeConfig } from "@/config/store";
import { Link } from "react-router-dom";

export default function CookiePage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <Cookie className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold">
              Cookie Policy
            </h1>
          </div>
          <p className="text-muted-foreground mb-8 text-sm">
            Last updated: March 2026
          </p>

          <div className="space-y-8 text-muted-foreground text-sm sm:text-base leading-relaxed">
            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                1. Overview
              </h2>
              <p>
                Cookies and browser local storage are small data files saved on
                your device when you visit websites. {storeConfig.legalName}{" "}
                (legally headquartered in {storeConfig.address.headquarters})
                uses minimal storage technologies in accordance with Canada&apos;s
                Personal Information Protection and Electronic Documents Act
                (PIPEDA) and applicable privacy laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                2. Storage & Cookies Used on This Storefront
              </h2>

              <div className="space-y-5">
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">
                    Strictly Necessary Browser Storage
                  </h3>
                  <p className="mb-3">
                    Essential for core storefront behavior such as remembering
                    items in your shopping cart and recording your cookie
                    consent choice.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>
                      <strong className="text-foreground">
                        Shopping Cart Persistence:
                      </strong>{" "}
                      Saves selected hardware items and quantities locally in
                      your browser across reloads.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Cookie Consent Preference:
                      </strong>{" "}
                      Remembers whether you accepted or declined optional
                      analytics cookies.
                    </li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">
                    Optional Analytics Cookies (Consent Required)
                  </h3>
                  <p className="mb-3">
                    Loaded only when you affirmatively select &ldquo;Accept
                    All&rdquo; on our cookie consent banner.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>
                      <strong className="text-foreground">
                        Google Analytics 4 (_ga, _ga_*):
                      </strong>{" "}
                      Measures aggregate page views and storefront navigation to
                      improve site usability.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                3. Managing Your Preferences
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Consent Banner:</strong>{" "}
                  Declining optional cookies prevents Google Analytics scripts
                  from loading and clears existing{" "}
                  <code className="text-foreground">_ga</code> cookies.
                </li>
                <li>
                  <strong className="text-foreground">Browser Settings:</strong>{" "}
                  You can clear local storage or block cookies at any time using
                  your browser preferences. Clearing site storage will also
                  reset your saved shopping cart.
                </li>
                <li>
                  <strong className="text-foreground">Opt-Out Tool:</strong>{" "}
                  Google Analytics opt-out browser add-on is available at{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    tools.google.com/dlpage/gaoptout
                  </a>
                  .
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                4. Contact Us
              </h2>
              <div className="space-y-1.5">
                <p>
                  For questions about cookies or privacy practices, review our{" "}
                  <Link
                    to="/legal/privacy"
                    className="text-primary hover:underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  or contact us:
                </p>
                <p>
                  <strong className="text-foreground">Email:</strong>{" "}
                  {storeConfig.support.privacyEmail}
                </p>
                <p>
                  <strong className="text-foreground">Phone:</strong>{" "}
                  {storeConfig.support.phone}
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
