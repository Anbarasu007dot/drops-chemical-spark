
import { Leaf, Droplets, Beaker, Apple } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ChemicalElements } from "@/components/ChemicalElements";

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
      color: "text-green-600",
      bgColor: "bg-green-50 hover:bg-green-100"
    },
    {
      icon: Droplets,
      title: "Water Treatment",
      description: "Premium water treatment and purification solutions for industrial and commercial applications",
      color: "text-blue-600",
      bgColor: "bg-blue-50 hover:bg-blue-100"
    },
    {
      icon: Beaker,
      title: "Basic Chemicals",
      description: "High-quality industrial-grade chemical compounds and raw materials",
      color: "text-purple-600",
      bgColor: "bg-purple-50 hover:bg-purple-100"
    },
    {
      icon: Apple,
      title: "Food Grade",
      description: "Food-grade chemical additives, preservatives, and specialty ingredients",
      color: "text-orange-600",
      bgColor: "bg-orange-50 hover:bg-orange-100"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-white"
    >
      <ChemicalElements />
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'classic-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h2 className="professional-subheading mb-4">
            Featured Sectors
          </h2>
          <div className="section-divider"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Delivering excellence across key industries with specialized chemical solutions 
            tailored to meet the unique demands of each sector
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`interactive-card group p-8 text-center transition-all duration-500 ${
                isVisible ? 'classic-scale-in' : 'opacity-0 scale-95'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-6 ${industry.bgColor} rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                <industry.icon className={`w-8 h-8 ${industry.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors duration-300">
                {industry.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
