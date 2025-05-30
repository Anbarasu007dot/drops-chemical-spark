
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 subtle-pattern opacity-30"></div>
      
      {/* Clean Background Overlay */}
      <div className="absolute inset-0 bg-white/60"></div>

      {/* Professional Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-800 ${isVisible ? 'classic-fade-in' : 'opacity-0 translate-y-10'}`}>
            <h1 className="professional-heading mb-6">
              Expert Manufacturing
              <span className="block text-gradient mt-2">
                & Supply Excellence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              Leading manufacturer and supplier of high-quality chemical solutions for 
              <span className="block font-medium text-slate-700 mt-1">
                agriculture, water treatment, food processing, and industrial applications.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button asChild size="lg" className="accent-button text-lg px-8 py-4">
                <Link to="/products" className="flex items-center">
                  Explore Our Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="secondary-button text-lg px-8 py-4">
                <Play className="mr-2 w-5 h-5" />
                Watch Our Story
              </Button>
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { number: "20+", label: "Years Experience" },
                { number: "500+", label: "Products" },
                { number: "1000+", label: "Happy Clients" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
