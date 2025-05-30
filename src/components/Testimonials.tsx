import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Green Agriculture Ltd.",
      text: "Drops Chemicals has been our trusted partner for agricultural solutions. Their products have significantly improved our crop yields and the team provides excellent technical support.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "AquaTech Solutions",
      text: "The water treatment chemicals from Drops Chemicals are of exceptional quality. We've seen remarkable improvements in our water purification processes since partnering with them.",
      rating: 5
    },
    {
      name: "Dr. Arun Patel",
      company: "Food Processing Industries",
      text: "Their food-grade chemicals meet all our stringent quality requirements. The consistency and purity of their products make them our preferred supplier.",
      rating: 5
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'modern-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h2 className="professional-subheading mb-4 text-white">
            What Our Clients Say
          </h2>
          <div className="section-divider bg-gradient-to-r from-blue-400 to-white"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Hear from our satisfied customers about their experience with our chemical solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`contact-card transition-all duration-500 ${
                isVisible ? 'modern-scale-in' : 'opacity-0 scale-95'
              } bg-slate-800/80 hover:bg-slate-700/90`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-white/90 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-white/20 pt-4">
                  <h4 className="font-semibold text-white mb-1">{testimonial.name}</h4>
                  <p className="text-blue-200 text-sm">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
