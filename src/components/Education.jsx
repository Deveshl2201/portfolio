import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from 'react-icons/fa';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      id: 1,
      degree: 'Master of Computer Applications',
      institution: 'Oxford College of Science',
      period: '2023 - 2025',
      description:
        'Advanced studies focused on software development, data structures, algorithms, and scalable application design.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      degree: 'Bachelor of Science',
      institution: 'PES College of Science',
      period: '2020 - 2023',
      description:
        'Strong foundation in computer science, programming fundamentals, and applied problem solving.',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="education" className="py-20 bg-dark">
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
          <span className="gradient-text">Education</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"
        ></motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.6 + index * 0.2 }}
              whileHover={{ y: -4 }}
              className="glass-effect interactive-card rounded-2xl overflow-hidden group"
            >
              {/* Gradient Header */}
              <div
                className={`h-2 bg-gradient-to-r ${edu.gradient}`}
              ></div>

              <div className="p-6 md:p-8">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300"
                >
                  <FaGraduationCap className="text-3xl text-primary" />
                </motion.div>

                {/* Degree */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <div className="flex items-center gap-2 mb-3 text-gray-300">
                  <FaUniversity className="text-secondary" />
                  <p className="font-semibold">{edu.institution}</p>
                </div>

                {/* Period */}
                <div className="flex items-center gap-2 mb-4 text-gray-400">
                  <FaCalendarAlt className="text-primary" />
                  <span>{edu.period}</span>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-200 pointer-events-none`}
              ></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
