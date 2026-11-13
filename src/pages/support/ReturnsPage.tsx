import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Package, RotateCcw, CreditCard, Clock } from "lucide-react";

export default function ReturnsPage() {
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
              <RotateCcw className="w-16 h-16 text-electric-cyan mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Returns & Refunds</h1>
              <p className="text-xl text-muted-foreground">
                30-day money-back guarantee on all products.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-card rounded-xl border border-border text-center">
                <Clock className="w-10 h-10 text-electric-cyan mx-auto mb-3" />
                <h3 className="text-3xl font-bold mb-2">30 Days</h3>
                <p className="text-muted-foreground">Return Window</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border text-center">
                <Package className="w-10 h-10 text-electric-cyan mx-auto mb-3" />
                <h3 className="text-3xl font-bold mb-2">Free</h3>
                <p className="text-muted-foreground">Return Shipping</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border text-center">
                <CreditCard className="w-10 h-10 text-electric-cyan mx-auto mb-3" />
                <h3 className="text-3xl font-bold mb-2">5-7 Days</h3>
                <p className="text-muted-foreground">Refund Processing</p>
              </div>
            </div>
            
            <div className="bg-card rounded-xl border border-border p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold mb-6">How to Return</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-electric-cyan/20 flex items-center justify-center text-electric-cyan font-bold">1</div>
                  <div>
                    <h3 className="font-semibold mb-1">Initiate Return</h3>
                    <p className="text-muted-foreground">Log into your account and request a return from your order history.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-electric-cyan/20 flex items-center justify-center text-electric-cyan font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Print Label</h3>
                    <p className="text-muted-foreground">Receive a prepaid shipping label via email.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-electric-cyan/20 flex items-center justify-center text-electric-cyan font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Ship It Back</h3>
                    <p className="text-muted-foreground">Pack the product securely and drop it off at any carrier location.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-electric-cyan/20 flex items-center justify-center text-electric-cyan font-bold">4</div>
                  <div>
                    <h3 className="font-semibold mb-1">Get Refunded</h3>
                    <p className="text-muted-foreground">Receive your refund within 5-7 business days of receipt.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center p-8 bg-electric-cyan/10 rounded-xl border border-electric-cyan/30">
              <h3 className="font-heading font-bold text-xl mb-2">Need Assistance?</h3>
              <p className="text-muted-foreground mb-4">Our team is here to help with your return.</p>
              <Button variant="hero" asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
