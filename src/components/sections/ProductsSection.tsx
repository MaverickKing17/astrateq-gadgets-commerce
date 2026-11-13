import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/lib/catalogue";

export function ProductsSection() {
  const [audience, setAudience] = useState("all");
  const shown = products.filter(p => audience === "all" || p.audience === audience);
  return <section id="products" className="dark section-padding bg-background text-foreground scroll-mt-32"><div className="container-wide"><div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"><div><p className="text-primary text-sm mb-3">THE ASTRATEQ COLLECTION</p><h2 className="text-3xl md:text-4xl font-bold mb-4">Recommended for You</h2><p className="text-muted-foreground max-w-xl">Explore automotive technology for your daily drive, your electric vehicle, or your fleet.</p></div><div className="flex flex-wrap gap-2" role="group" aria-label="Product audience">{[["all", "All Products"], ["consumer", "Personal Driving"], ["fleet", "For Fleets"]].map(([value, label]) => <Button key={value} variant={audience === value ? "default" : "outline"} aria-pressed={audience === value} onClick={() => setAudience(value)}>{label}</Button>)}</div></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{shown.map(p => <ProductCard key={p.id} product={p} />)}</div><div className="flex flex-col sm:flex-row justify-between gap-4 mt-6 text-xs text-muted-foreground"><p>Illustrative product renderings. Final photography and specifications pending confirmation.</p><Link to="/products" className="text-primary text-sm">Explore All Products →</Link></div></div></section>;
}
