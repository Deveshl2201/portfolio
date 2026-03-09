import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      id: 1,
      company: 'Adrasti (K2 Ventures) Technologies Pvt Ltd',
      role: 'Full Stack Developer - Intern',
      period: 'Sep 2025 – Present',
      description:
        'Developed scalable MERN features using React, Node.js, Express, MongoDB and REST APIs, improving application performance and delivery efficiency.',
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      current: true,
    },
    {
      id: 2,
      company: 'Take It Smart (OPC) Pvt Ltd',
      role: 'Full Stack Developer Intern',
      period: 'Jan 2025 – Mar 2025',
      description:
        'Engineered 3+ end-to-end MERN modules using React and Node-Express APIs, enhancing backend data flow efficiency by approximately 30%.',
      skills: ['MERN Stack', 'React.js', 'Node-Express APIs', 'Backend Data Flow'],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-darker">
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
          Work <span className="gradient-text">Experience</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"
        ></motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -24 : 24 }
                }
                transition={{ delay: 0.4 + index * 0.15 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'
                }`}
              >
                <div
                  className={`flex ${
                    index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                  }`}
                >
                  <div className="w-full md:w-10/12">
                    <motion.div
                      whileHover={{ scale: 1.005 }}
                      className="glass-effect interactive-card rounded-2xl p-6 md:p-8 relative"
                    >
                      {/* Current Badge */}
                      {exp.current && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30">
                            Current
                          </span>
                        </div>
                      )}

                      {/* Company & Role */}
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-3 bg-primary/20 rounded-lg text-primary">
                          <FaBriefcase size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-primary font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Period */}
                      <div className="flex items-center gap-2 mb-4 text-gray-400">
                        <FaCalendarAlt />
                        <span>{exp.period}</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4">{exp.description}</p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 text-xs bg-secondary/20 text-secondary rounded-full border border-secondary/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-darker"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
