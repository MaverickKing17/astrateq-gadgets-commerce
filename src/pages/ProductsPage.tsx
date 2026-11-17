import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, X, GitCompare, ArrowRight, AlertCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import { VehicleCompatibilityFinder } from "@/components/compatibility/VehicleCompatibilityFinder";
import { useCompare } from "@/contexts/CompareContext";
import {
  filterProducts,
  productCategories,
  products,
  type ProductSortOption,
} from "@/lib/catalogue";

const sortOptions: Array<{ value: ProductSortOption; label: string }> = [
  { value: "featured", label: "Sort: Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
];

export default function ProductsPage() {
  const [params, setParams] = useSearchParams();
  const { compareIds, clearCompare } = useCompare();

  const query = params.get("q") ?? "";
  const categoryParam = params.get("category") ?? "All products";
  const category = productCategories.includes(
    categoryParam as (typeof productCategories)[number]
  )
    ? categoryParam
    : "All products";

  const sortParam = (params.get("sort") ?? "featured") as ProductSortOption;
  const sortBy = sortOptions.some((s) => s.value === sortParam)
    ? sortParam
    : "featured";

  const shown = filterProducts(query, category, sortBy);

  useEffect(() => {
    if (params.get("compatibility") === "open") {
      document
        .getElementById("compatibility-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [params]);

  const updateFilters = (
    nextQuery: string,
    nextCategory: string,
    nextSort: ProductSortOption
  ) => {
    const next = new URLSearchParams();
    if (nextQuery.trim()) next.set("q", nextQuery);
    if (nextCategory !== "All products") next.set("category", nextCategory);
    if (nextSort !== "featured") next.set("sort", nextSort);
    setParams(next, { replace: true });
  };

  const comparedProducts = products.filter((p) => compareIds.includes(p.id));

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                Astrateq Gadgets Catalogue
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Shop Automotive Technology
              </h1>
              <p className="text-muted-foreground max-w-2xl">
                Browse driving monitor, EV battery, and commercial fleet hardware. All prices are shown in CAD, and compatibility and availability are verified prior to order acceptance.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Button variant="outline" className="min-h-[44px]" asChild>
                <a href="#compatibility-section">Compatibility Finder</a>
              </Button>
              <Button variant="outline" className="min-h-[44px]" asChild>
                <Link to="/resources/compare">
                  <GitCompare className="w-4 h-4 mr-2" />
                  Compare Hardware
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6">
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter by product category"
            >
              {productCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => updateFilters(query, cat, sortBy)}
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

            <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto">
              <div className="flex items-center gap-2 border border-border bg-card rounded-lg px-3.5 w-full sm:w-80">
                <Search size={18} className="text-muted-foreground shrink-0" />
                <input
                  aria-label="Search products by name, specs, or driving need"
                  value={query}
                  onChange={(e) => updateFilters(e.target.value, category, sortBy)}
                  type="search"
                  placeholder="Search name, specs, EV, fleet..."
                  className="w-full h-11 bg-transparent text-sm focus:outline-none"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => updateFilters("", category, sortBy)}
                    aria-label="Clear search"
                    className="text-muted-foreground hover:text-foreground p-1"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              <label htmlFor="product-sort" className="sr-only">
                Sort products
              </label>
              <select
                id="product-sort"
                value={sortBy}
                onChange={(e) =>
                  updateFilters(
                    query,
                    category,
                    e.target.value as ProductSortOption
                  )
                }
                className="h-11 px-3.5 rounded-lg border border-border bg-card text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {comparedProducts.length > 0 && (
            <div className="mb-6 rounded-xl border border-primary/40 bg-card p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                <span className="font-semibold text-primary flex items-center gap-2">
                  <GitCompare className="w-4 h-4" />
                  Selected to compare ({comparedProducts.length}/3):
                </span>
                <span className="text-muted-foreground">
                  {comparedProducts.map((p) => p.shortName).join(" · ")}
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Button size="sm" variant="ghost" onClick={clearCompare}>
                  Clear
                </Button>
                <Button size="sm" asChild className="min-h-[38px]">
                  <Link
                    to={`/resources/compare?items=${encodeURIComponent(
                      compareIds.join(",")
                    )}`}
                  >
                    Compare Side by Side
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          )}

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
                Try searching terms like &ldquo;OBD-II&rdquo;, &ldquo;EV&rdquo;, &ldquo;windshield&rdquo;, or reset your filters.
              </p>
              <Button
                variant="outline"
                onClick={() => setParams({}, { replace: true })}
              >
                Clear Filters
              </Button>
            </div>
          )}

          <div id="compatibility-section" className="mt-16 scroll-mt-32">
            <VehicleCompatibilityFinder />
          </div>

          <aside className="mt-12 rounded-xl border border-border bg-card/60 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <h2 className="text-base font-semibold">
                  Emergency Response AI — Evaluation Preview (Unavailable)
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Pricing, stock availability, and regional dispatch support for Emergency Response AI are not finalized yet, so it is excluded from active purchasing.
                </p>
              </div>
            </div>
            <Button variant="outline" className="shrink-0 min-h-[40px]" asChild>
              <Link to="/products/emergency-ai">View Preview Info</Link>
            </Button>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
