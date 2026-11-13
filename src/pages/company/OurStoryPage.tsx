import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const timeline = [
  { year: "2019", title: "The Beginning", description: "Astrateq was founded by Dr. Sarah Chen and Marcus Williams in a small garage in Silicon Valley." },
  { year: "2020", title: "First Product Launch", description: "Driver Coach AI launched, receiving immediate recognition for its innovative approach to driver safety." },
  { year: "2021", title: "Series A Funding", description: "Raised $15M in Series A funding led by Andreessen Horowitz to expand our product line." },
  { year: "2022", title: "Enterprise Expansion", description: "Launched Predictive Fleet for enterprise customers, securing contracts with major logistics companies." },
  { year: "2023", title: "Global Growth", description: "Expanded operations to Europe and Asia, surpassing 50,000 active users worldwide." },
  { year: "2024", title: "EV Innovation", description: "Launched EV Battery Intelligence, entering the electric vehicle market with battery health monitoring." },
  { year: "2025", title: "The Future", description: "Continuing to innovate with Web3 integration, NFT warranties, and next-gen AI capabilities." },
];

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-48 pb-20">
        <div className="container-wide">
          <Link to="/company/about-us" className="inline-flex items-center gap-2 text-muted-foreground hover:text-electric-cyan mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to About Us
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Story</h1>
              <p className="text-xl text-muted-foreground">
                From a garage startup to a global leader in automotive AI safety.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
              <div className="space-y-12">
                {timeline.map((event, index) => (
                  <div key={event.year} className="relative pl-20">
                    <div className="absolute left-0 w-16 h-16 rounded-full bg-electric-cyan/20 border-4 border-background flex items-center justify-center">
                      <span className="text-electric-cyan font-bold text-sm">{event.year}</span>
                    </div>
                    <div className="bg-card rounded-xl border border-border p-6">
                      <h3 className="text-xl font-heading font-bold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-heading font-bold mb-4">Be Part of Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Join thousands of drivers who trust Astrateq to keep them safe on the road.
              </p>
              <Button variant="hero" asChild>
                <Link to="/products">Explore Our Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
