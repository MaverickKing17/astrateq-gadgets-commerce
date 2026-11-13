import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Battery, ArrowRight } from "lucide-react";

const items = [
  {
    name: "EV Battery Intelligence Suite",
    description:
      "Dedicated battery health and charging telemetry hardware tailored for electric vehicle owners.",
    href: "/products/ev-suite",
  },
  {
    name: "EV Model Fitment Check",
    description:
      "Confirm electric vehicle make, model year, and onboard interface compatibility prior to purchase.",
    href: "/contact",
  },
];

export default function EVOwnersPage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide max-w-4xl">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Solutions
          </Link>

          <div className="mb-12">
            <div className="w-12 h-12 mb-5 rounded-lg bg-primary/10 flex items-center justify-center">
              <Battery className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              For EV Owners
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Clear visibility into electric vehicle charging behavior and battery health tracking.
            </p>
          </div>

          <div className="grid gap-5">
            {items.map((item) => (
              <div
                key={item.name}
                className="bg-card rounded-xl p-6 sm:p-8 border border-border flex flex-col md:flex-row md:items-center md:justify-between gap-5"
              >
                <div>
                  <h2 className="text-xl font-heading font-semibold mb-2">
                    {item.name}
                  </h2>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <Button variant="hero" asChild className="shrink-0 min-h-[44px]">
                  <Link to={item.href}>
                    View Option <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
