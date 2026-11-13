import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/lib/catalogue";

export function ProductsSection() {
  const [audience, setAudience] = useState<"all" | "consumer" | "fleet">("all");
  const shown = products.filter(
    (p) => audience === "all" || p.audience === audience
  );

  return (
    <section
      id="products"
      className="dark py-20 lg:py-24 bg-background text-foreground scroll-mt-24"
    >
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              The Astrateq Collection
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Featured Automotive Hardware
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Explore connected driving, electric-vehicle, and commercial fleet hardware curated for modern vehicles.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter products by audience"
          >
            {(
              [
                ["all", "All Products"],
                ["consumer", "Personal Driving"],
                ["fleet", "For Fleets"],
              ] as const
            ).map(([value, label]) => (
              <Button
                key={value}
                variant={audience === value ? "default" : "outline"}
                aria-pressed={audience === value}
                className="min-h-[40px]"
                onClick={() => setAudience(value)}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-8 pt-6 border-t border-border/70 text-sm">
          <p className="text-muted-foreground">
            Prices shown in USD. Vehicle compatibility and shipping options are confirmed prior to order acceptance.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline shrink-0"
          >
            Browse Full Catalogue
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
