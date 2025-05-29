
import { Leaf, Droplets, Beaker, Apple } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Expertise = () => {
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

  const industries = [
    {
      icon: Leaf,
      title: "Agro & Aquaculture",
      description: "Advanced fertilizers and aquaculture solutions for enhanced agricultural productivity",
      color: "from-emerald-500 to-green-600",
      bgColor: "from-emerald-50 to-green-50"
    },
    {
      icon: Droplets,
      title: "Hygiene",
      description: "Premium hygiene and cleaning solutions for industrial and commercial applications",
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      icon: Beaker,
      title: "Basic Chemicals",
      description: "High-quality industrial-grade chemical compounds and raw materials",
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-50"
    },
    {
      icon: Apple,
      title: "Food",
      description: "Food-grade chemical additives, preservatives, and specialty ingredients",
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animation-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animation-wave" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-full blur-2xl animation-pulse-soft" style={{ animationDelay: '6s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'animation-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h2 className="premium-subheading mb-8">
            Featured Sectors
          </h2>
          <div className="w-40 h-1.5 premium-gradient mx-auto mb-10 rounded-full"></div>
          <p className="text-2xl md:text-3xl text-slate-600 max-w-5xl mx-auto leading-relaxed font-light">
            Delivering excellence across key industries with specialized chemical solutions 
            <span className="block mt-3 font-medium gradient-text">
              tailored to meet the unique demands of each sector
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`interactive-card group p-10 hover-shine cursor-pointer transition-all duration-700 ${
                isVisible ? 'animation-scale-in' : 'opacity-0 scale-95'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Premium Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-sm"></div>
              <div className="absolute inset-[2px] bg-white rounded-3xl -z-10"></div>
              
              <div className="text-center relative z-10">
                <div className={`w-24 h-24 mx-auto mb-8 bg-gradient-to-br ${industry.color} rounded-3xl flex items-center justify-center shadow-2xl hover:shadow-3xl group-hover:scale-125 transition-all duration-700 hover-glow`}>
                  <industry.icon className="w-12 h-12 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:gradient-text transition-all duration-500 leading-tight">
                  {industry.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed font-medium text-lg">
                  {industry.description}
                </p>

                {/* Premium Interactive Element */}
                <div className={`mt-8 h-2 bg-gradient-to-r ${industry.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
