import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Shield, Lock, CheckCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const practices = [
  {
    name: "Transport Encryption (HTTPS)",
    description:
      "Site traffic is served over encrypted HTTPS connections to protect browsing and form interactions in transit.",
    icon: Lock,
  },
  {
    name: "PIPEDA-Aligned Privacy",
    description:
      "Privacy practices are structured around consent, limited collection, and clear user access rights.",
    icon: Shield,
  },
  {
    name: "No Unconfigured Card Storage",
    description:
      "Online payment processing is currently disabled on this storefront, so no card details are collected or stored here.",
    icon: CheckCircle,
  },
  {
    name: "Explicit Policy Disclosures",
    description:
      "Shipping, return, warranty, and compatibility expectations are documented plainly prior to ordering.",
    icon: FileText,
  },
];

export default function TrustCertsPage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide max-w-5xl">
          <div className="text-center mb-14">
            <Shield className="w-12 h-12 text-primary mx-auto mb-5" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Security & Storefront Practices
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How we handle customer data, storefront transparency, and pre-order verification—without unverified certification claims.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {practices.map((item) => (
              <div
                key={item.name}
                className="p-6 bg-card rounded-xl border border-border"
              >
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h2 className="text-xl font-heading font-semibold mb-2">
                  {item.name}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <h2 className="text-2xl font-heading font-bold mb-3">
              Regulatory & Compliance Documentation
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto mb-6">
              For specific hardware compliance sheets, regional regulatory documentation, or privacy requests, please contact our team directly.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="hero" asChild className="min-h-[44px]">
                <Link to="/contact">Contact Team</Link>
              </Button>
              <Button variant="outline" asChild className="min-h-[44px]">
                <Link to="/legal/privacy">Privacy Policy</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
