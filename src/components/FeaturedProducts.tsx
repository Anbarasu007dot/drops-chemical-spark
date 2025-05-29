
import { ArrowRight, FileText, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import { QuotationModal } from "@/components/QuotationModal";

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
      secondDescription: "From soil conditioning agents to water treatment solutions, we provide scientifically formulated products that ensure sustainable agricultural practices while maximizing productivity and environmental stewardship.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
      productCount: "50+",
      color: "from-emerald-500 to-green-600",
      gradient: "from-emerald-50 to-green-50"
    },
    {
      category: "Water Treatment Chemicals",
      description: "Advanced water treatment solutions encompassing a full spectrum of purification, conditioning, and treatment chemicals for industrial, municipal, and commercial applications.",
      secondDescription: "Our portfolio includes coagulants, flocculants, disinfectants, and specialty chemicals that ensure water quality compliance while optimizing operational efficiency and environmental sustainability.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      productCount: "40+",
      color: "from-blue-500 to-cyan-600",
      gradient: "from-blue-50 to-cyan-50"
    },
    {
      category: "Hygiene Raw Materials",
      description: "Premium quality raw materials specifically formulated for the hygiene industry, including surfactants, emulsifiers, preservatives, and active ingredients for detergents and personal care products.",
      secondDescription: "Our carefully selected portfolio enables manufacturers to create high-performance cleaning and personal care solutions that meet stringent quality standards while ensuring consumer safety and satisfaction.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      productCount: "80+",
      color: "from-purple-500 to-violet-600",
      gradient: "from-purple-50 to-violet-50"
    },
    {
      category: "Metal Finishing Chemicals",
      description: "Specialized chemical solutions for metal processing, surface treatment, and finishing applications across manufacturing industries.",
      secondDescription: "Our comprehensive range includes electroplating chemicals, surface cleaners, rust inhibitors, and protective coatings that enhance durability, appearance, and performance of metal components.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      productCount: "30+",
      color: "from-amber-500 to-orange-600",
      gradient: "from-amber-50 to-orange-50"
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
        className="py-32 bg-gradient-to-br from-white via-slate-50 to-gray-100 relative overflow-hidden"
      >
        {/* Premium Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-32 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animation-pulse-soft"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animation-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl animation-wave" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'animation-fade-in' : 'opacity-0 translate-y-10'}`}>
            <h2 className="premium-subheading mb-8">
              Featured Products
            </h2>
            <div className="w-40 h-1.5 premium-gradient mx-auto mb-10 rounded-full"></div>
            <p className="text-2xl md:text-3xl text-slate-600 max-w-5xl mx-auto leading-relaxed font-light">
              Discover our comprehensive range of chemical solutions, meticulously formulated 
              <span className="block mt-3 font-medium gradient-text">
                to exceed the highest standards of quality, performance, and reliability
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {products.map((product, index) => (
              <Card 
                key={index}
                className={`group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-1000 hover:-translate-y-4 cursor-pointer bg-white/95 backdrop-blur-xl border-2 border-white/30 hover-shine ${
                  isVisible ? 'animation-scale-in' : 'opacity-0 scale-95'
                }`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Premium Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-sm"></div>
                
                <CardContent className="p-0">
                  <div className="relative">
                    <div 
                      className="h-96 bg-cover bg-center relative overflow-hidden"
                      style={{ backgroundImage: `url('${product.image}')` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      <div className={`absolute top-8 right-8 px-6 py-3 rounded-full bg-gradient-to-r ${product.color} text-white text-lg font-bold shadow-2xl backdrop-blur-sm border border-white/30 hover-glow`}>
                        {product.productCount} Products
                      </div>
                      
                      {/* Enhanced Floating Elements */}
                      <div className="absolute inset-0 opacity-30">
                        <div className={`absolute top-24 left-12 w-24 h-24 bg-gradient-to-r ${product.color} rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000 animation-float`}></div>
                        <div className={`absolute bottom-24 right-12 w-20 h-20 bg-gradient-to-r ${product.color} rounded-full blur-lg group-hover:scale-125 transition-transform duration-1000 animation-pulse-soft`} style={{ animationDelay: '1s' }}></div>
                        <div className={`absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r ${product.color} rounded-full blur-md group-hover:scale-110 transition-transform duration-1000 animation-wave`} style={{ animationDelay: '2s' }}></div>
                      </div>
                    </div>
                    
                    <div className={`p-12 bg-gradient-to-br ${product.gradient} group-hover:bg-white/95 transition-all duration-700`}>
                      <h3 className="text-3xl font-bold text-slate-900 mb-8 group-hover:gradient-text transition-all duration-500 leading-tight">
                        {product.category}
                      </h3>
                      
                      <p className="text-slate-700 mb-6 leading-relaxed text-lg font-medium">
                        {product.description}
                      </p>

                      <p className="text-slate-600 mb-10 leading-relaxed text-lg">
                        {product.secondDescription}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-6">
                        <Button
                          variant="outline"
                          className="flex-1 flex items-center justify-center hover:bg-blue-50 hover:border-blue-500 hover:text-blue-700 transition-all duration-500 group/btn border-2 rounded-2xl py-6 text-lg font-semibold hover-glow"
                        >
                          <FileText className="w-6 h-6 mr-3 group-hover/btn:scale-125 transition-transform duration-500" />
                          MSDS
                        </Button>
                        
                        <Button
                          onClick={() => handleQuoteRequest(product.category)}
                          className="flex-1 premium-button flex items-center justify-center py-6 text-lg font-semibold hover-shine group/btn"
                        >
                          <MessageSquare className="w-6 h-6 mr-3 group-hover/btn:scale-125 transition-transform duration-500" />
                          Get a Quote
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-20">
            <Button 
              size="lg"
              className="premium-button px-16 py-8 text-2xl font-bold hover-shine group"
            >
              View All Products
              <ArrowRight className="ml-4 w-7 h-7 group-hover:translate-x-3 transition-transform duration-500" />
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
