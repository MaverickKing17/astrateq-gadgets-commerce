import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Book, MessageCircle, Phone, Mail, ChevronRight } from "lucide-react";

const categories = [
  { title: "Getting Started", description: "Installation guides and setup tutorials", icon: Book, articles: 12 },
  { title: "Troubleshooting", description: "Common issues and solutions", icon: MessageCircle, articles: 24 },
  { title: "Account & Billing", description: "Manage your subscription and payments", icon: Mail, articles: 8 },
  { title: "Product Guides", description: "Detailed feature documentation", icon: Book, articles: 18 },
];

const popularArticles = [
  "How to install Driver Coach AI",
  "Connecting your device to the mobile app",
  "Understanding your safety score",
  "Troubleshooting connection issues",
  "Updating firmware on your device",
];

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-48 pb-20">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Help Center</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Find answers to your questions and get the support you need.
            </p>
            
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-electric-cyan transition-colors"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {categories.map((category) => (
              <div key={category.title} className="p-6 bg-card rounded-xl border border-border hover:border-electric-cyan/50 transition-colors cursor-pointer group">
                <category.icon className="w-10 h-10 text-electric-cyan mb-4" />
                <h3 className="font-heading font-semibold text-lg mb-2">{category.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                <span className="text-electric-cyan text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  {category.articles} articles <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            ))}
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6">Popular Articles</h2>
              <div className="space-y-3">
                {popularArticles.map((article) => (
                  <div key={article} className="p-4 bg-card rounded-lg border border-border hover:border-electric-cyan/50 transition-colors cursor-pointer flex items-center justify-between">
                    <span>{article}</span>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card rounded-xl border border-border p-8">
              <h2 className="text-2xl font-heading font-bold mb-4">Still need help?</h2>
              <p className="text-muted-foreground mb-6">
                Our support team is here to assist you with any questions or issues.
              </p>
              <div className="space-y-4">
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/contact">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Support
                  </Link>
                </Button>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4" /> 1-800-ASTRATEQ
                  </span>
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4" /> support@astrateq.com
                  </span>
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
