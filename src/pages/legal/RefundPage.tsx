import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { RotateCcw } from "lucide-react";

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-48 pb-20">
        <div className="container-wide max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <RotateCcw className="w-8 h-8 text-electric-cyan" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold gradient-text-light">Refund Policy</h1>
          </div>
          <p className="text-muted-foreground mb-8 text-sm">Last updated: March 1, 2026</p>

          <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-8">
            <p className="text-foreground font-semibold text-lg mb-2">💰 60-Day Money-Back Guarantee</p>
            <p className="text-muted-foreground">
              Every Astrateq product comes with our industry-leading 60-day money-back guarantee — exceeding the minimum requirements of the Ontario Consumer Protection Act, 2002. Not satisfied? Return it for a full refund.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">1. Your Rights Under Canadian Law</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Astrateq Gadgets Inc. (legally headquartered in Carson City, Nevada, USA) honours all consumer protection rights under Canadian federal and provincial law. Under the Ontario Consumer Protection Act, 2002:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>You have a <strong>7-day cooling-off period</strong> for internet agreements during which you may cancel without reason.</li>
                <li>If you did not receive a complete copy of the agreement, the cooling-off period extends to <strong>1 year</strong>.</li>
                <li>Our 60-day guarantee <strong>exceeds</strong> these statutory minimums and applies to all purchases.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">2. Eligibility</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All Astrateq products purchased from www.astrateq.com or authorized Canadian and international retailers are eligible. To qualify for a full refund:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>The product must be returned within 60 calendar days of delivery.</li>
                <li>The product must be in its original packaging with all included accessories.</li>
                <li>The product must be free of physical damage beyond normal use.</li>
                <li>You must provide proof of purchase.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">3. How to Initiate a Return</h2>
              <ol className="list-decimal pl-6 text-muted-foreground space-y-3">
                <li><strong>Contact Support:</strong> Email support@astrateq.com or call 1-888-ASTRATEQ with your order number.</li>
                <li><strong>Receive RMA Number:</strong> We'll issue a Return Merchandise Authorization within 1 business day.</li>
                <li><strong>Print Shipping Label:</strong> We provide a prepaid return label for Canadian customers at no cost (via Canada Post).</li>
                <li><strong>Ship the Product:</strong> Pack securely in original packaging and drop off at any Canada Post or designated carrier location.</li>
                <li><strong>Receive Refund:</strong> Processed within 15 days of receiving the return, as required by the Ontario CPA.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">4. Refund Methods</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Credit/Debit Card:</strong> Refunded to the original payment method within 5-10 business days after processing.</li>
                <li><strong>PayPal:</strong> Refunded to your PayPal account within 3-5 business days.</li>
                <li><strong>Apple Pay / Google Pay:</strong> Refunded to the linked card within 5-10 business days.</li>
                <li><strong>Affirm:</strong> Remaining payments cancelled and payments made are refunded.</li>
                <li><strong>Cryptocurrency:</strong> Refunded in CAD or USD to a payment method of your choice at the original purchase value. We do not refund in cryptocurrency.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">5. Exchanges</h2>
              <p className="text-muted-foreground leading-relaxed">
                Direct exchanges are available within the 60-day window. Contact our support team to arrange an exchange. Exchange products ship within 1-2 business days of receiving your original product. Price differences are charged or refunded accordingly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">6. Non-Refundable Items</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Products purchased from unauthorized third-party sellers.</li>
                <li>Products with intentional physical damage or missing components.</li>
                <li>Gift cards and promotional credits.</li>
                <li>Professional installation service fees (once completed).</li>
                <li>Expedited shipping charges (only product cost is refundable).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">7. Defective Products</h2>
              <p className="text-muted-foreground leading-relaxed">
                Defective products are covered by our <Link to="/support/warranty" className="text-electric-cyan hover:underline">Lifetime Warranty</Link>. Within the 60-day window, you may choose either a full refund or warranty replacement. Under the Ontario Sale of Goods Act and the CPA, you are also entitled to remedies for goods that are not of merchantable quality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">8. International Returns</h2>
              <p className="text-muted-foreground leading-relaxed">
                International customers are eligible for the same 60-day guarantee. Return shipping costs for international orders are the customer's responsibility unless the product is defective. Original customs duties and import taxes are non-refundable by Astrateq — contact your local customs authority for duty refund procedures.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">9. Contact Us</h2>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p>For refund questions or to initiate a return:</p>
                <p><strong>Email:</strong> support@astrateq.com</p>
                <p><strong>Phone:</strong> 1-888-ASTRATEQ (1-888-278-7283)</p>
                <p><strong>Hours:</strong> Monday-Friday, 8:00 AM - 8:00 PM EST | Saturday, 9:00 AM - 5:00 PM EST</p>
                <p><strong>Marketing Office:</strong> 100 King Street West, Toronto, ON M5X 1A9, Canada</p>
                <p><strong>Live Chat:</strong> Available 24/7 via AstraBot</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
