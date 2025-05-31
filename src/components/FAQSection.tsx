
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData: FAQItem[] = [
    {
      question: "What types of industrial chemicals do you supply for manufacturing industries?",
      answer: "We supply a comprehensive range of industrial chemicals including water treatment chemicals, metal finishing solutions, agricultural formulations, and food-grade chemicals. Our products serve industries from textile processing to pharmaceutical manufacturing, with custom formulations available for specific industrial applications."
    },
    {
      question: "Do you provide MSDS (Material Safety Data Sheets) for all chemical products?",
      answer: "Yes, we provide detailed MSDS documentation for all our chemical products, ensuring compliance with safety regulations and proper handling procedures. Our technical team also offers guidance on chemical storage, application methods, and safety protocols for industrial use."
    },
    {
      question: "What quality certifications and standards do your chemical products meet?",
      answer: "Our chemical products are manufactured under strict quality control standards, meeting industry-specific requirements for purity, consistency, and performance. We maintain comprehensive testing protocols and provide certificates of analysis with each shipment to ensure product reliability."
    },
    {
      question: "Can you develop custom chemical formulations for specific industrial applications?",
      answer: "Absolutely. Our experienced chemists work closely with clients to develop custom chemical formulations tailored to specific industrial processes. From initial consultation to pilot testing and full-scale production, we provide complete custom chemical solution services."
    },
    {
      question: "What is your delivery timeline and coverage area for chemical supply?",
      answer: "We offer flexible delivery options with standard lead times of 3-7 business days for stock items. Our distribution network covers major industrial regions across India, with expedited shipping available for urgent requirements. Bulk orders can be scheduled for convenient delivery timing."
    }
  ];

  return (
    <div className="faq-container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          Frequently Asked Questions
        </h2>
        <div className="w-24 h-0.5 bg-gradient-to-r from-blue-600 to-slate-600 mx-auto mb-6"></div>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Find answers to common questions about our chemical products, services, and processes
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question w-full text-left"
              onClick={() => toggleItem(index)}
            >
              <span>{item.question}</span>
              <div className="faq-toggle">
                {openItems.includes(index) ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </div>
            </button>
            
            <div className={`faq-answer ${openItems.includes(index) ? 'open' : ''}`}>
              <p className="text-slate-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
