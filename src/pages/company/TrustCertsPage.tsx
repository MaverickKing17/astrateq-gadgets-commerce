import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Shield, Award, CheckCircle, Lock } from "lucide-react";

const certifications = [
  { name: "ISO 27001", description: "Information Security Management", icon: Lock },
  { name: "SOC 2 Type II", description: "Security & Availability Controls", icon: Shield },
  { name: "GDPR Compliant", description: "EU Data Protection Standards", icon: CheckCircle },
  { name: "CCPA Compliant", description: "California Consumer Privacy", icon: CheckCircle },
  { name: "FCC Certified", description: "Radio Frequency Standards", icon: Award },
  { name: "CE Marked", description: "European Conformity", icon: Award },
];

const awards = [
  "CES Innovation Award 2024",
  "AutoTech Breakthrough Award",
  "Best AI Safety Product - TechCrunch",
  "Forbes AI 50 Company",
  "Fast Company Most Innovative",
  "J.D. Power Innovation Award",
];

export default function TrustCertsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-48 pb-20">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Shield className="w-16 h-16 text-electric-cyan mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Trust & Certifications</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to security, privacy, and quality is validated by industry-leading certifications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {certifications.map((cert) => (
              <div key={cert.name} className="p-6 bg-card rounded-xl border border-border hover:border-electric-cyan/50 transition-colors">
                <cert.icon className="w-10 h-10 text-electric-cyan mb-4" />
                <h3 className="text-xl font-heading font-bold mb-2">{cert.name}</h3>
                <p className="text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-card rounded-2xl border border-border p-12 mb-20">
            <div className="text-center mb-8">
              <Award className="w-12 h-12 text-electric-cyan mx-auto mb-4" />
              <h2 className="text-3xl font-heading font-bold">Industry Recognition</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {awards.map((award) => (
                <div key={award} className="flex items-center gap-3 p-4 bg-background rounded-lg">
                  <CheckCircle className="w-5 h-5 text-electric-cyan" />
                  <span>{award}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-heading font-bold mb-4">Our Commitment to You</h2>
            <p className="text-muted-foreground">
              At Astrateq, security and privacy are not afterthoughts—they're built into everything we do. 
              Your data is encrypted at rest and in transit, and we never sell or share your personal information. 
              Our systems are regularly audited by independent third parties to ensure we meet the highest standards.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
