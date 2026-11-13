import { Link } from "react-router-dom";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { products, formatPrice } from "@/lib/catalogue";

export default function CheckoutPage() {
  const { items, subtotal } = useCart();

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-40 pb-20">
        <div className="container-wide max-w-3xl">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/cart">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Cart
            </Link>
          </Button>
          <h1 className="text-4xl font-bold mb-6">Checkout</h1>

          <div className="border border-border rounded-xl p-6 mb-8 bg-card">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
              <div>
                <h2 className="font-semibold mb-1">Online payment processing is not yet configured</h2>
                <p className="text-sm text-muted-foreground">
                  No payment is processed on this page. To place an order or confirm pricing and availability, please contact our team directly.
                </p>
              </div>
            </div>
          </div>

          <div className="border-y border-border py-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            {items.length === 0 ? (
              <p className="text-muted-foreground text-sm">Your cart is empty.</p>
            ) : (
              <div className="space-y-3">
                {items.map((item) => {
                  const product = products.find((p) => p.id === item.id);
                  if (!product) return null;
                  return (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>
                        {product.name} × {item.quantity}
                      </span>
                      <span>{formatPrice(product.price * item.quantity)}</span>
                    </div>
                  );
                })}
                <div className="border-t border-border pt-3 flex justify-between font-semibold">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)} USD</span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild variant="hero">
              <Link to="/contact">Contact Sales to Order</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
