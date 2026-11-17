import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { products } from "@/lib/catalogue";

const COMPARE_STORAGE_KEY = "astrateq-compare-v1";

interface CompareContextValue {
  compareIds: string[];
  toggleCompare: (id: string) => void;
  setCompareIds: (ids: string[]) => void;
  isComparing: (id: string) => boolean;
  clearCompare: () => void;
}

const CompareContext = createContext<CompareContextValue | undefined>(undefined);

const validIds = new Set(products.map((p) => p.id));

export function CompareProvider({ children }: { children: ReactNode }) {
  const [compareIds, setCompareIdsState] = useState<string[]>(() => {
    try {
      const parsed = JSON.parse(localStorage.getItem(COMPARE_STORAGE_KEY) ?? "[]");
      if (!Array.isArray(parsed)) return [];
      return parsed.filter((id): id is string => typeof id === "string" && validIds.has(id)).slice(0, 3);
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(COMPARE_STORAGE_KEY, JSON.stringify(compareIds));
    } catch {
      // Comparison remains usable in memory without localStorage access.
    }
  }, [compareIds]);

  const setCompareIds = (ids: string[]) => {
    const clean = Array.from(new Set(ids)).filter((id) => validIds.has(id)).slice(0, 3);
    setCompareIdsState(clean);
  };

  const toggleCompare = (id: string) => {
    if (!validIds.has(id)) return;
    setCompareIdsState((prev) => {
      if (prev.includes(id)) return prev.filter((item) => item !== id);
      if (prev.length >= 3) return [...prev.slice(1), id];
      return [...prev, id];
    });
  };

  const isComparing = (id: string) => compareIds.includes(id);
  const clearCompare = () => setCompareIdsState([]);

  return (
    <CompareContext.Provider
      value={{ compareIds, toggleCompare, setCompareIds, isComparing, clearCompare }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const ctx = useContext(CompareContext);
  if (!ctx) {
    throw new Error("useCompare must be used inside CompareProvider");
  }
  return ctx;
}
