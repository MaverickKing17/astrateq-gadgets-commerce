import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { storeConfig } from "@/config/store";

export default function TermsPage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold">
              Terms of Service
            </h1>
          </div>
          <p className="text-muted-foreground mb-8 text-sm">
            Last updated: March 2026
          </p>

          <div className="space-y-8 text-muted-foreground text-sm sm:text-base leading-relaxed">
            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing the {storeConfig.brandName} storefront, you agree to these Terms of Service. {storeConfig.legalName} is legally headquartered in {storeConfig.address.headquarters} with marketing operations at {storeConfig.address.office}.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                2. Hardware Purpose & Driver Responsibility
              </h2>
              <p>
                Automotive accessories and monitoring hardware are intended to assist drivers and fleet operators with situational and diagnostic visibility. They do not replace safe driving practices, regular vehicle inspection, or manufacturer-recommended servicing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                3. Pricing, Availability & Orders
              </h2>
              <p>
                Displayed prices are listed in USD unless otherwise noted. Online payment processing is not currently active on this storefront; adding items to your cart prepares an inquiry summary. Final pricing, applicable taxes, shipping charges, and vehicle compatibility are confirmed in writing prior to order acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                4. Shipping, Returns & Warranty
              </h2>
              <p>
                Shipping, return, and written warranty terms are confirmed before order acceptance and remain subject to applicable consumer protection legislation. See our{" "}
                <Link to="/legal/shipping" className="text-primary hover:underline">
                  Shipping Policy
                </Link>
                ,{" "}
                <Link to="/legal/refund" className="text-primary hover:underline">
                  Refund Policy
                </Link>
                , and{" "}
                <Link to="/support/warranty" className="text-primary hover:underline">
                  Warranty Information
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                5. Contact Information
              </h2>
              <div className="space-y-1.5">
                <p><strong className="text-foreground">Legal Inquiries:</strong> {storeConfig.support.legalEmail}</p>
                <p><strong className="text-foreground">General Support:</strong> {storeConfig.support.email}</p>
                <p><strong className="text-foreground">Phone:</strong> {storeConfig.support.phone}</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
