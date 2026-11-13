import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { storeConfig } from "@/config/store";

const milestones = [
  {
    phase: "01",
    title: "Practical In-Cabin Hardware",
    description:
      "We focused on compact, unobtrusive hardware—starting with windshield-mounted driving monitors designed to integrate cleanly into everyday passenger cabins.",
  },
  {
    phase: "02",
    title: "EV & Diagnostic Visibility",
    description:
      "As electric vehicle adoption grew, we expanded our catalogue to cover dedicated battery health and charging telemetry hardware tailored for EV owners.",
  },
  {
    phase: "03",
    title: "Commercial Fleet Readiness",
    description:
      "We introduced rugged OBD-II telematics options built for service vehicles and small-to-midsize fleets seeking centralized maintenance planning.",
  },
  {
    phase: "04",
    title: "Transparent Direct Retail",
    description:
      "Today we operate with a commitment to factual specifications, direct compatibility verification, and honest storefront readiness before online payment activation.",
  },
];

export default function OurStoryPage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide max-w-4xl">
          <Link
            to="/company/about-us"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to About Us
          </Link>

          <div className="mb-14">
            <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              Company Focus
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Our Story
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              How {storeConfig.brandName} shapes a focused catalogue of automotive monitoring and diagnostic hardware.
            </p>
          </div>

          <div className="space-y-6 mb-16">
            {milestones.map((item) => (
              <div
                key={item.phase}
                className="bg-card rounded-xl border border-border p-6 sm:p-8 flex gap-5 items-start"
              >
                <span className="text-sm font-mono font-bold text-primary shrink-0 pt-1 tabular-nums">
                  {item.phase}
                </span>
                <div>
                  <h2 className="text-xl font-heading font-semibold mb-2">
                    {item.title}
                  </h2>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <h2 className="text-2xl font-heading font-bold mb-3">
              Explore the Current Collection
            </h2>
            <p className="text-muted-foreground mb-6 text-sm sm:text-base">
              View our driving, EV, and commercial fleet hardware options.
            </p>
            <Button variant="hero" asChild className="min-h-[44px]">
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
