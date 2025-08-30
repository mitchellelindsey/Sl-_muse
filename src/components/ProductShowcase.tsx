import { Button } from "@/components/ui/button";
import productImage from "@/assets/product-collection.jpg";

const ProductShowcase = () => {
const products = [
    {
      name: "morning dew print"
    },
    {
      name: "wildflower print"
    },
    {
      name: "lucky charm print"
    },
    {
      name: "Slō couple set"
    }
  ];

  return (
    <section id="shop" className="py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="font-dream-avenue text-4xl sm:text-5xl font-medium text-primary">
            Slō featured collections
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Each piece is thoughtfully crafted from sustainable materials, 
            designed to move with you through your daily rituals of rest and reflection.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="space-y-4 cursor-pointer group transition-all duration-300 hover:transform hover:scale-105"
              onClick={() => {
                const collectionName = product.name.toLowerCase().replace(/\s+/g, '-');
                window.location.href = `/collections#${collectionName}`;
              }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-medium group-hover:shadow-soft">
                <img
                  src={productImage}
                  alt={`${product.name} collection`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="font-playfair text-xl font-medium text-primary group-hover:text-dusty-pink transition-colors duration-300">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Shop Button */}
        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.location.href = '/collections'}
          >
            Shop Full Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
