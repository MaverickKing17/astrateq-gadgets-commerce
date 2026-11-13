import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="dark min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center pt-32 pb-20 px-4">
        <div className="text-center max-w-md">
          <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            404 Error
          </p>
          <h1 className="text-4xl font-heading font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8 text-sm sm:text-base">
            The page you requested could not be found. Browse our product catalogue or return home.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="hero" asChild className="min-h-[44px]">
              <Link to="/">Return Home</Link>
            </Button>
            <Button variant="outline" asChild className="min-h-[44px]">
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
