import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, AlertTriangle, Phone, MapPin } from "lucide-react";
import { trackAddToCart } from "@/lib/analytics";

export default function EmergencyAIPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-48 pb-20">
        <div className="container-wide">
          <Link to="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-electric-cyan mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
          
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-destructive/20 text-destructive text-sm font-semibold rounded-full mb-4">
              Life-Saving Technology
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Emergency AI</h1>
            
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                ))}
              </div>
              <span className="text-muted-foreground">4.9 (892 reviews)</span>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Automatic crash detection and emergency response system. When every second counts, Emergency AI contacts first responders with your exact location.
            </p>
            
            <div className="text-4xl font-heading font-bold text-electric-cyan mb-8">$199</div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="lg" onClick={() => trackAddToCart('Emergency AI', '199')}>
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                View Demo
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="p-6 bg-card rounded-xl border border-border">
                <AlertTriangle className="w-10 h-10 text-electric-cyan mb-4" />
                <h3 className="font-heading font-semibold text-lg mb-2">Crash Detection</h3>
                <p className="text-muted-foreground">Advanced sensors detect impacts and automatically trigger emergency protocols.</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <Phone className="w-10 h-10 text-electric-cyan mb-4" />
                <h3 className="font-heading font-semibold text-lg mb-2">Auto Emergency Call</h3>
                <p className="text-muted-foreground">Automatically contacts emergency services with critical information.</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <MapPin className="w-10 h-10 text-electric-cyan mb-4" />
                <h3 className="font-heading font-semibold text-lg mb-2">Precise Location</h3>
                <p className="text-muted-foreground">GPS coordinates sent to first responders for fastest possible response.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
