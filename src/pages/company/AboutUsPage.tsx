import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShieldCheck, Car, Building2, Mail } from "lucide-react";
import { storeConfig } from "@/config/store";

const pillars = [
  {
    icon: Car,
    title: "Consumer & EV Focus",
    description:
      "Practical driving monitors and EV battery telemetry hardware designed for everyday vehicles without cluttering cabin controls.",
  },
  {
    icon: Building2,
    title: "Commercial Fleet Support",
    description:
      "OBD-II telematics hardware geared toward service fleets, delivery vans, and multi-vehicle maintenance planning.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Storefront",
    description:
      "Honest product descriptions, clear USD pricing, and direct pre-order fitment verification before any payment is processed.",
  },
  {
    icon: Mail,
    title: "Direct Human Guidance",
    description:
      "Reach our Toronto-based support team directly to confirm make, model year, and installation requirements.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              About {storeConfig.brandName}
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Focused Automotive Hardware, Built Around Clarity
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Operating from {storeConfig.address.office} and incorporated in {storeConfig.address.headquarters}, {storeConfig.brandName} curates connected driving, EV monitoring, and fleet telematics hardware.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 bg-card rounded-xl border border-border flex flex-col"
              >
                <pillar.icon className="w-7 h-7 text-primary mb-4" />
                <h2 className="text-lg font-heading font-semibold mb-2">
                  {pillar.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center mb-16 rounded-xl border border-border bg-card p-8 sm:p-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
                Our Approach
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
                Automotive accessories should be easy to evaluate and verify before purchase. Instead of overstated claims, we focus on clear hardware specifications, compatibility checks, and responsive customer support.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">
                Whether you are equipping a single commuter car, monitoring an electric vehicle battery, or standardizing telematics across a commercial fleet, our team helps you confirm fitment before ordering.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="hero" asChild className="min-h-[44px]">
                  <Link to="/products">Browse Products</Link>
                </Button>
                <Button variant="outline" asChild className="min-h-[44px]">
                  <Link to="/company/our-story">Our Story</Link>
                </Button>
              </div>
            </div>

            <div className="bg-midnight-charcoal p-8 rounded-xl border border-border">
              <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-3">
                Storefront Principle
              </p>
              <blockquote className="text-xl sm:text-2xl font-heading font-semibold leading-snug text-pure-white mb-4">
                "Drivers and fleet managers deserve transparent product details, honest availability, and reliable support before they ever checkout."
              </blockquote>
              <p className="text-sm text-muted-foreground">
                — {storeConfig.legalName}
              </p>
            </div>
          </div>

          <div className="text-center rounded-xl border border-border bg-card p-8 sm:p-10">
            <h2 className="text-2xl font-heading font-bold mb-3">Questions or Partnerships?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6 text-sm sm:text-base">
              Reach out to our team for vehicle compatibility guidance, commercial inquiries, or general questions.
            </p>
            <Button variant="hero" asChild className="min-h-[44px]">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
