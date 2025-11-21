import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-primary/5 via-primary-glow/5 to-accent/5">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-card rounded-3xl p-12 md:p-16 shadow-elegant border border-border">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers building amazing web experiences with our platform.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant hover:shadow-soft transition-all duration-300 group"
          >
            Start Building Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
