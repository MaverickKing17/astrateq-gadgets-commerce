import { useState } from "react";
import { Mail, AlertCircle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { storeConfig } from "@/config/store";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "idle" | "error" | "unconfigured" | "success";
    message?: string;
  }>({ type: "idle" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setFeedback({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    const endpoint = import.meta.env.VITE_NEWSLETTER_ENDPOINT;
    if (!endpoint) {
      setFeedback({
        type: "unconfigured",
        message: `Automated newsletter signup is not yet connected in this environment. You can contact ${storeConfig.support.email} for product release updates.`,
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      if (!response.ok) {
        throw new Error("Subscription failed");
      }
      setFeedback({
        type: "success",
        message: "You're subscribed for product release and hardware updates.",
      });
      setEmail("");
    } catch {
      setFeedback({
        type: "error",
        message: `We could not process your request right now. Please try again or email ${storeConfig.support.email}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-grey-100 text-foreground border-t border-border">
      <div className="container-narrow text-center">
        <div className="w-12 h-12 mx-auto mb-5 rounded-lg bg-midnight-charcoal flex items-center justify-center">
          <Mail className="w-6 h-6 text-electric-cyan" />
        </div>

        <h2 className="text-3xl font-heading font-bold mb-3">
          Product Updates & Availability Notices
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-sm sm:text-base">
          Receive product release updates, compatibility expansions, and hardware announcements.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4"
          noValidate
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <Input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (feedback.type !== "idle") setFeedback({ type: "idle" });
            }}
            className="flex-1 h-12 bg-pure-white border-grey-200 text-midnight-charcoal"
            required
          />
          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="h-12 min-w-[130px]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Subscribe"}
          </Button>
        </form>

        {feedback.type !== "idle" && feedback.message && (
          <div
            role="status"
            className={`max-w-md mx-auto mb-4 rounded-lg border px-4 py-3 text-left text-xs flex items-start gap-2 ${
              feedback.type === "success"
                ? "bg-success/10 border-success/30 text-foreground"
                : feedback.type === "error"
                ? "bg-destructive/10 border-destructive/30 text-destructive"
                : "bg-card border-border text-muted-foreground"
            }`}
          >
            {feedback.type === "success" ? (
              <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            )}
            <span>{feedback.message}</span>
          </div>
        )}

        <p className="text-xs text-muted-foreground">
          Review how we handle personal data in our{" "}
          <Link to="/legal/privacy" className="text-midnight-charcoal font-medium underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
