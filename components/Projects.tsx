import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? PROJECTS_DATA : PROJECTS_DATA.slice(0, 3);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Featured Projects" subtitle="true" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-surface rounded-2xl overflow-hidden border border-white/5 shadow-lg transition-all duration-300"
            >
              {/* Image Container */}
              <div className="aspect-video w-full overflow-hidden relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent opacity-90" />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                   <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-primary text-white backdrop-blur-md transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                      <Github size={24} />
                   </a>
                   <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-secondary text-white backdrop-blur-md transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                      <ExternalLink size={24} />
                   </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary/80 border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {PROJECTS_DATA.length > 3 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            >
              {showAll ? 'Show Less' : `Show All Projects (${PROJECTS_DATA.length})`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;