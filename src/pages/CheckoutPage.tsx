import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertCircle, Mail } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { products, formatPrice } from "@/lib/catalogue";
import { storeConfig } from "@/config/store";

export default function CheckoutPage() {
  const { items, subtotal } = useCart();
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [vehicleInfo, setVehicleInfo] = useState("");
  const [notes, setNotes] = useState("");
  const [formNotice, setFormNotice] = useState<string | null>(null);

  const summaryLines = items
    .map((item) => {
      const product = products.find((p) => p.id === item.id);
      if (!product) return null;
      return `- ${product.name} × ${item.quantity} (${formatPrice(product.price * item.quantity)} USD)`;
    })
    .filter(Boolean)
    .join("\n");

  const handleInquiryDraft = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail.trim())) {
      setFormNotice("Please enter your name and a valid email address.");
      return;
    }

    setFormNotice(
      `Online payment processing is not enabled on this storefront yet. Use the email button below or contact ${storeConfig.support.email} to confirm compatibility and complete your order manually.`
    );
  };

  const mailtoHref = `mailto:${storeConfig.support.email}?subject=${encodeURIComponent(
    "Astrateq Hardware Order & Compatibility Inquiry"
  )}&body=${encodeURIComponent(
    `Name: ${customerName || "N/A"}\nEmail: ${customerEmail || "N/A"}\nVehicle (Make / Model / Year): ${
      vehicleInfo || "N/A"
    }\n\nSelected Items:\n${summaryLines || "No items selected"}\n\nEstimated Subtotal: ${formatPrice(
      subtotal
    )} USD\n\nNotes:\n${notes || "None"}`
  )}`;

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide max-w-5xl">
          <Button variant="ghost" asChild className="mb-6 -ml-3">
            <Link to="/cart">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Cart
            </Link>
          </Button>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Checkout</h1>
          <p className="text-muted-foreground mb-8 max-w-2xl text-sm sm:text-base">
            Prepare your hardware inquiry below. Online card processing is currently separated from the storefront until payment integration is configured.
          </p>

          <div className="border border-border rounded-xl p-5 mb-8 bg-card">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
              <div>
                <h2 className="font-semibold text-sm mb-1">
                  Online payment processing is not configured
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  No payment is collected or simulated on this page. Submitting details prepares an order inquiry for compatibility and shipping confirmation with our team.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
            <form
              onSubmit={handleInquiryDraft}
              className="rounded-xl border border-border bg-card p-6 space-y-5"
              noValidate
            >
              <h2 className="text-xl font-semibold">Contact & Vehicle Details</h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="checkout-name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    id="checkout-name"
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full h-11 px-3.5 rounded-lg bg-background border border-border text-sm focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="checkout-email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    id="checkout-email"
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full h-11 px-3.5 rounded-lg bg-background border border-border text-sm focus:outline-none focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="checkout-vehicle" className="block text-sm font-medium mb-2">
                  Vehicle Make, Model & Year (Optional)
                </label>
                <input
                  id="checkout-vehicle"
                  type="text"
                  value={vehicleInfo}
                  onChange={(e) => setVehicleInfo(e.target.value)}
                  placeholder="e.g., 2024 Honda Civic or Commercial Fleet Vans"
                  className="w-full h-11 px-3.5 rounded-lg bg-background border border-border text-sm focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="checkout-notes" className="block text-sm font-medium mb-2">
                  Shipping Region or Questions
                </label>
                <textarea
                  id="checkout-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share your shipping city/postal code or installation questions..."
                  className="w-full p-3.5 rounded-lg bg-background border border-border text-sm focus:outline-none focus:border-primary resize-none"
                />
              </div>

              {formNotice && (
                <p
                  role="status"
                  className="text-xs text-muted-foreground border border-border rounded-lg p-3.5 bg-background"
                >
                  {formNotice}
                </p>
              )}

              <div className="flex flex-wrap gap-3 pt-2">
                <Button type="submit" variant="hero" className="min-h-[44px]">
                  Verify Details
                </Button>
                <Button type="button" variant="outline" className="min-h-[44px]" asChild>
                  <a href={mailtoHref}>
                    <Mail className="w-4 h-4 mr-2" />
                    Email Inquiry to Sales
                  </a>
                </Button>
              </div>
            </form>

            <aside className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              {items.length === 0 ? (
                <div className="py-4">
                  <p className="text-muted-foreground text-sm mb-4">Your cart is empty.</p>
                  <Button asChild variant="outline" className="w-full min-h-[44px]">
                    <Link to="/products">Browse Products</Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-3">
                    {items.map((item) => {
                      const product = products.find((p) => p.id === item.id);
                      if (!product) return null;
                      return (
                        <div key={item.id} className="flex justify-between gap-3 text-sm">
                          <span className="text-foreground/90">
                            {product.name} × {item.quantity}
                          </span>
                          <span className="font-medium tabular-nums shrink-0">
                            {formatPrice(product.price * item.quantity)}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="border-t border-border pt-4 flex justify-between font-semibold">
                    <span>Estimated Subtotal</span>
                    <span className="tabular-nums">{formatPrice(subtotal)} USD</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Final shipping charges and applicable taxes are calculated once carrier and compatibility are confirmed.
                  </p>
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
