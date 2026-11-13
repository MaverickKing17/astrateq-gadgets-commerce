import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-48 pb-20">
        <div className="container-wide max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-electric-cyan" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold gradient-text-light">Terms of Service</h1>
          </div>
          <p className="text-muted-foreground mb-2">Last updated: March 1, 2026</p>
          <p className="text-muted-foreground mb-8 text-sm">Effective date: March 15, 2026</p>

          <div className="prose prose-lg max-w-none text-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the Astrateq Gadgets website (www.astrateq.com), mobile applications, AI-powered automotive products, or any related services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). Astrateq Gadgets Inc. is legally headquartered in Carson City, Nevada, USA, with principal marketing operations at 100 King Street West, Toronto, ON M5X 1A9, Canada. These Terms are governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein. If you do not agree to all of these Terms, do not use our Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">2. Eligibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                You must be at least 18 years old (or the age of majority in your province or territory of residence) and legally capable of entering into binding contracts to use our Services. For the Teen Driver Monitoring product, the purchasing account holder must be 18 or older; monitored teen drivers must be at least 15 years old and hold a valid learner's permit or driver's licence. Accounts are limited to one per individual unless authorized for business fleet use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">3. Products & Services</h2>
              <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">3.1 Product Description</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Astrateq products are AI-powered automotive safety and diagnostic tools. They include hardware devices, companion mobile applications, cloud-based analytics dashboards, and AI services. Products are designed to <strong>assist</strong> drivers and vehicle owners — they do not replace professional automotive services, safe driving practices, or manufacturer-recommended maintenance.
              </p>
              <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">3.2 AI-Powered Features</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our products utilize artificial intelligence and machine learning to provide predictive maintenance alerts, driving behaviour coaching, battery health analysis, and safety scoring. AI predictions are probabilistic in nature and achieve approximately 96.2% accuracy as of Q1 2026. Users should always verify AI recommendations with certified automotive professionals before taking action on critical safety or maintenance decisions.
              </p>
              <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">3.3 Software Updates</h3>
              <p className="text-muted-foreground leading-relaxed">
                Products receive automatic firmware and software updates. By using our products, you consent to automatic updates. Critical safety updates cannot be declined. Non-critical updates can be deferred for up to 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">4. Orders, Pricing & Payment</h2>
              <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">4.1 Pricing</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All prices are displayed in Canadian dollars (CAD) for Canadian customers and US dollars (USD) for international customers. Prices are subject to change without notice. Prices do not include applicable HST, GST, PST, or other provincial/territorial sales taxes, customs duties, or shipping charges, which are calculated at checkout in accordance with applicable Canadian tax law.
              </p>
              <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">4.2 Payment Methods</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We accept Visa, Mastercard, American Express, Discover, PayPal, Apple Pay, Google Pay, Affirm (buy now, pay later), and cryptocurrency (ETH, SOL, USDC). Cryptocurrency payments are processed at the exchange rate at the time of transaction confirmation and are non-refundable in crypto — refunds are issued in CAD or USD.
              </p>
              <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">4.3 Consumer Protection</h3>
              <p className="text-muted-foreground leading-relaxed">
                For Ontario consumers, these Terms are subject to the Ontario Consumer Protection Act, 2002 (CPA). Where any provision of these Terms conflicts with the CPA, the CPA shall prevail. You have cancellation rights as set out in the CPA for internet agreements, including a 7-day cooling-off period from the date you receive a copy of the agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">5. Shipping & Delivery</h2>
              <p className="text-muted-foreground leading-relaxed">
                Free standard shipping is available on orders over $150 within Canada and the contiguous United States. Standard delivery within Canada takes 5-7 business days. International shipping is available to 45+ countries. Risk of loss and title passes to you upon delivery. Under the Ontario CPA, if goods are not delivered within 30 days of the estimated delivery date, you may cancel the agreement. See our full <Link to="/legal/shipping" className="text-electric-cyan hover:underline">Shipping Policy</Link> for details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">6. Returns & Warranty</h2>
              <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">6.1 60-Day Money-Back Guarantee</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All products come with a 60-day money-back guarantee from the date of delivery, which exceeds the minimum requirements of the Ontario CPA. Products must be returned in original packaging with all accessories. Return shipping labels are provided at no cost for Canadian customers.
              </p>
              <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">6.2 Lifetime Warranty</h3>
              <p className="text-muted-foreground leading-relaxed">
                All Astrateq hardware products include a lifetime limited warranty against manufacturing defects and hardware failures under normal use. This warranty is in addition to, and does not limit, any statutory warranties or rights you may have under the Ontario Sale of Goods Act or other applicable provincial legislation. See our full <Link to="/support/warranty" className="text-electric-cyan hover:underline">Warranty Policy</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">7. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, software, algorithms, designs, trademarks, logos, and other intellectual property on our website and within our products are owned by Astrateq Gadgets Inc. or its licensors and are protected by Canadian and international copyright, trademark, and patent laws, including the Canadian Copyright Act and the Canadian Trademarks Act. You are granted a limited, non-exclusive, non-transferable licence to use our products for their intended purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">8. User Accounts & Responsibilities</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>You must provide accurate, current, and complete information during registration.</li>
                <li>You are responsible for all activity under your account.</li>
                <li>You must not use our Services for any unlawful purpose or in violation of these Terms.</li>
                <li>Fleet Guard Pro administrators are responsible for ensuring compliance with applicable Canadian privacy and employment law regarding driver monitoring.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">9. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, INCLUDING THE ONTARIO CPA, ASTRATEQ GADGETS INC. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF OUR PRODUCTS OR SERVICES.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nothing in these Terms excludes or limits any statutory rights that cannot be excluded or limited under Canadian consumer protection legislation, including the Ontario Consumer Protection Act, 2002.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">10. Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Informal Resolution:</strong> Before filing any formal dispute, you agree to contact us at legal@astrateq.com and attempt to resolve the matter informally for at least 30 days.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Mediation & Arbitration:</strong> Disputes not resolved informally may be submitted to mediation and, if necessary, binding arbitration administered under the rules of the ADR Institute of Canada. Arbitration will be conducted in Toronto, Ontario, or virtually at your election.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Court Proceedings:</strong> Nothing in this section prevents you from bringing a claim in the Ontario Superior Court of Justice or small claims court where permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">11. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict of law principles. You irrevocably submit to the exclusive jurisdiction of the courts of the Province of Ontario for any disputes arising under these Terms. Where you are a consumer resident in another Canadian province, mandatory consumer protection laws of your province of residence apply to the extent they provide greater protection.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">12. Official Languages</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are available in English and French. In the event of any inconsistency between the English and French versions, the English version shall prevail unless otherwise required by applicable provincial law (e.g., the Quebec Charter of the French Language for Quebec consumers).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">13. Contact Information</h2>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p><strong>Legal Department:</strong> legal@astrateq.com</p>
                <p><strong>General Support:</strong> support@astrateq.com</p>
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
