import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const guides = [
  {
    title: "Choosing Between In-Cabin Coaching and OBD-II Fleet Telemetry",
    category: "Hardware Guide",
    summary:
      "How windshield-mounted driving monitors differ from dedicated OBD-II fleet units when evaluating personal cars versus commercial vans.",
    fullText:
      "Windshield-mounted units like the ASTRA-AI Driver Coach System prioritize quick passenger cabin setup and driver awareness, whereas rugged OBD-II modules like FleetGuard AI Pro focus on continuous diagnostic port telemetry and multi-vehicle maintenance scheduling.",
    link: "/resources/compare",
    linkLabel: "Compare Products",
  },
  {
    title: "Preparing Your Electric Vehicle for Battery Health Monitoring",
    category: "EV Technology",
    summary:
      "What EV owners should verify—model year, onboard interface, and charging habits—before selecting an EV monitoring module.",
    fullText:
      "Before ordering an EV Battery Intelligence Suite, check your vehicle make, model year, and diagnostic port specification with our support team to confirm compatibility with your charging and state-of-charge tracking needs.",
    link: "/products/ev-suite",
    linkLabel: "View EV Suite",
  },
  {
    title: "What to Check Before Placing a Fleet Hardware Order",
    category: "Fleet Operations",
    summary:
      "A pre-order checklist covering OBD-II port access, vehicle mix, and shipping scheduling for small and mid-sized fleets.",
    fullText:
      "Commercial fleets often operate mixed vehicle models across multiple years. Confirming port locations, power draw preferences, and installation schedules upfront ensures smooth rollout across your vehicles.",
    link: "/products/predictive-fleet",
    linkLabel: "View FleetGuard AI Pro",
  },
];

export default function BlogPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              Editorial Guides
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Journal & Hardware Guides
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Practical buying and compatibility guides for passenger drivers, EV owners, and fleet operators.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {guides.map((guide) => {
              const isOpen = expanded === guide.title;
              return (
                <article
                  key={guide.title}
                  className="bg-card rounded-xl border border-border p-6 flex flex-col"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                    {guide.category}
                  </p>
                  <h2 className="text-xl font-heading font-semibold mb-3 leading-snug">
                    {guide.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {isOpen ? guide.fullText : guide.summary}
                  </p>
                  <div className="pt-4 border-t border-border/70 flex items-center justify-between gap-3 text-sm">
                    <button
                      type="button"
                      onClick={() => setExpanded(isOpen ? null : guide.title)}
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      {isOpen ? "Show less" : "Read summary"}
                    </button>
                    <Link
                      to={guide.link}
                      className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
                    >
                      {guide.linkLabel}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
