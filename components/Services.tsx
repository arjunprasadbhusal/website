import { motion } from 'framer-motion';
import { Code2, Database, Globe, Smartphone, ShoppingCart, Wrench } from 'lucide-react';
import SectionTitle from './SectionTitle';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom website development using modern technologies like Laravel, React, and Vue.js. Building responsive, fast, and SEO-friendly websites.',
    features: ['Responsive Design', 'SEO Optimization', 'Fast Performance', 'Cross-browser Compatible']
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce platforms with payment integration, inventory management, and user-friendly shopping experiences.',
    features: ['Payment Gateway', 'Product Management', 'Order Tracking', 'Admin Dashboard']
  },
  {
    icon: Code2,
    title: 'Custom Web Applications',
    description: 'Tailored web applications built with Laravel and modern frameworks to solve your specific business needs.',
    features: ['Custom Features', 'Scalable Architecture', 'API Integration', 'Security Focus']
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Efficient database architecture and optimization for MySQL and other database systems to ensure data integrity and performance.',
    features: ['Data Modeling', 'Query Optimization', 'Backup Solutions', 'Migration Services']
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Mobile-first approach ensuring your website looks perfect on all devices, from smartphones to large desktop screens.',
    features: ['Mobile Optimized', 'Touch Friendly', 'Adaptive Layouts', 'Performance Tuned']
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description: 'Ongoing website maintenance, updates, bug fixes, and technical support to keep your site running smoothly.',
    features: ['Bug Fixes', 'Security Updates', 'Performance Monitoring', '24/7 Support']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Services" 
          subtitle="What I Offer"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with professional web development services.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
