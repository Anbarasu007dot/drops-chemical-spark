
import { Mail, MapPin, Phone } from "lucide-react";
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
    <footer className="premium-footer text-white relative overflow-hidden">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-cyan-400 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-2xl"></div>
      </div>

      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 1px, transparent 1px),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px, 75px 75px'
        }}
      />

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Enhanced Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-4 mb-8 group">
              <div className="relative">
                <img
                  src="https://ik.imagekit.io/dvuz4klnl/Screenshot_2025-06-03-15-28-07-28_c37d74246d9c81aa0bb824b57eaf7062.jpg?updatedAt=1748944738882"
                  className="w-16 h-16 rounded-full object-cover object-center shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white border-4 border-white/20 group-hover:scale-110 group-hover:rotate-3"
                  alt="Drops Chemicals Logo"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 group-hover:animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-white tracking-wide">Drops Chemicals</span>
                <span className="text-sm text-blue-200 -mt-1 font-medium italic">Reliable Partner Serving Excellence</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <p className="text-blue-100 mb-6 leading-relaxed text-sm">
                Over two decades of expertise in chemical manufacturing and supply, 
                serving diverse industries with quality solutions and exceptional service.
              </p>

              {/* Enhanced Quality Badges */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-green-500/25 group-hover:scale-110 transition-all duration-300">
                    <span className="text-sm font-bold text-white">✓</span>
                  </div>
                  <span className="text-sm text-blue-100 font-medium">Quality Assured Products</span>
                </div>
                <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-orange-500/25 group-hover:scale-110 transition-all duration-300">
                    <span className="text-sm font-bold text-white">🇮🇳</span>
                  </div>
                  <span className="text-sm text-blue-100 font-medium">Proudly Made in India</span>
                </div>
              </div>
              
              {/* Enhanced Social Media Icons */}
              <div className="flex items-center space-x-4">
                <a 
                  href="https://www.linkedin.com/company/dropschemical/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                    <img 
                      src="https://img.icons8.com/3d-fluency/94/linkedin--v2.png"
                      alt="linkedin"
                      className="w-6 h-6"
                    />
                  </div>
                </a>
                <a 
                  href="https://www.instagram.com/drops.chemicals/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-pink-500/30 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                    <img 
                      src="data:image/png;base64,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"
                      alt="instagram"
                      className="w-6 h-6"
                    />
                  </div>
                </a>
                <a 
                  href="https://www.facebook.com/dropschemical/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-blue-600/30 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                    <img 
                      src="https://img.icons8.com/fluency/48/facebook-new.png"
                      alt="facebook"
                      className="w-6 h-6"
                    />
                  </div>
                </a>
                <a 
                  href="https://www.youtube.com/@DropsChemicals-um5cm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-red-500/30 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                    <img 
                      src="https://img.icons8.com/fluency/48/youtube-play.png"
                      alt="youtube"
                      className="w-6 h-6"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg mr-3"></div>
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group flex items-center"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Product Categories */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg mr-3"></div>
              Product Categories
            </h3>
            <ul className="space-y-4">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <Link 
                    to={`/products#${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm group flex items-center"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></div>
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Contact Info */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg mr-3"></div>
              Contact Info
            </h3>
            <div className="space-y-8">
              {/* Corporate Office */}
              <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h4 className="font-semibold text-blue-100 mb-3 text-lg">Corporate Office</h4>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-sm text-blue-100 leading-relaxed">
                    3rd floor, No.76, East Power House Road,<br />
                    Gandhipuram, Tatabad,<br />
                    Coimbatore - 641012,<br />
                    Tamil Nadu, India
                  </div>
                </div>
              </div>

              {/* Manufacturing Unit */}
              <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h4 className="font-semibold text-blue-100 mb-3 text-lg">Manufacturing Unit</h4>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-sm text-blue-100 leading-relaxed">
                    7/8-5, Main Rd, Athikadavu,<br />
                    Keeranatham, Tamil Nadu 641035
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-sm text-blue-100">
                    <div>info@dropschemicals.com</div>
                    <div>sales@dropschemicals.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-sm text-blue-100 font-medium">+91 96775 22201</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Footer */}
      <div className="border-t border-blue-800/50 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-blue-200 flex items-center">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mr-3 animate-pulse"></div>
              © 2024 Drops Chemicals. All rights reserved.
            </div>
            <div className="text-xs text-blue-300">
              Designed with ❤️ for chemical excellence
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
