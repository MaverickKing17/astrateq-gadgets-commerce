import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { storeConfig } from "@/config/store";

export default function ReturnsPage() {
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
            <RotateCcw className="w-10 h-10 text-primary mb-4" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Returns & Refunds
            </h1>
            <p className="text-lg text-muted-foreground">
              {storeConfig.policies.returnsSummary}
            </p>
          </div>

          <div className="bg-card rounded-xl border border-border p-8 mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-6">
              How to Request a Return
            </h2>
            <div className="space-y-5 text-sm">
              {[
                {
                  step: "01",
                  title: "Contact Support",
                  desc: `Email ${storeConfig.support.email} or call ${storeConfig.support.phone} with your order details and reason for return.`,
                },
                {
                  step: "02",
                  title: "Return Authorization",
                  desc: "Our team reviews eligibility and provides return instructions and authorization.",
                },
                {
                  step: "03",
                  title: "Ship Hardware Back",
                  desc: "Pack the device with all original accessories and ship it using the confirmed carrier instructions.",
                },
                {
                  step: "04",
                  title: "Inspection & Refund",
                  desc: "Once received and inspected, refunds are issued according to the original payment method and confirmed refund policy.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <span className="font-mono font-bold text-primary pt-0.5 tabular-nums">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-card rounded-xl border border-border text-center">
            <h2 className="font-heading font-bold text-xl mb-2">
              Need Return Assistance?
            </h2>
            <p className="text-muted-foreground text-sm mb-5">
              Review our full Refund Policy or contact our support team directly.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="hero" asChild className="min-h-[44px]">
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button variant="outline" asChild className="min-h-[44px]">
                <Link to="/legal/refund">Full Refund Policy</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
