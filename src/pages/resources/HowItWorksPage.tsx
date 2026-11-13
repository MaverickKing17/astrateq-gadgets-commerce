import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Scan, Brain, LineChart, ShieldCheck, ArrowRight } from "lucide-react";

const steps = [
  { icon: Scan, title: "1. SCAN", description: "Our device connects to your vehicle's OBD-II port and begins collecting over 500 data points per second, monitoring everything from engine performance to electrical systems." },
  { icon: Brain, title: "2. LEARN", description: "Advanced AI algorithms learn your vehicle's unique patterns and baseline behavior, distinguishing between normal variations and early warning signs." },
  { icon: LineChart, title: "3. PREDICT", description: "Machine learning models analyze data trends to forecast potential issues 3-6 weeks in advance with 94% accuracy, giving you time to plan." },
  { icon: ShieldCheck, title: "4. PROTECT", description: "Receive actionable alerts via app, SMS, or email. Our system guides you through recommended actions and connects you with certified service providers." },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-48 pb-20">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">How Astrateq Works</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to AI-powered vehicle safety and predictive maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {steps.map((step) => (
              <div key={step.title} className="bg-card rounded-2xl p-8 border border-border">
                <div className="w-14 h-14 rounded-xl bg-electric-cyan/10 flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-electric-cyan" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/products">
                Explore Products <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
