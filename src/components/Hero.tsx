
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FloatingMolecules } from "@/components/FloatingMolecules";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden premium-page-bg">
      <FloatingMolecules />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
              <CheckCircle className="w-4 h-4 mr-2 text-blue-200" />
              <span className="text-blue-100 text-sm font-medium">ISO Certified Quality</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">Premium </span>
              <span className="hero-gradient-text">Chemical</span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
              Leading supplier of industrial-grade chemicals with over 15 years of expertise. 
              Delivering quality, reliability, and innovation to industries worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold py-4 px-8 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/products">
                  <ArrowRight className="mr-2 w-5 h-5" />
                  Explore Products
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-4 px-8 text-lg rounded-lg transition-all duration-300">
                <Link to="/about">
                  <Play className="mr-2 w-5 h-5" />
                  Know About Us
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <AnimatedCounter end={15} suffix="+" />
                </div>
                <p className="text-blue-200 text-sm md:text-base">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <p className="text-blue-200 text-sm md:text-base">Products</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <AnimatedCounter end={98} suffix="%" />
                </div>
                <p className="text-blue-200 text-sm md:text-base">Client Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-96 h-96 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center">
                <div className="w-80 h-80 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center">
                  <div className="w-64 h-64 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                    <div className="text-6xl">⚗️</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
