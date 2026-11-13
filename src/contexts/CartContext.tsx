import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { products } from "@/lib/catalogue";
import { cartSubtotal, changeQuantity, sanitizeCart, type CartItem } from "@/lib/cart";
import { trackAddToCart } from "@/lib/analytics";
import { toast } from "sonner";

const STORAGE_KEY = "astrateq-cart-v1";
interface CartValue {
  items: CartItem[];
  count: number;
  subtotal: number;
  addItem: (id: string, quantity?: number) => void;
  setQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
}
const CartContext = createContext<CartValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try { return sanitizeCart(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]"), products.map(p => p.id)); } catch { return []; }
  });
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); } catch { /* Cart remains usable without storage access. */ }
  }, [items]);
  const addItem = (id: string, quantity = 1) => {
    const product = products.find(p => p.id === id);
    if (!product || !Number.isSafeInteger(quantity) || quantity <= 0) return;
    setItems(current => {
      const existing = current.find(item => item.id === id);
      const nextQuantity = (existing?.quantity ?? 0) + quantity;
      if (!Number.isSafeInteger(nextQuantity)) return current;
      return existing ? changeQuantity(current, id, nextQuantity) : [...current, { id, quantity }];
    });
    trackAddToCart(product.name, String(product.price * quantity));
    toast.success("Added to cart", { description: product.name });
  };
  return <CartContext.Provider value={{ items, addItem, count: items.reduce((sum, item) => sum + item.quantity, 0), subtotal: cartSubtotal(items, Object.fromEntries(products.map(p => [p.id, p.price]))), setQuantity: (id, quantity) => setItems(current => changeQuantity(current, id, quantity)), removeItem: id => setItems(current => current.filter(item => item.id !== id)) }}>{children}</CartContext.Provider>;
}

export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) throw new Error("Shopping controls require CartProvider");
  return cart;
}