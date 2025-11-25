import React from 'react';
import { Briefcase, Calendar, Building2, Sparkles, Award, GraduationCap, Code, Globe, Mail, Phone, MapPin, Github, Linkedin, Heart, Camera, Plane, Music, Gamepad } from 'lucide-react';
import { EXPERIENCE_DATA, PERSONAL_INFO, SKILLS_DATA } from '../constants';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-surface/30 via-background to-surface/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="Professional Resume" subtitle="Experience, Skills & Education" />

        {/* Quick Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 mt-12"
        >
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
            <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
            <div className="text-4xl font-bold text-purple-400 mb-2">2+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
            <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-surface via-surface to-surface/80 p-6 rounded-2xl border border-white/10 shadow-xl"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Mail className="mr-3 text-primary" size={20} />
                Contact Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300 p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors group">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <Mail size={16} className="text-white" />
                  </div>
                  <span className="text-sm break-all">{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center text-gray-300 p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors group">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <Phone size={16} className="text-white" />
                  </div>
                  <span className="text-sm">{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center text-gray-300 p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors group">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <MapPin size={16} className="text-white" />
                  </div>
                  <span className="text-sm">{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center text-gray-300 p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors group">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <Github size={16} className="text-white" />
                  </div>
                  <span className="text-sm break-all">{PERSONAL_INFO.github}</span>
                </div>
              </div>
            </motion.div>

            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-surface via-surface to-surface/80 p-6 rounded-2xl border border-white/10 shadow-xl"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Code className="mr-3 text-primary" size={20} />
                Technical Skills
              </h3>
              <div className="space-y-4">
                {SKILLS_DATA.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium text-sm">{skill.subject}</span>
                      <span className="text-primary text-sm font-bold">{skill.A}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.A}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-surface via-surface to-surface/80 p-6 rounded-2xl border border-white/10 shadow-xl"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Globe className="mr-3 text-primary" size={20} />
                Languages
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                  <span className="text-gray-300 font-medium">English</span>
                  <span className="text-primary text-sm font-semibold">Fluent</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                  <span className="text-gray-300 font-medium">Nepali</span>
                  <span className="text-primary text-sm font-semibold">Native</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                  <span className="text-gray-300 font-medium">Hindi</span>
                  <span className="text-primary text-sm font-semibold">Conversational</span>
                </div>
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-surface via-surface to-surface/80 p-6 rounded-2xl border border-white/10 shadow-xl"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Heart className="mr-3 text-primary" size={20} />
                Interests
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-400 px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center hover:scale-105 transition-transform">
                  <Code size={14} className="mr-1" />Coding
                </div>
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center hover:scale-105 transition-transform">
                  <Camera size={14} className="mr-1" />Photo
                </div>
                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-400 px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center hover:scale-105 transition-transform">
                  <Plane size={14} className="mr-1" />Travel
                </div>
                <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 text-red-400 px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center hover:scale-105 transition-transform">
                  <Music size={14} className="mr-1" />Music
                </div>
                <div className="col-span-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-400 px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center hover:scale-105 transition-transform">
                  <Gamepad size={14} className="mr-1" />Gaming
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-surface via-surface to-surface/80 p-6 md:p-8 rounded-2xl border border-white/10 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Sparkles className="mr-3 text-primary" size={24} />
                Professional Summary
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">{PERSONAL_INFO.bio}</p>
            </motion.div>

            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-surface via-surface to-surface/80 p-6 md:p-8 rounded-2xl border border-white/10 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Briefcase className="mr-3 text-primary" size={24} />
                Work Experience
              </h3>
              <div className="space-y-6">
                {EXPERIENCE_DATA.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors"
                  >
                    <div className="absolute -left-2 top-2 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full" />
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h4 className="text-xl font-semibold text-white">{job.role}</h4>
                      <span className="text-primary text-sm font-medium bg-primary/10 px-3 py-1 rounded-full">{job.period}</span>
                    </div>
                    <p className="text-secondary font-medium mb-2 flex items-center">
                      <Building2 size={16} className="mr-2" />
                      {job.company}
                    </p>
                    <p className="text-gray-400 mb-3">{job.description}</p>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-surface via-surface to-surface/80 p-6 md:p-8 rounded-2xl border border-white/10 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <GraduationCap className="mr-3 text-primary" size={24} />
                Education
              </h3>
              <div className="space-y-4">
                <div className="border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-all bg-gradient-to-r from-primary/5 to-secondary/5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-white">Bachelor of Information Technology Management</h4>
                      <p className="text-primary font-semibold">Tribhuvan University, Nepal</p>
                    </div>
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">2021 - Present</span>
                  </div>
                  <p className="text-gray-300 mb-3">
                    Currently pursuing degree with focus on information technology management, web development, and database systems.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs">Web Development</span>
                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs">Database Management</span>
                    <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs">Software Engineering</span>
                  </div>
                </div>

                <div className="border border-secondary/20 rounded-xl p-6 hover:border-secondary/50 transition-all bg-gradient-to-r from-secondary/5 to-primary/5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-white">Higher Secondary Education (+2)</h4>
                      <p className="text-secondary font-semibold">Science Faculty, Nepal</p>
                    </div>
                    <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">2016 - 2018</span>
                  </div>
                  <p className="text-gray-300 mb-3">
                    Completed with distinction in Mathematics, Physics, and Computer Science. Built strong analytical foundation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">Mathematics</span>
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs">Physics</span>
                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs">Computer Science</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;