import React, { useState } from 'react';
import { skills, capabilities } from '../data/skills';
import { Layers, Terminal, Layout, Database, Server, Settings, Cpu, Globe } from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Programming': return <Terminal className="w-5 h-5" />;
      case 'Frontend': return <Layout className="w-5 h-5" />;
      case 'Backend': return <Server className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Core Computer Science': return <Cpu className="w-5 h-5" />;
      case 'Tools': return <Settings className="w-5 h-5" />;
      case 'Computer Vision': return <Globe className="w-5 h-5" />;
      case 'Full Stack': return <Layers className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-md mb-4 flex items-center gap-4">
          <span className="w-8 h-[2px] bg-primary-600 dark:bg-primary-500"></span>
          Technical Skills
        </h2>
        <p className="text-body mb-12 max-w-2xl">
          Technologies and concepts I have learned and applied in academic work and personal projects.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white dark:bg-gray-900/40 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                  <span className="text-primary-500">{getCategoryIcon(skillGroup.category)}</span>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <div 
                      key={idx}
                      className="relative"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg cursor-help transition-colors hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 block">
                        {skill.name}
                      </span>
                      
                      {hoveredSkill === skill.name && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs rounded shadow-lg z-10 pointer-events-none">
                          {skill.description}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-white"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary-600 to-purple-600 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <h3 className="text-xl font-bold mb-6 relative z-10">What I Can Build</h3>
              <div className="space-y-6 relative z-10">
                {capabilities.map((cap, idx) => (
                  <div key={idx}>
                    <h4 className="font-semibold text-lg mb-1 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary-200" />
                      {cap.title}
                    </h4>
                    <p className="text-primary-100 text-sm pl-6">{cap.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { CheckCircle2 } from 'lucide-react';

export default Skills;
