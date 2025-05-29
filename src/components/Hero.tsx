
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    
    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 300);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Premium moving geometric shapes */}
        <div 
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animation-float"
          style={{ 
            transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)`,
            animationDelay: '0s'
          }}
        />
        <div 
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-xl animation-wave"
          style={{ 
            transform: `translateY(${scrollY * -0.2}px) rotate(${scrollY * -0.1}deg)`,
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute bottom-32 left-1/4 w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animation-pulse-soft"
          style={{ 
            transform: `translateY(${scrollY * 0.15}px)`,
            animationDelay: '4s'
          }}
        />
        <div 
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-full blur-lg animation-float"
          style={{ 
            transform: `translateY(${scrollY * -0.25}px) rotate(${scrollY * 0.15}deg)`,
            animationDelay: '1s'
          }}
        />
        
        {/* Enhanced Background with Advanced Parallax */}
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat parallax-element"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=2000&q=80')",
            transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0003})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/85 to-slate-900/90 backdrop-blur-[2px]" />
        
        {/* Premium overlay patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(139,92,246,0.1),transparent)]" />
        </div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 z-5">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-white/30 to-blue-300/30 rounded-full animation-pulse-soft hover-glow"
            style={{
              left: `${10 + i * 8}%`,
              top: `${20 + (i * 15) % 60}%`,
              transform: `translateY(${scrollY * (0.1 + i * 0.03)}px) scale(${1 + Math.sin(i) * 0.3})`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Premium Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl">
          <div 
            className={`transition-all duration-1000 ${isVisible ? 'animation-fade-in' : 'opacity-0 translate-y-10'}`}
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          >
            <h1 className="premium-heading mb-8">
              Expert Manufacturing
              <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent animation-pulse-soft">
                & Supply Excellence
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-blue-100/90 mb-10 max-w-3xl leading-relaxed glass-morphism p-8 rounded-3xl border border-white/20 hover-lift">
              <span className="font-light">Reliable Partner Serving Excellence in</span>
              <span className="block font-semibold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mt-2">
                Chemical Solutions for Over Two Decades
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Button 
                asChild
                size="lg" 
                className="premium-button px-10 py-6 text-xl font-bold hover-shine group border border-white/30"
              >
                <Link to="/products" className="flex items-center">
                  Explore Our Products
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-3 transition-transform duration-500" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="glass-morphism hover:bg-white/20 text-white hover:text-white px-10 py-6 text-xl font-bold transition-all duration-700 hover:scale-105 group border-2 border-white/40 rounded-2xl hover-glow"
              >
                <Play className="mr-3 w-6 h-6 group-hover:scale-125 transition-transform duration-500" />
                Watch Our Story
              </Button>
            </div>

            {/* Enhanced Premium Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "20+", label: "Years Experience", icon: "🏆" },
                { number: "500+", label: "Products", icon: "⚗️" },
                { number: "1000+", label: "Happy Clients", icon: "🤝" },
                { number: "24/7", label: "Support", icon: "💬" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="interactive-card text-center p-8 hover-glow group" 
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    transform: `translateY(${scrollY * -0.05}px)`
                  }}
                >
                  <div className="text-4xl mb-3 animation-wave group-hover:scale-125 transition-transform duration-500">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-blue-200/80 text-lg font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Premium Scroll Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animation-float hover-glow cursor-pointer"
        style={{ transform: `translateX(-50%) translateY(${scrollY * -0.3}px)` }}
      >
        <div className="w-8 h-14 glass-morphism rounded-full flex justify-center border-2 border-white/40 hover:border-white/60 transition-all duration-500 group">
          <div className="w-2 h-6 bg-gradient-to-b from-blue-300 via-purple-300 to-cyan-300 rounded-full mt-3 animation-pulse-soft group-hover:scale-125 transition-transform duration-500"></div>
        </div>
        <div className="text-white/60 text-sm mt-3 text-center font-medium">Scroll</div>
      </div>
    </section>
  );
};
