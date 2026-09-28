import React from 'react';
import { profile } from '../data/profile';

const Journey = () => {
  return (
    <section className="section-padding bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading-md mb-12 text-center">Development Journey</h2>
        
        <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-3 md:ml-0 md:left-1/2 md:-translate-x-[1px]">
          {profile.journey.map((item, index) => (
            <div key={index} className={`mb-10 flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="hidden md:block w-5/12"></div>
              
              <div className="z-20 flex items-center justify-center w-6 h-6 bg-primary-500 rounded-full ring-4 ring-white dark:ring-gray-950 absolute left-[-11px] md:relative md:left-auto">
                {item.status === 'completed' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                {item.status === 'current' && <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>}
                {item.status === 'future' && <div className="w-2 h-2 bg-primary-200 rounded-full"></div>}
              </div>
              
              <div className={`w-full md:w-5/12 pl-6 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                <div className="p-5 glass-card relative group hover:-translate-y-1 transition-transform">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full mb-2 inline-block ${
                    item.status === 'completed' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                    item.status === 'current' ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400' :
                    'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                  }`}>
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
