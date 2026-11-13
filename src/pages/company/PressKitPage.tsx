import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { storeConfig } from "@/config/store";
import logo from "@/assets/astrateq-logo.webp";

export default function PressKitPage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide max-w-4xl">
          <div className="text-center mb-14">
            <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              Media & Brand Resources
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Press Kit
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Brand overview and media contact details for {storeConfig.brandName}.
            </p>
          </div>

          <div className="bg-card rounded-xl border border-border p-8 sm:p-10 mb-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">
                  About {storeConfig.brandName}
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                  {storeConfig.legalName} offers connected automotive hardware across three core categories: driving monitoring (ASTRA-AI Driver Coach System), EV battery telemetry (EV Battery Intelligence Suite), and commercial OBD-II fleet telematics (FleetGuard AI Pro).
                </p>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Principal marketing operations are located at {storeConfig.address.office}, with legal headquarters in {storeConfig.address.headquarters}.
                </p>
              </div>
              <div className="bg-midnight-charcoal rounded-xl border border-border p-8 flex flex-col items-center justify-center gap-4">
                <img
                  src={logo}
                  alt={`${storeConfig.brandName} official logo`}
                  className="max-w-[200px] h-auto"
                />
                <a
                  href={logo}
                  download="astrateq-logo.webp"
                  className="text-xs text-primary hover:underline"
                >
                  Download Brand Logo (.webp)
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-bold mb-2">
              Media & Asset Requests
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mb-6 max-w-lg mx-auto">
              Need high-resolution product photos, fact sheets, or an interview? Reach out to our media contact directly.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="hero" asChild className="min-h-[44px]">
                <a href="mailto:press@astrateq.com">Email press@astrateq.com</a>
              </Button>
              <Button variant="outline" asChild className="min-h-[44px]">
                <Link to="/contact">General Contact Form</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
