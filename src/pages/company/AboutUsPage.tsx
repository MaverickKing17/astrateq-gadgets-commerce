import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Award, Globe } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-48 pb-20">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text-light">About Astrateq</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Headquartered at 100 King Street West, Toronto, ON M5X 1A9, Canada — we're on a mission to make roads safer through AI-powered technology that predicts and prevents accidents before they happen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center p-8 bg-card rounded-xl border border-border">
              <Users className="w-12 h-12 text-electric-cyan mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">50K+</div>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            <div className="text-center p-8 bg-card rounded-xl border border-border">
              <Target className="w-12 h-12 text-electric-cyan mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">94%</div>
              <p className="text-muted-foreground">Prediction Accuracy</p>
            </div>
            <div className="text-center p-8 bg-card rounded-xl border border-border">
              <Award className="w-12 h-12 text-electric-cyan mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="text-muted-foreground">Industry Awards</p>
            </div>
            <div className="text-center p-8 bg-card rounded-xl border border-border">
              <Globe className="w-12 h-12 text-electric-cyan mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">30+</div>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                At Astrateq, we believe that advanced technology should make driving safer for everyone. Our AI-powered solutions analyze driving patterns, predict maintenance needs, and provide real-time coaching to help drivers improve their habits.
              </p>
              <p className="text-muted-foreground mb-4">
                Founded in 2019 by automotive engineers and AI researchers, we've grown from a small startup to a leader in predictive automotive safety technology.
              </p>
              <Button variant="hero" asChild>
                <Link to="/company/our-story">Read Our Story</Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-electric-cyan/20 to-transparent p-12 rounded-2xl border border-electric-cyan/30">
              <blockquote className="text-2xl font-heading italic mb-4">
                "We envision a future where preventable accidents become a thing of the past."
              </blockquote>
              <p className="text-electric-cyan font-semibold">— Dr. Sarah Chen, CEO & Co-Founder</p>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold mb-8">Join Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We're always looking for talented individuals who share our passion for innovation and safety.
            </p>
            <Button variant="hero" asChild>
              <Link to="/company/careers">View Open Positions</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
