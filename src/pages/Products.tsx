
import { useState } from "react";
import { Search, FileText, MessageSquare, Filter } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const productCategories = [
    {
      name: "Agro & Aquaculture Chemicals",
      id: "agro-aquaculture",
      products: [
        "Ammonium Polyphosphate", "Ammonium Chloride", "Ammonium Sulphate (White)",
        "Biofertilizer", "Boran", "Boric Acid", "Calcium Carbonate", "Calcium Chloride",
        "Calcium Sulphate", "Calcium Nitrate", "Copper Sulphate", "Di Calcium Phosphate",
        "Ferric Chloride", "Ferrous Sulphate", "Fumaric Acid", "Humic Acid (Liquid/Powder)",
        "Humic Acid (Shiny Flakes)", "Hydrochloric Acid", "Hydrogen Peroxide", "Lime Powder",
        "Magnesium Phosphate", "Malic Acid", "Manganese Chloride", "Manganese Sulphate",
        "Magnesium Chloride", "Magnesium Sulphate", "Micronutrients", "Mixed Fertilizer",
        "Mono Ammonium Phosphate", "Mono Calcium Phosphate", "NPK Fertilizers (All Series)",
        "Organix", "Phosphoric Acid", "Potassium Chloride", "Potassium Humate",
        "Potassium Hydroxide", "Potassium Nitrate", "Potassium Sulphate", "Silver Hydrogen Peroxide",
        "Sodium Chloride", "Sodium Hydroxide", "Sodium Nitrate"
      ]
    },
    {
      name: "Water Treatment Chemicals",
      id: "water-treatment", 
      products: [
        "Alum (Ferric / Non-Ferric)", "Bioculture", "Bleaching Powder", "Calcium Hypochlorite",
        "Caustic Soda", "Citric Acid", "Decolorant", "EDTA", "Ferric Chloride",
        "Hydrated Lime Powder", "Hydrazine Hydrate (80%)", "Hydrochloric Acid (32%)",
        "Hydrogen Peroxide (50%)", "Liquid Ammonia", "Microbes and Enzymes", "Nitric Acid (55%, 60%, 72%)",
        "Oxygen Scavengers", "Poly Aluminium Chloride (L/P)", "Poly Electrolyte (Anionic, Cationic)",
        "Soda Ash", "Sodium Chloride", "Sodium Hypochlorite", "Sodium Meta Bi Sulphate",
        "Sodium Sulphate", "RO Antiscalant", "pH Booster", "Sodium Bicarbonate", "Scale Remover (HCL)",
        "TCCA 90", "Copper Sulphate", "Chlorine"
      ]
    },
    {
      name: "Hygiene Raw Materials & Detergents",
      id: "hygiene-raw-materials",
      products: [
        "Acid Slurry (IPCL/TP)", "Acid Thickener", "Alphox 100 & 200 (All Grades)",
        "AOS Liquid/Paste/Powder", "BKC (50%/80%)", "Baking Soda (Sodium Bicarbonate)",
        "Butyl Acetate", "Caustic Soda", "Cetyl Acetate", "Coco Amido Propyl Betaine (CAPB)",
        "Coco Diethanol Amide (CDEA)", "EGMS", "Enzyme", "EDTA", "Fatty Acids",
        "Fatty Alcohols", "Filler Salt / Free Flow Salt", "Ginasul / Ginol (All Series)",
        "Gum Resin", "Glycerine", "IPA (Isopropyl Alcohol)", "Isopropyl Myristate",
        "Lauramide DEA", "Liquid Paraffin (Light & Heavy)", "Lauric Acid", "Muristic",
        "MEC (Mono Ethylene Sulphate)", "Non-Ionic Surfactant", "Olic Acid", "Optical Brightener",
        "Oxytech", "Petroleum Jelly", "Phynoil Compound", "Pine Oil (32%)", "Silicon Oil",
        "Silky (Silicone)", "SLES Series / SLES Paste 70%", "Soap Noodles", "Soda Ash",
        "SLS Powder (Needle)", "Sodium Carboxy Methyl Cellulose", "Sodium Percarbonate",
        "Sodium Meta Silicate", "Sodium Sulphate", "Sodium Tripolyphosphate (STPP)",
        "Synthetic Thickener", "Soft Soap", "Tri Sodium Phosphate", "Tinopal", "Washing Soda"
      ]
    },
    {
      name: "Food Chemicals",
      id: "food-chemicals",
      products: [
        "Acetic Acid", "Ammonium Bicarbonate", "Ascorbic Acid", "Calcium Chloride",
        "Calcium Propionate", "Citric Acid", "Final Gel", "Liquid Glucose",
        "Phosphoric Acid (Food Grade)", "Potassium Citrate", "Potassium Sorbate",
        "Sodium Aluminium Sulphate", "Sodium Benzoate", "Sodium Bicarbonate",
        "Sodium Citrate", "Sorbic Acid", "Sorbitol", "Xanthan Gum"
      ]
    }
  ];

  const filteredCategories = productCategories.filter(category =>
    selectedCategory === "all" || category.id === selectedCategory
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Products
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 animate-slide-up">
            Comprehensive range of high-quality chemical solutions for diverse industrial applications
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4 mt-12">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-blue-200 focus:border-blue-400"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:border-blue-400 focus:outline-none"
            >
              <option value="all" className="text-gray-900">All Categories</option>
              {productCategories.map((category) => (
                <option key={category.id} value={category.id} className="text-gray-900">
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredCategories.map((category, categoryIndex) => (
            <div key={category.id} id={category.id} className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                {category.name}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products
                  .filter(product => 
                    searchTerm === "" || 
                    product.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((product, index) => (
                    <Card 
                      key={index}
                      className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                          {product}
                        </h3>
                        
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 group"
                          >
                            <FileText className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                            MSDS
                          </Button>
                          
                          <Button
                            size="sm"
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105 group"
                          >
                            <MessageSquare className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                            Quote
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
