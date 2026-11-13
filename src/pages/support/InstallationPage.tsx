import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Download, Wrench, Smartphone, Video } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Unbox Your Device",
    description: "Carefully remove your Astrateq device from the packaging. Verify all components are included: device, power cable, mounting bracket, and quick start guide."
  },
  {
    number: 2,
    title: "Download the App",
    description: "Download the Astrateq app from the App Store or Google Play. Create an account or sign in to your existing account."
  },
  {
    number: 3,
    title: "Mount the Device",
    description: "Using the included mounting bracket, attach the device to your windshield or dashboard according to the included diagram."
  },
  {
    number: 4,
    title: "Connect Power",
    description: "Connect the power cable to your vehicle's OBD-II port or 12V power outlet, depending on your product model."
  },
  {
    number: 5,
    title: "Pair with App",
    description: "Open the Astrateq app and follow the on-screen instructions to pair your device via Bluetooth."
  },
  {
    number: 6,
    title: "Complete Setup",
    description: "Configure your preferences, set up driver profiles, and you're ready to go!"
  },
];

export default function InstallationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-48 pb-20">
        <div className="container-wide">
          <Link to="/support/help-center" className="inline-flex items-center gap-2 text-muted-foreground hover:text-electric-cyan mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Help Center
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Installation Guide</h1>
              <p className="text-xl text-muted-foreground">
                Get your Astrateq device up and running in minutes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-card rounded-xl border border-border text-center">
                <Download className="w-10 h-10 text-electric-cyan mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Download App</h3>
                <p className="text-sm text-muted-foreground">iOS & Android</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border text-center">
                <Wrench className="w-10 h-10 text-electric-cyan mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Easy Install</h3>
                <p className="text-sm text-muted-foreground">10-minute setup</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border text-center">
                <Video className="w-10 h-10 text-electric-cyan mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Video Guides</h3>
                <p className="text-sm text-muted-foreground">Step-by-step</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6 p-6 bg-card rounded-xl border border-border">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-electric-cyan/20 flex items-center justify-center text-electric-cyan font-bold text-xl">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-electric-cyan/10 rounded-xl border border-electric-cyan/30 text-center">
              <h3 className="font-heading font-bold text-xl mb-2">Need Help?</h3>
              <p className="text-muted-foreground mb-4">Our support team is available 24/7 to assist with installation.</p>
              <Button variant="hero" asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
