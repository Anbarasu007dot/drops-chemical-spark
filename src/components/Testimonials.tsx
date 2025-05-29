
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Accurate chemical testing and timely suggestions have helped us cut costs and boost efficiency.",
      author: "R. Krishnamurthy",
      company: "ELGi Equipments",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "Dependable support, excellent delivery — highly recommended for industrial chemical needs.",
      author: "Priya Sharma",
      company: "Roots Industries",
      rating: 5,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "They go beyond supply — their product knowledge and technical expertise is exceptional.",
      author: "Mohammed Hassan",
      company: "L&T Construction",
      rating: 5,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const clients = [
    "ELGi", "Roots", "SNS Academy", "Craftsman", 
    "Zahoransky", "O by Tamara", "Larsen & Toubro", "Radisson Blu"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Trusted by industry leaders across Tamil Nadu and beyond. 
            Here's what our valued clients have to say about our services.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-blue-300 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-gray-100 leading-relaxed text-lg italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <div 
                    className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-white/30"
                    style={{ backgroundImage: `url('${testimonial.image}')` }}
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-blue-200 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-blue-100">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-white font-semibold">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
