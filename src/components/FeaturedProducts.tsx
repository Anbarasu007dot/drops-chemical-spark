import { ArrowRight } from "lucide-react";
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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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
      image: "https://5.imimg.com/data5/SELLER/Default/2023/11/358549169/YU/QZ/UV/105018705/wastewater-treatment-and-disposal-evreka-2048x1364-500x500.jpg",
      productCount: "40+",
      color: "text-blue-600"
    },
    {
      category: "Food Grade Chemicals",
      categoryId: "food-chemicals",
      description: "Food-grade chemical solutions that meet stringent safety standards for food processing, preservation, and packaging industries. Our products ensure quality, safety, and regulatory compliance.",
      secondDescription: "Our comprehensive range includes natural and synthetic ingredients that enhance flavor, texture, shelf-life, and nutritional value while ensuring consumer safety throughout the food supply chain.",
      image: "https://t3.ftcdn.net/jpg/01/54/14/86/360_F_154148685_yvijeC6L2SFpvqFJ5H1lunPg40FzCAf1.jpg",
      productCount: "30+",
      color: "text-amber-600"
    },
    {
      category: "Hygiene Raw Materials & Detergents",
      categoryId: "hygiene-raw-materials",
      description: "Premium hygiene and cleaning solutions designed for commercial and industrial applications. Our formulations deliver superior cleaning performance while meeting environmental standards.",
      secondDescription: "From surface cleaners to specialized sanitizers, our product range ensures effective hygiene maintenance across healthcare, hospitality, and industrial sectors.",
      image: "https://media.istockphoto.com/id/1212821218/photo/medical-personnel-hand-washing-dressed-in-medical-scrubs-stock-photo.jpg?s=612x612&w=0&k=20&c=z8QcxCrqDcxA1Yd5yeLpWP2LUKfmS2guFekBLh2WB10=",
      productCount: "35+",
      color: "text-purple-600"
    },
    {
      category: "Basic Industry Chemicals",
      categoryId: "basic-chemicals",
      description: "Essential chemical building blocks for manufacturing and industrial processes. Our high-purity chemicals serve as reliable raw materials for diverse industrial applications.",
      secondDescription: "We supply critical industrial chemicals including acids, bases, solvents, and specialty compounds that form the foundation of modern manufacturing processes.",
      image: "https://www.theindustryoutlook.com/uploaded_images/newstransfer/6avcaorganic_chemicals_123.jpg",
      productCount: "60+",
      color: "text-slate-600"
    },
    {
      category: "Pharmaceutical Raw Materials",
      categoryId: "pharmaceutical",
      description: "High-quality pharmaceutical intermediates and active ingredients manufactured under strict GMP standards. Our products support the development of safe and effective medications.",
      secondDescription: "From APIs to excipients, our pharmaceutical chemicals meet international quality standards and regulatory requirements for drug manufacturing and research applications.",
      image: "https://jenike.com/wp-content/uploads/2023/06/iStock-463594335.jpg.webp",
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
        className="relative py-20 bg-[53bde1]"
      >
        <ChemicalElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'classic-fade-in' : 'opacity-0 translate-y-10'}`}>
            <h2 className="professional-subheading mb-4" style={{ color: 'var(--brand-dark-blue)' }}>
              Featured Sectors
            </h2>
            <div className="section-divider"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of chemical solutions, meticulously formulated 
              to exceed the highest standards of quality, performance, and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product, index) => {
              const productUrl = `/products?category=${product.categoryId || encodeURIComponent(product.category)}`;
              return (
                <Card 
                  key={index}
                  className={`interactive-card overflow-visible transition-all duration-500 rounded-2xl ${
                    isVisible ? 'classic-scale-in' : 'opacity-0 scale-95'
                  } ${hoveredCard === index ? '' : ''} ${selectedProduct === product.category ? 'ring-4 ring-blue-400 scale-105 shadow-[0_0_32px_8px_rgba(37,99,235,0.35)] z-20' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s`, cursor: 'pointer' }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onMouseDown={() => setSelectedProduct(product.category)}
                  onMouseUp={() => setTimeout(() => setSelectedProduct(''), 200)}
                  onClick={e => {
                    // Prevent click if a button or link inside is clicked
                    if ((e.target as HTMLElement).closest('button, a')) return;
                    window.location.href = productUrl;
                  }}
                  role="link"
                  tabIndex={0}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      window.location.href = productUrl;
                    }
                  }}
                  aria-label={`View products for ${product.category}`}
                >
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="relative flex flex-col h-full">
                      <div className="h-48 bg-cover bg-center relative overflow-hidden rounded-t-2xl"
                        style={{ backgroundImage: `url('${product.image}')` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-2xl" />
                        <div className={`absolute top-6 right-6 px-4 py-2 rounded-full bg-white/90 ${product.color} text-sm font-semibold shadow-sm`}>
                          {product.productCount} Products
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1 relative">
                        <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300" style={{ color: 'var(--brand-dark-blue)' }}>
                          {product.category}
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-sm mb-0.5">
                          {product.description}
                        </p>
                        <div
                          className={`w-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${hoveredCard === index ? 'max-h-40 opacity-100 mt-0' : 'max-h-0 opacity-0 mt-0'}`.replace('ease-[cubic-bezier\(0.4,0,0.2,1\)]', 'ease-[cubic-bezier(0.4,0,0.2,1)]')}
                          style={{ zIndex: 10 }}
                        >
                          <div className="bg-white/95 rounded-b-lg px-0 py-0 shadow-md">
                            <p className="text-slate-600 leading-relaxed text-sm mb-0.5 font-normal p-0 m-0">
                              {product.secondDescription}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 pt-3 mt-auto">
                          <Button
                            asChild
                            className="secondary-button flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-lg bg-blue-600 text-white border-2 border-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 group hover:bg-blue-700 hover:border-blue-700 hover:scale-105 hover:shadow-[0_0_16px_4px_rgba(37,99,235,0.45)] shadow-[0_2px_8px_0_rgba(37,99,235,0.15)]"
                            onClick={e => e.stopPropagation()}
                          >
                            <Link to={productUrl} replace={false} reloadDocument={false} className="flex items-center">
                              <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">View Products</span>
                              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
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

        {/* Enhanced Bottom Area with Advanced Visual Effects */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          {/* Animated Gradient Wave */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-600/20 via-purple-500/10 to-transparent animate-pulse"></div>
          
          {/* SVG Wave Pattern */}
          <svg className="absolute bottom-0 left-0 right-0 w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="url(#waveGradient)" className="animate-wave-flow" />
          </svg>

          {/* Floating Chemical Icons */}
          <div className="absolute bottom-4 left-8 w-12 h-12 opacity-20 animate-chemicalFloat1">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-500">
              <circle cx="12" cy="12" r="3" />
              <circle cx="12" cy="3" r="1" />
              <circle cx="12" cy="21" r="1" />
              <circle cx="3" cy="12" r="1" />
              <circle cx="21" cy="12" r="1" />
              <line x1="12" y1="9" x2="12" y2="15" stroke="currentColor" strokeWidth="1" />
              <line x1="9" y1="12" x2="15" y2="12" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>

          <div className="absolute bottom-8 right-16 w-8 h-8 opacity-15 animate-chemicalFloat2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-purple-500">
              <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" strokeWidth="2" />
              <circle cx="12" cy="12" r="3" fill="currentColor" />
            </svg>
          </div>

          <div className="absolute bottom-12 left-1/3 w-14 h-14 opacity-25 animate-chemicalFloat3">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-cyan-500">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>

          <div className="absolute bottom-6 right-1/4 w-10 h-10 opacity-20 animate-chemicalFloat4">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-green-500">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeWidth="2" />
              <polyline points="3.27,6.96 12,12.01 20.73,6.96" strokeWidth="2" />
              <line x1="12" y1="22.08" x2="12" y2="12" strokeWidth="2" />
            </svg>
          </div>

          <div className="absolute bottom-10 left-2/3 w-13 h-13 opacity-18 animate-chemicalFloat5">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-indigo-500">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>

          <div className="absolute bottom-14 right-8 w-11 h-11 opacity-22 animate-chemicalFloat6">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-pink-500">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeWidth="2" />
            </svg>
          </div>

          {/* Particle System */}
          <div className="absolute bottom-0 left-0 right-0 h-full">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
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