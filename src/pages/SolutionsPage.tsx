import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Car, Battery, Users, Building2, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Car,
    title: "For Daily Drivers",
    description: "AI-powered safety for your everyday commute. Get predictive maintenance alerts and emergency response systems.",
    href: "/solutions/daily-drivers",
    features: ["Driver Coach AI", "Emergency Response System", "Complete Safety Bundles"],
  },
  {
    icon: Battery,
    title: "For EV Owners",
    description: "Maximize your electric vehicle's potential with intelligent battery management and charging optimization.",
    href: "/solutions/ev-owners",
    features: ["EV Battery Intelligence", "Charging Protection Suite", "Range Optimization AI"],
  },
  {
    icon: Users,
    title: "For Families",
    description: "Protect what matters most with family-focused safety features and teen driver monitoring.",
    href: "/solutions/families",
    features: ["Family Safety Systems", "Teen Driver Monitoring", "Multi-Vehicle Coverage"],
  },
  {
    icon: Building2,
    title: "For Businesses",
    description: "Enterprise-grade fleet intelligence with predictive maintenance and volume pricing.",
    href: "/solutions/businesses",
    features: ["Fleet Intelligence Platform", "Predictive Maintenance", "Volume Pricing"],
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-48 pb-20">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
              Find Your Perfect Solution
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're a daily commuter, EV enthusiast, or fleet manager, we have the right AI-powered safety solution for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="bg-card rounded-2xl p-8 border border-border hover:border-electric-cyan/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-electric-cyan/10 flex items-center justify-center mb-6 group-hover:bg-electric-cyan/20 transition-colors">
                  <solution.icon className="w-7 h-7 text-electric-cyan" />
                </div>
                <h2 className="text-2xl font-heading font-semibold mb-3">{solution.title}</h2>
                <p className="text-muted-foreground mb-6">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="hero" asChild className="group/btn">
                  <Link to={solution.href}>
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
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
