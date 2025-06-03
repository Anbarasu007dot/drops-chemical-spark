import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapPin, Clock, Users, TrendingUp, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Chemical Engineer",
      department: "R&D",
      location: "Coimbatore, Tamil Nadu",
      type: "Full-time",
      experience: "5-8 years",
      description: "Lead product development and process optimization for water treatment chemicals.",
      requirements: ["Chemical Engineering degree", "Experience in water treatment", "Process optimization skills"]
    },
    {
      id: 2,
      title: "Quality Control Analyst",
      department: "Quality Assurance",
      location: "Coimbatore, Tamil Nadu",
      type: "Full-time",
      experience: "2-4 years",
      description: "Ensure product quality through comprehensive testing and analysis.",
      requirements: ["Chemistry/Chemical Engineering background", "Laboratory experience", "Analytical skills"]
    },
    {
      id: 3,
      title: "Sales Executive",
      department: "Sales & Marketing",
      location: "Coimbatore, Tamil Nadu",
      type: "Full-time",
      experience: "3-5 years",
      description: "Drive business growth through client relationships and market expansion.",
      requirements: ["B2B sales experience", "Chemical industry knowledge", "Communication skills"]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Career Growth",
      description: "Clear career progression paths and skill development opportunities"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Team Culture",
      description: "Collaborative work environment with experienced professionals"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Recognition",
      description: "Performance-based rewards and recognition programs"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section
        className="relative text-white py-20"
        style={{
          backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20220702/pngtree-a-professionals-productivity-handson-with-the-latest-modern-computer-and-business-solutions-photo-image_32277816.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in text-white tracking-wide drop-shadow-lg" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              Build Your Career with Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in animation-delay-200">
              Join a team of passionate professionals dedicated to chemical innovation and excellence
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Drops Chemicals?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience a positive, growth-oriented work culture backed by 20+ years of industry expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600">
              Discover exciting opportunities to grow your career with us
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.experience}
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-3">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((req, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="md:ml-6">
                      <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Hiring Process</h2>
            <p className="text-xl text-gray-600">
              A transparent and efficient process designed to find the right fit
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Application", desc: "Submit your resume and cover letter" },
              { step: "2", title: "Screening", desc: "Initial review and phone interview" },
              { step: "3", title: "Interview", desc: "Technical and cultural fit assessment" },
              { step: "4", title: "Offer", desc: "Welcome to the Drops Chemicals family!" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
