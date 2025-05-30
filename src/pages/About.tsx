
import { Award, Users, Target, Globe, Factory, Truck, Clock } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const About = () => {
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

  const milestones = [
    { year: "2004", title: "Company Founded", description: "Drops Chemicals established in Coimbatore" },
    { year: "2012", title: "Manufacturing Expansion", description: "Expanded manufacturing capabilities" },
    { year: "2017", title: "Multi-Industry Reach", description: "Diversified into multiple sectors" },
    { year: "2021", title: "Digital Transformation", description: "Implemented advanced systems" },
    { year: "2024", title: "Future Vision", description: "Expanding with innovation focus" }
  ];

  const stats = [
    { icon: Users, number: "1000+", label: "Happy Clients", color: "from-blue-500 to-blue-600" },
    { icon: Factory, number: "500+", label: "Products", color: "from-green-500 to-green-600" },
    { icon: Truck, number: "24-48", label: "Hours Delivery", color: "from-purple-500 to-purple-600" },
    { icon: Clock, number: "20+", label: "Years Experience", color: "from-orange-500 to-orange-600" }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide sustainable and innovative chemical solutions that contribute to client success.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      title: "Our Vision", 
      description: "To be the most trusted chemical solutions provider, setting standards for quality and reliability.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Quality, Innovation, Sustainability, Customer-centricity, and Integrity guide everything we do.",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative py-20 parallax-bg" style={{
         backgroundImage: " url('https://t3.ftcdn.net/jpg/10/67/42/46/360_F_1067424636_V3Nw4SV4VkSgMeG6EOCRL4QE81JY1ajN.jpg')"

        //  "linear-gradient(rgba(247, 248, 250, 0.7), rgba(247, 251, 244, 0.7)), url('https://www.shutterstock.com/image-photo/scientist-adding-liquid-test-tube-600nw-2493601121.jpg')"




      }}>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 modern-fade-in text-white">
            About Drops Chemicals
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto modern-slide-up">
            Two decades of excellence in chemical manufacturing and supply, 
            serving diverse industries with unwavering commitment to quality.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="modern-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Established in 2004, Drops Chemicals is a leading manufacturer, trader, and wholesaler 
                of high-quality chemical solutions based in Coimbatore, Tamil Nadu.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our state-of-the-art facilities and experienced team ensure products 
                that meet the highest standards of quality and reliability.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg professional-card">
                    <div className={`w-12 h-12 mx-auto mb-2 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="modern-scale-in">
              <div 
                className="h-96 rounded-2xl bg-cover bg-center shadow-2xl"
                style={{
                  backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZSs25lz7vQ8N5TdxoYvMcvcImGjzwYGRR7A&s')"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by our core principles and driven by our vision for a better tomorrow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="interactive-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Timeline */}
      <section 
        ref={sectionRef}
        className="py-20 parallax-bg"
        style={{
          backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.8)), url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=2000&q=80')"
        }}
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'modern-fade-in' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Key milestones in our journey of growth and innovation
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} transition-all duration-500 ${isVisible ? 'modern-fade-in' : 'opacity-0 translate-y-10'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex-1 px-8">
                    <Card className={`timeline-card ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} max-w-md`}>
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                          <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className="timeline-dot"></div>
                  </div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
