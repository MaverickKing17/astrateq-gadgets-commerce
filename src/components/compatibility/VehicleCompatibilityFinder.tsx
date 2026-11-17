import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Car,
  ArrowRight,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  COMPATIBILITY_PROTOTYPE_NOTICE,
  VEHICLE_MAKES_MODELS,
  VEHICLE_YEARS,
  evaluateVehicleCompatibility,
  type CompatibilityState,
} from "@/lib/compatibility";
import { formatPrice } from "@/lib/catalogue";

interface VehicleCompatibilityFinderProps {
  lockedProductId?: string;
  compact?: boolean;
}

const stateBadgeStyles: Record<
  CompatibilityState,
  { icon: typeof CheckCircle2; textClass: string; borderClass: string }
> = {
  verified: {
    icon: CheckCircle2,
    textClass: "text-success",
    borderClass: "border-success/40 bg-success/5",
  },
  confirmation_required: {
    icon: AlertTriangle,
    textClass: "text-warning",
    borderClass: "border-warning/40 bg-warning/5",
  },
  not_verified: {
    icon: HelpCircle,
    textClass: "text-destructive",
    borderClass: "border-destructive/40 bg-destructive/5",
  },
};

export function VehicleCompatibilityFinder({
  lockedProductId,
  compact = false,
}: VehicleCompatibilityFinderProps) {
  const makes = useMemo(() => Object.keys(VEHICLE_MAKES_MODELS), []);
  const [year, setYear] = useState<string>(VEHICLE_YEARS[2]);
  const [make, setMake] = useState<string>(makes[0]);

  const availableModels = useMemo(
    () => VEHICLE_MAKES_MODELS[make] ?? [],
    [make]
  );
  const [model, setModel] = useState<string>(availableModels[0]?.model ?? "");

  const availableTrims = useMemo(
    () => availableModels.find((m) => m.model === model)?.trims ?? [],
    [availableModels, model]
  );
  const [trim, setTrim] = useState<string>(availableTrims[0]?.label ?? "");
  const [hasChecked, setHasChecked] = useState(false);

  const handleMakeChange = (nextMake: string) => {
    setMake(nextMake);
    const nextModels = VEHICLE_MAKES_MODELS[nextMake] ?? [];
    const firstModel = nextModels[0];
    setModel(firstModel?.model ?? "");
    setTrim(firstModel?.trims[0]?.label ?? "");
  };

  const handleModelChange = (nextModel: string) => {
    setModel(nextModel);
    const nextTrims =
      availableModels.find((m) => m.model === nextModel)?.trims ?? [];
    setTrim(nextTrims[0]?.label ?? "");
  };

  const results = useMemo(() => {
    if (!hasChecked) return [];
    return evaluateVehicleCompatibility(
      { year, make, model, trim },
      lockedProductId
    );
  }, [hasChecked, year, make, model, trim, lockedProductId]);

  const trimRequiresNote = availableTrims.some((t) => t.requiresTrimNote);

  return (
    <section
      aria-labelledby="compatibility-finder-heading"
      className={`rounded-xl border border-border bg-card text-card-foreground ${
        compact ? "p-6" : "p-6 sm:p-8"
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6 pb-5 border-b border-border/70">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-2">
            <Car className="w-4 h-4" />
            <span>Pre-Production Prototype</span>
          </div>
          <h2
            id="compatibility-finder-heading"
            className={`font-heading font-semibold ${
              compact ? "text-xl" : "text-2xl sm:text-3xl"
            }`}
          >
            Vehicle Compatibility Finder
          </h2>
          <p className="text-sm text-muted-foreground mt-1.5 max-w-2xl leading-relaxed">
            Select your vehicle year, make, model, and powertrain/trim to preview preliminary fitment status.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-background/70 px-3.5 py-2.5 text-xs text-muted-foreground max-w-md flex items-start gap-2.5">
          <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-foreground mb-0.5">
              {COMPATIBILITY_PROTOTYPE_NOTICE.title}
            </p>
            <p className="leading-relaxed">
              {COMPATIBILITY_PROTOTYPE_NOTICE.requiredDataIntegration}
            </p>
          </div>
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setHasChecked(true);
        }}
        className="grid sm:grid-cols-2 lg:grid-cols-[140px_1fr_1fr_1fr_auto] gap-3 items-end"
      >
        <div>
          <label
            htmlFor={`compat-year-${lockedProductId ?? "all"}`}
            className="block text-xs font-medium text-muted-foreground mb-1.5"
          >
            Year
          </label>
          <select
            id={`compat-year-${lockedProductId ?? "all"}`}
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full h-11 px-3 rounded-lg bg-background border border-border text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {VEHICLE_YEARS.map((yr) => (
              <option key={yr} value={yr}>
                {yr}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor={`compat-make-${lockedProductId ?? "all"}`}
            className="block text-xs font-medium text-muted-foreground mb-1.5"
          >
            Make
          </label>
          <select
            id={`compat-make-${lockedProductId ?? "all"}`}
            value={make}
            onChange={(e) => handleMakeChange(e.target.value)}
            className="w-full h-11 px-3 rounded-lg bg-background border border-border text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {makes.map((mk) => (
              <option key={mk} value={mk}>
                {mk}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor={`compat-model-${lockedProductId ?? "all"}`}
            className="block text-xs font-medium text-muted-foreground mb-1.5"
          >
            Model
          </label>
          <select
            id={`compat-model-${lockedProductId ?? "all"}`}
            value={model}
            onChange={(e) => handleModelChange(e.target.value)}
            className="w-full h-11 px-3 rounded-lg bg-background border border-border text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {availableModels.map((item) => (
              <option key={item.model} value={item.model}>
                {item.model}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor={`compat-trim-${lockedProductId ?? "all"}`}
            className="block text-xs font-medium text-muted-foreground mb-1.5"
          >
            Trim / Powertrain{trimRequiresNote ? " (Required)" : ""}
          </label>
          <select
            id={`compat-trim-${lockedProductId ?? "all"}`}
            value={trim}
            onChange={(e) => setTrim(e.target.value)}
            className="w-full h-11 px-3 rounded-lg bg-background border border-border text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {availableTrims.map((t) => (
              <option key={t.label} value={t.label}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        <Button type="submit" className="h-11 px-5 whitespace-nowrap shrink-0">
          Check Compatibility
        </Button>
      </form>

      {hasChecked && (
        <div className="mt-6 pt-6 border-t border-border/70 space-y-4" aria-live="polite">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
            <span>
              Vehicle selected:{" "}
              <strong className="text-foreground">
                {year} {make} {model} — {trim}
              </strong>
            </span>
            <span>Prototype rules active (no OEM VIN/fitment DB connected)</span>
          </div>

          <div
            className={`grid gap-4 ${
              results.length > 1 ? "md:grid-cols-3" : "grid-cols-1"
            }`}
          >
            {results.map(({ product, state, stateLabel, summary, nextStep }) => {
              const style = stateBadgeStyles[state];
              const StateIcon = style.icon;
              const contactQuery = new URLSearchParams({
                subject: `Compatibility Check: ${product.shortName} (${year} ${make} ${model})`,
                vehicle: `${year} ${make} ${model} (${trim})`,
              }).toString();

              return (
                <div
                  key={product.id}
                  className={`rounded-lg border p-4 flex flex-col justify-between ${style.borderClass}`}
                >
                  <div>
                    <div className={`flex items-center gap-2 text-xs font-semibold mb-2 ${style.textClass}`}>
                      <StateIcon className="w-4 h-4 shrink-0" />
                      <span>{stateLabel}</span>
                    </div>
                    {!lockedProductId && (
                      <div className="flex items-baseline justify-between gap-2 mb-1.5">
                        <h3 className="font-semibold text-sm text-foreground">
                          {product.name}
                        </h3>
                        <span className="text-xs font-medium tabular-nums text-muted-foreground shrink-0">
                          {formatPrice(product.price)} {product.currency}
                        </span>
                      </div>
                    )}
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                      {summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/50 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <Link
                      to={`/contact?${contactQuery}`}
                      className="text-primary font-medium hover:underline inline-flex items-center gap-1"
                    >
                      Confirm with Support
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {!lockedProductId && (
                      <Link
                        to={product.link}
                        className="text-foreground/80 hover:text-primary transition-colors"
                      >
                        Product Details
                      </Link>
                    )}
                    {lockedProductId && (
                      <span className="text-muted-foreground">{nextStep}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
