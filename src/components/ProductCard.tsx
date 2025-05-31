
import { MessageSquare, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { QuotationModal } from "@/components/QuotationModal";
import { toast } from "sonner";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    category: string;
    description: string;
    image: string;
    purity: string;
    grade: string;
    hasMSDS: boolean;
    msdsLink?: string;
  };
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isQuotationOpen, setIsQuotationOpen] = useState(false);

  const handleMSDSClick = () => {
    if (product.hasMSDS && product.msdsLink) {
      window.open(product.msdsLink, '_blank');
      toast.success("MSDS document opened in new tab");
    } else {
      toast.info("MSDS requested - our team will contact you soon");
    }
  };

  const handleQuoteRequest = () => {
    setIsQuotationOpen(true);
  };

  return (
    <>
      <Card className="interactive-card group overflow-hidden h-full">
        <CardContent className="p-0">
          <div className="relative">
            <div 
              className="h-48 bg-cover bg-center relative overflow-hidden"
              style={{ backgroundImage: `url('${product.image}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-white/90 text-slate-700">
                  {product.grade}
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4">
                <Badge variant="outline" className="bg-white/90 text-slate-700 border-white/50">
                  {product.purity}
                </Badge>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300" style={{ color: 'var(--brand-dark-blue)' }}>
                {product.name}
              </h3>
              
              <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3">
                {product.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <Button
                  onClick={handleMSDSClick}
                  size="sm"
                  className={`flex items-center justify-center text-sm px-4 py-2 ${
                    product.hasMSDS 
                      ? 'bg-blue-900 hover:bg-blue-800 text-white' 
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  {product.hasMSDS ? (
                    <>
                      <Download className="w-3 h-3 mr-2" />
                      Get MSDS
                    </>
                  ) : (
                    <>
                      <FileText className="w-3 h-3 mr-2" />
                      Request MSDS
                    </>
                  )}
                </Button>
                
                <Button
                  onClick={handleQuoteRequest}
                  size="sm"
                  className="accent-button flex items-center justify-center text-sm px-4 py-2"
                >
                  <MessageSquare className="w-3 h-3 mr-2" />
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <QuotationModal 
        isOpen={isQuotationOpen}
        onClose={() => setIsQuotationOpen(false)}
        productCategory={product.name}
      />
    </>
  );
};
