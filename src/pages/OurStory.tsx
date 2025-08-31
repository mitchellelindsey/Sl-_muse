import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-pink-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <h1 className="font-dream-avenue text-5xl sm:text-6xl font-medium text-primary">
                Our Story
              </h1>
              <p className="font-inter text-xl text-muted-foreground leading-relaxed">
                The journey of Slō muse and the vision behind mindful loungewear
              </p>
            </div>
          </div>
        </section>

        {/* Story Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {/* Founder Section */}
              <div className="space-y-8">
                <h2 className="font-playfair text-3xl sm:text-4xl font-medium text-primary text-center">
                  Meet Our Founder
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h3 className="font-playfair text-2xl font-medium text-primary">
                      The Vision Behind Slō muse
                    </h3>
                    <p className="font-inter text-lg text-foreground/80 leading-relaxed">
                      Slō: Derived from "slow," symbolizing relaxation, mindfulness, or a slower pace of life. Reflects calmness, tranquility, and a focus on comfort.
                    </p>
                    <p className="font-inter text-lg text-foreground/80 leading-relaxed">
                    Muse: Represents inspiration, creativity, or something that sparks ideas and beauty.
                    </p>
                    <p className="font-inter text-lg text-foreground/80 leading-relaxed">
                    Slō Muse: A loungewear brand that celebrates calmness, mindfulness, and the beauty of slowing down. Designed for the modern woman who values comfort without compromising on style. Every piece is crafted to help you unwind, recharge, and embrace tranquility.
                      Our founder envisioned a brand where every 
                      piece tells a story of mindful living and sustainable practices.
                    </p>
                    <p className="font-inter text-lg text-foreground/80 leading-relaxed">
                      Inspired by the beauty of slow living and the power of intentional choices, 
                      each collection reflects our commitment to quality, comfort, and 
                      environmental responsibility.
                    </p>
                  </div>
                  <div className="">
                    <img
                      src="/src/assets/couple2.jpeg"
                      alt="Founder of Slō muse"
                      className="w-full h-auto rounded-2xl shadow-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Brand Values */}
              <div className="space-y-8">
                <h2 className="font-playfair text-3xl sm:text-4xl font-medium text-primary text-center">
                  Our Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center space-y-4">
                    <h3 className="font-playfair text-xl font-medium text-primary">
                      Mindful Living
                    </h3>
                    <p className="font-inter text-foreground/80 leading-relaxed">
                      We believe in the power of slowing down and being present in each moment.
                    </p>
                  </div>
                  <div className="text-center space-y-4">
                    <h3 className="font-playfair text-xl font-medium text-primary">
                      Sustainable Practices
                    </h3>
                    <p className="font-inter text-foreground/80 leading-relaxed">
                      Every piece is crafted with eco-friendly materials and ethical production.
                    </p>
                  </div>
                  <div className="text-center space-y-4">
                    <h3 className="font-playfair text-xl font-medium text-primary">
                      Conscious Comfort
                    </h3>
                    <p className="font-inter text-foreground/80 leading-relaxed">
                      Luxury and comfort that doesn't compromise on values or quality.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center space-y-8">
                <h2 className="font-playfair text-3xl font-medium text-primary">
                  Join Our Journey
                </h2>
                <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Discover our collections and become part of a community that values 
                  mindful living, sustainable fashion, and conscious comfort.
                </p>
                <Button variant="hero" size="lg">
                  Explore Collections
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurStory;
