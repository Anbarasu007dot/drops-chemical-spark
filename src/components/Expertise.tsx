import { Leaf, Droplets, Beaker, Apple } from "lucide-react";

export const Expertise = () => {
  const industries = [
    {
      icon: Leaf,
      title: "Agro & Aquaculture",
      description: "Advanced fertilizers and aquaculture solutions for enhanced agricultural productivity"
    },
    {
      icon: Droplets,
      title: "Hygiene",
      description: "Premium hygiene and cleaning solutions for industrial and commercial applications"
    },
    {
      icon: Beaker,
      title: "Basic Chemicals",
      description: "High-quality industrial-grade chemical compounds and raw materials"
    },
    {
      icon: Apple,
      title: "Food",
      description: "Food-grade chemical additives, preservatives, and specialty ingredients"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Featured Sectors
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Delivering excellence across key industries with specialized chemical solutions 
            tailored to meet the unique demands of each sector
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 hover:bg-white/90 cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Premium gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
              <div className="absolute inset-[1px] bg-white rounded-2xl -z-10"></div>
              
              <div className="text-center relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <industry.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                  {industry.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed font-medium">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
