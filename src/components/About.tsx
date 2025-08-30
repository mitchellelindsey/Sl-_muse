const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-playfair text-4xl sm:text-5xl font-medium text-primary leading-tight">
                Where mindfulness
                <br />
                <span className="text-accent font-accent italic">meets comfort</span>
              </h2>
              
              <div className="space-y-6 text-foreground/80 font-inter leading-relaxed">
                <p className="text-lg">
                  Slō muse was born from a simple belief: that the clothes we wear in our most 
                  intimate moments should honour both our bodies and our planet.
                </p>
                
                <p>
                  We create pieces that invite you to slow down, to breathe deeply, 
                  and to find beauty in the quiet moments. Each garment is crafted 
                  with intention, using only sustainable materials that feel as good 
                  as they look.
                </p>
                
                <p>
                  Our collections are designed for the modern woman who values both 
                  comfort and consciousness – who understands that true luxury lies 
                  in pieces that nurture both body and spirit.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              <div className="space-y-3">
                <h3 className="font-playfair text-lg font-medium text-primary">
                  Sustainable Materials
                </h3>
                <p className="font-inter text-sm text-muted-foreground">
                  Organic cotton, bamboo fibres, and ethically sourced materials
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-playfair text-lg font-medium text-primary">
                  Mindful Production
                </h3>
                <p className="font-inter text-sm text-muted-foreground">
                  Small batch creation with fair trade partnerships
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-playfair text-lg font-medium text-primary">
                  Conscious Design
                </h3>
                <p className="font-inter text-sm text-muted-foreground">
                  Timeless pieces that transcend seasons and trends
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-playfair text-lg font-medium text-primary">
                  Gentle Care
                </h3>
                <p className="font-inter text-sm text-muted-foreground">
                  Designed to be loved and worn for years to come
                </p>
              </div>
            </div>
          </div>

          {/* Quote/Philosophy */}
          <div className="relative">
            <div className="bg-gradient-accent rounded-2xl p-12 text-center shadow-soft">
              <blockquote className="space-y-6">
                <p className="font-playfair text-2xl sm:text-3xl font-medium text-primary leading-relaxed italic">
                  "In a world that moves too fast, we create spaces for stillness. 
                  In moments that demand too much, we offer gentle comfort."
                </p>
                <footer className="space-y-2">
                  <p className="font-inter text-sm font-medium text-primary">
                    — Slō muse Philosophy
                  </p>
                  <div className="w-12 h-px bg-primary mx-auto"></div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
