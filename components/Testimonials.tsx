import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const testimonials = [
  {
    name: "Pradip Khanal",
    role: "E-commerce Business Owner",
    image: "/pradip.jpg",
    rating: 5,
    text: "Arjun delivered an exceptional ecommerce website that exceeded our expectations. His attention to detail and technical expertise made our project a huge success."
  },
  {
    name: "Prabesh Acharya",
    role: "Startup Founder",
    image: "/prabesh.jpg",
    rating: 5,
    text: "Working with Arjun was a fantastic experience. He understood our requirements perfectly and delivered a clean, modern website that our users love."
  },
  {
    name: "Dashrath Silwal",
    role: "Project Manager",
    image: "/dashrath.jpg",
    rating: 5,
    text: "Arjun's expertise in modern web technologies helped us build our car rental system perfectly. Highly recommended for any web development project."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        <SectionTitle 
          title="Client Testimonials" 
          subtitle="What my clients say about working with me"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 border border-slate-700/50"
            >
              {/* Stars */}
              <div className="flex items-center mb-6">
                <div className="flex text-primary text-lg">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name}`;
                  }}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary" 
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
