import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import React, { useRef, useState } from "react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "Address",
      content: [
        "3rd floor, No.76, East Power House Road,",
        "Gandhipuram, Tatabad,",
        "Coimbatore - 641012,",
        "Tamil Nadu, India"
      ]
    },
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      title: "Phone",
      content: [
        "+91 90426 70008",
        "+91 96775 22201"
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-red-600" />,
      title: "Email",
      content: [
        "info@dropschemicals.com",
        "sales@dropschemicals.com"
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      title: "Business Hours",
      content: [
        "Monday to Saturday:",
        "9:00 AM to 8:00 PM"
      ]
    }
  ];

  // Mouse animation state for form card
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = formRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section
        className="relative text-white py-20"
        style={{
          backgroundImage: ` url('https://t4.ftcdn.net/jpg/03/37/96/33/360_F_337963325_EJuPjWslX3vAFxJ59L3y1cm6IsSfo07s.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in text-white tracking-wide drop-shadow-lg" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in animation-delay-200">
              We'd love to hear from you. Reach out for inquiries, partnerships, or custom product requests.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              ref={formRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative"
              style={{ perspective: 1000 }}
            >
              <div
                className="pointer-events-none absolute inset-0 z-10 transition-all duration-300"
                style={{
                  opacity: isHovering ? 1 : 0,
                  background: isHovering
                    ? `radial-gradient(300px circle at ${mouse.x}px ${mouse.y}px, rgba(59,130,246,0.35), rgba(255,255,255,0.10) 60%, transparent 100%)`
                    : 'none',
                  filter: isHovering ? 'blur(0px) saturate(1.2)' : 'none',
                  transition: 'background 0.2s, opacity 0.3s',
                }}
              />
              <Card
                className={`relative z-20 transition-transform duration-300 ${isHovering ? 'scale-105 shadow-2xl border-blue-400' : ''}`}
                style={{
                  boxShadow: isHovering
                    ? '0 8px 40px 0 rgba(59,130,246,0.25), 0 1.5px 8px 0 rgba(59,130,246,0.10)'
                    : undefined,
                  borderColor: isHovering ? '#3b82f6' : undefined,
                }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name *</label>
                        <Input placeholder="Your full name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <Input type="email" placeholder="your.email@example.com" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone</label>
                        <Input placeholder="+91 XXXXX XXXXX" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Company Name</label>
                        <Input placeholder="Your company name" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <Input placeholder="How can we help you?" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea
                        placeholder="Tell us about your requirements, questions, or how we can assist you..."
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.content.map((line, idx) => (
                            <p key={idx} className="text-gray-600">{line}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* WhatsApp Contact */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">WhatsApp</h3>
                      <p className="text-gray-600 mb-3">Get instant support on WhatsApp</p>
                      <Button className="bg-green-600 hover:bg-green-700">
                        Chat with us
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Coimbatore's industrial district
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="h-96 bg-gray-200 flex items-center justify-center p-0">
                <iframe
                  title="Google Map - Drops Chemicals"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.324728934624!2d76.9630130750426!3d11.02196445402837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857e2e2e2e2e2%3A0x123456789abcdef!2s3rd%20floor%2C%20No.76%2C%20East%20Power%20House%20Rd%2C%20Tatabad%2C%20Coimbatore%2C%20Tamil%20Nadu%20641012%2C%20India!5e0!3m2!1sen!2sin!4v1685700000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96 rounded-none border-0"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
