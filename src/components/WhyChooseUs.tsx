
import { Award, Clock, DollarSign, Headphones, Truck, Users } from "lucide-react";

export const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "2 Decades of Experience",
      description: "Established expertise in chemical manufacturing and supply since 2004",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "High-Quality Materials",
      description: "Verified raw materials meeting international quality standards",
      color: "from-green-500 to-green-600"
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Cost-effective solutions without compromising on quality",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Headphones,
      title: "Prompt Customer Service",
      description: "24/7 support with dedicated customer service team",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Truck,
      title: "Fast Local Delivery",
      description: "Local delivery within 24-48 hours across Tamil Nadu",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Clock,
      title: "End-to-End Support",
      description: "Complete journey from consultation to testing and supply",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Partner with Drops Chemicals for reliable, high-quality chemical solutions 
            backed by decades of expertise and unwavering commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-30 group-hover:scale-125 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
