import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ShoppingCart, Check, AlertCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useCompare } from "@/contexts/CompareContext";
import {
  availabilityStatusMeta,
  formatPrice,
  products,
} from "@/lib/catalogue";

export default function ComparePage() {
  const [params, setParams] = useSearchParams();
  const { addItem } = useCart();
  const { compareIds, toggleCompare, setCompareIds } = useCompare();

  const urlItems = useMemo(() => {
    const raw = params.get("items");
    if (!raw) return null;
    const ids = raw
      .split(",")
      .map((s) => s.trim())
      .filter((id) => products.some((p) => p.id === id));
    return ids.length > 0 ? ids : null;
  }, [params]);

  const activeIds = urlItems ?? (compareIds.length >= 2 ? compareIds : products.map((p) => p.id));
  const comparedProducts = products.filter((p) => activeIds.includes(p.id));

  const handleToggleProduct = (id: string) => {
    if (urlItems) {
      const next = urlItems.includes(id)
        ? urlItems.filter((item) => item !== id)
        : [...urlItems, id];
      const finalIds = next.length > 0 ? next : products.map((p) => p.id);
      setCompareIds(finalIds);
      setParams(
        { items: finalIds.join(",") },
        { replace: true }
      );
      return;
    }
    toggleCompare(id);
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide">
          <div className="text-center mb-10">
            <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              Side-By-Side Hardware Comparison
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Compare Astrateq Hardware
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compare CAD pricing, availability status, installation requirements, vehicle compatibility, and unconfirmed manufacturer details across our active catalogue.
            </p>
          </div>

          <div
            className="flex flex-wrap items-center justify-center gap-2 mb-8"
            role="group"
            aria-label="Choose products to compare"
          >
            {products.map((product) => {
              const selected = comparedProducts.some((p) => p.id === product.id);
              return (
                <button
                  key={product.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => handleToggleProduct(product.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-xs font-medium min-h-[40px] transition-colors ${
                    selected
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border hover:text-foreground"
                  }`}
                >
                  {selected && <Check className="w-3.5 h-3.5" />}
                  {product.shortName}
                </button>
              );
            })}
          </div>

          <div className="overflow-x-auto rounded-xl border border-border bg-card">
            <table className="w-full min-w-[680px] text-left">
              <thead>
                <tr className="border-b border-border bg-midnight-charcoal">
                  <th className="p-4 text-xs uppercase tracking-wider text-muted-foreground font-semibold w-52">
                    Specification / Policy
                  </th>
                  {comparedProducts.map((product) => (
                    <th key={product.id} className="p-4 font-heading font-semibold text-base">
                      <Link
                        to={product.link}
                        className="hover:text-primary transition-colors"
                      >
                        {product.name}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm align-top">
                <tr>
                  <td className="p-4 font-medium text-muted-foreground">Price (CAD)</td>
                  {comparedProducts.map((product) => (
                    <td key={product.id} className="p-4 font-semibold tabular-nums">
                      {formatPrice(product.price)} {product.currency}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-medium text-muted-foreground">Availability</td>
                  {comparedProducts.map((product) => (
                    <td key={product.id} className="p-4">
                      <span className="inline-flex items-center gap-1.5 font-medium text-warning">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {availabilityStatusMeta[product.availabilityStatus].shortLabel}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1">
                        {product.availabilityLabel}
                      </p>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-medium text-muted-foreground">Category</td>
                  {comparedProducts.map((product) => (
                    <td key={product.id} className="p-4 text-primary font-medium">
                      {product.category}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-medium text-muted-foreground">Primary Audience</td>
                  {comparedProducts.map((product) => (
                    <td key={product.id} className="p-4">
                      {product.audience === "fleet"
                        ? "Commercial Fleets"
                        : "Personal & Family Vehicles"}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-medium text-muted-foreground">Key Form Factor / Interface</td>
                  {comparedProducts.map((product) => (
                    <td key={product.id} className="p-4 text-muted-foreground">
                      {product.shortSpecs.map((s) => `${s.label}: ${s.value}`).join(" · ")}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-medium text-muted-foreground">Installation Requirements</td>
                  {comparedProducts.map((product) => (
                    <td key={product.id} className="p-4 text-muted-foreground leading-relaxed">
                      {product.installationRequirements}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-medium text-muted-foreground">Connectivity & Subscriptions</td>
                  {comparedProducts.map((product) => (
                    <td key={product.id} className="p-4 text-muted-foreground leading-relaxed">
                      {product.connectivityAndSubscription}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-medium text-muted-foreground">Compatibility Scope</td>
                  {comparedProducts.map((product) => (
                    <td key={product.id} className="p-4 text-muted-foreground leading-relaxed">
                      {product.compatibilityNote}
                    </td>
                  ))}
                </tr>
              </tbody>
              <tfoot>
                <tr className="border-t border-border">
                  <td className="p-4 text-xs text-muted-foreground">
                    Actions
                  </td>
                  {comparedProducts.map((product) => (
                    <td key={product.id} className="p-4">
                      <div className="flex flex-wrap gap-2">
                        <Button
                          size="sm"
                          className="min-h-[40px]"
                          onClick={() => addItem(product.id)}
                        >
                          <ShoppingCart className="w-4 h-4" />
                          Add to Cart
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="min-h-[40px]"
                        >
                          <Link to={product.link}>View Details</Link>
                        </Button>
                      </div>
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
