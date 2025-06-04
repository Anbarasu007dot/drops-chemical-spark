
import { useState } from "react";
import { X, Send, Package, User, Mail, Phone, Building, MessageSquare, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

interface QuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  productCategory: string;
}

export const QuotationModal = ({ isOpen, onClose, productCategory }: QuotationModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    quantity: "",
    specifications: "",
    timeline: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quotation request submitted:", { productCategory, ...formData });
    // Handle form submission logic here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Enhanced backdrop with subtle patterns */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-lg transition-opacity duration-700"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)
          `
        }}
        onClick={onClose}
      />
      
      {/* Enhanced modal content */}
      <Card className="relative z-10 w-full max-w-5xl max-h-[95vh] overflow-y-auto bg-white/98 backdrop-blur-xl border border-gray-200/80 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.25)] rounded-3xl transform transition-all duration-700 scale-100">
        <CardContent className="p-0">
          {/* Premium gradient header with floating elements */}
          <div className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-cyan-600 p-10 text-white rounded-t-3xl overflow-hidden">
            {/* Animated background patterns */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-8 w-20 h-20 bg-white/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute top-16 right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '4s' }}></div>
              <div className="absolute bottom-8 left-16 w-24 h-24 bg-white/15 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-4 right-20 w-16 h-16 bg-white/25 rounded-full blur-md animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                    <Sparkles className="w-8 h-8 text-yellow-300" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold tracking-tight">Request Premium Quotation</h2>
                    <p className="text-blue-100 text-lg mt-2">Get personalized pricing for your chemical needs</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="text-white hover:bg-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110"
                >
                  <X className="w-7 h-7" />
                </Button>
              </div>
              
              <div className="flex items-center space-x-4 bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="p-3 bg-white/30 rounded-xl">
                  <Package className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">{productCategory}</span>
                  <p className="text-blue-100 mt-1">Premium chemical solutions tailored for your industry</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced form with premium styling */}
          <div className="p-10 bg-gradient-to-br from-gray-50 to-white">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="flex items-center text-gray-700 font-semibold text-lg">
                      <User className="w-5 h-5 mr-3 text-blue-600" />
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 rounded-xl py-4 px-5 text-lg transition-all duration-300 hover:border-gray-300"
                      required
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="flex items-center text-gray-700 font-semibold text-lg">
                      <Mail className="w-5 h-5 mr-3 text-blue-600" />
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 rounded-xl py-4 px-5 text-lg transition-all duration-300 hover:border-gray-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-3">
                    <label className="flex items-center text-gray-700 font-semibold text-lg">
                      <Phone className="w-5 h-5 mr-3 text-blue-600" />
                      Phone Number *
                    </label>
                    <Input
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 rounded-xl py-4 px-5 text-lg transition-all duration-300 hover:border-gray-300"
                      required
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="flex items-center text-gray-700 font-semibold text-lg">
                      <Building className="w-5 h-5 mr-3 text-blue-600" />
                      Company Name
                    </label>
                    <Input
                      name="company"
                      placeholder="Enter your company name"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 rounded-xl py-4 px-5 text-lg transition-all duration-300 hover:border-gray-300"
                    />
                  </div>
                </div>
              </div>

              {/* Product Requirements Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <Package className="w-5 h-5 text-purple-600" />
                  </div>
                  Product Requirements
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="flex items-center text-gray-700 font-semibold text-lg">
                      <Package className="w-5 h-5 mr-3 text-purple-600" />
                      Required Quantity
                    </label>
                    <Input
                      name="quantity"
                      placeholder="e.g., 500 kg, 10 tons"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 rounded-xl py-4 px-5 text-lg transition-all duration-300 hover:border-gray-300"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="flex items-center text-gray-700 font-semibold text-lg">
                      <Calendar className="w-5 h-5 mr-3 text-purple-600" />
                      Required Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 rounded-xl py-4 px-5 text-lg transition-all duration-300 hover:border-gray-300 focus:outline-none bg-white"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (1-3 days)</option>
                      <option value="week">Within a week</option>
                      <option value="month">Within a month</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3 mt-6">
                  <label className="flex items-center text-gray-700 font-semibold text-lg">
                    <Package className="w-5 h-5 mr-3 text-purple-600" />
                    Product Specifications
                  </label>
                  <Textarea
                    name="specifications"
                    placeholder="Please specify grade, purity, packaging requirements, or any other specifications..."
                    value={formData.specifications}
                    onChange={handleInputChange}
                    className="border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 rounded-xl py-4 px-5 text-lg min-h-[120px] transition-all duration-300 hover:border-gray-300 resize-none"
                  />
                </div>

                <div className="space-y-3 mt-6">
                  <label className="flex items-center text-gray-700 font-semibold text-lg">
                    <MessageSquare className="w-5 h-5 mr-3 text-purple-600" />
                    Additional Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Any additional information or special requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 rounded-xl py-4 px-5 text-lg min-h-[140px] transition-all duration-300 hover:border-gray-300 resize-none"
                  />
                </div>
              </div>

              {/* Enhanced Submit Section */}
              <div className="flex justify-end space-x-6 pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="px-10 py-4 text-lg font-semibold rounded-xl border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white px-12 py-4 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 group shadow-2xl hover:shadow-3xl"
                >
                  <Send className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Quotation Request
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
