import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { products, formatPrice } from "@/lib/catalogue";

export default function ComparePage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              Side-By-Side Overview
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Compare Astrateq Hardware
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compare pricing, category, primary use case, and compatibility guidance across our active product catalogue.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border bg-card">
            <table className="w-full min-w-[680px] text-left">
              <thead>
                <tr className="border-b border-border bg-midnight-charcoal">
                  <th className="p-4 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    Attribute
                  </th>
                  {products.map((product) => (
                    <th key={product.id} className="p-4 font-heading font-semibold text-base">
                      {product.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-4 font-medium text-muted-foreground">Price</td>
                  {products.map((product) => (
                    <td key={product.id} className="p-4 font-semibold tabular-nums">
                      {formatPrice(product.price)} {product.currency}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-medium text-muted-foreground">Category</td>
                  {products.map((product) => (
                    <td key={product.id} className="p-4 text-primary">
                      {product.category}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-medium text-muted-foreground">Primary Audience</td>
                  {products.map((product) => (
                    <td key={product.id} className="p-4 capitalize">
                      {product.audience === "fleet" ? "Commercial Fleets" : "Personal & Family Vehicles"}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-medium text-muted-foreground">Compatibility</td>
                  {products.map((product) => (
                    <td key={product.id} className="p-4 text-muted-foreground leading-relaxed">
                      {product.compatibilityNote}
                    </td>
                  ))}
                </tr>
              </tbody>
              <tfoot>
                <tr className="border-t border-border">
                  <td className="p-4"></td>
                  {products.map((product) => (
                    <td key={product.id} className="p-4">
                      <Button variant="hero" size="sm" asChild className="min-h-[40px]">
                        <Link to={product.link}>View Details</Link>
                      </Button>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
