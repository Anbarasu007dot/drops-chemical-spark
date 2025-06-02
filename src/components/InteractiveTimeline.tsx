
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { Clock, Cog, Truck, Shield, Flag } from 'lucide-react';

const timelineData = [
  {
    year: "2004",
    title: "Company Founded",
    description: "Drops Chemicals established in Coimbatore",
    icon: Flag,
    color: "#1e40af", // blue
    bgColor: "#dbeafe"
  },
  {
    year: "2012", 
    title: "Manufacturing Expansion",
    description: "Expanded manufacturing capabilities",
    icon: Cog,
    color: "#dc2626", // red
    bgColor: "#fecaca"
  },
  {
    year: "2017",
    title: "Multi-Industry Reach", 
    description: "Diversified into multiple sectors",
    icon: Truck,
    color: "#d97706", // amber
    bgColor: "#fed7aa"
  },
  {
    year: "2021",
    title: "Digital Transformation",
    description: "Implemented advanced systems", 
    icon: Shield,
    color: "#16a34a", // green
    bgColor: "#bbf7d0"
  },
  {
    year: "2024",
    title: "Future Vision",
    description: "Expanding with innovation focus",
    icon: Clock,
    color: "#059669", // emerald
    bgColor: "#a7f3d0"
  }
];

export const InteractiveTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isInView && pathRef.current) {
      // Animate the timeline path
      gsap.fromTo(pathRef.current, 
        { strokeDasharray: "1000", strokeDashoffset: "1000" },
        { strokeDashoffset: "0", duration: 3, ease: "power2.out" }
      );
    }
  }, [isInView]);

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: { 
      pathLength: 1,
      transition: { duration: 2.5, ease: "easeInOut" }
    }
  };

  const milestoneVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.3 + 1,
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <div ref={containerRef} className="w-full max-w-6xl mx-auto px-4 py-16">
      {/* Desktop Timeline */}
      <div className="hidden lg:block relative">
        <svg 
          width="100%" 
          height="300" 
          viewBox="0 0 1000 300" 
          className="absolute top-0 left-0"
        >
          <defs>
            <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="25%" stopColor="#dc2626" />
              <stop offset="50%" stopColor="#d97706" />
              <stop offset="75%" stopColor="#16a34a" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          
          <motion.path
            ref={pathRef}
            d="M 50 150 Q 200 100 250 150 T 450 150 Q 600 200 650 150 T 950 150"
            fill="none"
            stroke="url(#timelineGradient)"
            strokeWidth="4"
            variants={pathVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="drop-shadow-lg"
          />
        </svg>

        <div className="relative z-10 flex justify-between items-center h-300">
          {timelineData.map((milestone, index) => {
            const IconComponent = milestone.icon;
            const xPosition = 50 + (index * 225);
            
            return (
              <motion.div
                key={milestone.year}
                custom={index}
                variants={milestoneVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-col items-center relative"
                style={{ marginLeft: index === 0 ? '0' : '225px' }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Vertical Line */}
                <motion.div 
                  className="w-1 h-16 mb-4"
                  style={{ backgroundColor: milestone.color }}
                  animate={{ 
                    height: hoveredIndex === index ? 20 : 16,
                    opacity: hoveredIndex === index ? 1 : 0.7
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Milestone Circle */}
                <motion.div
                  className="relative w-20 h-20 rounded-full flex items-center justify-center shadow-xl cursor-pointer"
                  style={{ backgroundColor: milestone.bgColor }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: `0 20px 40px ${milestone.color}40`
                  }}
                  animate={{
                    y: hoveredIndex === index ? -5 : 0
                  }}
                  transition={{ duration: 0.3, type: "spring" }}
                >
                  <IconComponent 
                    size={32} 
                    style={{ color: milestone.color }}
                    className="drop-shadow-sm"
                  />
                  
                  {/* Pulse effect */}
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2"
                      style={{ borderColor: milestone.color }}
                      initial={{ scale: 1, opacity: 1 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </motion.div>

                {/* Year */}
                <motion.div 
                  className="text-2xl font-bold mt-4 mb-2"
                  style={{ color: milestone.color }}
                  animate={{ 
                    scale: hoveredIndex === index ? 1.1 : 1,
                    y: hoveredIndex === index ? -2 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {milestone.year}
                </motion.div>

                {/* Tooltip Card */}
                <motion.div
                  className="absolute top-32 bg-white rounded-xl shadow-2xl p-4 w-64 border"
                  style={{ borderColor: milestone.color }}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 10,
                    scale: hoveredIndex === index ? 1 : 0.9
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    pointerEvents: hoveredIndex === index ? 'auto' : 'none'
                  }}
                >
                  <h3 className="font-bold text-lg mb-2" style={{ color: milestone.color }}>
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {milestone.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="lg:hidden space-y-8">
        {timelineData.map((milestone, index) => {
          const IconComponent = milestone.icon;
          
          return (
            <motion.div
              key={milestone.year}
              custom={index}
              variants={milestoneVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex items-start space-x-4"
            >
              {/* Timeline Line */}
              <div className="flex flex-col items-center">
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: milestone.bgColor }}
                  whileHover={{ scale: 1.05 }}
                >
                  <IconComponent size={24} style={{ color: milestone.color }} />
                </motion.div>
                
                {index < timelineData.length - 1 && (
                  <div 
                    className="w-1 h-16 mt-4"
                    style={{ backgroundColor: milestone.color, opacity: 0.3 }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <div 
                  className="text-xl font-bold mb-1"
                  style={{ color: milestone.color }}
                >
                  {milestone.year}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-gray-600">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
