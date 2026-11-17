import { ArrowRight, GitCompare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ProductFinderCTA() {
  return (
    <section className="py-20 bg-slate-grey text-pure-white border-y border-pure-white/10">
      <div className="container-narrow text-center">
        <p className="text-electric-cyan text-xs font-semibold uppercase tracking-wider mb-3">
          Vehicle Fitment & Hardware Comparison
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Check Vehicle Compatibility or Compare Hardware
        </h2>
        <p className="text-base sm:text-lg text-pure-white/80 mb-8 max-w-2xl mx-auto">
          Preview fitment by Year, Make, Model, and Trim in our compatibility prototype, compare CAD specifications side by side, or confirm directly with support.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3.5">
          <Button variant="hero" size="lg" className="min-h-[48px]" asChild>
            <Link to="/products?compatibility=open">
              Open Compatibility Finder
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="hero-ghost" size="lg" className="min-h-[48px]" asChild>
            <Link to="/resources/compare">
              <GitCompare className="w-4 h-4 mr-2" />
              Compare Hardware
            </Link>
          </Button>
          <Button variant="hero-ghost" size="lg" className="min-h-[48px]" asChild>
            <Link to="/contact">Ask Support</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
