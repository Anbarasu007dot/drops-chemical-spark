
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Search, Filter } from "lucide-react";

const Products = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sectors = [
    {
      id: "agro-aquaculture",
      name: "Agro & Aquaculture Industries",
      description: "Advanced agricultural chemical solutions for sustainable farming practices with innovative crop protection, soil enhancement, and yield optimization technologies. We provide environmentally conscious formulations that ensure sustainable agriculture.",
      services: [
        "Tea, Coffee & Cardamom Estates",
        "Potential Farmers & Clusters", 
        "Hydro Farms & Fish Farms",
        "Poultry Farms"
      ],
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: "water-treatment", 
      name: "Water Treatment Chemicals",
      description: "Comprehensive water treatment solutions for industrial, municipal, and residential applications ensuring water purity, system efficiency, and environmental compliance across diverse treatment processes.",
      services: [
        "Effluent Treatment Plants & Sewage Treatment Plants",
        "Waste Water Treatment Plants",
        "Cooling Towers, Boilers & RO Plants", 
        "Swimming Pools"
      ],
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: "food-chemicals",
      name: "Food Processing Chemicals", 
      description: "Food-grade chemical solutions meeting stringent safety standards for food processing, preservation, and packaging industries ensuring quality, safety, and regulatory compliance.",
      services: [
        "Beverage Industries",
        "Dairy Processing Units", 
        "Sugar Industries & Home Made Food Industries",
        "Starch Industries (Sagoserve Industries)"
      ],
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: "basic-industrial",
      name: "Basic Industrial Chemicals",
      description: "Essential industrial chemicals and raw materials for manufacturing processes across multiple industries including textiles, automotive, construction, and heavy engineering applications.",
      services: [
        "Bright Bar Industries",
        "Aluminum Die Casting & Stainless Steel Casting",
        "Radiators & Heat Exchanger Manufacturers",
        "Textile Processing Units, Dyeing & Leather Units",
        "Paper Industries"
      ],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: "hygiene-raw-materials",
      name: "Hygiene Products",
      description: "Premium quality raw materials for hygiene industry including surfactants, emulsifiers, preservatives, and active ingredients for detergents and personal care products.",
      services: [
        "Cosmetic Industries & Laundry Care Industries", 
        "Institutes, Hotels, Resorts & Hospitals",
        "Individual Houses & Offices"
      ],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: "detergent-soap",
      name: "Detergent and Soap Manufacturers",
      description: "Specialized chemical solutions for detergent and soap manufacturing including formulation ingredients, performance enhancers, and quality improvement additives.",
      services: [
        "Detergent Soap & Liquid Manufacturers",
        "Cosmetic Industries & Laundry Care Industries", 
        "Formulations & Hygiene Product Manufacturers"
      ],
      image: "https://images.unsplash.com/photo-1563865436274-c2cb04c6c0c8?auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: "solvents-petro",
      name: "Solvents & Petro Chemicals", 
      description: "High-purity solvents and petrochemical products for diverse industrial applications including rubber processing, paint manufacturing, and heavy engineering.",
      services: [
        "Rubber Industries & Paint Industries",
        "Foundries & Heavy Engineering Industries",
        "Lubricant Manufacturers & Oil Drilling Industries",
        "Gold Processing Units"
      ],
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: "metal-finishing",
      name: "Metal Finishing Industries",
      description: "Advanced chemical solutions for metal finishing processes including plating, coating, surface treatment, and quality enhancement for various metal applications.",
      services: [
        "Gold & Silver Plating Industries",
        "Tin, Copper & Nickel Plating Industries",
        "Cooking Utensils Manufacturers", 
        "Powder Coating Units & Zinc Plating"
      ],
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1920&q=80"
    }
  ];

  // Sample products data
  const products = [
    {
      id: "1",
      name: "Calcium Hypochlorite",
      category: "water-treatment",
      description: "High-grade calcium hypochlorite for water disinfection and treatment applications. Effective against bacteria, viruses, and algae.",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&w=400&q=80",
      purity: "70% Available Chlorine",
      grade: "Technical Grade",
      hasMSDS: true,
      msdsLink: "https://drive.google.com/file/d/sample1"
    },
    {
      id: "2", 
      name: "Sodium Hydroxide",
      category: "basic-industrial",
      description: "Premium quality caustic soda flakes for industrial processes including soap manufacturing, paper production, and chemical processing.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=400&q=80",
      purity: "99% Min",
      grade: "Industrial Grade",
      hasMSDS: false
    },
    {
      id: "3",
      name: "Potassium Nitrate",
      category: "agro-aquaculture", 
      description: "Agricultural grade potassium nitrate fertilizer for enhanced crop nutrition and yield improvement in various farming applications.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=400&q=80",
      purity: "13-0-46",
      grade: "Fertilizer Grade",
      hasMSDS: true,
      msdsLink: "https://drive.google.com/file/d/sample3"
    },
    {
      id: "4",
      name: "Citric Acid Monohydrate",
      category: "food-chemicals",
      description: "Food grade citric acid for beverage, confectionery, and food preservation applications meeting international quality standards.",
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=400&q=80",
      purity: "99.5% Min",
      grade: "Food Grade",
      hasMSDS: true,
      msdsLink: "https://drive.google.com/file/d/sample4"
    },
    {
      id: "5",
      name: "Linear Alkyl Benzene Sulphonic Acid",
      category: "hygiene-raw-materials",
      description: "High-quality LABSA for detergent and soap manufacturing with excellent cleaning properties and biodegradability.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80",
      purity: "96% Min",
      grade: "Detergent Grade",
      hasMSDS: false
    },
    {
      id: "6",
      name: "Toluene",
      category: "solvents-petro",
      description: "Premium industrial solvent for paint, rubber, and chemical manufacturing with high purity and consistent quality.",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=400&q=80",
      purity: "99.8% Min",
      grade: "Industrial Grade", 
      hasMSDS: true,
      msdsLink: "https://drive.google.com/file/d/sample6"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCurrentSector = () => {
    return sectors.find(sector => sector.id === selectedCategory);
  };

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 premium-page-bg">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="trusted-leaders-heading mb-6">
              Premium Chemical Products
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-white to-blue-200 mx-auto mb-8"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of high-quality chemical solutions 
              designed for diverse industrial applications and sectors
            </p>
          </div>
        </div>
      </section>

      {/* Sector Display Section */}
      {selectedCategory !== 'all' && getCurrentSector() && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="sector-showcase">
              <div 
                className="sector-hero h-64 relative rounded-2xl overflow-hidden mb-8"
                style={{ backgroundImage: `url('${getCurrentSector()?.image}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
                    {getCurrentSector()?.name}
                  </h2>
                </div>
              </div>
              
              <div className="sector-content">
                <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-4xl mx-auto text-center">
                  {getCurrentSector()?.description}
                </p>
                
                <div className="services-dropdown mb-12">
                  <Button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="dropdown-trigger bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center"
                  >
                    Our Services In This Sector
                    <ChevronDown className={`ml-2 w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </Button>
                  
                  {isDropdownOpen && (
                    <div className="dropdown-menu mt-4 bg-white border border-slate-200 rounded-xl shadow-lg p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {getCurrentSector()?.services.map((service, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-slate-700">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filters and Search */}
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => setSelectedCategory('all')}
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                className={selectedCategory === 'all' ? 'accent-button' : ''}
              >
                All Sectors
              </Button>
              {sectors.map((sector) => (
                <Button
                  key={sector.id}
                  onClick={() => setSelectedCategory(sector.id)}
                  variant={selectedCategory === sector.id ? 'default' : 'outline'}
                  className={selectedCategory === sector.id ? 'accent-button' : ''}
                >
                  {sector.name}
                </Button>
              ))}
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <>
              <div className="flex items-center justify-between mb-8">
                <p className="text-slate-600">
                  Showing {filteredProducts.length} products
                  {selectedCategory !== 'all' && ` in ${getCurrentSector()?.name}`}
                </p>
                <Badge variant="outline" className="text-blue-600 border-blue-600">
                  {filteredProducts.length} Results
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <Filter className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-slate-600 mb-2">No products found</h3>
              <p className="text-slate-500">
                Try adjusting your search criteria or browse different categories
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
