import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://astrateqgadgets.com";

export function CanonicalTag() {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonicalUrl = `${BASE_URL}${pathname === "/" ? "" : pathname}`;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    
    link.setAttribute("href", canonicalUrl);
  }, [pathname]);

  return null;
}
