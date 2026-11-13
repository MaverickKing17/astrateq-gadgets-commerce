import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { storeConfig } from "@/config/store";
import { productCategories } from "@/lib/catalogue";
import logo from "@/assets/astrateq-logo.webp";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "About Us", href: "/company/about-us" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { count } = useCart();
  const navigate = useNavigate();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(
      `/products${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ""}`
    );
    setSearchOpen(false);
    setMenuOpen(false);
  };

  return (
    <header className="dark fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-md text-foreground border-b border-border">
      <div className="hidden md:block border-b border-border/70">
        <div className="container-wide py-1.5 flex items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>{storeConfig.tagline}</span>
          <div className="flex items-center gap-4 shrink-0">
            <Link to="/legal/shipping" className="hover:text-foreground transition-colors">
              Shipping Info
            </Link>
            <Link to="/contact" className="text-primary hover:underline">
              Customer Support
            </Link>
          </div>
        </div>
      </div>

      <div className="container-wide flex items-center justify-between gap-4 py-3 md:py-3.5">
        <Link
          to="/"
          aria-label={`${storeConfig.brandName} home`}
          className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
        >
          <img
            src={logo}
            alt={storeConfig.brandName}
            width="160"
            height="40"
            className="h-8 md:h-9 w-auto max-w-[150px]"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-6">
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/"}
              className={({ isActive }) =>
                `text-sm font-medium whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm ${
                  isActive
                    ? "text-primary border-primary"
                    : "text-foreground/85 border-transparent hover:text-primary hover:border-primary/40"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <Button
            variant="ghost"
            size="icon"
            className="h-11 w-11"
            aria-label={searchOpen ? "Close search" : "Open search"}
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((open) => !open)}
          >
            {searchOpen ? <X /> : <Search />}
          </Button>

          <Button
            variant="ghost"
            className="relative h-11 px-3 gap-2 whitespace-nowrap shrink-0"
            asChild
          >
            <Link to="/cart" aria-label={`Shopping cart, ${count} items`}>
              <ShoppingCart className="w-5 h-5" />
              <span className="text-sm font-semibold tabular-nums">{count}</span>
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-11 w-11"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {searchOpen && (
        <form
          onSubmit={handleSearch}
          className="container-wide pb-4 pt-1 flex gap-2 border-t border-border/50"
        >
          <input
            autoFocus
            aria-label="Search catalogue"
            type="search"
            placeholder="Search automotive hardware..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="min-w-0 flex-1 rounded-md bg-card border border-border px-4 h-11 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
          <Button type="submit" className="h-11 px-5 whitespace-nowrap shrink-0">
            Search
          </Button>
        </form>
      )}

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="lg:hidden container-wide pb-5 pt-2 flex flex-col gap-1 border-t border-border/60 max-h-[75vh] overflow-y-auto"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-3 text-base font-medium rounded-md text-foreground hover:bg-card hover:text-primary transition-colors min-h-[44px] flex items-center"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 mt-2 border-t border-border/60">
            <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Categories
            </p>
            {productCategories
              .filter((cat) => cat !== "All products")
              .map((category) => (
                <Link
                  key={category}
                  to={`/products?category=${encodeURIComponent(category)}`}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2.5 text-sm rounded-md text-foreground/85 hover:bg-card hover:text-primary transition-colors min-h-[44px] flex items-center"
                >
                  {category}
                </Link>
              ))}
          </div>
        </nav>
      )}
    </header>
  );
}
