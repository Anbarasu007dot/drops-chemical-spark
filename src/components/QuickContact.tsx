import { Mail, MessageSquare, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";

export const QuickContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 parallax-bg"
      style={{
        backgroundImage: " url('https://tsscbse.com/wp-content/uploads/2023/10/Untitled-design-9-1.gif')"
        // backgroundImage: "linear-gradient(rgba(165, 166, 169, 0.8), rgba(165, 168, 173, 0.8)), url('https://www.shutterstock.com/image-photo/scientist-adding-liquid-test-tube-600nw-2493601121.jpg')"
      }}
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'modern-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your chemical requirements? Our experts are here to help 
            you find the perfect solutions for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className={`contact-card transition-all duration-500 ${isVisible ? 'modern-slide-up' : 'opacity-0 translate-y-10'} bg-slate-800/50 hover:bg-slate-700/60`}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email Us</h3>
                    <p className="text-blue-200 text-sm">info@dropschemicals.com</p>
                    <p className="text-blue-200 text-sm">sales@dropschemicals.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={`contact-card transition-all duration-500 ${isVisible ? 'modern-slide-up' : 'opacity-0 translate-y-10'} bg-slate-800/50 hover:bg-slate-700/60`} style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">WhatsApp</h3>
                    <p className="text-blue-200 text-sm">Quick Response</p>
                    <p className="text-blue-200 text-sm">24/7 Available</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={`contact-card transition-all duration-500 ${isVisible ? 'modern-slide-up' : 'opacity-0 translate-y-10'} bg-slate-800/50 hover:bg-slate-700/60`} style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Visit Us</h3>
                    <p className="text-blue-200 text-sm">Coimbatore, Tamil Nadu</p>
                    <p className="text-blue-200 text-sm">India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Contact Form */}
          <div className="lg:col-span-2">
            <Card className={`bg-white/10 backdrop-blur-md border-white/20 transition-all duration-500 ${isVisible ? 'modern-scale-in' : 'opacity-0 scale-95'}`}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Request a Quote</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <Input
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="professional-input bg-white/20 border-white/30 text-white placeholder:text-blue-200 focus:border-blue-400"
                        required
                      />
                    </div>
                    <div className="relative">
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="professional-input bg-white/20 border-white/30 text-white placeholder:text-blue-200 focus:border-blue-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <Input
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="professional-input bg-white/20 border-white/30 text-white placeholder:text-blue-200 focus:border-blue-400"
                    />
                  </div>

                  <div className="relative">
                    <Textarea
                      name="message"
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="professional-textarea bg-white/20 border-white/30 text-white placeholder:text-blue-200 focus:border-blue-400"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full accent-button text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-105 group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
