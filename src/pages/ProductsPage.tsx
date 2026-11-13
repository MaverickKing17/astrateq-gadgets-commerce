import { useSearchParams } from "react-router-dom";
import { Search, X } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import { filterProducts, productCategories } from "@/lib/catalogue";

export default function ProductsPage() {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") ?? "";
  const categoryParam = params.get("category") ?? "All products";
  const category = productCategories.includes(
    categoryParam as (typeof productCategories)[number]
  )
    ? categoryParam
    : "All products";

  const shown = filterProducts(query, category);

  const updateFilters = (nextQuery: string, nextCategory: string) => {
    const next = new URLSearchParams();
    if (nextQuery.trim()) next.set("q", nextQuery);
    if (nextCategory !== "All products") next.set("category", nextCategory);
    setParams(next, { replace: true });
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide">
          <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            Astrateq Gadgets Catalogue
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Shop Automotive Technology
          </h1>
          <p className="text-muted-foreground max-w-2xl mb-10">
            Browse our driving monitor, EV battery, and commercial fleet hardware. Contact our team to confirm vehicle compatibility and current stock before ordering.
          </p>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter by product category"
            >
              {productCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => updateFilters(query, cat)}
                  aria-pressed={category === cat}
                  className={`px-4 py-2.5 text-xs font-medium rounded-lg border transition-colors min-h-[40px] whitespace-nowrap shrink-0 ${
                    category === cat
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-primary/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 border border-border bg-card rounded-lg px-3.5 w-full lg:w-80">
              <Search size={18} className="text-muted-foreground shrink-0" />
              <input
                aria-label="Search products"
                value={query}
                onChange={(e) => updateFilters(e.target.value, category)}
                type="search"
                placeholder="Search products..."
                className="w-full h-11 bg-transparent text-sm focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => updateFilters("", category)}
                  aria-label="Clear search"
                  className="text-muted-foreground hover:text-foreground p-1"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-6" aria-live="polite">
            Showing {shown.length} {shown.length === 1 ? "product" : "products"}
          </p>

          {shown.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shown.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center border border-border rounded-xl bg-card/50">
              <h2 className="text-xl font-semibold mb-2">No matching products</h2>
              <p className="text-muted-foreground mb-6 text-sm">
                Try another search term or reset your category filter.
              </p>
              <Button
                variant="outline"
                onClick={() => setParams({}, { replace: true })}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
