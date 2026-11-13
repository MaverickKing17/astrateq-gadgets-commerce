import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AlertTriangle } from "lucide-react";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-48 pb-20">
        <div className="container-wide max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-8 h-8 text-electric-cyan" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold gradient-text-light">Legal Disclaimer</h1>
          </div>
          <p className="text-muted-foreground mb-8 text-sm">Last updated: March 1, 2026</p>

          <div className="bg-warning/10 border border-warning/30 rounded-xl p-6 mb-8 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
            <p className="text-foreground">
              <strong>Important:</strong> Please read this disclaimer carefully. By using our products, you acknowledge that you have read, understood, and agree to the terms below. This disclaimer is governed by the laws of the Province of Ontario and the federal laws of Canada.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">1. Nature of Products</h2>
              <p className="text-muted-foreground leading-relaxed">
                Astrateq Gadgets Inc. (legally headquartered in Carson City, Nevada, USA) designs AI-powered automotive safety products as <strong>supplementary decision-support tools</strong>. They are NOT intended to replace professional vehicle inspections, manufacturer-recommended maintenance schedules, safe and attentive driving practices, licensed mechanic diagnoses, or human judgment in any driving or vehicle maintenance situation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">2. AI Prediction Accuracy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our AI systems achieve approximately <strong>96.2% accuracy</strong> as of Q1 2026. This means approximately 3.8% of predictions may be inaccurate. Accuracy varies by vehicle make, model, age, and driving conditions. Environmental factors may affect sensor readings. <strong>Users should always verify AI recommendations with certified automotive professionals.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">3. No Guarantee of Safety</h2>
              <p className="text-muted-foreground leading-relaxed">
                Astrateq does NOT guarantee the prevention of vehicle breakdowns, mechanical failures, accidents, injuries, or death. Vehicle safety depends on proper maintenance, safe driving, road conditions, weather, and many factors beyond the scope of our products. Our products are one component of a comprehensive vehicle safety strategy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">4. Emergency Response AI Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Emergency Response AI provides automatic crash detection and emergency notification. However: detection relies on accelerometer data and may not detect all collisions; notifications depend on cellular network availability; response times from emergency services (including Canadian 911 services) vary by location; the system may generate false alerts during extreme driving conditions; this product is NOT a substitute for calling 911 directly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">5. Consumer Protection Notice</h2>
              <p className="text-muted-foreground leading-relaxed">
                For Ontario consumers, this disclaimer is subject to the Ontario Consumer Protection Act, 2002. Nothing in this disclaimer limits or excludes any statutory rights or warranties that cannot be excluded under applicable Canadian consumer protection legislation, including implied warranties of merchantability and fitness for a particular purpose under the Ontario Sale of Goods Act.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE CANADIAN LAW, ASTRATEQ GADGETS INC. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM THE USE OF OUR PRODUCTS. OUR MAXIMUM AGGREGATE LIABILITY SHALL NOT EXCEED THE PURCHASE PRICE OF THE SPECIFIC PRODUCT GIVING RISE TO THE CLAIM. This limitation does not apply to liability that cannot be excluded under applicable Canadian consumer protection legislation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">7. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                This Disclaimer is governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein. For complete legal terms, see our <a href="/legal/terms" className="text-electric-cyan hover:underline">Terms of Service</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">8. Contact</h2>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p><strong>Email:</strong> legal@astrateq.com</p>
                <p><strong>Phone:</strong> 1-888-ASTRATEQ (1-888-278-7283)</p>
                <p><strong>Marketing Office:</strong> 100 King Street West, Toronto, ON M5X 1A9, Canada</p>
                <p><strong>Legal Headquarters:</strong> Astrateq Gadgets Inc., Carson City, Nevada, USA</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
