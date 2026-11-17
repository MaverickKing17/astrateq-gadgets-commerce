declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

export function trackAddToCart(productName: string, price: string) {
  trackEvent('add_to_cart', {
    currency: 'CAD',
    value: parseFloat(price.replace(/[^0-9.]/g, '')),
    items: [{ item_name: productName }],
  });
}

export function trackGenerateLead() {
  trackEvent('generate_lead', {
    currency: 'CAD',
    value: 0,
  });
}
