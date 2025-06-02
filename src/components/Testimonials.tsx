import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState, useRef } from "react";

export const Testimonials = () => {
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

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "AgriTech Solutions",
      role: "CEO",
      content: "Drops Chemicals has been our trusted partner for over 5 years. Their agricultural chemicals have significantly improved our crop yields and quality. Exceptional service and reliable products.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Priya Sharma",
      company: "AquaFresh Industries",
      role: "Operations Manager",
      content: "The water treatment chemicals from Drops have revolutionized our purification processes. Outstanding quality and excellent technical support team. Highly recommended for industrial applications.",
      rating: 5,
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imageconsultinginstitute.com%2Fblog%2Findian-business-women-who-champions-entrepreneurship%2F&psig=AOvVaw2qFdFX5e0SYqB5sy95qi7N&ust=1748935881977000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPid3ISc0o0DFQAAAAAdAAAAABAE"
    },
    {
      name: "Dr. Arun Patel",
      company: "FoodTech Labs",
      role: "Quality Director",
      content: "Their food-grade chemicals meet the highest safety standards. Consistent quality, timely delivery, and competitive pricing make them our preferred supplier for all food processing needs.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 premium-bg-overlay text-white"
      style={{
        backgroundImage: "url('https://st.depositphotos.com/1064537/2318/i/450/depositphotos_23185896-stock-photo-handshake-hand-holding-on-black.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'modern-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <div className="section-divider bg-white"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Trusted by Industry Leaders - Real feedback from our valued partners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`professional-card bg-black/30 backdrop-blur-lg border-white/20 text-white transition-all duration-500 ${
                isVisible ? 'modern-scale-in' : 'opacity-0 scale-95'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-blue-100 mb-6 line-height-loose">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-blue-200">{testimonial.role}</p>
                    <p className="text-sm text-blue-300">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
