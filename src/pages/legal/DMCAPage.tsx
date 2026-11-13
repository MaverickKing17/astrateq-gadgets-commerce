import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Copyright } from "lucide-react";

export default function DMCAPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-48 pb-20">
        <div className="container-wide max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <Copyright className="w-8 h-8 text-electric-cyan" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold gradient-text-light">Copyright & DMCA Policy</h1>
          </div>
          <p className="text-muted-foreground mb-2">Copyright Infringement Notice & Takedown Policy</p>
          <p className="text-muted-foreground mb-8 text-sm">Last updated: March 1, 2026</p>

          <div className="prose prose-lg max-w-none text-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">1. Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Astrateq Gadgets Inc. (legally headquartered in Carson City, Nevada, USA) respects the intellectual property rights of others and expects our users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 (17 U.S.C. § 512) ("DMCA"), the Canadian Copyright Act (R.S.C., 1985, c. C-42), and the Notice and Notice regime under Canadian copyright law, we have adopted this policy for addressing claims of copyright infringement on our website, mobile applications, blog, user-generated content areas, and related digital properties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">2. Canadian Notice and Notice Regime</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under the Canadian Copyright Act (sections 41.25–41.27), copyright owners may send us a notice of claimed infringement. Upon receiving a compliant notice, we will:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Forward the notice to the person to whom the electronic location, Internet address, or URL identified in the notice belongs.</li>
                <li>Inform the claimant that the notice has been forwarded.</li>
                <li>Retain records of the notice for six months (or 12 months if court proceedings are commenced).</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Note: Under Canadian law, the Notice and Notice regime does not require automatic takedown. However, we voluntarily review all notices and may remove content that we determine to be infringing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">3. DMCA Takedown Notices (US Law)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a company headquartered in the United States, we also comply with the DMCA. To submit a takedown notice, provide:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-3">
                <li><strong>Identification of the copyrighted work:</strong> A description of the copyrighted work you claim has been infringed.</li>
                <li><strong>Identification of the infringing material:</strong> The specific URL(s) or sufficient detail to locate the material.</li>
                <li><strong>Your contact information:</strong> Full legal name, mailing address, telephone number, and email address.</li>
                <li><strong>Good faith statement:</strong> A statement that you have a good faith belief that the use is not authorized.</li>
                <li><strong>Accuracy statement:</strong> A statement under penalty of perjury that the information is accurate and you are the copyright owner or authorized representative.</li>
                <li><strong>Signature:</strong> A physical or electronic signature of the copyright owner or authorized representative.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">4. Designated Copyright Agent</h2>
              <div className="bg-card rounded-xl border border-border p-6 text-muted-foreground leading-relaxed space-y-2">
                <p><strong>Name:</strong> Copyright Agent, Legal Department</p>
                <p><strong>Company:</strong> Astrateq Gadgets Inc.</p>
                <p><strong>Marketing Office:</strong> 100 King Street West, Toronto, ON M5X 1A9, Canada</p>
                <p><strong>Legal Headquarters:</strong> Carson City, Nevada, USA</p>
                <p><strong>Email:</strong> dmca@astrateq.com</p>
                <p><strong>Phone:</strong> 1-888-ASTRATEQ (1-888-278-7283)</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">5. Counter-Notification</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you believe that material removed or disabled was not infringing, you may submit a counter-notification containing:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Your physical or electronic signature.</li>
                <li>Identification of the material that was removed and its previous location.</li>
                <li>A statement under penalty of perjury that you have a good faith belief the material was removed by mistake or misidentification.</li>
                <li>Your name, address, phone number, and consent to the jurisdiction of the appropriate court.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">6. Repeat Infringer Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Astrateq has adopted a policy of terminating accounts of users who are deemed to be repeat infringers, in appropriate circumstances. Three valid takedown notices against a single user within any 12-month period will result in permanent account termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">7. Misrepresentation Warning</h2>
              <p className="text-muted-foreground leading-relaxed">
                Under Section 512(f) of the DMCA, any person who knowingly materially misrepresents that material is infringing may be subject to liability for damages. Under the Canadian Copyright Act, a claimant who includes a notice that contains information that they know is false may be subject to damages. Consult with an attorney before filing a notice if you are unsure.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
