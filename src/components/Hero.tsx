
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Moving geometric shapes */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
          style={{ transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)` }}
        />
        <div 
          className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-lg"
          style={{ transform: `translateY(${scrollY * -0.2}px) rotate(${scrollY * -0.1}deg)` }}
        />
        <div 
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-cyan-500/8 rounded-full blur-2xl"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        
        {/* Background with parallax effect */}
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=2000&q=80')",
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/85 to-transparent backdrop-blur-[1px]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-5">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              transform: `translateY(${scrollY * (0.1 + i * 0.05)}px)`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div 
            className="animate-fade-in"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Expert Manufacturing
              <span className="block text-transparent bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 bg-clip-text animate-pulse">
                & Supply
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl leading-relaxed backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10">
              Reliable Partner Serving Excellence in Chemical Solutions for Over Two Decades
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 group border border-white/20 backdrop-blur-sm"
              >
                <Link to="/products" className="flex items-center">
                  Explore Our Products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-500 hover:scale-105 backdrop-blur-md bg-white/5 hover:shadow-xl group"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Our Story
              </Button>
            </div>

            {/* Enhanced Stats with glass morphism */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "20+", label: "Years Experience" },
                { number: "500+", label: "Products" },
                { number: "1000+", label: "Happy Clients" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center animate-scale-in backdrop-blur-md bg-white/10 p-4 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105" 
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transform: `translateY(${scrollY * -0.05}px)`
                  }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{ transform: `translateX(-50%) translateY(${scrollY * -0.3}px)` }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-300 to-purple-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
