import { useState, useEffect } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { 
      name: "Our Products", 
      href: "/products",
      hasDropdown: true,
      dropdownItems: [
        { name: "Agro & Aquaculture", id: "agro-aquaculture" },
        { name: "Water Treatment", id: "water-treatment" },
        { name: "Food Chemicals", id: "food-chemicals" },
        { name: "Hygiene Raw Materials", id: "hygiene-raw-materials" },
        { name: "Basic Industrial Chemicals", id: "basic-chemicals" },
        { name: "Pharmaceutical Raw Materials", id: "pharmaceutical" }
      ]
    },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-xl' 
        : 'bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-all duration-300 hover:scale-105">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZSs25lz7vQ8N5TdxoYvMcvcImGjzwYGRR7A&s"
              className="w-20 h-20 rounded-xl object-cover object-top shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              style={{ objectPosition: 'top', clipPath: 'inset(0 0 30% 0)' }}
              alt="Drops Chemicals Logo"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg gradient-text" style={{ color: 'var(--brand-dark-blue)' }}>Drops Chemicals</span>
              <span className="text-xs text-gray-600 -mt-1">Reliable Partner Serving Excellence</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <Link
                      to={item.href}
                      className="flex items-center space-x-1 text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-300 font-medium relative"
                      style={{ color: 'var(--brand-dark-blue)' }}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                    </Link>
                    
                    {/* Enhanced Dropdown */}
                    <div className={`absolute top-full left-0 mt-2 w-80 premium-dropdown ${isProductsOpen ? 'open' : ''}`}>
                      <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--brand-dark-blue)' }}>Product Categories</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {item.dropdownItems?.map((dropdownItem, idx) => (
                          <Link
                            key={idx}
                            to={`/products?category=${dropdownItem.id}`}
                            className="premium-dropdown-item"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center space-x-1 text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-300 font-medium relative"
                    style={{ color: 'var(--brand-dark-blue)' }}
                  >
                    <span>{item.name}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Search & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Enhanced Search */}
            <div className="hidden md:flex items-center">
              {isSearchOpen ? (
                <div className="flex items-center space-x-2 animate-fade-in">
                  <Input
                    placeholder="Search products..."
                    className="w-64 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl"
                    autoFocus
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSearchOpen(false)}
                    className="hover:bg-gray-100 rounded-xl"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(true)}
                  className="hover:bg-gray-100 rounded-xl hover:scale-105 transition-all duration-200"
                >
                  <Search className="w-5 h-5" />
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden hover:bg-gray-100 rounded-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-fade-in professional-card rounded-b-xl mt-2">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ color: 'var(--brand-dark-blue)' }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
