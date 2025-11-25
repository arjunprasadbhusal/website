import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Facebook, Instagram } from 'lucide-react';
import Button from './Button';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10 bg-background">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" 
        />
        <motion.div 
           animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[120px]" 
        />
        <div className="absolute top-[20%] right-[20%] w-[20%] h-[20%] bg-blue-500/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-3/5 text-center md:text-left mb-12 md:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6 shadow-lg shadow-primary/5">
                <span className="text-primary font-semibold tracking-wide text-sm uppercase">Available for Freelancing</span>
              </div>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Building <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-pulse">Digital</span> <br/>
              Experiences
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              {PERSONAL_INFO.bio}
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                icon={<ArrowRight className="w-5 h-5" />}
              >
                View Work
              </Button>
              <Button 
                variant="outline"
                icon={<Download className="w-5 h-5" />}
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Download CV
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 mt-8 justify-center md:justify-start">
              {SOCIAL_LINKS.map((social) => {
                const icons: Record<string, React.ReactNode> = {
                  github: <Github className="w-5 h-5" />,
                  linkedin: <Linkedin className="w-5 h-5" />,
                  facebook: <Facebook className="w-5 h-5" />,
                  instagram: <Instagram className="w-5 h-5" />
                };
                
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 hover:bg-primary/20 backdrop-blur-sm rounded-lg border border-white/10 hover:border-primary/50 transition-all duration-300 group"
                    title={social.platform}
                  >
                    <span className="text-slate-400 group-hover:text-primary transition-colors">
                      {icons[social.icon]}
                    </span>
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          <div className="md:w-2/5 flex justify-center relative">
            <motion.div
               initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
               className="relative w-72 h-72 md:w-96 md:h-96"
            >
              {/* Decorative rings */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 border-2 border-secondary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-[-20px] border border-white/5 rounded-full animate-pulse" />
              
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-surface shadow-2xl z-10">
                 <img 
                   src="/arjun-profile.jpg" 
                   alt="Arjun Bhusal - Profile" 
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&backgroundColor=3b82f6';
                   }}
                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                 />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;