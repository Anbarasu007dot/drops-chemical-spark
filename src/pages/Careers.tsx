
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
          backgroundImage: `linear-gradient(rgba(24, 34, 60, 0.55), rgba(24, 34, 60, 0.55)), url('https://wallpapers.com/images/featured/work-background-kxmiw0h0ugqy2eoa.jpg')`,
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

      {/* Hiring Plans Notice */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-blue-100 flex items-center justify-center min-h-[40vh] relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-30 z-0" aria-hidden="true">
          <svg width="100%" height="100%" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="#a5b4fc" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
          <div className="bg-white/90 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-center gap-10 p-8 md:p-12 animate-fade-in">
            {/* Illustration (left) */}
            <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center mb-8 md:mb-0 h-full">
              <img
                src="https://imgs.search.brave.com/o86eUJzEKOk-sodCYHSNPxFiElss8xD_s21f4RjwsYU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODgx/NTQyMTIyL3Bob3Rv/L2J1c2luZXNzLXBl/b3BsZS11c2luZy1w/ZW4tdGFibGV0LW5v/dGVib29rLWFyZS1w/bGFubmluZy1hLW1h/cmtldGluZy1wbGFu/LXRvLWltcHJvdmUt/dGhlLXF1YWxpdHku/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXpTbzZ6WDR6Z3NP/WUJRcHdfN1hjejNu/WF9zWHF3SHIwbVN6/RUdrVVJFVWc9"
                alt="Planning illustration"
                className="w-full h-full max-h-72 md:max-h-96 object-contain rounded-xl m-2"
                loading="lazy"
              />
            </div>
            {/* Message and CTA (right) */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-400 mb-4 mx-auto md:mx-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-4a10 10 0 11-20 0 10 10 0 0120 0z" />
              </svg>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">Our hiring plans are still under consideration.</h2>
              <p className="text-gray-600 text-lg font-normal mb-6">Please check back soon for updates on career opportunities at Drops Chemicals.</p>
              <div className="flex progress-wrapper sm:flex-row flex-col sm:items-center gap-3 w-full">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md transition-all duration-300" onClick={() => alert('Job alerts coming soon!')}>
                  Stay Updated
                </Button>
                {/* Animated Loading Bar */}
                <div className="animated-loading-bar">
                  <div className="loading-fill">
                    <div className="shimmer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
