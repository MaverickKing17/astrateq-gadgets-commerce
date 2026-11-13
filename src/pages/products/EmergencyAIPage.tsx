import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, Phone, MapPin } from "lucide-react";

export default function EmergencyAIPage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide max-w-4xl">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>

          <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            Concept & Inquiry Preview
          </p>
          <h1 className="text-3xl sm:text-5xl font-heading font-bold mb-5">
            Emergency Response AI
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Automated impact detection and emergency contact notification hardware currently under evaluation. Pricing, availability, and regional emergency dispatch support are not yet finalized.
          </p>

          <div className="rounded-xl border border-border bg-card p-6 mb-10">
            <p className="text-sm text-muted-foreground leading-relaxed">
              This model is not currently listed in the active purchase catalogue. If you are interested in emergency response capabilities for personal or fleet vehicles, contact our team or browse our currently listed hardware.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              <Button variant="hero" className="min-h-[44px]" asChild>
                <Link to="/contact">Request Product Updates</Link>
              </Button>
              <Button variant="outline" className="min-h-[44px]" asChild>
                <Link to="/products">Browse Active Catalogue</Link>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-card rounded-xl border border-border">
              <AlertTriangle className="w-7 h-7 text-primary mb-4" />
              <h2 className="font-heading font-semibold text-lg mb-2">Impact Detection</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Designed around inertial sensor monitoring to detect severe collision events.
              </p>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border">
              <Phone className="w-7 h-7 text-primary mb-4" />
              <h2 className="font-heading font-semibold text-lg mb-2">Contact Alerts</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Intended to notify designated emergency contacts when assistance is needed.
              </p>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border">
              <MapPin className="w-7 h-7 text-primary mb-4" />
              <h2 className="font-heading font-semibold text-lg mb-2">Location Relay</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Shares vehicle GPS coordinates alongside alert notifications where supported.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
