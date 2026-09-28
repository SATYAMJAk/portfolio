import React from 'react';
import { profile } from '../data/profile';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-md mb-8 flex items-center gap-4">
          <span className="w-8 h-[2px] bg-primary-600 dark:bg-primary-500"></span>
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-body mb-6">
              {profile.about.text}
            </p>
            <div className="w-full max-w-xs mx-auto md:mx-0 md:max-w-sm aspect-[4/5] bg-gray-200 dark:bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-300 dark:border-gray-800 overflow-hidden relative group shadow-md">
              <img 
                src="/profile.jpg" 
                alt="Satyajeet Raj" 
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'block';
                }}
              />
              <span className="hidden absolute text-gray-500 dark:text-gray-500 font-medium">Add profile.jpg in public/ folder</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">What I'm Focused On</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profile.about.focusAreas.map((area, index) => (
                <div key={index} className="flex items-start bg-white dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
