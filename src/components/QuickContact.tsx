
import { Mail, MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";

export const QuickContact = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 premium-page-bg"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'modern-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h2 className="trusted-leaders-heading mb-4">
            Get in Touch
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-white to-blue-200 mx-auto mb-8"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your chemical requirements? Contact our expert team 
            for personalized solutions and competitive pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Cards */}
          <div className="space-y-6">
            <div className={`transition-all duration-800 ${isVisible ? 'modern-slide-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.2s' }}>
              <Card className="contact-card enhanced-interactive group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="trusted-leaders-text font-semibold text-lg mb-2">Visit Us</h3>
                      <p className="trusted-leaders-text text-blue-100 leading-relaxed">
                        123 Chemical Industry Park<br />
                        Industrial Area, City 560001<br />
                        Karnataka, India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className={`transition-all duration-800 ${isVisible ? 'modern-slide-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.3s' }}>
              <Card className="contact-card enhanced-interactive group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="trusted-leaders-text font-semibold text-lg mb-2">Email Us</h3>
                      <p className="trusted-leaders-text text-blue-100 leading-relaxed">
                        info@chemicalcompany.com<br />
                        sales@chemicalcompany.com<br />
                        support@chemicalcompany.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className={`transition-all duration-800 ${isVisible ? 'modern-slide-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.4s' }}>
              <Card className="contact-card enhanced-interactive group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors duration-300">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="trusted-leaders-text font-semibold text-lg mb-2">Business Hours</h3>
                      <p className="trusted-leaders-text text-blue-100 leading-relaxed">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className={`transition-all duration-800 ${isVisible ? 'modern-slide-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.5s' }}>
              <Card className="contact-card enhanced-interactive group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="trusted-leaders-text font-semibold text-lg mb-2">Call Us</h3>
                      <p className="trusted-leaders-text text-blue-100 leading-relaxed">
                        +91 9876543210<br />
                        +91 9876543211<br />
                        Toll Free: 1800-123-4567
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-800 ${isVisible ? 'modern-fade-in' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.6s' }}>
            <Card className="contact-card">
              <CardContent className="p-8">
                <h3 className="trusted-leaders-text text-2xl font-semibold mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        required
                        className="professional-input bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-white focus:ring-white/20"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        required
                        className="professional-input bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-white focus:ring-white/20"
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      placeholder="Subject"
                      required
                      className="professional-input bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-white focus:ring-white/20"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      required
                      rows={5}
                      className="professional-textarea bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-white focus:ring-white/20"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="enhanced-interactive w-full bg-white text-blue-900 hover:bg-blue-50 font-semibold py-4 text-lg"
                  >
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
