import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Download, Image, FileText, Mail } from "lucide-react";
import logo from "@/assets/astrateq-logo.webp";

export default function PressKitPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-48 pb-20">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Press Kit</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Resources for media and press coverage of Astrateq.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-card rounded-xl border border-border text-center">
              <Image className="w-12 h-12 text-electric-cyan mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold mb-2">Logo Package</h3>
              <p className="text-muted-foreground text-sm mb-4">PNG, SVG, and EPS formats in various sizes</p>
              <Button variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download Logos
              </Button>
            </div>
            
            <div className="p-8 bg-card rounded-xl border border-border text-center">
              <Image className="w-12 h-12 text-electric-cyan mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold mb-2">Product Images</h3>
              <p className="text-muted-foreground text-sm mb-4">High-resolution product photography</p>
              <Button variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download Images
              </Button>
            </div>
            
            <div className="p-8 bg-card rounded-xl border border-border text-center">
              <FileText className="w-12 h-12 text-electric-cyan mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold mb-2">Fact Sheet</h3>
              <p className="text-muted-foreground text-sm mb-4">Company overview, stats, and key facts</p>
              <Button variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
          
          <div className="bg-card rounded-2xl border border-border p-12 mb-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">About Astrateq</h2>
                <p className="text-muted-foreground mb-4">
                  Astrateq is a leading automotive technology company specializing in AI-powered safety and predictive maintenance solutions. Founded in 2019, the company has grown to serve over 50,000 users across 30+ countries.
                </p>
                <p className="text-muted-foreground">
                  Our flagship products—Driver Coach AI, Emergency AI, EV Battery Intelligence, and Predictive Fleet—leverage machine learning to make roads safer and reduce vehicle maintenance costs.
                </p>
              </div>
              <div className="bg-midnight-charcoal rounded-xl p-8 flex items-center justify-center">
                <img src={logo} alt="Astrateq Logo" className="max-w-[200px]" />
              </div>
            </div>
          </div>
          
          <div className="bg-electric-cyan/10 rounded-xl border border-electric-cyan/30 p-8 text-center">
            <Mail className="w-12 h-12 text-electric-cyan mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-bold mb-2">Media Inquiries</h2>
            <p className="text-muted-foreground mb-4">For press inquiries, please contact our media relations team.</p>
            <a href="mailto:press@astrateq.com" className="text-electric-cyan hover:underline text-lg">
              press@astrateq.com
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
