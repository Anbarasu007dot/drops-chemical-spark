
import { ArrowRight, FileText, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const FeaturedProducts = () => {
  const products = [
    {
      category: "Agro & Aquaculture Chemicals",
      description: "High-quality fertilizers, micronutrients, and aquaculture solutions for enhanced crop yield and fish farming.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
      productCount: "50+",
      color: "from-green-500 to-green-600"
    },
    {
      category: "Water Treatment Chemicals",
      description: "Comprehensive range of chemicals for water purification, treatment, and conditioning across industrial applications.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      productCount: "40+",
      color: "from-blue-500 to-blue-600"
    },
    {
      category: "Hygiene Raw Materials",
      description: "Premium quality raw materials for detergents, soaps, and personal care product manufacturing.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      productCount: "80+",
      color: "from-purple-500 to-purple-600"
    },
    {
      category: "Metal Finishing Chemicals",
      description: "Specialized chemicals for metal processing, surface treatment, and finishing applications in manufacturing.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      productCount: "30+",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of chemical solutions, carefully formulated 
            to meet the highest standards of quality and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <div 
                    className="h-64 bg-cover bg-center relative overflow-hidden"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${product.color} text-white text-sm font-semibold`}>
                      {product.productCount} Products
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {product.category}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        variant="outline"
                        className="flex-1 flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 group"
                      >
                        <FileText className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        MSDS
                      </Button>
                      
                      <Button
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 group"
                      >
                        <MessageSquare className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Get a Quote
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 group"
          >
            View All Products
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
