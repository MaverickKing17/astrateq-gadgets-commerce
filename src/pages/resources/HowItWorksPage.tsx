import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Scan, Gauge, Wrench, ShieldCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Scan,
    title: "01. Connect",
    description:
      "Mount the in-cabin unit or connect the OBD-II module to your vehicle's diagnostic port without permanent modifications.",
  },
  {
    icon: Gauge,
    title: "02. Monitor",
    description:
      "Track driving behavior, electric vehicle charging patterns, or commercial fleet telemetry during everyday trips.",
  },
  {
    icon: Wrench,
    title: "03. Review",
    description:
      "Use clear trip and diagnostic insights to plan routine servicing and stay informed about vehicle condition.",
  },
  {
    icon: ShieldCheck,
    title: "04. Support",
    description:
      "Work directly with our support team for vehicle compatibility confirmation, setup assistance, and warranty questions.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide max-w-4xl">
          <div className="text-center mb-14">
            <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              Hardware Workflow
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              How Astrateq Hardware Works
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four straightforward steps from vehicle compatibility check to everyday operation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {steps.map((step) => (
              <div
                key={step.title}
                className="bg-card rounded-xl p-7 border border-border"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-heading font-semibold mb-2">
                  {step.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center flex flex-wrap justify-center gap-3">
            <Button variant="hero" size="lg" asChild className="min-h-[44px]">
              <Link to="/products">
                Explore Products <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="min-h-[44px]">
              <Link to="/contact">Ask About Fitment</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
