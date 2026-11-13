import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Car, Battery, Users, Building2, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Car,
    title: "For Daily Drivers",
    description:
      "Compact cabin hardware focused on driving feedback and trip visibility for everyday commuting.",
    href: "/solutions/daily-drivers",
    features: [
      "ASTRA-AI Driver Coach System",
      "Windshield-mounted hardware",
      "Vehicle compatibility guidance",
    ],
  },
  {
    icon: Battery,
    title: "For EV Owners",
    description:
      "Dedicated battery health and charging telemetry hardware tailored for electric vehicles.",
    href: "/solutions/ev-owners",
    features: [
      "EV Battery Intelligence Suite",
      "Charging behavior visibility",
      "EV model fitment check",
    ],
  },
  {
    icon: Users,
    title: "For Families",
    description:
      "Practical driving awareness tools for shared household vehicles and newer drivers.",
    href: "/solutions/families",
    features: [
      "Driver Coach hardware",
      "Multi-driver cabin suitability",
      "Pre-order support",
    ],
  },
  {
    icon: Building2,
    title: "For Businesses",
    description:
      "OBD-II fleet telematics and maintenance planning hardware for commercial vehicle operators.",
    href: "/solutions/businesses",
    features: [
      "FleetGuard AI Pro",
      "Maintenance planning visibility",
      "Fleet inquiry support",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              Solutions By Driver Type
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-5">
              Find Your Vehicle Solution
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compare how our automotive hardware maps to personal commuting, electric vehicles, family cars, and commercial fleets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-colors flex flex-col"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-heading font-semibold mb-3">
                  {solution.title}
                </h2>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {solution.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-foreground/85 flex items-center gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="hero" asChild className="self-start min-h-[44px]">
                  <Link to={solution.href}>
                    Explore Option
                    <ArrowRight className="w-4 h-4 ml-2" />
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
