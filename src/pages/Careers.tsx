import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapPin, Clock, Users, TrendingUp, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

const Careers = () => {
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
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Growth",
      description: "Clear career progression paths and skill development opportunities",
      gradient: "from-blue-500 via-blue-600 to-indigo-600",
      iconColor: "text-blue-600",
      glowColor: "shadow-blue-500/25"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
      gradient: "from-rose-500 via-pink-600 to-red-600",
      iconColor: "text-rose-500",
      glowColor: "shadow-rose-500/25"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Culture",
      description: "Collaborative work environment with experienced professionals",
      gradient: "from-emerald-500 via-green-600 to-teal-600",
      iconColor: "text-emerald-600",
      glowColor: "shadow-emerald-500/25"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Recognition",
      description: "Performance-based rewards and recognition programs",
      gradient: "from-violet-500 via-purple-600 to-indigo-600",
      iconColor: "text-violet-600",
      glowColor: "shadow-violet-500/25"
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

      {/* Modern Premium Why Work With Us Section */}
      <section 
        ref={sectionRef}
        className="py-20 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #e2e8f0 75%, #f8fafc 100%)'
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-violet-400/10 to-pink-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Enhanced Section Header with Animation */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-4 py-2 rounded-full tracking-wide uppercase">
                Why Join Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Why Choose Drops Chemicals?
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              Experience a positive, growth-oriented work culture backed by 20+ years of industry expertise
            </p>
          </div>

          {/* Premium Glassmorphism Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  transitionDelay: `${index * 150 + 200}ms`
                }}
              >
                {/* Glassmorphism Card */}
                <div className="relative h-full bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2">
                  
                  {/* Gradient Border Glow Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`}></div>
                  
                  {/* Inner Content */}
                  <div className="relative z-10">
                    {/* Icon Container with Enhanced Styling */}
                    <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-lg ${benefit.glowColor} group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                      <div className="text-white group-hover:scale-110 transition-transform duration-300">
                        {benefit.icon}
                      </div>
                    </div>

                    {/* Typography with Enhanced Hierarchy */}
                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors duration-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {benefit.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed font-light group-hover:text-slate-700 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Subtle Inner Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                {/* Floating Accent Elements */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${benefit.gradient} rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 group-hover:scale-125`}></div>
                <div className={`absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br ${benefit.gradient} rounded-full opacity-0 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110`} style={{ transitionDelay: '100ms' }}></div>
              </div>
            ))}
          </div>

          {/* Enhanced Call-to-Action */}
          <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
            <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-xl">
              <div className="text-slate-700">
                <p className="text-lg font-semibold mb-1">Ready to join our team?</p>
                <p className="text-sm text-slate-600">Explore opportunities and grow with us</p>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                View Openings
              </Button>
            </div>
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