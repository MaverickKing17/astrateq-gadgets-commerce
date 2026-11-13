import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Wrench, ShieldCheck } from "lucide-react";
import { storeConfig } from "@/config/store";

const steps = [
  {
    number: "01",
    title: "Inspect Package Contents",
    description:
      "Verify the hardware unit, mounting accessories or connector cable, and printed setup documentation included with your shipment.",
  },
  {
    number: "02",
    title: "Confirm Port & Mounting Position",
    description:
      "Locate your vehicle's OBD-II diagnostic port or confirm an unobstructed windshield mounting area near the rearview mirror.",
  },
  {
    number: "03",
    title: "Secure & Connect",
    description:
      "Attach the mount or seat the diagnostic connector firmly while the vehicle ignition is turned off.",
  },
  {
    number: "04",
    title: "Verify Operation",
    description:
      "Power on the vehicle and confirm the unit indicator light and companion setup steps match your included guide.",
  },
];

export default function InstallationPage() {
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
            <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              Setup Overview
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Installation Guide
            </h1>
            <p className="text-lg text-muted-foreground">
              General installation checklist for Astrateq driving, EV, and OBD-II hardware.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <div className="p-6 bg-card rounded-xl border border-border">
              <Wrench className="w-6 h-6 text-primary mb-3" />
              <h2 className="font-semibold mb-1">Non-Invasive Fitment</h2>
              <p className="text-sm text-muted-foreground">
                Designed to install without cutting or splicing factory vehicle wiring.
              </p>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border">
              <ShieldCheck className="w-6 h-6 text-primary mb-3" />
              <h2 className="font-semibold mb-1">Pre-Install Verification</h2>
              <p className="text-sm text-muted-foreground">
                Confirm specific vehicle port layout with our support team anytime before mounting.
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-12">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-5 p-6 bg-card rounded-xl border border-border items-start"
              >
                <span className="text-sm font-mono font-bold text-primary pt-1 tabular-nums">
                  {step.number}
                </span>
                <div>
                  <h2 className="font-heading font-semibold text-lg mb-1.5">
                    {step.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-card rounded-xl border border-border text-center">
            <h2 className="font-heading font-bold text-xl mb-2">
              Need Installation Assistance?
            </h2>
            <p className="text-muted-foreground text-sm mb-5">
              Our support team is available {storeConfig.support.hours}.
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
