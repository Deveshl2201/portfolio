import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Lightweight Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Hi, I'm <span className="gradient-text">Devesh L</span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-4xl text-light mb-6"
        >
          Full Stack Developer | MERN Stack | Java
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-secondary mb-8 max-w-2xl mx-auto"
        >
          Passionate about building scalable web applications with modern
          technologies and delivering exceptional user experiences. Based in Bengaluru, India.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <a href="#projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-3 rounded-full font-medium transition-colors duration-300"
            >
              View Projects
            </motion.button>
          </a>

          <a href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-primary text-primary hover:bg-accentHover hover:text-black rounded-full font-medium transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </a>

          <a href="/Devesh D.pdf" download="Devesh_L_Resume.pdf">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-primary text-primary hover:bg-accentHover hover:text-black rounded-full font-medium transition-all duration-300 flex items-center gap-2"
            >
              <FaDownload />
              Download Resume
            </motion.button>
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          <motion.a
            href="https://github.com/Deveshl2201"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#D4AF37' }}
            className="text-secondary hover:text-primary transition-colors duration-300"
          >
            <FaGithub size={30} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/deveshl2201"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#D4AF37' }}
            className="text-secondary hover:text-primary transition-colors duration-300"
          >
            <FaLinkedin size={30} />
          </motion.a>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;
