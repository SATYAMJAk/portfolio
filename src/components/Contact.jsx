import React, { useState } from 'react';
import { profile } from '../data/profile';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    // Simulate sending
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-md mb-6">Let's Build Something.</h2>
            <p className="text-body mb-8">
              I'm currently focused on learning, building projects and preparing for opportunities in software development. Feel free to reach out if you're looking for a dedicated student developer or just want to connect!
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Me</p>
                  <p className="font-medium">{profile.email}</p>
                </div>
              </a>
              
              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <FaLinkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Connect on LinkedIn</p>
                  <p className="font-medium">Satyajeet Raj</p>
                </div>
              </a>

              <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center">
                  <FaGithub className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">View GitHub Profile</p>
                  <p className="font-medium">SATYAMJAk</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              
              {status === 'error' && <p className="text-red-500 text-sm">Please fill out all fields.</p>}
              {status === 'success' && <p className="text-green-500 text-sm">Message sent successfully! (Simulated)</p>}
              
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg disabled:opacity-70"
              >
                {status === 'sending' ? 'Sending...' : (
                  <>
                    Send Message <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
