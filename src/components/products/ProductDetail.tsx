import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ShoppingCart, Check, Cpu } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { QuantitySelector } from "./QuantitySelector";
import { ProductCard } from "./ProductCard";
import { products, formatPrice } from "@/lib/catalogue";
import { useCart } from "@/contexts/CartContext";
import { storeConfig } from "@/config/store";

export function ProductDetail({ id }: { id: string }) {
  const [quantity, setQuantity] = useState(1);
  const [imgError, setImgError] = useState(false);
  const { addItem } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) return null;

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide">
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              to="/products"
              className="inline-flex gap-2 items-center text-sm text-muted-foreground hover:text-primary transition-colors py-1"
            >
              <ArrowLeft size={16} />
              Back to Shop
            </Link>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <figure className="lg:sticky lg:top-32">
              <div className="aspect-square overflow-hidden rounded-xl bg-midnight-charcoal border border-border">
                {!imgError ? (
                  <img
                    src={product.image}
                    alt={product.imageAlt}
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
              <figcaption className="text-xs text-muted-foreground mt-3">
                Hardware appearance may vary slightly by vehicle fitment kit. Contact our team to verify exact package contents.
              </figcaption>
            </figure>

            <div>
              <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                {product.category}
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
                {product.name}
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
                {product.longDescription}
              </p>

              <div className="border-y border-border py-5 mb-6">
                <p className="text-3xl font-semibold tabular-nums mb-1">
                  {formatPrice(product.price)}{" "}
                  <span className="text-sm font-normal text-muted-foreground">
                    {product.currency}
                  </span>
                </p>
                <p className="text-sm text-muted-foreground">
                  {product.availabilityLabel}
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
              </div>

              <p className="text-xs text-muted-foreground mb-8">
                Online card processing is currently disabled. Adding items to your cart prepares an inquiry summary without charging you.
              </p>

              <div className="mb-8">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Hardware Overview
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

              <div className="divide-y divide-border border-y border-border">
                <details open className="py-4">
                  <summary className="font-semibold cursor-pointer text-sm">
                    Vehicle compatibility & specifications
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {product.compatibilityNote} Detailed technical sheets and regional cable options are confirmed prior to order acceptance.
                  </p>
                </details>
                <details className="py-4">
                  <summary className="font-semibold cursor-pointer text-sm">
                    Shipping & returns
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {storeConfig.policies.shippingSummary} {storeConfig.policies.returnsSummary}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-primary">
                    <Link to="/legal/shipping" className="hover:underline">
                      Shipping Policy
                    </Link>
                    <Link to="/legal/refund" className="hover:underline">
                      Returns & Refunds
                    </Link>
                  </div>
                </details>
                <details className="py-4">
                  <summary className="font-semibold cursor-pointer text-sm">
                    Warranty & support
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {storeConfig.policies.warrantySummary}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-primary">
                    <Link to="/support/warranty" className="hover:underline">
                      Warranty Information
                    </Link>
                    <Link to="/contact" className="hover:underline">
                      Contact Support
                    </Link>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <section className="mt-20">
            <h2 className="text-2xl font-semibold mb-8">Explore More Hardware</h2>
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