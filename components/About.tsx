import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, User, Code, Server, Database, Wrench, Award, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const [counters, setCounters] = useState({ experience: 0, projects: 0, clients: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = { experience: 2, projects: 15, clients: 10 };
    const duration = 2000;
    const steps = 50;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        experience: Math.floor(targets.experience * progress),
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters(targets);
      }
    }, stepDuration);
  };

  const testimonials = [
    {
      name: "Pradip Khanal",
      role: "E-commerce Business Owner",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pradip",
      rating: 5,
      text: "Arjun's expertise in web development transformed our online presence. His dedication and creativity are unmatched."
    },
    {
      name: "Prabesh Acharya",
      role: "Startup Founder",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Prabesh",
      rating: 5,
      text: "Arjun delivered a stunning car rental system with seamless functionality. His communication made the process effortless."
    },
    {
      name: "Dashrath Silwal",
      role: "Project Manager",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dashrath",
      rating: 5,
      text: "Working with Arjun was a pleasure. His attention to detail and technical skills delivered a top-notch website."
    }
  ];

  const timeline = [
    {
      title: "Bachelor of Information Technology Management",
      organization: "Tribhuvan University, Nepal",
      period: "2021 - Present",
      description: "Currently pursuing degree with focus on information technology management, web development, and database systems."
    },
    {
      title: "Web Developer",
      organization: "Bitmap IT Solution",
      period: "2023 - Present",
      description: "Developing and maintaining modern web applications using Laravel and PHP with focus on performance and user experience."
    },
    {
      title: "Web Developer",
      organization: "Digital Innovations Pvt. Ltd.",
      period: "2022 - 2023",
      description: "Built custom web applications for clients across various industries with focus on scalability and maintainability."
    }
  ];

  return (
    <section id="about" className="relative bg-gradient-to-b from-background via-surface/30 to-background overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full" style={{ animation: 'spin 30s linear infinite' }} />
      </div>

      {/* Hero Stats */}
      <div ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              👋 Welcome to my world
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              About <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">Arjun Bhusal</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A passionate web developer from Nepal, dedicated to crafting innovative digital solutions that blend creativity, functionality, and cutting-edge technology.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mb-16"
          >
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{counters.experience}+</div>
              <div className="text-gray-400 text-sm md:text-base font-medium">Years Experience</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{counters.projects}+</div>
              <div className="text-gray-400 text-sm md:text-base font-medium">Projects Completed</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">{counters.clients}+</div>
              <div className="text-gray-400 text-sm md:text-base font-medium">Happy Clients</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main About Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
              <div className="relative">
                <img
                  src="/arjun-profile.jpg"
                  alt="Arjun Bhusal"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&backgroundColor=3b82f6';
                  }}
                  className="w-full rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Badges */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold">2+</div>
                    <div className="text-sm font-medium">Years</div>
                  </div>
                </div>
                
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-secondary to-primary text-white px-4 py-3 rounded-xl shadow-lg">
                  <div className="text-sm font-bold">Full Stack</div>
                  <div className="text-xs">Developer</div>
                </div>
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-lg text-primary font-medium mb-6">{PERSONAL_INFO.title} & Digital Innovator</p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm a passionate web developer based in Kawasoti, Nawalpur, Nepal, with over two years of experience creating modern, responsive digital solutions. My journey in tech began with curiosity and has evolved into a deep expertise in both front-end and back-end technologies.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I specialize in Laravel, PHP, JavaScript, React, and modern web technologies. Beyond coding, I'm passionate about problem-solving, user experience design, and turning innovative ideas into reality.
                </p>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-xl p-4 hover:scale-105 transition-transform">
                  <div className="flex items-center mb-2">
                    <User className="text-primary mr-2" size={20} />
                    <span className="text-gray-400">Full Name</span>
                  </div>
                  <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>
                </div>

                <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border border-cyan-500/20 rounded-xl p-4 hover:scale-105 transition-transform">
                  <div className="flex items-center mb-2">
                    <Mail className="text-secondary mr-2" size={20} />
                    <span className="text-gray-400">Email</span>
                  </div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white font-semibold hover:text-primary transition-colors break-all">
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-xl p-4 hover:scale-105 transition-transform">
                  <div className="flex items-center mb-2">
                    <MapPin className="text-purple-400 mr-2" size={20} />
                    <span className="text-gray-400">Location</span>
                  </div>
                  <span className="text-white font-semibold">{PERSONAL_INFO.location}</span>
                </div>

                <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl p-4 hover:scale-105 transition-transform">
                  <div className="flex items-center mb-2">
                    <Phone className="text-green-400 mr-2" size={20} />
                    <span className="text-gray-400">Phone</span>
                  </div>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-white font-semibold hover:text-primary transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="#contact"
                  className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-xl text-white font-semibold flex items-center justify-center hover:shadow-lg hover:shadow-primary/30 transition-all"
                >
                  <Mail className="mr-2" size={20} />
                  Contact Me
                </a>
                <a
                  href="#experience"
                  className="group border-2 border-primary px-8 py-4 rounded-xl text-white font-semibold flex items-center justify-center hover:bg-primary transition-all"
                >
                  <Briefcase className="mr-2" size={20} />
                  View Resume
                </a>
              </div>
            </motion.div>
          </div>

          {/* Skills Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {[
              { icon: Code, title: 'Frontend', skills: 'HTML, CSS, JavaScript, React', gradient: 'from-blue-500 to-blue-600' },
              { icon: Server, title: 'Backend', skills: 'PHP, Laravel, APIs', gradient: 'from-cyan-500 to-cyan-600' },
              { icon: Database, title: 'Database', skills: 'MySQL, MongoDB', gradient: 'from-purple-500 to-purple-600' },
              { icon: Wrench, title: 'Tools', skills: 'Git, VS Code, Figma', gradient: 'from-green-500 to-green-600' },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gradient-to-br from-surface to-surface/50 border border-white/10 rounded-2xl p-6 text-center hover:scale-105 hover:border-primary/50 transition-all"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${skill.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform`}>
                  <skill.icon className="text-white" size={32} />
                </div>
                <h4 className="text-white font-bold mb-2 text-lg">{skill.title}</h4>
                <p className="text-gray-400 text-sm">{skill.skills}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Collaborate?</span>
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to bring your digital ideas to life. Contact me or download my CV to learn more about my expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all inline-flex items-center justify-center"
              >
                <Mail className="mr-2" size={20} />
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary px-8 py-4 rounded-xl text-white font-semibold hover:bg-primary transition-all inline-flex items-center justify-center"
              >
                <Award className="mr-2" size={20} />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
