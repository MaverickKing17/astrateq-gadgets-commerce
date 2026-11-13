import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, ArrowRight } from "lucide-react";

const products = [
  { name: "Fleet Intelligence Platform", description: "Enterprise-grade fleet monitoring with real-time diagnostics and safety scoring.", href: "/products/predictive-fleet" },
  { name: "Predictive Maintenance", description: "AI-powered maintenance forecasting to reduce downtime and repair costs.", href: "/products/predictive-fleet" },
  { name: "Request Volume Pricing", description: "Custom pricing for fleets of any size. Contact our enterprise team.", href: "/contact" },
];

export default function BusinessesPage() {
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
                <Building2 className="w-8 h-8 text-electric-cyan" />
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">For Businesses</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Enterprise-grade fleet intelligence with predictive maintenance and volume pricing.
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
