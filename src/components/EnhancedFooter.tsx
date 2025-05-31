
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";

export const EnhancedFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
    }
  };

  return (
    <footer 
      ref={footerRef}
      className="premium-footer relative overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="chemical-molecule absolute top-20 left-10 chemical-float"></div>
        <div className="chemical-beaker absolute top-40 right-20 chemical-bounce"></div>
        <div className="chemical-flask absolute bottom-32 left-1/4 chemical-pulse"></div>
        <div className="chemical-molecule absolute bottom-20 right-1/3 chemical-rotate"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className={`footer-section ${isVisible ? '' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300">
                ChemCorp
              </h3>
              <p className="text-blue-200 leading-relaxed mb-6">
                Leading manufacturer and supplier of high-quality chemical solutions for 
                diverse industries worldwide. Your trusted partner in chemical excellence.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="social-icon group">
                  <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="social-icon group">
                  <Twitter className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="social-icon group">
                  <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="social-icon group">
                  <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`footer-section ${isVisible ? '' : 'opacity-0 translate-y-8'}`}>
            <h4 className="text-lg font-semibold text-white mb-6 border-b border-blue-400 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/products", label: "Products" },
                { to: "/blog", label: "Blog" },
                { to: "/careers", label: "Careers" },
                { to: "/contact", label: "Contact" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="text-blue-200 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`footer-section ${isVisible ? '' : 'opacity-0 translate-y-8'}`}>
            <h4 className="text-lg font-semibold text-white mb-6 border-b border-blue-400 pb-2">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-blue-300 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-blue-200 leading-relaxed">
                  123 Chemical Industry Park<br />
                  Industrial Area, City 560001<br />
                  Karnataka, India
                </p>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-blue-300 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-blue-200">+91 9876543210</p>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-blue-300 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-blue-200">info@chemcorp.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className={`footer-section ${isVisible ? '' : 'opacity-0 translate-y-8'}`}>
            <h4 className="text-lg font-semibold text-white mb-6 border-b border-blue-400 pb-2">
              Newsletter
            </h4>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Stay updated with our latest products, industry insights, and special offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-white focus:ring-white/20"
                required
              />
              <Button 
                type="submit" 
                className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Subscribe Now
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200 text-center md:text-left">
              © 2024 ChemCorp. All rights reserved. | Premium Chemical Solutions Worldwide
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-blue-200 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-blue-200 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-blue-200 hover:text-white transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
