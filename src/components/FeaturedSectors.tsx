
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import { ChemicalElements } from "@/components/ChemicalElements";
import { Link } from "react-router-dom";

export const FeaturedSectors = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const sectors = [
    {
      category: "Agro & Aquaculture Chemicals",
      categoryId: "agro-aquaculture",
      description: "Our comprehensive range of agricultural chemicals supports modern farming practices with innovative solutions for crop protection, soil enhancement, and yield optimization.",
      secondDescription: "We provide environmentally conscious formulations that ensure sustainable agriculture while maximizing productivity and supporting global food security initiatives.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1200&q=80",
      productCount: "50+",
      color: "text-green-600"
    },
    {
      category: "Water Treatment Chemicals",
      categoryId: "water-treatment",
      description: "Advanced water treatment solutions designed for industrial, municipal, and residential applications. Our chemical formulations ensure water purity, system efficiency, and environmental compliance.",
      secondDescription: "From coagulants to disinfectants, our portfolio covers the complete spectrum of water treatment processes, ensuring safe and clean water for diverse applications.",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&w=1200&q=80",
      productCount: "40+",
      color: "text-blue-600"
    },
    {
      category: "Food Grade Chemicals",
      categoryId: "food-chemicals",
      description: "Food-grade chemical solutions that meet stringent safety standards for food processing, preservation, and packaging industries. Our products ensure quality, safety, and regulatory compliance.",
      secondDescription: "Our comprehensive range includes natural and synthetic ingredients that enhance flavor, texture, shelf-life, and nutritional value while ensuring consumer safety throughout the food supply chain.",
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=1200&q=80",
      productCount: "30+",
      color: "text-amber-600"
    },
    {
      category: "Hygiene Raw Materials",
      categoryId: "hygiene-raw-materials",
      description: "Premium quality raw materials specifically formulated for the hygiene industry, including surfactants, emulsifiers, preservatives, and active ingredients for detergents and personal care products.",
      secondDescription: "Our carefully selected portfolio enables manufacturers to create high-performance cleaning and personal care solutions that meet stringent quality standards and consumer expectations.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
      productCount: "80+",
      color: "text-purple-600"
    },
    {
      category: "Acids and Solvents",
      categoryId: "acids-solvents",
      description: "High-purity acids and solvents for diverse industrial applications including metal processing, pharmaceutical manufacturing, and chemical synthesis processes.",
      secondDescription: "Our comprehensive range of acids and solvents meets the highest quality standards for industrial applications, ensuring optimal performance and safety in manufacturing processes.",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      productCount: "60+",
      color: "text-red-600"
    },
    {
      category: "Basic Industrial Chemicals",
      categoryId: "basic-industrial",
      description: "Essential industrial chemicals and raw materials for manufacturing processes across multiple industries including textiles, automotive, construction, and heavy engineering.",
      secondDescription: "Our basic industrial chemicals portfolio provides reliable, cost-effective solutions that form the foundation of modern manufacturing and industrial processes worldwide.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&q=80",
      productCount: "90+",
      color: "text-gray-600"
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-white"
    >
      <ChemicalElements />
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'classic-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h2 className="professional-subheading mb-4" style={{ color: '#00008B' }}>
            Trusted by Industry Experts
          </h2>
          <div className="section-divider"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of chemical solutions, meticulously formulated 
            to exceed the highest standards of quality, performance, and reliability across diverse industries
          </p>
        </div>

        <div className="featured-sectors-grid">
          {sectors.map((sector, index) => (
            <Card 
              key={index}
              className={`interactive-card group overflow-hidden transition-all duration-500 ${
                isVisible ? 'classic-scale-in' : 'opacity-0 scale-95'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <div 
                    className="h-48 bg-cover bg-center relative overflow-hidden"
                    style={{ backgroundImage: `url('${sector.image}')` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 ${sector.color} text-sm font-semibold shadow-sm`}>
                      {sector.productCount} Products
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-slate-900 transition-colors duration-300" style={{ color: 'var(--brand-dark-blue)' }}>
                      {sector.category}
                    </h3>
                    
                    <p className="text-slate-600 mb-3 text-sm leading-relaxed line-clamp-2">
                      {sector.description}
                    </p>

                    <p className="text-slate-600 mb-6 text-sm leading-relaxed line-clamp-2">
                      {sector.secondDescription}
                    </p>

                    <div className="flex justify-center">
                      <Button
                        asChild
                        size="sm"
                        className="secondary-button flex items-center justify-center text-sm px-4 py-2"
                      >
                        <Link to={`/products?category=${sector.categoryId}`}>
                          <ArrowRight className="w-3 h-3 mr-2" />
                          View Products
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button asChild size="lg" className="accent-button text-lg px-8 py-4">
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
