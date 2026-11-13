import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-heading font-semibold uppercase tracking-wider ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-safety-ember text-midnight-charcoal hover:bg-safety-ember-hover hover:-translate-y-0.5 shadow-[0_0_20px_hsl(var(--safety-ember)/0.35),0_0_60px_hsl(var(--safety-ember)/0.15)] hover:shadow-[0_0_30px_hsl(var(--safety-ember)/0.5),0_0_80px_hsl(var(--safety-ember)/0.25)] backdrop-blur-sm font-bold",
        "hero-ghost": "border-2 border-pure-white/80 text-pure-white bg-pure-white/5 backdrop-blur-md hover:bg-pure-white/10 hover:border-safety-ember hover:text-safety-ember hover:shadow-[0_0_20px_hsl(var(--safety-ember)/0.3)]",
        premium: "bg-gradient-to-r from-safety-ember to-safety-ember-hover text-midnight-charcoal hover:shadow-xl hover:shadow-safety-ember/30 font-bold",
        dark: "bg-midnight-charcoal text-pure-white hover:bg-slate-grey",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-14 rounded-lg px-8 text-base",
        xl: "h-16 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
