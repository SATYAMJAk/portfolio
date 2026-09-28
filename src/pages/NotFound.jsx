import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Terminal } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center section-padding">
      <div className="text-center">
        <div className="w-20 h-20 bg-gray-100 dark:bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Terminal className="w-10 h-10 text-primary-500" />
        </div>
        <h1 className="text-6xl font-black text-gray-900 dark:text-white mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">This page went for debugging.</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          The requested URL was not found on this server. It might have been removed, renamed, or did not exist in the first place.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-colors shadow-lg"
        >
          <ArrowLeft className="w-5 h-5" />
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
