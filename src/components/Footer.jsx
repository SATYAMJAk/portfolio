import React from 'react';
import { Link } from 'react-router-dom';
import { Code } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/profile';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white">
              <span className="text-primary-600 dark:text-primary-500">S</span>R
            </span>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              {profile.title} | {profile.positioning}
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="/#home" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="/#about" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About</a></li>
              <li><a href="/#projects" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Projects</a></li>
              <li><Link to="/recruiter" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Recruiter View</Link></li>
              <li><Link to="/viva" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Viva Presentation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href={profile.social.leetcode} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors">
                <Code className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
