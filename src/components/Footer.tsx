
import { Mail, MapPin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Our Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" }
  ];

  const productCategories = [
    "Agro & Aquaculture",
    "Water Treatment",
    "Hygiene Products",
    "Metal Finishing",
    "Food Chemicals",
    "Solvents"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                D
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">Drops Chemicals</span>
                <span className="text-sm text-gray-400 -mt-1">Reliable Partner Serving Excellence</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Over two decades of expertise in chemical manufacturing and supply, 
              serving diverse industries with quality solutions and exceptional service.
            </p>

            {/* Quality Badges */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-sm text-gray-300">Quality Assured</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-orange-600 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">M</span>
                </div>
                <span className="text-sm text-gray-300">Make in India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Product Categories</h3>
            <ul className="space-y-3">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <Link 
                    to={`/products#${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block text-sm"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300 leading-relaxed">
                  3rd floor, No.76, East Power House Road,<br />
                  Gandhipuram, Tatabad,<br />
                  Coimbatore - 641012,<br />
                  Tamil Nadu, India
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <div className="text-sm text-gray-300">
                  <div>info@dropschemicals.com</div>
                  <div>sales@dropschemicals.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Drops Chemicals. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.linkedin.com/company/dropschemical/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <span className="text-sm font-bold">in</span>
              </a>
              <a 
                href="https://www.instagram.com/drops.chemicals/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <span className="text-sm font-bold">ig</span>
              </a>
              <a 
                href="https://www.facebook.com/dropschemical/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <span className="text-sm font-bold">f</span>
              </a>
              <a 
                href="https://www.youtube.com/@DropsChemicals-um5cm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
