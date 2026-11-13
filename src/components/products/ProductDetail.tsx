import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ShoppingCart } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { QuantitySelector } from "./QuantitySelector";
import { ProductCard } from "./ProductCard";
import { products, formatPrice } from "@/lib/catalogue";
import { useCart } from "@/contexts/CartContext";

export function ProductDetail({ id }: { id: string }) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const product = products.find(p => p.id === id);
  if (!product) return null;
  return <div className="dark min-h-screen bg-background text-foreground"><Header /><main className="pt-40 pb-20"><div className="container-wide">
    <Link to="/products" className="inline-flex gap-2 items-center text-muted-foreground hover:text-primary mb-8"><ArrowLeft size={16} />Back to Shop</Link>
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
      <figure><div className="aspect-square overflow-hidden rounded-lg bg-card border border-border"><img src={product.image} alt={`${product.name} — illustrative product rendering`} className="w-full h-full object-contain" width="768" height="768" /></div><figcaption className="text-xs text-muted-foreground mt-3">Illustrative product rendering. Final product photography pending.</figcaption></figure>
      <div><p className="text-primary text-sm mb-4">{product.category}</p><h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-5">{product.name}</h1><p className="text-muted-foreground text-lg leading-relaxed mb-6">{product.description}</p><p className="text-3xl font-semibold mb-2">{formatPrice(product.price)} <span className="text-sm text-muted-foreground">USD</span></p><p className="text-sm text-muted-foreground mb-6">Availability to be confirmed before ordering.</p>
      <div className="flex flex-wrap gap-3 mb-4"><QuantitySelector value={quantity} onChange={setQuantity} /><Button onClick={() => addItem(product.id, quantity)}><ShoppingCart />Add to Cart</Button><Button variant="outline" asChild><Link to="/cart">View Cart<ArrowRight /></Link></Button></div>
      <p className="text-xs text-muted-foreground mb-8">Online payments are not enabled. Adding to cart does not place an order.</p>
      <div className="divide-y divide-border border-y border-border">
        <details open className="py-5"><summary className="font-semibold cursor-pointer">Product information & compatibility</summary><p className="mt-3 text-sm text-muted-foreground leading-relaxed">Confirm your vehicle make, model, year, installation requirements, included hardware, and any ongoing service fees with our team before purchasing. Verified technical specifications and a compatibility list are not yet available for this listing.</p></details>
        <details className="py-5"><summary className="font-semibold cursor-pointer">Shipping & returns</summary><p className="mt-3 text-sm text-muted-foreground">Delivery estimates, shipping charges, and applicable taxes must be confirmed before an order is accepted.</p><div className="flex flex-wrap gap-4 mt-3 text-sm text-primary"><Link to="/legal/shipping">Shipping policy</Link><Link to="/legal/refund">Returns & refunds</Link></div></details>
        <details className="py-5"><summary className="font-semibold cursor-pointer">Warranty & support</summary><p className="mt-3 text-sm text-muted-foreground">Ask for the applicable written warranty and support terms for this product before ordering.</p><Link to="/contact" className="inline-block text-sm text-primary mt-3">Contact support</Link></details>
      </div></div>
    </div>
    <section className="mt-20"><h2 className="text-2xl font-semibold mb-8">Explore the collection</h2><div className="grid md:grid-cols-2 gap-6">{products.filter(p => p.id !== id).map(p => <ProductCard key={p.id} product={p} />)}</div></section>
  </div></main><Footer /></div>;
}