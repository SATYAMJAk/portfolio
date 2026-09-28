import React from 'react';
import { BookOpen, GraduationCap, Award, Code2 } from 'lucide-react';
import { profile } from '../data/profile';

const QuickProfile = () => {
  const cards = [
    {
      title: "3rd Year",
      subtitle: profile.degree,
      icon: <GraduationCap className="w-6 h-6 text-primary-500" />
    },
    {
      title: profile.cgpa,
      subtitle: "CGPA",
      icon: <Award className="w-6 h-6 text-purple-500" />
    },
    {
      title: profile.period,
      subtitle: "Academic Journey",
      icon: <BookOpen className="w-6 h-6 text-blue-500" />
    },
    {
      title: "MERN",
      subtitle: "Full-Stack Stack",
      icon: <Code2 className="w-6 h-6 text-green-500" />
    }
  ];

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-20 relative z-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {cards.map((card, index) => (
          <div key={index} className="glass-card p-6 flex flex-col items-center text-center">
            <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-full mb-4">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{card.title}</h3>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">{card.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickProfile;
