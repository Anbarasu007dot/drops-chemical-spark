
import { Leaf, Droplets, Shield, Zap, Factory, Car, TreePine, Fish, Wrench } from "lucide-react";

export const Expertise = () => {
  const industries = [
    { name: "Agro & Aquaculture", icon: Leaf, color: "from-green-500 to-green-600" },
    { name: "Food Processing", icon: Droplets, color: "from-orange-500 to-orange-600" },
    { name: "Basic Industrial Chemicals", icon: Factory, color: "from-gray-500 to-gray-600" },
    { name: "Water Treatment", icon: Droplets, color: "from-blue-500 to-blue-600" },
    { name: "Hygiene", icon: Shield, color: "from-purple-500 to-purple-600" },
    { name: "Metal Finishing", icon: Wrench, color: "from-yellow-500 to-yellow-600" },
    { name: "Petro", icon: Car, color: "from-red-500 to-red-600" },
    { name: "Poultry", icon: Fish, color: "from-pink-500 to-pink-600" },
    { name: "Solvents", icon: TreePine, color: "from-indigo-500 to-indigo-600" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over two decades of expertise, we provide specialized chemical solutions 
            across diverse industries, ensuring quality and reliability in every application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${industry.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {industry.name}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  Specialized chemical solutions tailored for {industry.name.toLowerCase()} applications, 
                  ensuring optimal performance and compliance.
                </p>

                <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm">Learn More</span>
                  <Zap className="w-4 h-4 ml-2" />
                </div>
              </div>

              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
