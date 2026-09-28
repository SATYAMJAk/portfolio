import React, { useState } from 'react';
import { projects } from '../data/projects';
import { ExternalLink, X, ArrowRight, Code } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-gray-900/60 dark:bg-black/60 backdrop-blur-sm"
      ></motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{project.name}</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto custom-scrollbar flex-grow">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Project Overview</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{project.overview}</p>
              </section>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <section>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">The Problem</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{project.problem}</p>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">The Solution</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{project.solution}</p>
                </section>
              </div>
              
              <section>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </section>
              
              {project.architecture && (
                <section>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Architecture</h3>
                  <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
                    {Object.entries(project.architecture).map(([layer, tech], idx, arr) => (
                      <React.Fragment key={layer}>
                        <div className="p-3 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 w-full md:w-auto">
                          <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">{layer}</span>
                          <span className="font-semibold text-primary-600 dark:text-primary-400">{tech}</span>
                        </div>
                        {idx < arr.length - 1 && (
                          <div className="hidden md:block text-gray-400">→</div>
                        )}
                        {idx < arr.length - 1 && (
                          <div className="md:hidden text-gray-400">↓</div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </section>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <section>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Challenges & Learnings</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm italic border-l-4 border-primary-500 pl-4 py-1">{project.learned}</p>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Future Improvements</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{project.futureImprovements}</p>
                </section>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-5 border border-gray-100 dark:border-gray-800 space-y-4">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Links</h3>
                <a href={project.github !== 'Link to be added' ? project.github : '#'} className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors group">
                  <FaGithub className="w-5 h-5 text-gray-500 group-hover:text-primary-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-500">{project.github !== 'Link to be added' ? 'View Source' : 'Link to be added'}</span>
                </a>
                <a href={project.demo !== 'Link to be added' ? project.demo : '#'} className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors group">
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-primary-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-500">{project.demo !== 'Link to be added' ? 'Live Demo' : 'Link to be added'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-md mb-4 flex items-center gap-4">
          <span className="w-8 h-[2px] bg-primary-600 dark:bg-primary-500"></span>
          Featured Projects
        </h2>
        <p className="text-body mb-12 max-w-2xl">
          A selection of applications and technical projects I have built during my academic journey.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl dark:hover:shadow-primary-900/20 group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                  <span className="text-gray-400 dark:text-gray-600 font-medium">Project Image / Screenshot</span>
                </div>
                <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/10 transition-colors duration-300"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2 py-1 bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400 rounded-md">
                    {project.type}
                  </span>
                  <span className="text-xs font-medium text-gray-500 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span> {project.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="text-xs font-medium px-2 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded text-gray-600 dark:text-gray-400">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs font-medium px-2 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded text-gray-500">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800 mt-auto flex items-center justify-between">
                  <span className="text-sm font-medium text-primary-600 dark:text-primary-400 flex items-center gap-1">
                    View Case Study <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </div>
              </div>
            </div>
          ))}
          
          <div className="bg-gray-50/50 dark:bg-gray-900/20 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center p-8 text-center h-full min-h-[400px]">
            <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
              <Code className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">More Projects Coming Soon</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
              I am actively learning and building new applications. Stay tuned for updates.
            </p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
