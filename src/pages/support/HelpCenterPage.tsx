import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, MessageCircle, Phone, Mail, ChevronDown } from "lucide-react";
import { storeConfig } from "@/config/store";

const faqs = [
  {
    category: "Compatibility",
    question: "How do I confirm if a unit works with my vehicle?",
    answer:
      "Send your vehicle make, model, and year via our Contact page or email support@astrateq.com prior to ordering so we can verify connector and cabin fitment.",
  },
  {
    category: "Installation",
    question: "Does installation require permanent wiring changes?",
    answer:
      "Our windshield-mounted and OBD-II hardware options are designed to connect cleanly without modifying factory wiring. Step-by-step guidance is available on our Installation Guide page.",
  },
  {
    category: "Orders & Checkout",
    question: "Why doesn't the cart charge my card online?",
    answer:
      "Online payment processing is currently separated from the storefront until payment integration is activated. Checkout prepares an inquiry summary for manual confirmation.",
  },
  {
    category: "Shipping & Returns",
    question: "Where can I review shipping and return terms?",
    answer:
      "Carrier options, delivery timelines, and return procedures are detailed in our Shipping Policy and Refund Policy pages.",
  },
  {
    category: "Warranty",
    question: "How are hardware warranty terms provided?",
    answer:
      "Written warranty and support terms for each hardware unit are confirmed with you before an order is accepted.",
  },
];

export default function HelpCenterPage() {
  const [query, setQuery] = useState("");
  const filteredFaqs = faqs.filter((item) =>
    `${item.category} ${item.question} ${item.answer}`
      .toLowerCase()
      .includes(query.trim().toLowerCase())
  );

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              Customer Support
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Help Center
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Search common questions about vehicle compatibility, installation, shipping, and orders.
            </p>

            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="search"
                aria-label="Search help topics"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search help topics..."
                className="w-full h-12 pl-12 pr-4 bg-card border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-start">
            <div>
              <h2 className="text-xl font-heading font-semibold mb-4">
                Frequently Asked Questions
              </h2>
              {filteredFaqs.length === 0 ? (
                <div className="p-8 bg-card rounded-xl border border-border text-center">
                  <p className="text-muted-foreground text-sm mb-4">
                    No matching help topics found for "{query}".
                  </p>
                  <Button variant="outline" onClick={() => setQuery("")}>
                    Reset Search
                  </Button>
                </div>
              ) : (
                <div className="divide-y divide-border border-y border-border">
                  {filteredFaqs.map((item) => (
                    <details key={item.question} className="py-4 group">
                      <summary className="font-medium cursor-pointer flex items-center justify-between gap-4 list-none">
                        <span>
                          <span className="text-xs text-primary uppercase tracking-wider block mb-1">
                            {item.category}
                          </span>
                          {item.question}
                        </span>
                        <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
                      </summary>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-card rounded-xl border border-border p-6">
              <h2 className="text-xl font-heading font-semibold mb-3">
                Still Need Assistance?
              </h2>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                Reach our team during {storeConfig.support.hours}.
              </p>
              <div className="space-y-4">
                <Button variant="hero" className="w-full min-h-[44px]" asChild>
                  <Link to="/contact">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Support
                  </Link>
                </Button>
                <div className="space-y-2 text-xs text-muted-foreground pt-2 border-t border-border">
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    {storeConfig.support.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    {storeConfig.support.email}
                  </p>
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
