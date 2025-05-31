import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChemicalElements } from "@/components/ChemicalElements";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FloatingMolecules } from "@/components/FloatingMolecules";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-premium-bg">
      {/* Enhanced Chemical Elements */}
      <ChemicalElements />
      <FloatingMolecules />
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 subtle-pattern opacity-20"></div>
      <div className="absolute inset-0 molecular-bg"></div>
      
      {/* Professional Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-800 ${isVisible ? 'modern-fade-in' : 'opacity-0 translate-y-10'}`}>
            <h1 className="professional-heading mb-6 text-white">
              Expert Manufacturing
              <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent mt-2">
                & Supply Excellence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              Leading manufacturer and supplier of high-quality chemical solutions for 
              <span className="block font-medium text-white mt-1">
                agriculture, water treatment, food processing, and industrial applications.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button asChild size="lg" className="professional-button text-lg px-8 py-4">
                <Link to="/products" className="flex items-center">
                  Explore Our Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              {/* Make the entire button clickable by wrapping Button with Link */}
              <Link to="/about" className="inline-block">
                <Button variant="outline" size="lg" className="secondary-button text-lg px-8 py-4 flex items-center">
                  <Play className="mr-2 w-5 h-5" />
                  Know About Us
                </Button>
              </Link>
            </div>

            {/* Professional Stats with Animated Counters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <AnimatedCounter 
                  end={20} 
                  suffix="+" 
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                />
                <div className="text-blue-200 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <AnimatedCounter 
                  end={500} 
                  suffix="+" 
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                />
                <div className="text-blue-200 font-medium">Products</div>
              </div>
              <div className="text-center">
                <AnimatedCounter 
                  end={1000} 
                  suffix="+" 
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                />
                <div className="text-blue-200 font-medium">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-200 font-medium">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
