
import { ArrowRight, FileText, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import { QuotationModal } from "@/components/QuotationModal";
import { ChemicalElements } from "@/components/ChemicalElements";

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
      description: "Our comprehensive range of agricultural and aquaculture chemicals includes premium fertilizers, micronutrients, and specialized solutions designed to enhance crop yield and optimize fish farming operations.",
      secondDescription: "From soil conditioning agents to water treatment solutions, we provide scientifically formulated products that ensure sustainable agricultural practices while maximizing productivity.",
      image: "https://i0.wp.com/razzanj.com/wp-content/uploads/2016/07/nature-landscape-nature-landscape-hd-image-download-wheat-farm-hd-wallpaper-notebook-background-wheat-farmers-wheat-farming-process-wheat-farming-in-kenya.jpg?ssl=1",
      productCount: "50+",
      color: "text-green-600"
    },
    {
      category: "Water Treatment Chemicals",
      description: "Advanced water treatment solutions encompassing a full spectrum of purification, conditioning, and treatment chemicals for industrial, municipal, and commercial applications.",
      secondDescription: "Our portfolio includes coagulants, flocculants, disinfectants, and specialty chemicals that ensure water quality compliance while optimizing operational efficiency.",
      image: "https://gifdb.com/images/high/water-splash-ocean-waves-v7asu155ykhivrv8.gif",
      productCount: "40+",
      color: "text-blue-600"
    },
    {
      category: "Food Grade Chemicals",
      description: "Food-grade chemical solutions including additives, preservatives, and specialty ingredients that meet strict safety and quality standards for food processing applications.",
      secondDescription: "Our comprehensive range includes natural and synthetic ingredients that enhance flavor, texture, shelf-life, and nutritional value while ensuring consumer safety.",
      image: "https://i.makeagif.com/media/8-01-2016/wW8rt2.gif",
      productCount: "30+",
      color: "text-amber-600"
    },
    {
      category: "Hygiene Raw Materials",
      description: "Premium quality raw materials specifically formulated for the hygiene industry, including surfactants, emulsifiers, preservatives, and active ingredients for detergents and personal care products.",
      secondDescription: "Our carefully selected portfolio enables manufacturers to create high-performance cleaning and personal care solutions that meet stringent quality standards.",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQF2W9YwL1sT7g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1734252826925?e=2147483647&v=beta&t=RM0Q89mDbn2PuHZfgMc4dkcpXlpZKi1fk4LnragsGAU",
      productCount: "80+",
      color: "text-purple-600"
    },
    
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
            <h2 className="professional-subheading mb-4">
              Featured Products
            </h2>
            <div className="section-divider"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of chemical solutions, meticulously formulated 
              to exceed the highest standards of quality, performance, and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                      <h3 className="text-2xl font-semibold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors duration-300">
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
                          variant="outline"
                          className="secondary-button flex items-center justify-center"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          MSDS
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
            <Button size="lg" className="accent-button text-lg px-8 py-4">
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
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
