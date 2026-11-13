import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, CheckCircle, Clock, RefreshCw } from "lucide-react";

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-48 pb-20">
        <div className="container-wide">
          <Link to="/support/help-center" className="inline-flex items-center gap-2 text-muted-foreground hover:text-electric-cyan mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Help Center
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Shield className="w-16 h-16 text-electric-cyan mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Warranty Information</h1>
              <p className="text-xl text-muted-foreground">
                Every Astrateq product is backed by our comprehensive warranty coverage.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-card rounded-xl border border-border text-center">
                <Clock className="w-10 h-10 text-electric-cyan mx-auto mb-3" />
                <h3 className="text-3xl font-bold mb-2">3 Years</h3>
                <p className="text-muted-foreground">Standard Warranty</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border text-center">
                <RefreshCw className="w-10 h-10 text-electric-cyan mx-auto mb-3" />
                <h3 className="text-3xl font-bold mb-2">Free</h3>
                <p className="text-muted-foreground">Replacement Parts</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border text-center">
                <Shield className="w-10 h-10 text-electric-cyan mx-auto mb-3" />
                <h3 className="text-3xl font-bold mb-2">Lifetime</h3>
                <p className="text-muted-foreground">Software Updates</p>
              </div>
            </div>
            
            <div className="bg-card rounded-xl border border-border p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold mb-6">What's Covered</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Manufacturing defects",
                  "Hardware malfunctions",
                  "Software issues",
                  "Sensor failures",
                  "Connectivity problems",
                  "Battery degradation (beyond normal wear)",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card rounded-xl border border-border p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold mb-6">Extended Warranty</h2>
              <p className="text-muted-foreground mb-6">
                Extend your coverage to 5 years with our Premium Protection Plan. Includes accidental damage coverage and priority support.
              </p>
              <Button variant="hero">Learn About Extended Warranty</Button>
            </div>
            
            <div className="text-center p-8 bg-electric-cyan/10 rounded-xl border border-electric-cyan/30">
              <h3 className="font-heading font-bold text-xl mb-2">Need to File a Claim?</h3>
              <p className="text-muted-foreground mb-4">Contact our warranty support team for assistance.</p>
              <Button variant="hero" asChild>
                <Link to="/contact">Start Warranty Claim</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
