import { Scan, Gauge, Wrench, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Connect",
    icon: Scan,
    description:
      "Install your windshield-mounted unit or connect to your vehicle's OBD-II port without permanent dashboard modifications.",
  },
  {
    number: "02",
    title: "Monitor",
    icon: Gauge,
    description:
      "Hardware captures ongoing trip context, EV charging behavior, or fleet vehicle telemetry during normal driving.",
  },
  {
    number: "03",
    title: "Review",
    icon: Wrench,
    description:
      "Use diagnostic visibility and driving feedback to plan routine maintenance and improve day-to-day road awareness.",
  },
  {
    number: "04",
    title: "Support",
    icon: ShieldCheck,
    description:
      "Reach our Toronto-based support team for compatibility verification, installation guidance, and hardware coverage.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-24 bg-pure-white text-foreground">
      <div className="container-wide">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Setup & Operation
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            How Astrateq Hardware Fits Into Your Drive
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A straightforward four-step workflow from vehicle fitment check to everyday monitoring.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-xl border border-border bg-grey-50 p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-lg bg-midnight-charcoal flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-electric-cyan" />
                </div>
                <span className="text-sm font-mono font-semibold text-muted-foreground tabular-nums">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/resources/how-it-works"
            className="inline-flex items-center gap-2 text-sm font-semibold text-midnight-charcoal hover:text-primary transition-colors"
          >
            Read the Hardware Overview
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
