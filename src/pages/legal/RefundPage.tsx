import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { RotateCcw } from "lucide-react";
import { storeConfig } from "@/config/store";

export default function RefundPage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <RotateCcw className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold">
              Refund Policy
            </h1>
          </div>
          <p className="text-muted-foreground mb-8 text-sm">
            Last updated: March 2026
          </p>

          <div className="space-y-8 text-muted-foreground text-sm sm:text-base leading-relaxed">
            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                1. Return & Refund Overview
              </h2>
              <p>
                {storeConfig.policies.returnsSummary} Applicable return windows, restocking conditions, and statutory rights under Canadian consumer protection legislation are provided in writing with your order confirmation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                2. How to Request a Return
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Contact {storeConfig.support.email} or call {storeConfig.support.phone} with your order reference.</li>
                <li>Receive written return authorization and shipping instructions from our support team.</li>
                <li>Return the hardware in its original packaging with all included accessories.</li>
                <li>Approved refunds are returned to the original payment method following inspection.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                3. Defective Hardware
              </h2>
              <p>
                Hardware experiencing manufacturing defects is handled under the written warranty terms provided with your order and applicable statutory consumer remedies. Visit our{" "}
                <Link to="/support/warranty" className="text-primary hover:underline">
                  Warranty Information
                </Link>{" "}
                page or{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  contact support
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                4. Support Contact
              </h2>
              <div className="space-y-1.5">
                <p><strong className="text-foreground">Email:</strong> {storeConfig.support.email}</p>
                <p><strong className="text-foreground">Phone:</strong> {storeConfig.support.phone}</p>
                <p><strong className="text-foreground">Hours:</strong> {storeConfig.support.hours}</p>
                <p><strong className="text-foreground">Office:</strong> {storeConfig.address.office}</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
