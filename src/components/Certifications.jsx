import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCertificate, FaAward } from 'react-icons/fa';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certifications = [
    {
      id: 1,
      title: 'Data Structures & Algorithms with Java',
      provider: 'Apna College',
      period: 'Jan 2024 - Jul 2024',
      icon: FaCertificate,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'MERN Full Stack Development',
      provider: 'Apna College',
      period: 'Sep 2024 - Mar 2025',
      icon: FaCertificate,
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-dark">
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
          <span className="gradient-text">Certifications</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"
        ></motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.6 + index * 0.2 }}
              whileHover={{ y: -4, scale: 1.005 }}
              className="glass-effect interactive-card rounded-2xl overflow-hidden group"
            >
              {/* Gradient Header */}
              <div
                className={`h-2 bg-gradient-to-r ${cert.color}`}
              ></div>

              <div className="p-6">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300"
                >
                  <cert.icon className="text-3xl text-primary" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </h3>

                {/* Provider */}
                <p className="text-gray-400">{cert.provider}</p>
                <p className="text-sm text-gray-500 mt-1">{cert.period}</p>
              </div>

              {/* Hover Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-200 pointer-events-none`}
              ></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
