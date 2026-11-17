import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ShoppingCart,
  Check,
  Cpu,
  AlertCircle,
  GitCompare,
  Wrench,
  Wifi,
  Package,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { QuantitySelector } from "./QuantitySelector";
import { ProductCard } from "./ProductCard";
import { VehicleCompatibilityFinder } from "@/components/compatibility/VehicleCompatibilityFinder";
import {
  products,
  formatPrice,
  availabilityStatusMeta,
} from "@/lib/catalogue";
import { useCart } from "@/contexts/CartContext";
import { useCompare } from "@/contexts/CompareContext";
import { storeConfig } from "@/config/store";

export function ProductDetail({ id }: { id: string }) {
  const [quantity, setQuantity] = useState(1);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [imgError, setImgError] = useState(false);
  const { addItem } = useCart();
  const { isComparing, toggleCompare } = useCompare();

  const product = products.find((p) => p.id === id);
  if (!product) return null;

  const activePhoto = product.gallery[activeImageIdx] ?? {
    src: product.image,
    alt: product.imageAlt,
    caption: product.name,
  };
  const comparing = isComparing(product.id);
  const statusMeta = availabilityStatusMeta[product.availabilityStatus];

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              to="/products"
              className="inline-flex gap-2 items-center hover:text-primary transition-colors py-1"
            >
              <ArrowLeft size={16} />
              Back to Shop
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-foreground truncate">{product.shortName}</span>
          </nav>

          {/* Main Purchase & Gallery Split */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <figure className="lg:sticky lg:top-32">
              <div className="aspect-square overflow-hidden rounded-xl bg-midnight-charcoal border border-border">
                {!imgError ? (
                  <img
                    src={activePhoto.src}
                    alt={activePhoto.alt}
                    className="w-full h-full object-cover"
                    width="768"
                    height="768"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                    <Cpu className="w-12 h-12 text-electric-cyan mb-3" />
                    <p className="text-sm text-muted-foreground">{product.name}</p>
                  </div>
                )}
              </div>

              {product.gallery.length > 1 && (
                <div className="flex items-center gap-3 mt-3" role="group" aria-label="Product gallery thumbnails">
                  {product.gallery.map((item, idx) => (
                    <button
                      key={item.src}
                      type="button"
                      onClick={() => {
                        setImgError(false);
                        setActiveImageIdx(idx);
                      }}
                      aria-label={`View image ${idx + 1}: ${item.caption}`}
                      aria-pressed={activeImageIdx === idx}
                      className={`w-20 h-20 rounded-lg overflow-hidden border transition-colors ${
                        activeImageIdx === idx
                          ? "border-primary ring-2 ring-primary/30"
                          : "border-border opacity-75 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        width="80"
                        height="80"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              <figcaption className="text-xs text-muted-foreground mt-3 leading-relaxed">
                {activePhoto.caption}
                {product.galleryPendingNote ? ` — ${product.galleryPendingNote}` : ""}
              </figcaption>
            </figure>

            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs mb-3">
                <span className="text-primary font-semibold uppercase tracking-wider">
                  {product.category}
                </span>
                <span aria-hidden="true" className="text-border">·</span>
                <span className="inline-flex items-center gap-1.5 font-medium text-warning">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {statusMeta.shortLabel}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
                {product.name}
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
                {product.longDescription}
              </p>

              <div className="border-y border-border py-5 mb-6">
                <p className="text-3xl font-semibold tabular-nums mb-1.5">
                  {formatPrice(product.price)}{" "}
                  <span className="text-sm font-normal text-muted-foreground">
                    {product.currency}
                  </span>
                </p>
                <p className="text-sm font-medium text-foreground mb-1">
                  {product.availabilityLabel}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {product.availabilityDetail}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <QuantitySelector value={quantity} onChange={setQuantity} />
                <Button
                  className="min-h-[44px] px-6"
                  onClick={() => addItem(product.id, quantity)}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>
                <Button variant="outline" className="min-h-[44px]" asChild>
                  <Link to="/cart">
                    View Cart
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  type="button"
                  variant={comparing ? "secondary" : "ghost"}
                  className="min-h-[44px]"
                  aria-pressed={comparing}
                  onClick={() => toggleCompare(product.id)}
                >
                  <GitCompare className="w-4 h-4" />
                  {comparing ? "In Comparison" : "Compare"}
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mb-8">
                Online payment processing is currently disabled. Adding items to your cart prepares an itemized order inquiry without charging you.
              </p>

              <div className="mb-8">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Key Highlights
                </h2>
                <ul className="space-y-2.5">
                  {product.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-foreground/90"
                    >
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Specifications Table */}
              <div className="mb-8">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Technical Specifications
                </h2>
                <div className="rounded-xl border border-border overflow-hidden">
                  <dl className="divide-y divide-border text-sm">
                    {product.specifications.map((spec) => (
                      <div
                        key={spec.label}
                        className="grid sm:grid-cols-[200px_1fr] gap-2 p-3.5 bg-card/50"
                      >
                        <dt className="font-medium text-muted-foreground">
                          {spec.label}
                        </dt>
                        <dd
                          className={
                            spec.confirmed
                              ? "text-foreground"
                              : "text-muted-foreground italic"
                          }
                        >
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              {/* Installation, Connectivity & Accessories */}
              <div className="space-y-4 mb-8">
                <div className="rounded-xl border border-border bg-card/40 p-4 flex items-start gap-3">
                  <Wrench className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold mb-1">
                      Installation Requirements
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.installationRequirements}
                    </p>
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card/40 p-4 flex items-start gap-3">
                  <Wifi className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold mb-1">
                      Connectivity & Subscriptions
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.connectivityAndSubscription}
                    </p>
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card/40 p-4 flex items-start gap-3">
                  <Package className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold mb-1">
                      Included Accessories & Packaging
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.includedAccessories}
                    </p>
                  </div>
                </div>
              </div>

              {/* Shipping, Warranty & FAQs */}
              <div className="divide-y divide-border border-y border-border">
                <details open className="py-4">
                  <summary className="font-semibold cursor-pointer text-sm">
                    Shipping, Returns & Warranty
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {storeConfig.policies.shippingSummary} {storeConfig.policies.returnsSummary} {storeConfig.policies.warrantySummary}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-primary">
                    <Link to="/legal/shipping" className="hover:underline">
                      Shipping Policy
                    </Link>
                    <Link to="/legal/refund" className="hover:underline">
                      Returns & Refunds
                    </Link>
                    <Link to="/support/warranty" className="hover:underline">
                      Warranty Policy
                    </Link>
                    <Link to="/contact" className="hover:underline">
                      Contact Support
                    </Link>
                  </div>
                </details>

                {product.faqs.map((faq) => (
                  <details key={faq.question} className="py-4">
                    <summary className="font-semibold cursor-pointer text-sm">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Embedded Vehicle Compatibility Finder */}
          <div className="mt-16">
            <VehicleCompatibilityFinder lockedProductId={product.id} compact />
          </div>

          {/* Related Products */}
          <section className="mt-20">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <h2 className="text-2xl font-semibold">Related Hardware</h2>
              <Link
                to="/resources/compare"
                className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1.5"
              >
                <GitCompare className="w-4 h-4" />
                Compare All Products
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {products
                .filter((p) => p.id !== id)
                .map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}