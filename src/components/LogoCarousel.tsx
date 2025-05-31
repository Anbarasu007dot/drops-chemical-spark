
import { useEffect, useState, useRef } from "react";

export const LogoCarousel = () => {
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

  const logos = [
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=100&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=200&h=100&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=100&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=200&h=100&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop&crop=center",
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-gradient-to-r from-slate-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? 'classic-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h2 className="trusted-leaders-heading text-slate-800 mb-4">
            Trusted by Industry Leaders
          </h2>
          <div className="section-divider"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Partnering with leading companies across diverse industries to deliver 
            exceptional chemical solutions and drive innovation forward
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="logo-carousel">
            {logos.map((logo, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-48 h-24 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="max-w-full max-h-full object-contain p-4 grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
