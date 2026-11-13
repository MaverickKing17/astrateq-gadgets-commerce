import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import { products, filterProducts } from "@/lib/catalogue";

export default function ProductsPage() {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") ?? "";
  const [category, setCategory] = useState("All products");
  const shown = filterProducts(query, category);
  return <div className="dark min-h-screen bg-background text-foreground"><Header /><main className="pt-40 pb-20"><div className="container-wide"><p className="text-primary text-sm mb-3">ASTRATEQ GADGETS</p><h1 className="text-4xl md:text-5xl font-bold mb-5">Shop Automotive Technology</h1><p className="text-muted-foreground max-w-2xl mb-10">Browse our driving, fleet, and electric-vehicle collection. Check compatibility and availability with our team before placing an order.</p><div className="flex flex-col md:flex-row gap-4 mb-8"><div className="flex items-center gap-3 border border-border rounded-md px-4 flex-1"><Search size={18} className="text-muted-foreground" /><input aria-label="Search products" value={query} onChange={e => setParams(e.target.value ? { q: e.target.value } : {}, { replace: true })} type="search" placeholder="Search products..." className="w-full h-12 bg-transparent focus-visible:outline-ring" /></div><select aria-label="Product category" value={category} onChange={e => setCategory(e.target.value)} className="bg-card border border-border rounded-md px-4 h-12"><option>All products</option>{products.map(p => <option key={p.category}>{p.category}</option>)}</select></div><p className="text-sm text-muted-foreground mb-6" aria-live="polite">{shown.length} {shown.length === 1 ? "product" : "products"}</p>{shown.length ? <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{shown.map(p => <ProductCard key={p.id} product={p} />)}</div> : <div className="py-20 text-center"><h2 className="text-xl mb-3">No matching products</h2><p className="text-muted-foreground mb-5">Try another search or category.</p><Button variant="outline" onClick={() => { setParams({}); setCategory("All products"); }}>Clear Filters</Button></div>}<p className="text-xs text-muted-foreground mt-6">Illustrative product renderings. Final product photography pending.</p></div></main><Footer /></div>;
}
