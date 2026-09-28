import React, { useEffect } from 'react';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { profile } from '../data/profile';
import { certifications } from '../data/certifications';

const RecruiterView = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col bg-gray-50 dark:bg-gray-950 min-h-screen">
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-12 pt-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Recruiter Fast-Track View</h1>
          <p className="text-gray-600 dark:text-gray-400">Streamlined profile of {profile.name} focusing on skills, projects, and education.</p>
        </div>
      </div>
      
      <About />
      <Skills />
      
      <section className="section-padding bg-white dark:bg-gray-950/50 border-y border-gray-100 dark:border-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-md mb-8 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-primary-600 dark:bg-primary-500"></span>
            Education & Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Academic Background</h3>
              <div className="space-y-6">
                {profile.education.map((edu, idx) => (
                  <div key={idx} className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-200 dark:border-gray-800 relative">
                    <h4 className="font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{edu.institution}</p>
                    {edu.period && <p className="text-xs text-primary-600 dark:text-primary-400 font-medium mt-2">{edu.period} • {edu.status}</p>}
                    <div className="mt-3 inline-block bg-white dark:bg-gray-950 px-3 py-1 rounded border border-gray-200 dark:border-gray-700 text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {edu.score}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.id} className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-200 dark:border-gray-800 flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{cert.name}</h4>
                      <p className="text-xs text-gray-500 mt-1">{cert.issuer}</p>
                    </div>
                    <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded">
                      {cert.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Projects />
      <Contact />
    </div>
  );
};

export default RecruiterView;
