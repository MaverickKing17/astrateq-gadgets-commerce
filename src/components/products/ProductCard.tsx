import { Link } from "react-router-dom";
import { ShoppingCart, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { formatPrice, type Product } from "@/lib/catalogue";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  return <article className="group flex flex-col bg-card text-card-foreground rounded-lg border border-border overflow-hidden transition-colors hover:border-primary/50">
    <Link to={product.link} className="block aspect-square overflow-hidden bg-background" aria-label={`View ${product.name}`}><img src={product.image} alt={`${product.name} — illustrative product rendering`} width="768" height="768" loading="lazy" className="w-full h-full object-contain transition-transform duration-300 motion-safe:group-hover:scale-[1.03]" /></Link>
    <div className="p-6 flex flex-col flex-1"><p className="text-xs text-primary mb-3">{product.category}</p><h3 className="text-xl font-semibold leading-snug mb-3"><Link to={product.link} className="hover:text-primary">{product.name}</Link></h3><p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{product.description}</p><p className="text-2xl font-semibold mb-2">{formatPrice(product.price)} <span className="text-xs text-muted-foreground">USD</span></p><p className="text-xs text-muted-foreground mb-5">Availability to be confirmed</p><Button className="w-full" onClick={() => addItem(product.id)}><ShoppingCart />Add to Cart</Button><Button variant="ghost" className="mt-2" asChild><Link to={product.link}>Product Details<ArrowUpRight /></Link></Button></div>
  </article>;
}
