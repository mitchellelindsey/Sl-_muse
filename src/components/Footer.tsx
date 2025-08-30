const Footer = () => {
  const footerLinks = {
    Shop: ["New Arrivals", "Loungewear", "Accessories", "Gift Cards"],
    Support: ["Size Guide", "Care Instructions", "Returns", "Contact Us"],
    Company: ["Our Story", "Sustainability", "Journal", "Careers"],
  };

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com/slo_muse" },
    { name: "Pinterest", href: "#" },
    { name: "Journal", href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="font-playfair text-2xl font-medium">
                Slō muse
              </h3>
              <p className="font-inter text-sm text-primary-foreground/80 leading-relaxed max-w-sm">
                Mindfully crafted loungewear for the conscious modern woman. 
                Where comfort meets sustainability, and style embraces slow living.
              </p>
              <div className="flex space-x-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-inter text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-4">
                <h4 className="font-inter font-medium text-sm tracking-wide">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="font-inter text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-inter text-xs text-primary-foreground/60">
              © 2024 Slō muse. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="font-inter text-xs text-primary-foreground/60 hover:text-primary-foreground/80 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-inter text-xs text-primary-foreground/60 hover:text-primary-foreground/80 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
