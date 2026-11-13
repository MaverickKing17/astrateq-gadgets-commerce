import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, Clock, ChevronRight } from "lucide-react";

const openings = [
  { title: "Senior ML Engineer", department: "Engineering", location: "San Francisco, CA", type: "Full-time" },
  { title: "Product Manager - Fleet", department: "Product", location: "Remote", type: "Full-time" },
  { title: "UX Designer", department: "Design", location: "San Francisco, CA", type: "Full-time" },
  { title: "DevOps Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Customer Success Manager", department: "Sales", location: "New York, NY", type: "Full-time" },
  { title: "Data Scientist", department: "Data", location: "San Francisco, CA", type: "Full-time" },
];

const benefits = [
  "Competitive salary & equity",
  "Full health, dental & vision",
  "Unlimited PTO",
  "Remote-friendly culture",
  "Learning & development budget",
  "Home office stipend",
  "401(k) matching",
  "Parental leave",
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-48 pb-20">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">Join Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Help us build the future of automotive safety technology.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-4 mb-16">
            {benefits.map((benefit) => (
              <div key={benefit} className="p-4 bg-card rounded-lg border border-border text-center">
                {benefit}
              </div>
            ))}
          </div>
          
          <h2 className="text-2xl font-heading font-bold mb-8">Open Positions</h2>
          
          <div className="space-y-4 mb-12">
            {openings.map((job) => (
              <div key={job.title} className="p-6 bg-card rounded-xl border border-border hover:border-electric-cyan/50 transition-colors cursor-pointer group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-electric-cyan transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" className="group-hover:bg-electric-cyan group-hover:text-midnight-charcoal group-hover:border-electric-cyan transition-colors">
                    Apply <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-electric-cyan/10 rounded-2xl border border-electric-cyan/30 p-12 text-center">
            <h2 className="text-2xl font-heading font-bold mb-4">Don't see your role?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              We're always looking for talented people. Send us your resume and tell us how you can contribute.
            </p>
            <Button variant="hero">Submit General Application</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
