
import { ArrowRight, FileText, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { QuotationModal } from "@/components/QuotationModal";

export const FeaturedProducts = () => {
  const [isQuotationOpen, setIsQuotationOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const products = [
    {
      category: "Agro & Aquaculture Chemicals",
      description: "Our comprehensive range of agricultural and aquaculture chemicals includes premium fertilizers, micronutrients, and specialized solutions designed to enhance crop yield and optimize fish farming operations. From soil conditioning agents to water treatment solutions, we provide scientifically formulated products that ensure sustainable agricultural practices while maximizing productivity and environmental stewardship.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
      productCount: "50+",
      color: "from-emerald-500 to-green-600",
      gradient: "from-emerald-50 to-green-50"
    },
    {
      category: "Water Treatment Chemicals",
      description: "Advanced water treatment solutions encompassing a full spectrum of purification, conditioning, and treatment chemicals for industrial, municipal, and commercial applications. Our portfolio includes coagulants, flocculants, disinfectants, and specialty chemicals that ensure water quality compliance while optimizing operational efficiency and environmental sustainability across diverse water treatment facilities.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      productCount: "40+",
      color: "from-blue-500 to-cyan-600",
      gradient: "from-blue-50 to-cyan-50"
    },
    {
      category: "Hygiene Raw Materials",
      description: "Premium quality raw materials specifically formulated for the hygiene industry, including surfactants, emulsifiers, preservatives, and active ingredients for detergents, soaps, and personal care products. Our carefully selected portfolio enables manufacturers to create high-performance cleaning and personal care solutions that meet stringent quality standards while ensuring consumer safety and satisfaction.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      productCount: "80+",
      color: "from-purple-500 to-violet-600",
      gradient: "from-purple-50 to-violet-50"
    },
    {
      category: "Metal Finishing Chemicals",
      description: "Specialized chemical solutions for metal processing, surface treatment, and finishing applications across manufacturing industries. Our comprehensive range includes electroplating chemicals, surface cleaners, rust inhibitors, and protective coatings that enhance durability, appearance, and performance of metal components while ensuring compliance with industry specifications and environmental regulations.",
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
      <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-gray-100 relative overflow-hidden">
        {/* Premium background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-32 left-20 w-80 h-80 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Featured Products
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Discover our comprehensive range of chemical solutions, meticulously formulated 
              to exceed the highest standards of quality, performance, and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 cursor-pointer bg-white/90 backdrop-blur-xl border border-gray-200/50"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Premium gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                
                <CardContent className="p-0">
                  <div className="relative">
                    <div 
                      className="h-80 bg-cover bg-center relative overflow-hidden"
                      style={{ backgroundImage: `url('${product.image}')` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className={`absolute top-6 right-6 px-4 py-2 rounded-full bg-gradient-to-r ${product.color} text-white text-sm font-bold shadow-xl backdrop-blur-sm`}>
                        {product.productCount} Products
                      </div>
                      
                      {/* Floating elements */}
                      <div className="absolute inset-0 opacity-20">
                        <div className={`absolute top-20 left-10 w-20 h-20 bg-gradient-to-r ${product.color} rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000`}></div>
                        <div className={`absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r ${product.color} rounded-full blur-lg group-hover:scale-125 transition-transform duration-1000`} style={{ animationDelay: '0.5s' }}></div>
                      </div>
                    </div>
                    
                    <div className={`p-10 bg-gradient-to-br ${product.gradient} group-hover:bg-white transition-all duration-500`}>
                      <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                        {product.category}
                      </h3>
                      
                      <p className="text-gray-700 mb-8 leading-relaxed text-lg font-medium line-height-loose">
                        {product.description}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          variant="outline"
                          className="flex-1 flex items-center justify-center hover:bg-blue-50 hover:border-blue-400 hover:text-blue-700 transition-all duration-500 group/btn border-2 rounded-xl py-6 text-lg font-semibold"
                        >
                          <FileText className="w-5 h-5 mr-3 group-hover/btn:scale-110 transition-transform duration-300" />
                          MSDS
                        </Button>
                        
                        <Button
                          onClick={() => handleQuoteRequest(product.category)}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center justify-center transition-all duration-500 hover:scale-105 group/btn shadow-xl hover:shadow-2xl rounded-xl py-6 text-lg font-semibold"
                        >
                          <MessageSquare className="w-5 h-5 mr-3 group-hover/btn:scale-110 transition-transform duration-300" />
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
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-500 hover:scale-105 group shadow-2xl hover:shadow-3xl"
            >
              View All Products
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
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
