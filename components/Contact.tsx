import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, User, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import SectionTitle from './SectionTitle';
import Button from './Button';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init('4y0zGESCV2nMVT9VS');
      
      const result = await emailjs.send(
        'service_96g6egq', // Your Service ID
        'template_c529ill', // Your Template ID
        {
          to_name: 'Arjun Bhusal', // Your name (recipient)
          to_email: 'bhusala452@gmail.com', // Your email (hardcoded recipient)
          from_name: formData.name, // Sender's name
          reply_to: formData.email, // Sender's email (for reply-to)
          user_email: formData.email, // Sender's email
          subject: formData.subject,
          message: formData.message,
        },
        '4y0zGESCV2nMVT9VS' // Your Public Key
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-black to-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionTitle title="Get In Touch" subtitle="Let's work together" />
          
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-gradient-to-br from-surface via-surface to-surface/80 p-6 rounded-2xl border border-white/10 shadow-xl hover:border-primary/30 transition-all">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-xl mr-4">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-400 text-sm">Send me a message</p>
                </div>
              </div>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-primary hover:text-secondary transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            <div className="bg-gradient-to-br from-surface via-surface to-surface/80 p-6 rounded-2xl border border-white/10 shadow-xl hover:border-secondary/30 transition-all">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-secondary to-primary rounded-xl mr-4">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-gray-400 text-sm">Give me a call</p>
                </div>
              </div>
              <a 
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-secondary hover:text-primary transition-colors"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>

            <div className="bg-gradient-to-br from-surface via-surface to-surface/80 p-6 rounded-2xl border border-white/10 shadow-xl hover:border-purple-500/30 transition-all">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mr-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-gray-400 text-sm">Visit me at</p>
                </div>
              </div>
              <p className="text-purple-400">
                {PERSONAL_INFO.location}
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-surface via-surface to-surface/80 p-8 rounded-2xl border border-white/10 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2 flex items-center">
                    <User size={16} className="mr-2 text-primary" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2 flex items-center">
                    <Mail size={16} className="mr-2 text-secondary" />
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-white font-medium mb-2 flex items-center">
                  <MessageSquare size={16} className="mr-2 text-purple-400" />
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-white font-medium mb-2 flex items-center">
                  <MessageSquare size={16} className="mr-2 text-green-400" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-center"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-center"
                >
                  ✗ Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-br from-surface via-surface to-surface/80 p-2 rounded-2xl border border-white/10 shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.23456789012!2d84.0!3d27.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb2bdd456789%3A0x1234567890abcdef!2sKawasoti%2C%20Nawalpur%2C%20Nepal!5e0!3m2!1sen!2snp!4v1234567890123!5m2!1sen!2snp"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;