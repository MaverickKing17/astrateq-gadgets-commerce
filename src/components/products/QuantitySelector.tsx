import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function QuantitySelector({ value, onChange, label = "Quantity" }: { value: number; onChange: (value: number) => void; label?: string }) {
  return <div className="inline-flex h-11 items-center border border-border rounded-md" role="group" aria-label={label}>
    <Button variant="ghost" size="icon" aria-label={`Decrease ${label.toLowerCase()}`} disabled={value <= 1} onClick={() => onChange(value - 1)}><Minus /></Button>
    <input aria-label={label} type="number" min="1" step="1" value={value} onChange={e => { const next = Number(e.target.value); if (Number.isSafeInteger(next) && next > 0) onChange(next); }} className="w-12 h-full bg-transparent text-center text-foreground focus-visible:outline-ring" />
    <Button variant="ghost" size="icon" aria-label={`Increase ${label.toLowerCase()}`} onClick={() => onChange(value + 1)}><Plus /></Button>
  </div>;
}