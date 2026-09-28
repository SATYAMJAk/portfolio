# Portfolio Project Explanation

## Overview
This is a modern, responsive personal developer portfolio built for Satyajeet Raj. It serves as a digital resume and project showcase, specifically tailored for on-campus placements, internships, and teacher evaluations.

## Technology Stack
- **React.js**: Core UI library.
- **Vite**: Next-generation frontend tooling for fast development and optimized builds.
- **Tailwind CSS**: Utility-first CSS framework for rapid and consistent styling.
- **Framer Motion**: For smooth, professional animations.
- **React Router DOM**: For client-side routing between the main page, Recruiter View, and Viva View.
- **Lucide React**: For clean, modern SVG icons.

## Architecture & Folder Structure
```text
src/
├── components/       # Reusable UI components (Navbar, Hero, Projects, etc.)
├── data/             # JSON-like data files holding content
│   ├── profile.js
│   ├── skills.js
│   └── projects.js
├── pages/            # Page-level components
│   ├── Home.jsx
│   ├── RecruiterView.jsx
│   ├── VivaView.jsx
│   └── NotFound.jsx
├── App.jsx           # Main application setup and routing
└── index.css         # Global styles and Tailwind directives
```

## Key Architectural Decisions
1. **Data-Driven UI**: All personal information, skills, and project details are stored in `src/data/`. This means you can add a new project or update your CGPA without touching the React component code.
2. **Component Reusability**: Sections are broken down into logical components.
3. **Dark/Light Mode**: Fully integrated Tailwind dark mode, persisting user preference in `localStorage`.
4. **Responsive Design**: Mobile-first approach using Tailwind's `md:` and `lg:` breakpoint utilities.
5. **Specialized Views**: 
   - `RecruiterView`: A streamlined, text-heavy view for quick scanning.
   - `VivaView`: A technical breakdown page meant to be presented to teachers/evaluators.
