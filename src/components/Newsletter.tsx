import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to our community",
        description: "Thank you for joining the Slō muse journey. We'll be in touch soon with mindful updates.",
        duration: 5000,
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="font-playfair text-3xl sm:text-4xl font-medium text-primary">
              Join Our Community
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Receive gentle reminders about new collections, mindful living tips, 
              and exclusive access to our seasonal releases.
            </p>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 font-inter bg-background border-border focus:border-primary"
              />
              <Button 
                type="submit" 
                variant="hero"
                className="whitespace-nowrap"
              >
                Join Us
              </Button>
            </div>
          </form>

          {/* Privacy Note */}
          <p className="font-inter text-xs text-muted-foreground">
            We respect your privacy and will never share your information. 
            Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
