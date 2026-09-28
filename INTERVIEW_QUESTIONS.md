# Portfolio Interview & Viva Questions

This document contains expected questions you might be asked during your project viva or technical interviews based on your portfolio.

## General
1. **Explain your portfolio in 60 seconds.**
   "My portfolio is a Single Page Application built using React.js and Tailwind CSS. It is designed to be a complete professional profile, highlighting my focus on full-stack development, my academic journey at VFSTR, my technical skills, and the projects I have built. I used a data-driven approach where all content is separated from the UI components, making it scalable and easy to maintain."

## React & Architecture
2. **Why did you choose React.js for this project?**
   React allows building modular, reusable UI components. It's efficient due to its virtual DOM and makes managing complex UI states (like dark mode and modals) much simpler.

3. **What is a component in React?**
   A component is an independent, reusable piece of the UI. For example, the `Navbar`, `ProjectCard`, and `Footer` in this portfolio are all separate components.

4. **What are props?**
   Props (short for properties) are used to pass data from a parent component to a child component. They are read-only.

5. **How are you managing state in this application?**
   I am using React's `useState` hook for local component state, like managing the mobile menu toggle, the active project modal, and the theme (dark/light mode).

6. **How does the dark mode toggle work?**
   It uses a `theme` state initialized from `localStorage` or system preferences. When toggled, it adds or removes the `dark` class on the `<html>` element, which Tailwind uses to apply dark mode styles.

## Vite & Tailwind
7. **Why did you use Vite instead of Create React App?**
   Vite is significantly faster for local development. It uses native ES modules for rapid server startup and Hot Module Replacement (HMR).

8. **Why did you choose Tailwind CSS?**
   Tailwind is a utility-first CSS framework that allows rapid UI development directly in JSX without constantly switching between CSS files and JS files.

9. **How did you make the website responsive?**
   By using Tailwind's responsive prefixes like `md:` (medium/tablet) and `lg:` (large/desktop) to adjust layouts, text sizes, and grid columns based on screen size.

## Project Specifics
10. **What is the MERN stack in your Attendance System project?**
    MongoDB (Database), Express.js (Backend Framework), React.js (Frontend Library), Node.js (Runtime Environment).

11. **What challenges did you face while building this portfolio?**
    Structuring the components to be reusable and separating the data (like projects and skills) into separate files so the UI code doesn't get cluttered with text content.

## Deployment & Version Control
12. **How do you deploy a React Vite app?**
    By running `npm run build`, Vite bundles the application into a `dist` folder. This folder can be hosted on platforms like Vercel, Netlify, or GitHub Pages.

13. **Why do we use Git and GitHub?**
    Git is for version control, to track changes in code. GitHub is a remote hosting platform that allows collaboration, backup, and showcasing code to recruiters.
