import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Serene woman in luxurious loungewear by window - Slō muse lifestyle"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="space-y-8">
            {/* Brand Tagline */}
            <div className="space-y-4">
              <p className="font-crimson text-lg text-muted-foreground italic tracking-wide">
                Mindful moments, conscious comfort
              </p>
              <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-medium text-primary leading-tight">
                Embrace
                <br />
                <span className="text-accent font-accent italic">slow living</span>
              </h1>
            </div>

            {/* Description */}
            <p className="font-inter text-lg text-foreground/80 leading-relaxed max-w-lg">
              Thoughtfully designed loungewear for the mindful modern woman. 
              Where comfort meets consciousness, and style embraces sustainability.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="hero" 
                size="lg"
                className="font-inter text-base px-8 py-3"
                onClick={() => window.location.href = '/collections'}
              >
                Discover Collection
              </Button>
              <Button 
                variant="minimal" 
                size="lg"
                className="font-inter text-base px-8 py-3"
                onClick={() => window.location.href = '/our-story'}
              >
                Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent mx-auto mb-3"></div>
        <p className="font-crimson text-sm text-muted-foreground tracking-widest">
          SCROLL TO EXPLORE
        </p>
      </div>
    </section>
  );
};

export default Hero;
