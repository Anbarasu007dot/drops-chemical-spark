
import { Award, Users, Target, Globe, CheckCircle, Factory, Truck, Clock } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const milestones = [
    { year: "2004", title: "Company Founded", description: "Drops Chemicals established in Coimbatore with a vision to serve chemical industry" },
    { year: "2008", title: "First Major Contract", description: "Secured partnership with leading textile manufacturer, expanding our reach" },
    { year: "2012", title: "Manufacturing Expansion", description: "Expanded manufacturing capabilities with new production facility" },
    { year: "2014", title: "R&D Lab Established", description: "State-of-the-art research and development laboratory setup for quality assurance" },
    { year: "2016", title: "Multi-Industry Reach", description: "Diversified into water treatment, agriculture, and food processing sectors" },
    { year: "2017", title: "ISO Certification", description: "Achieved ISO certification for quality management systems" },
    { year: "2019", title: "Digital Transformation", description: "Implemented digital systems for inventory management and customer service" },
    { year: "2021", title: "Sustainability Initiative", description: "Launched eco-friendly product line and sustainable packaging solutions" },
    { year: "2023", title: "Technology Upgrade", description: "Advanced automation and quality control systems implementation" },
    { year: "2024", title: "Future Vision", description: "Expanding operations with focus on innovation and sustainability" }
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
      description: "To provide sustainable and innovative chemical solutions that contribute to the success of our clients and the betterment of society.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      title: "Our Vision", 
      description: "To be the most trusted chemical solutions provider in India and globally, setting standards for quality and reliability.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Quality, Innovation, Sustainability, Customer-centricity, and Integrity form the foundation of everything we do.",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const clients = [
    "ELGi Equipments", "Roots Industries", "L&T Construction", "Radisson Blu",
    "Zahoransky India", "SNS Academy", "Craftsman Automation", "O by Tamara"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center opacity-20"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=2000&q=80')"
            }}
          />
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            About Drops Chemicals
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-slide-up">
            Two decades of excellence in chemical manufacturing and supply, 
            serving diverse industries with unwavering commitment to quality.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Established in 2004, Drops Chemicals is a leading manufacturer, trader, and wholesaler 
                of high-quality chemical solutions based in Coimbatore, Tamil Nadu. With a commitment 
                to innovation and sustainability, we cater to diverse industries including agriculture, 
                healthcare, food processing, and water treatment.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our state-of-the-art facilities and experienced team ensure that we deliver products 
                that meet the highest standards of quality and reliability. We take pride in our 
                customer-centric approach and end-to-end support from consultation to supply.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover-scale">
                    <div className={`w-12 h-12 mx-auto mb-2 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-scale-in">
              <div 
                className="h-96 rounded-2xl bg-cover bg-center shadow-2xl"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80')"
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
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white"
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

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two decades of growth, innovation, and excellence in the chemical industry
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-1 px-8">
                    <Card className={`${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} max-w-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
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
                    <div className="w-6 h-6 bg-white border-4 border-blue-600 rounded-full shadow-lg"></div>
                  </div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Clients */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
            Partnering with renowned companies across Tamil Nadu and beyond
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-white font-semibold">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
