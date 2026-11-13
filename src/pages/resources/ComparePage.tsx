import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, X } from "lucide-react";

const features = [
  { name: "Real-time AI Coaching", driverCoach: true, fleetGuard: true, evSuite: false },
  { name: "Predictive Maintenance", driverCoach: true, fleetGuard: true, evSuite: true },
  { name: "Emergency Response", driverCoach: true, fleetGuard: true, evSuite: false },
  { name: "Battery Health Monitoring", driverCoach: false, fleetGuard: false, evSuite: true },
  { name: "Charging Optimization", driverCoach: false, fleetGuard: false, evSuite: true },
  { name: "Fleet Management", driverCoach: false, fleetGuard: true, evSuite: false },
  { name: "Driver Safety Scoring", driverCoach: true, fleetGuard: true, evSuite: false },
  { name: "Multi-Vehicle Support", driverCoach: false, fleetGuard: true, evSuite: true },
];

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-48 pb-20">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">Compare Products</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find the perfect Astrateq product for your needs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-heading font-semibold">Feature</th>
                  <th className="p-4 font-heading font-semibold text-center">Driver Coach AI</th>
                  <th className="p-4 font-heading font-semibold text-center">Fleet Guard Pro</th>
                  <th className="p-4 font-heading font-semibold text-center">EV Suite</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature) => (
                  <tr key={feature.name} className="border-b border-border">
                    <td className="p-4 text-muted-foreground">{feature.name}</td>
                    <td className="p-4 text-center">{feature.driverCoach ? <Check className="w-5 h-5 text-success mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />}</td>
                    <td className="p-4 text-center">{feature.fleetGuard ? <Check className="w-5 h-5 text-success mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />}</td>
                    <td className="p-4 text-center">{feature.evSuite ? <Check className="w-5 h-5 text-success mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="p-4"></td>
                  <td className="p-4 text-center">
                    <Button variant="hero" size="sm" asChild><Link to="/products/driver-coach">View</Link></Button>
                  </td>
                  <td className="p-4 text-center">
                    <Button variant="hero" size="sm" asChild><Link to="/products/predictive-fleet">View</Link></Button>
                  </td>
                  <td className="p-4 text-center">
                    <Button variant="hero" size="sm" asChild><Link to="/products/ev-suite">View</Link></Button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
