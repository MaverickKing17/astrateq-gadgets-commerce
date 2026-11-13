import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import logo from "@/assets/astrateq-logo.webp";

const navigation = [["Home", "/"], ["Shop", "/products"], ["Solutions", "/solutions"], ["About Us", "/company/about-us"], ["Contact", "/contact"]];
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { count } = useCart();
  const navigate = useNavigate();
  const search = (event: React.FormEvent) => { event.preventDefault(); navigate(`/products${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ""}`); setSearchOpen(false); setMenuOpen(false); };
  return <header className="dark fixed top-0 inset-x-0 z-50 bg-background text-foreground border-b border-border"><div className="border-b border-border"><div className="container-wide py-2 flex justify-between gap-4 text-xs text-muted-foreground"><span>Automotive technology, thoughtfully selected.</span><Link to="/contact" className="text-primary shrink-0">Customer Support</Link></div></div><div className="container-wide flex items-center justify-between gap-4 py-4"><Link to="/" aria-label="Astrateq Gadgets home" className="shrink-0"><img src={logo} alt="Astrateq Gadgets" width="160" height="40" className="h-9 w-auto max-w-[160px]" /></Link><nav aria-label="Main navigation" className="hidden lg:flex gap-1">{navigation.map(([label, href]) => <Button variant="ghost" key={href} asChild><Link to={href}>{label}</Link></Button>)}</nav><div className="flex items-center gap-2"><Button variant="ghost" size="icon" aria-label="Search" aria-expanded={searchOpen} onClick={() => setSearchOpen(!searchOpen)}><Search /></Button><Button variant="ghost" className="relative" asChild><Link to="/cart" aria-label={`Shopping cart, ${count} items`}><ShoppingCart /><span className="text-sm tabular-nums">{count}</span></Link></Button><Button variant="ghost" size="icon" className="lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button></div></div>{searchOpen && <form onSubmit={search} className="container-wide pb-4 flex gap-2"><input autoFocus aria-label="Search catalogue" type="search" placeholder="Search products..." value={query} onChange={e => setQuery(e.target.value)} className="min-w-0 flex-1 rounded-md bg-card border border-border px-4 h-11 focus-visible:outline-ring" /><Button type="submit" aria-label="Submit search"><Search /></Button></form>}{menuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="lg:hidden container-wide pb-4 flex flex-col gap-1 max-h-[70vh] overflow-y-auto">{navigation.map(([label, href]) => <Button variant="ghost" className="justify-start" key={href} asChild><Link to={href} onClick={() => setMenuOpen(false)}>{label}</Link></Button>)}<Button variant="ghost" asChild className="justify-start"><Link to="/products" onClick={() => setMenuOpen(false)}>Product Categories</Link></Button></nav>}</header>;
}
