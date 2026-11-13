import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Truck } from "lucide-react";
import { storeConfig } from "@/config/store";

export default function ShippingPage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <Truck className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold">
              Shipping Policy
            </h1>
          </div>
          <p className="text-muted-foreground mb-8 text-sm">
            Last updated: March 2026
          </p>

          <div className="space-y-8 text-muted-foreground text-sm sm:text-base leading-relaxed">
            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                1. Shipping Estimates & Disclosure
              </h2>
              <p>
                {storeConfig.policies.shippingSummary} Exact carrier options, tracking availability, and any applicable taxes or customs duties are shared in writing before payment is collected.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                2. Delivery Regions & Fleet Shipments
              </h2>
              <p>
                Standard parcel delivery is coordinated across Canada and the United States based on destination and stock availability. For commercial FleetGuard AI Pro orders, contact{" "}
                <a href={`mailto:${storeConfig.support.enterpriseEmail}`} className="text-primary hover:underline">
                  {storeConfig.support.enterpriseEmail}
                </a>{" "}
                to confirm multi-unit fulfillment schedules.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                3. Order Delays & Cancellations
              </h2>
              <p>
                Where applicable consumer protection legislation governs delivery deadlines (such as the Ontario Consumer Protection Act, 2002), customers retain all statutory rights regarding delayed delivery and cancellation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                4. Shipping Support
              </h2>
              <div className="space-y-1.5">
                <p><strong className="text-foreground">Email:</strong> {storeConfig.support.email}</p>
                <p><strong className="text-foreground">Phone:</strong> {storeConfig.support.phone}</p>
                <p><strong className="text-foreground">Hours:</strong> {storeConfig.support.hours}</p>
                <p><strong className="text-foreground">Office:</strong> {storeConfig.address.office}</p>
              </div>
              <p className="mt-4">
                <Link to="/contact" className="text-primary hover:underline">
                  Contact our team for a shipping estimate →
                </Link>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
