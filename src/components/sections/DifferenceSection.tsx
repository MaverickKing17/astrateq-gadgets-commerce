import { Brain, BarChart3, Shield, Check, X } from "lucide-react";
import { Link } from "react-router-dom";

const comparisonData = [
  {
    without: "Reactive dashboard warning lights only",
    with: "Continuous visibility into vehicle and driving telemetry",
  },
  {
    without: "Unplanned maintenance surprises",
    with: "Structured diagnostic context for scheduled servicing",
  },
  {
    without: "Fragmented trip and fleet records",
    with: "Unified personal, EV, and commercial fleet hardware",
  },
  {
    without: "Guesswork on vehicle compatibility",
    with: "Direct pre-order fitment guidance from our team",
  },
];

const features = [
  {
    icon: Brain,
    title: "In-Cabin Driver Awareness",
    description:
      "Compact hardware designed to support attentive everyday driving without cluttering your windshield or factory controls.",
  },
  {
    icon: BarChart3,
    title: "Diagnostic & EV Clarity",
    description:
      "Focused telemetry for passenger vehicles, EV battery health monitoring, and commercial fleet maintenance planning.",
  },
  {
    icon: Shield,
    title: "Built for Vehicle Environments",
    description:
      "Anodized aluminum and matte polymer enclosures engineered for reliable cabin and OBD-II operation.",
  },
];

export function DifferenceSection() {
  return (
    <section className="py-20 lg:py-24 bg-grey-50 text-foreground">
      <div className="container-wide">
        <div className="text-center mb-14">
          <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            Why Astrateq Hardware
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            The Astrateq Difference
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Moving from reactive dashboard guesswork to practical hardware visibility for drivers, EV owners, and fleets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 mb-16 max-w-4xl mx-auto rounded-xl overflow-hidden border border-border shadow-md">
          <div className="bg-slate-grey p-8">
            <h3 className="text-sm font-heading font-semibold text-pure-white/75 uppercase tracking-wider mb-6">
              Standard Dashboard Alerts
            </h3>
            <ul className="space-y-4">
              {comparisonData.map((item) => (
                <li
                  key={item.without}
                  className="flex items-start gap-3 text-sm text-pure-white/80"
                >
                  <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <span>{item.without}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-midnight-charcoal p-8">
            <h3 className="text-sm font-heading font-semibold text-electric-cyan uppercase tracking-wider mb-6">
              With Astrateq Hardware
            </h3>
            <ul className="space-y-4">
              {comparisonData.map((item) => (
                <li
                  key={item.with}
                  className="flex items-start gap-3 text-sm text-pure-white"
                >
                  <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span>{item.with}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-xl border border-border p-7 flex flex-col"
            >
              <div className="w-12 h-12 mb-5 rounded-lg bg-midnight-charcoal flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-electric-cyan" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {feature.description}
              </p>
              <Link
                to="/resources/how-it-works"
                className="inline-block mt-5 text-sm font-semibold text-midnight-charcoal hover:text-primary transition-colors"
              >
                Learn How It Works →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
