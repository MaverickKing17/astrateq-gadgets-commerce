import { Link } from "react-router-dom";
import { ShoppingCart, ArrowRight, Trash2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { QuantitySelector } from "@/components/products/QuantitySelector";
import { useCart } from "@/contexts/CartContext";
import { products, formatPrice } from "@/lib/catalogue";

export default function CartPage() {
  const { items, subtotal, setQuantity, removeItem } = useCart();

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide">
          <h1 className="text-3xl sm:text-4xl font-bold mb-10">Your Cart</h1>

          {!items.length ? (
            <div className="text-center py-16 border border-border rounded-xl bg-card/40 px-6">
              <ShoppingCart className="mx-auto text-primary mb-5" size={44} />
              <h2 className="text-2xl font-semibold mb-3">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm sm:text-base">
                Explore our driving, EV, and fleet hardware collection to compare models and add items to your order summary.
              </p>
              <Button className="min-h-[44px]" asChild>
                <Link to="/products">
                  Browse Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1fr_360px] gap-10">
              <div className="divide-y divide-border">
                {items.map((item) => {
                  const product = products.find((p) => p.id === item.id);
                  if (!product) return null;

                  return (
                    <article
                      key={item.id}
                      className="py-6 first:pt-0 flex gap-4 sm:gap-6 items-start"
                    >
                      <Link
                        to={product.link}
                        className="shrink-0 bg-midnight-charcoal rounded-lg border border-border overflow-hidden"
                      >
                        <img
                          src={product.image}
                          alt={product.imageAlt}
                          width="120"
                          height="120"
                          referrerPolicy="no-referrer"
                          className="w-20 h-20 sm:w-28 sm:h-28 object-cover"
                        />
                      </Link>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs uppercase tracking-wider text-primary mb-1">
                          {product.category}
                        </p>
                        <Link
                          to={product.link}
                          className="font-semibold leading-snug block mb-1.5 hover:text-primary transition-colors"
                        >
                          {product.name}
                        </Link>
                        <p className="text-muted-foreground text-sm mb-4 tabular-nums">
                          {formatPrice(product.price)} {product.currency} each
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                          <QuantitySelector
                            value={item.quantity}
                            label={`Quantity for ${product.name}`}
                            onChange={(value) => setQuantity(product.id, value)}
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10"
                            aria-label={`Remove ${product.name}`}
                            onClick={() => removeItem(product.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                          <p className="sm:ml-auto font-semibold tabular-nums">
                            {formatPrice(product.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <aside className="lg:sticky lg:top-32 self-start rounded-xl border border-border bg-card p-6">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                <div className="flex justify-between mb-3 text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold tabular-nums" aria-label="Cart subtotal">
                    {formatPrice(subtotal)} USD
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
                  Shipping, applicable taxes, and vehicle compatibility are confirmed prior to final order acceptance.
                </p>
                <Button className="w-full min-h-[44px]" asChild>
                  <Link to="/checkout">
                    Continue to Checkout
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full mt-2 min-h-[44px]" asChild>
                  <Link to="/products">Continue Shopping</Link>
                </Button>
              </aside>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
