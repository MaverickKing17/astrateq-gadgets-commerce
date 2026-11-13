import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Copyright } from "lucide-react";
import { storeConfig } from "@/config/store";

export default function DMCAPage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <Copyright className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold">
              Copyright & DMCA Policy
            </h1>
          </div>
          <p className="text-muted-foreground mb-2">
            Copyright Infringement Notice & Takedown Policy
          </p>
          <p className="text-muted-foreground mb-8 text-sm">
            Last updated: March 2026
          </p>

          <div className="space-y-8 text-muted-foreground text-sm sm:text-base leading-relaxed">
            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                1. Overview
              </h2>
              <p>
                {storeConfig.legalName} (legally headquartered in{" "}
                {storeConfig.address.headquarters}) respects the intellectual
                property rights of others and expects our visitors and partners
                to do the same. In accordance with the Digital Millennium
                Copyright Act of 1998 (17 U.S.C. &sect; 512) (&ldquo;DMCA&rdquo;)
                and the Canadian Copyright Act (R.S.C., 1985, c. C-42), we have
                adopted this policy for addressing claims of copyright
                infringement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                2. Canadian Notice and Notice Regime
              </h2>
              <p className="mb-3">
                Under sections 41.25&ndash;41.27 of the Canadian Copyright Act,
                copyright owners may send a notice of claimed infringement. Upon
                receiving a compliant notice, we will review it, forward any
                required notices where applicable, and maintain required records
                for the statutory period.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                3. DMCA Takedown Notices (US Law)
              </h2>
              <p className="mb-3">
                To submit a takedown notice under the DMCA, please include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">
                    Identification of the copyrighted work:
                  </strong>{" "}
                  A description of the copyrighted work claimed to have been
                  infringed.
                </li>
                <li>
                  <strong className="text-foreground">
                    Identification of the material:
                  </strong>{" "}
                  The specific URL(s) or sufficient detail to locate the
                  material.
                </li>
                <li>
                  <strong className="text-foreground">
                    Your contact information:
                  </strong>{" "}
                  Full legal name, mailing address, telephone number, and email
                  address.
                </li>
                <li>
                  <strong className="text-foreground">
                    Good faith & accuracy statements:
                  </strong>{" "}
                  A good faith belief statement and a statement under penalty of
                  perjury that the notice is accurate and you are authorized to
                  act on behalf of the copyright owner.
                </li>
                <li>
                  <strong className="text-foreground">Signature:</strong> A
                  physical or electronic signature of the copyright owner or
                  authorized representative.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                4. Designated Copyright Contact
              </h2>
              <div className="bg-card rounded-xl border border-border p-6 space-y-2">
                <p>
                  <strong className="text-foreground">Recipient:</strong>{" "}
                  Copyright Agent, Legal Department
                </p>
                <p>
                  <strong className="text-foreground">Company:</strong>{" "}
                  {storeConfig.legalName}
                </p>
                <p>
                  <strong className="text-foreground">Marketing Office:</strong>{" "}
                  {storeConfig.address.office}
                </p>
                <p>
                  <strong className="text-foreground">
                    Legal Headquarters:
                  </strong>{" "}
                  {storeConfig.address.headquarters}
                </p>
                <p>
                  <strong className="text-foreground">Email:</strong>{" "}
                  {storeConfig.support.legalEmail}
                </p>
                <p>
                  <strong className="text-foreground">Phone:</strong>{" "}
                  {storeConfig.support.phone}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                5. Counter-Notification & Misrepresentation Notice
              </h2>
              <p>
                If you believe material removed or disabled was not infringing,
                you may submit a counter-notification under 17 U.S.C. &sect;
                512(g). Under Section 512(f) of the DMCA and applicable Canadian
                law, knowingly misrepresenting that material is infringing may
                result in liability for damages.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
