import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { SKILLS_DATA } from '../constants';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const skillsList = ["React", "vite", "TypeScript", "Node.js", "TailwindCSS", "SQL", "API", "Figma", "Laravel", "JavaScript", "Photoshop", "Python"];

  return (
    <section id="skills" className="py-20 bg-surface/30 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Technical Proficiency" subtitle="true" />
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Chart Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 h-[400px] bg-background/50 rounded-2xl p-4 border border-white/5 shadow-2xl backdrop-blur-sm"
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SKILLS_DATA}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Skill Level"
                  dataKey="A"
                  stroke="#6366f1"
                  strokeWidth={3}
                  fill="#6366f1"
                  fillOpacity={0.4}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#818cf8' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Always Learning, Always Evolving</h3>
              <p className="text-slate-400 leading-relaxed">
                My technical foundation is built on modern JavaScript/TypeScript ecosystems. While I specialize in the React stack, I maintain a broad understanding of the full web development lifecycle, from UI design in Figma to deployment on cloud platforms.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 bg-surface rounded-xl border border-white/5 shadow-lg"
              >
                <div className="text-4xl font-bold text-primary mb-1">8+</div>
                <div className="text-sm text-slate-400 font-medium">Years Experience</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 bg-surface rounded-xl border border-white/5 shadow-lg"
              >
                <div className="text-4xl font-bold text-secondary mb-1">50+</div>
                <div className="text-sm text-slate-400 font-medium">Projects Completed</div>
              </motion.div>
            </div>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {skillsList.map((tech) => (
                <motion.span 
                  key={tech} 
                  variants={item}
                  className="px-4 py-2 bg-white/5 text-slate-300 rounded-full text-sm font-medium border border-white/10 hover:bg-white/10 hover:text-white hover:border-primary/50 transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;