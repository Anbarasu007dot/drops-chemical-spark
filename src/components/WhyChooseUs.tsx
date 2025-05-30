
import { Award, Clock, DollarSign, Headphones, Truck, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ChemicalElements } from "@/components/ChemicalElements";

export const WhyChooseUs = () => {
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

  const features = [
    {
      icon: Award,
      title: "2 Decades of Experience",
      description: "Established expertise in chemical manufacturing and supply since 2004",
      color: "text-blue-600",
      bgColor: "bg-blue-50 hover:bg-blue-100"
    },
    {
      icon: Users,
      title: "High-Quality Materials",
      description: "Verified raw materials meeting international quality standards",
      color: "text-green-600",
      bgColor: "bg-green-50 hover:bg-green-100"
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Cost-effective solutions without compromising on quality",
      color: "text-purple-600",
      bgColor: "bg-purple-50 hover:bg-purple-100"
    },
    {
      icon: Headphones,
      title: "Prompt Customer Service",
      description: "24/7 support with dedicated customer service team",
      color: "text-orange-600",
      bgColor: "bg-orange-50 hover:bg-orange-100"
    },
    {
      icon: Truck,
      title: "Fast Local Delivery",
      description: "Local delivery within 24-48 hours across Tamil Nadu",
      color: "text-red-600",
      bgColor: "bg-red-50 hover:bg-red-100"
    },
    {
      icon: Clock,
      title: "End-to-End Support",
      description: "Complete journey from consultation to testing and supply",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50 hover:bg-indigo-100"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gray-50"
    >
      <ChemicalElements />
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'classic-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h2 className="professional-subheading mb-4">
            Why Choose Us
          </h2>
          <div className="section-divider"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Partner with Drops Chemicals for reliable, high-quality chemical solutions 
            backed by decades of expertise and unwavering commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`interactive-card group p-8 transition-all duration-500 ${
                isVisible ? 'classic-scale-in' : 'opacity-0 scale-95'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
