import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, CheckCircle } from "lucide-react";
import { storeConfig } from "@/config/store";

export default function WarrantyPage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide max-w-4xl">
          <Link
            to="/support/help-center"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Help Center
          </Link>

          <div className="mb-12">
            <Shield className="w-10 h-10 text-primary mb-4" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Warranty Information
            </h1>
            <p className="text-lg text-muted-foreground">
              {storeConfig.policies.warrantySummary}
            </p>
          </div>

          <div className="bg-card rounded-xl border border-border p-8 mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-5">
              General Coverage Scope
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              {[
                "Manufacturing defects under normal vehicle operation",
                "Hardware component failures within the confirmed warranty period",
                "Connector and enclosure workmanship issues",
                "Replacement or repair guidance through support verification",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
              Exact warranty duration, exclusions, and statutory rights under applicable provincial or state consumer protection laws are supplied in writing with your order confirmation.
            </p>
          </div>

          <div className="p-8 bg-card rounded-xl border border-border text-center">
            <h2 className="font-heading font-bold text-xl mb-2">
              Request Written Warranty Terms or File a Claim
            </h2>
            <p className="text-muted-foreground text-sm mb-5">
              Contact our support team with your product model and order reference.
            </p>
            <Button variant="hero" asChild className="min-h-[44px]">
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
