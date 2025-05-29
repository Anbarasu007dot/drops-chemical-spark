
import { Award, Clock, DollarSign, Headphones, Truck, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
      color: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      icon: Users,
      title: "High-Quality Materials",
      description: "Verified raw materials meeting international quality standards",
      color: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100"
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Cost-effective solutions without compromising on quality",
      color: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100"
    },
    {
      icon: Headphones,
      title: "Prompt Customer Service",
      description: "24/7 support with dedicated customer service team",
      color: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100"
    },
    {
      icon: Truck,
      title: "Fast Local Delivery",
      description: "Local delivery within 24-48 hours across Tamil Nadu",
      color: "from-red-500 to-red-600",
      bgGradient: "from-red-50 to-red-100"
    },
    {
      icon: Clock,
      title: "End-to-End Support",
      description: "Complete journey from consultation to testing and supply",
      color: "from-indigo-500 to-indigo-600",
      bgGradient: "from-indigo-50 to-indigo-100"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/25 to-purple-400/25 rounded-full blur-3xl animation-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/25 to-pink-400/25 rounded-full blur-3xl animation-wave" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animation-pulse-soft" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animation-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h2 className="premium-subheading mb-8">
            Why Choose Us
          </h2>
          <div className="w-40 h-1.5 premium-gradient mx-auto mb-10 rounded-full"></div>
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Partner with Drops Chemicals for reliable, high-quality chemical solutions 
            <span className="block mt-3 font-medium gradient-text">
              backed by decades of expertise and unwavering commitment to excellence
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`interactive-card p-10 hover-shine cursor-pointer overflow-hidden transition-all duration-700 ${
                isVisible ? 'animation-scale-in' : 'opacity-0 scale-95'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Enhanced Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-8 group-hover:scale-125 transition-all duration-700 shadow-2xl hover-glow`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:gradient-text transition-all duration-500 leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed text-lg font-medium">
                  {feature.description}
                </p>

                {/* Premium Interactive Element */}
                <div className={`mt-8 h-1.5 bg-gradient-to-r ${feature.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100`}></div>
              </div>

              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-1000" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-full opacity-40 group-hover:scale-125 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
