import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ChevronRight, Tag } from "lucide-react";

const posts = [
  {
    title: "How AI is Revolutionizing Fleet Management",
    excerpt: "Discover how predictive maintenance and AI-powered analytics are transforming the way businesses manage their vehicle fleets.",
    date: "Dec 5, 2025",
    readTime: "5 min read",
    category: "Technology",
  },
  {
    title: "The Future of EV Battery Health Monitoring",
    excerpt: "Learn about the latest advances in battery health technology and what it means for electric vehicle owners.",
    date: "Dec 1, 2025",
    readTime: "4 min read",
    category: "EV Technology",
  },
  {
    title: "5 Ways Driver Coach AI Improves Safety",
    excerpt: "Real-world data shows how AI coaching has helped thousands of drivers develop safer habits on the road.",
    date: "Nov 28, 2025",
    readTime: "6 min read",
    category: "Safety",
  },
  {
    title: "Astrateq Named to Forbes AI 50",
    excerpt: "We're proud to be recognized among the most promising AI companies transforming industries.",
    date: "Nov 20, 2025",
    readTime: "2 min read",
    category: "Company News",
  },
  {
    title: "Understanding Predictive Maintenance",
    excerpt: "How machine learning algorithms can predict vehicle issues weeks before they become problems.",
    date: "Nov 15, 2025",
    readTime: "7 min read",
    category: "Technology",
  },
  {
    title: "Web3 and the Future of Vehicle Warranties",
    excerpt: "Exploring how NFT-based warranties are creating new possibilities for vehicle ownership.",
    date: "Nov 10, 2025",
    readTime: "5 min read",
    category: "Web3",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-48 pb-20">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, updates, and stories from the world of automotive AI technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.title} className="bg-card rounded-xl border border-border overflow-hidden hover:border-electric-cyan/50 transition-colors cursor-pointer group">
                <div className="aspect-video bg-gradient-to-br from-electric-cyan/20 to-transparent" />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs text-electric-cyan mb-3">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                  <h2 className="text-xl font-heading font-bold mb-2 group-hover:text-electric-cyan transition-colors">{post.title}</h2>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                  <span className="text-electric-cyan text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">Load More Articles</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
