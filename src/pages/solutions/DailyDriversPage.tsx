import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Car, Shield, AlertTriangle, ArrowRight } from "lucide-react";

const products = [
  { name: "Driver Coach AI", description: "Real-time AI coaching that improves driving habits and predicts maintenance needs.", href: "/products/driver-coach" },
  { name: "Emergency Response System", description: "Automatic crash detection and instant emergency service notification.", href: "/products/emergency-ai" },
  { name: "Complete Safety Bundles", description: "All-in-one packages combining our best safety products at a discount.", href: "/products" },
];

export default function DailyDriversPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-48 pb-20">
        <div className="container-wide">
          <Link to="/solutions" className="inline-flex items-center gap-2 text-muted-foreground hover:text-electric-cyan mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Solutions
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-electric-cyan/10 flex items-center justify-center">
                <Car className="w-8 h-8 text-electric-cyan" />
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">For Daily Drivers</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                AI-powered safety for your everyday commute. Get predictive maintenance alerts, real-time coaching, and emergency response systems.
              </p>
            </div>

            <div className="grid gap-6">
              {products.map((product) => (
                <div key={product.name} className="bg-card rounded-2xl p-8 border border-border hover:border-electric-cyan/50 transition-all duration-300 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground">{product.description}</p>
                  </div>
                  <Button variant="hero" asChild className="flex-shrink-0">
                    <Link to={product.href}>
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
