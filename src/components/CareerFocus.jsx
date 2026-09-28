import React from 'react';
import { careerRoadmap, currentlyLearning } from '../data/learning';
import { BookOpen, CheckCircle, Target } from 'lucide-react';

const CareerFocus = () => {
  return (
    <section id="career" className="section-padding bg-gray-50 dark:bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-md mb-4 flex items-center gap-4">
          <span className="w-8 h-[2px] bg-primary-600 dark:bg-primary-500"></span>
          Career Focus & Learning
        </h2>
        <p className="text-body mb-12 max-w-2xl">
          My roadmap and preparation strategy for software development roles and on-campus placements.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-primary-500" />
              Placement Preparation Roadmap
            </h3>
            <div className="space-y-4">
              {careerRoadmap.map((item) => (
                <div key={item.id} className="bg-white dark:bg-gray-900/60 p-4 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-black text-gray-200 dark:text-gray-800">{item.id}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{item.title}</span>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    item.status === 'Practicing' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                    item.status === 'Learning' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                    item.status === 'Building' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' :
                    'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary-500" />
              Currently Learning
            </h3>
            <div className="bg-white dark:bg-gray-900/60 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <ul className="space-y-4">
                {currentlyLearning.map((topic, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerFocus;
