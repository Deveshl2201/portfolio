import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      id: 1,
      title: 'College Chatbot Model',
      description:
        'Designed an AI chatbot to handle student queries using automated workflows. Implemented MERN stack with NLP and Machine Learning for text and voice processing and delivered real-time responses, reducing manual query handling.',
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'NLP', 'ML'],
      github: 'https://github.com/Deveshl2201',
      demo: '#',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Hospital Management System',
      description:
        'Solved manual record management by centralizing hospital operations. Implemented JavaScript, HTML, CSS, and MySQL for structured data handling, improving accuracy in patient records, billing, and appointments.',
      techStack: ['JavaScript', 'HTML', 'CSS', 'MySQL'],
      github: 'https://github.com/Deveshl2201',
      demo: '#',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Spotify Clone App',
      description:
        'Created a music streaming interface focusing on UI responsiveness. Leveraged JavaScript and Bootstrap for layout and media controls, achieving smooth navigation and mobile-friendly user experience.',
      techStack: ['JavaScript', 'Bootstrap', 'HTML', 'CSS'],
      github: 'https://github.com/Deveshl2201',
      demo: '#',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-dark">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"
        ></motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.6 + index * 0.2 }}
              whileHover={{ y: -4 }}
              className="glass-effect interactive-card rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Gradient Header */}
              <div
                className={`h-2 bg-gradient-to-r ${project.gradient}`}
              ></div>

              <div className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-secondary mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-card hover:bg-primary/20 border border-border rounded-lg text-primary transition-all duration-300"
                  >
                    <FaGithub />
                    <span className="text-sm">Code</span>
                  </motion.a>

                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    <FaExternalLinkAlt />
                    <span className="text-sm">Live Demo</span>
                  </motion.a>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-200 pointer-events-none`}
              ></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
