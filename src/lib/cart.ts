export interface CartItem { id: string; quantity: number }

export function sanitizeCart(value: unknown, productIds: string[]): CartItem[] {
  if (!Array.isArray(value)) return [];
  const quantities = new Map<string, number>();
  for (const item of value) {
    if (!item || typeof item.id !== "string" || !productIds.includes(item.id) || !Number.isSafeInteger(item.quantity) || item.quantity <= 0) continue;
    const quantity = (quantities.get(item.id) ?? 0) + item.quantity;
    if (Number.isSafeInteger(quantity)) quantities.set(item.id, quantity);
  }
  return [...quantities].map(([id, quantity]) => ({ id, quantity }));
}

export function changeQuantity(items: CartItem[], id: string, quantity: number): CartItem[] {
  if (!Number.isSafeInteger(quantity) || quantity < 0) return items;
  if (quantity === 0) return items.filter(item => item.id !== id);
  return items.map(item => item.id === id ? { ...item, quantity } : item);
}

export function cartSubtotal(items: CartItem[], prices: Record<string, number>): number {
  return items.reduce((total, item) => total + Math.round((prices[item.id] ?? 0) * 100) * item.quantity, 0) / 100;
}