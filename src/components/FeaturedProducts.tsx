
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import { QuotationModal } from "@/components/QuotationModal";
import { ChemicalElements } from "@/components/ChemicalElements";
import { Link } from "react-router-dom";

export const FeaturedProducts = () => {
  const [isQuotationOpen, setIsQuotationOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
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

  const products = [
    {
      category: "Agro & Aquaculture Chemicals",
      categoryId: "agro-aquaculture",
      description: "Our comprehensive range of agricultural chemicals supports modern farming practices with innovative solutions for crop protection, soil enhancement, and yield optimization.",
      secondDescription: "We provide environmentally conscious formulations that ensure sustainable agriculture while maximizing productivity and supporting global food security initiatives.",
      image: "https://ik.imagekit.io/dvuz4klnl/IMG-20250602-WA0005(1).jpg?updatedAt=1748847949000",
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
      category: "Hygiene Raw Materials & Detergents",
      categoryId: "hygiene-detergents",
      description: "Premium hygiene and cleaning solutions designed for commercial and industrial applications. Our formulations deliver superior cleaning performance while meeting environmental standards.",
      secondDescription: "From surface cleaners to specialized sanitizers, our product range ensures effective hygiene maintenance across healthcare, hospitality, and industrial sectors.",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=1200&q=80",
      productCount: "35+",
      color: "text-purple-600"
    },
    {
      category: "Basic Industry Chemicals",
      categoryId: "basic-industry",
      description: "Essential chemical building blocks for manufacturing and industrial processes. Our high-purity chemicals serve as reliable raw materials for diverse industrial applications.",
      secondDescription: "We supply critical industrial chemicals including acids, bases, solvents, and specialty compounds that form the foundation of modern manufacturing processes.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      productCount: "60+",
      color: "text-slate-600"
    },
    {
      category: "Pharmaceutical Raw Materials",
      categoryId: "pharmaceutical",
      description: "High-quality pharmaceutical intermediates and active ingredients manufactured under strict GMP standards. Our products support the development of safe and effective medications.",
      secondDescription: "From APIs to excipients, our pharmaceutical chemicals meet international quality standards and regulatory requirements for drug manufacturing and research applications.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80",
      productCount: "25+",
      color: "text-red-600"
    }
  ];

  const handleQuoteRequest = (category: string) => {
    setSelectedProduct(category);
    setIsQuotationOpen(true);
  };

  return (
    <>
      <section 
        ref={sectionRef}
        className="relative py-20 bg-white"
      >
        <ChemicalElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'classic-fade-in' : 'opacity-0 translate-y-10'}`}>
            <h2 className="professional-subheading mb-4" style={{ color: 'var(--brand-dark-blue)' }}>
              Featured Product
            </h2>
            <div className="section-divider"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of chemical solutions, meticulously formulated 
              to exceed the highest standards of quality, performance, and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product, index) => (
              <Card 
                key={index}
                className={`interactive-card group overflow-hidden transition-all duration-500 ${
                  isVisible ? 'classic-scale-in' : 'opacity-0 scale-95'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <div 
                      className="h-64 bg-cover bg-center relative overflow-hidden"
                      style={{ backgroundImage: `url('${product.image}')` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className={`absolute top-6 right-6 px-4 py-2 rounded-full bg-white/90 ${product.color} text-sm font-semibold shadow-sm`}>
                        {product.productCount} Products
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-semibold mb-4 group-hover:text-slate-900 transition-colors duration-300" style={{ color: 'var(--brand-dark-blue)' }}>
                        {product.category}
                      </h3>
                      
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {product.description}
                      </p>

                      <p className="text-slate-600 mb-8 leading-relaxed">
                        {product.secondDescription}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          asChild
                          className="secondary-button flex items-center justify-center"
                        >
                          <Link to={`/products?category=${product.categoryId}`}>
                            <ArrowRight className="w-4 h-4 mr-2" />
                            View Products
                          </Link>
                        </Button>
                        
                        <Button
                          onClick={() => handleQuoteRequest(product.category)}
                          className="accent-button flex items-center justify-center"
                        >
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Get a Quote
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

      <QuotationModal 
        isOpen={isQuotationOpen}
        onClose={() => setIsQuotationOpen(false)}
        productCategory={selectedProduct}
      />
    </>
  );
};
