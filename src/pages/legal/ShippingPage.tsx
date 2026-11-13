import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Truck } from "lucide-react";

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-48 pb-20">
        <div className="container-wide max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <Truck className="w-8 h-8 text-electric-cyan" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold gradient-text-light">Shipping Policy</h1>
          </div>
          <p className="text-muted-foreground mb-8 text-sm">Last updated: March 1, 2026</p>

          <div className="prose prose-lg max-w-none text-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">1. Free Shipping</h2>
              <p className="text-muted-foreground leading-relaxed">
                Astrateq Gadgets Inc. offers <strong>free standard shipping on all orders over $150 CAD</strong> within Canada. Orders under $150 CAD ship for a flat rate of $9.95 CAD. Free shipping applies automatically at checkout. Under the Ontario Consumer Protection Act, 2002, total cost including shipping is disclosed before payment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">2. Canadian Shipping</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-muted-foreground border border-border rounded-lg overflow-hidden">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-foreground">Method</th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground">Delivery Time</th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground">Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3">Standard (Canada Post / Purolator)</td>
                      <td className="px-4 py-3">5-7 business days</td>
                      <td className="px-4 py-3">Free over $150 / $9.95 flat rate</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Expedited (Canada Post Xpresspost)</td>
                      <td className="px-4 py-3">2-3 business days</td>
                      <td className="px-4 py-3">$19.95</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Priority (Next Business Day)</td>
                      <td className="px-4 py-3">1 business day</td>
                      <td className="px-4 py-3">$34.95</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Northern & Remote Communities</td>
                      <td className="px-4 py-3">7-14 business days</td>
                      <td className="px-4 py-3">$14.95 (free over $200)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4 text-sm">
                * Business days are Monday through Friday, excluding Canadian statutory holidays. Orders placed before 2:00 PM EST are processed the same business day. All prices in CAD and include applicable HST/GST/PST.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">3. United States Shipping</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-muted-foreground border border-border rounded-lg overflow-hidden">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-foreground">Method</th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground">Delivery Time</th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground">Cost (USD)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3">Standard (FedEx / UPS)</td>
                      <td className="px-4 py-3">5-7 business days</td>
                      <td className="px-4 py-3">Free over $150 / $9.95 flat rate</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Expedited</td>
                      <td className="px-4 py-3">2-3 business days</td>
                      <td className="px-4 py-3">$19.95</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Overnight</td>
                      <td className="px-4 py-3">1 business day</td>
                      <td className="px-4 py-3">$34.95</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">4. International Shipping</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We ship to 45+ countries worldwide. International orders may be subject to customs duties, import taxes, and VAT, which are the responsibility of the buyer. Delivery times range from 7-21 business days depending on destination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">5. Consumer Protection — Late Delivery</h2>
              <p className="text-muted-foreground leading-relaxed">
                Under the Ontario Consumer Protection Act, 2002, if goods ordered online are not delivered within 30 days of the estimated delivery date (or within 30 days of the date of purchase if no delivery date is specified), you have the right to cancel the agreement. To cancel, contact us within 30 days of the delivery deadline. Refunds for cancelled orders due to late delivery will be processed within 15 days of cancellation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">6. Order Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                Once your order ships, you'll receive a confirmation email with a tracking number and carrier link. Track your order by logging into your Astrateq account or visiting our <Link to="/support/help-center" className="text-electric-cyan hover:underline">Help Centre</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">7. Fleet & Enterprise Orders</h2>
              <p className="text-muted-foreground leading-relaxed">
                For Fleet Guard Pro bulk orders (10+ units), we offer dedicated account shipping with volume discounts, scheduled delivery windows, and optional on-site installation across Canada and the United States. Contact <strong>enterprise@astrateq.com</strong> for custom shipping arrangements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">8. Contact Us</h2>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p><strong>Email:</strong> shipping@astrateq.com</p>
                <p><strong>Phone:</strong> 1-888-ASTRATEQ (1-888-278-7283)</p>
                <p><strong>Hours:</strong> Monday-Friday, 8:00 AM - 8:00 PM EST</p>
                <p><strong>Marketing Office:</strong> 100 King Street West, Toronto, ON M5X 1A9, Canada</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
