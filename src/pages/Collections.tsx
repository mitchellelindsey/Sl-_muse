import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
// import productImage from "@/assets/product-collection.jpg";

const Collections = () => {
  const { addItem } = useCart();
  
  const collections = [
    {
      name: "morning dew print",
      items: [
        { name: "special set", price: "$89", image: "/src/assets/specialset.jpeg" },
        { name: "Debbie set", price: "$92", image: "/src/assets/debbieset.jpeg" },
        { name: "Cassie set", price: "$95", image: "/src/assets/cassieset.jpeg" }
      ]
    },
    {
      name: "wildflower print",
      items: [
        { name: "gold set", price: "$89", image: "/src/assets/goldset.jpeg" },
        { name: "belle set", price: "$92", image: "/src/assets/belleset.jpeg" },
        { name: "chi set", price: "$95", image: "/src/assets/chiset.jpeg" },
      ]
    },
    {
      name: "lucky charm print",
      items: [
        { name: "queen set", price: "$89", image: "/src/assets/queenset.jpeg" },
        { name: "luna set", price: "$92", image: "/src/assets/lunaset.jpeg" },
        { name: "sunflower set", price: "$95", image: "/src/assets/sunflowerset.jpeg" },
      ]
    },
    {
      name: "Slō couple set",
      items: [
        { name: "Slō men set", price: "$119", image: "/src/assets/mensethalf.jpeg" },
        { name: "Slō women set", price: "$119", image: "/src/assets/womenset.jpeg" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-dream-avenue text-5xl sm:text-6xl font-medium text-primary">
                Slō featured collections
              </h1>
              <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover our thoughtfully curated collections, each designed to embrace 
                slow living and conscious comfort.
              </p>
            </div>
          </div>
        </section>

        {/* Collections */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {collections.map((collection, collectionIndex) => (
                <div key={collectionIndex} className="space-y-12" id={collection.name.toLowerCase().replace(/\s+/g, '-')}>
                  <div className="text-center">
                    <h2 className="font-playfair text-4xl font-medium text-primary capitalize">
                      {collection.name}
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {collection.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex} 
                        className="group cursor-pointer"
                        onClick={() => addItem({
                          id: `${collection.name}-${item.name}`,
                          name: item.name,
                          price: item.price,
                          image: item.image,
                          collection: collection.name
                        })}
                      >
                        <div className="space-y-4">
                          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-medium group-hover:shadow-soft transition-all duration-300">
                            <img
                              src={item.image}
                              alt={`${item.name} from ${collection.name}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="text-center space-y-2">
                            <h3 className="font-playfair text-xl font-medium text-primary capitalize group-hover:text-dusty-pink transition-colors duration-300">
                              {item.name}
                            </h3>
                            <p className="font-inter text-lg font-medium text-foreground">
                              {item.price}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Separator except for last collection */}
                  {collectionIndex < collections.length - 1 && (
                    <div className="flex justify-center">
                      <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
