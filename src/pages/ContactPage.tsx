import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle2, Clock } from "lucide-react";
import { trackGenerateLead } from "@/lib/analytics";
import { storeConfig } from "@/config/store";

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const initialSubject = searchParams.get("subject") ?? "";
  const initialVehicle = searchParams.get("vehicle") ?? "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: initialSubject,
    message: initialVehicle
      ? `Vehicle: ${initialVehicle}\n\nPlease confirm compatibility, availability, and shipping details.`
      : "",
  });

  useEffect(() => {
    if (initialSubject || initialVehicle) {
      setFormData((prev) => ({
        ...prev,
        subject: prev.subject || initialSubject,
        message:
          prev.message ||
          (initialVehicle
            ? `Vehicle: ${initialVehicle}\n\nPlease confirm compatibility, availability, and shipping details.`
            : ""),
      }));
    }
  }, [initialSubject, initialVehicle]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "error" | "unconfigured" | "success";
    message?: string;
  }>({ type: "idle" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !subject || !message) {
      setStatus({ type: "error", message: "Please complete all required fields." });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT?.trim();
    if (!endpoint) {
      setStatus({
        type: "unconfigured",
        message: `Automated form delivery is not configured in this environment. Use the "Open Email Draft" button below or email ${storeConfig.support.email} directly.`,
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (!response.ok) {
        throw new Error("Contact submission failed");
      }
      trackGenerateLead();
      setStatus({
        type: "success",
        message: "Thank you. Your message has been sent to our support team.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus({
        type: "error",
        message: `Could not submit the form right now. Please email ${storeConfig.support.email} directly.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoHref = `mailto:${storeConfig.support.email}?subject=${encodeURIComponent(
    formData.subject || "Astrateq Support Inquiry"
  )}&body=${encodeURIComponent(
    `Name: ${formData.name || ""}\nReply Email: ${formData.email || ""}\n\n${formData.message || ""}`
  )}`;

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              Customer Support & Compatibility
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Questions about vehicle fitment, fleet pricing, shipping, or returns? Reach out to our team directly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="bg-card rounded-xl p-6 sm:p-8 border border-border">
              <h2 className="text-2xl font-heading font-semibold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-11 px-4 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-11 px-4 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full h-11 px-4 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full p-4 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                    required
                  />
                </div>

                {status.type !== "idle" && status.message && (
                  <div
                    role="status"
                    className={`rounded-lg border p-3.5 text-xs flex items-start gap-2.5 ${
                      status.type === "success"
                        ? "bg-success/10 border-success/30 text-foreground"
                        : status.type === "error"
                        ? "bg-destructive/10 border-destructive/30 text-destructive"
                        : "bg-background border-border text-muted-foreground"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="min-h-[44px] flex-1"
                    disabled={isSubmitting}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  <Button type="button" variant="outline" size="lg" className="min-h-[44px]" asChild>
                    <a href={mailtoHref}>Open Email Draft</a>
                  </Button>
                </div>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 sm:p-8 border border-border">
                <h2 className="text-2xl font-heading font-semibold mb-6">Direct Contact Details</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Email</h3>
                      <a
                        href={`mailto:${storeConfig.support.email}`}
                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        {storeConfig.support.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Phone</h3>
                      <p className="text-muted-foreground text-sm">{storeConfig.support.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Support Hours</h3>
                      <p className="text-muted-foreground text-sm">{storeConfig.support.hours}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Marketing Office</h3>
                      <p className="text-muted-foreground text-sm">{storeConfig.address.office}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 sm:p-8 border border-border">
                <h3 className="text-lg font-heading font-semibold mb-2">Looking for Self-Service Answers?</h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  Review our installation guides, shipping schedule, and return policy before reaching out.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" className="min-h-[40px]" asChild>
                    <Link to="/support/help-center">Help Center</Link>
                  </Button>
                  <Button variant="outline" className="min-h-[40px]" asChild>
                    <Link to="/support/installation">Installation Guide</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
