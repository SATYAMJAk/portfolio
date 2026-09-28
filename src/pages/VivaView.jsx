import React, { useEffect } from 'react';

const VivaView = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="section-padding max-w-4xl mx-auto pt-24 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Project Presentation / Viva</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-12">Technical overview of this portfolio application.</p>
      
      <div className="space-y-8">
        <section className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">Architecture & Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-950 rounded-xl text-center">
              <span className="block text-sm text-gray-500 mb-1">Core</span>
              <span className="font-semibold text-gray-900 dark:text-white">React.js</span>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-950 rounded-xl text-center">
              <span className="block text-sm text-gray-500 mb-1">Styling</span>
              <span className="font-semibold text-gray-900 dark:text-white">Tailwind CSS</span>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-950 rounded-xl text-center">
              <span className="block text-sm text-gray-500 mb-1">Build Tool</span>
              <span className="font-semibold text-gray-900 dark:text-white">Vite</span>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-950 rounded-xl text-center">
              <span className="block text-sm text-gray-500 mb-1">Routing</span>
              <span className="font-semibold text-gray-900 dark:text-white">React Router</span>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            This portfolio is a Single Page Application (SPA) built with React. It uses a component-based architecture to ensure reusability and maintainability. Data is decoupled from UI components, stored in JavaScript files simulating a database, allowing for easy updates without changing the code structure.
          </p>
        </section>
        
        <section className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">Folder Structure</h2>
          <pre className="text-sm bg-gray-50 dark:bg-gray-950 p-4 rounded-xl text-gray-700 dark:text-gray-300 overflow-x-auto">
{`src/
├── components/       # Reusable UI components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   └── ...
├── data/             # Data-driven content
│   ├── profile.js
│   ├── skills.js
│   └── projects.js
├── pages/            # Route views
│   ├── Home.jsx
│   ├── RecruiterView.jsx
│   └── VivaView.jsx
├── App.jsx           # Main application routing
└── index.css         # Global Tailwind styles`}
          </pre>
        </section>
        
        <section className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">Key Features</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><strong>Responsive Design:</strong> Adapts seamlessly to mobile, tablet, and desktop viewports using Tailwind CSS utility classes.</li>
            <li><strong>Dark/Light Mode:</strong> Implemented via state and localStorage, toggling a 'dark' class on the HTML root element.</li>
            <li><strong>Data-Driven UI:</strong> Content is injected via data files, separating content management from UI layout logic.</li>
            <li><strong>Smooth Animations:</strong> Utilizes Framer Motion for subtle entry and interaction animations.</li>
            <li><strong>Optimized Routing:</strong> React Router DOM handles client-side navigation instantly without page reloads.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default VivaView;
