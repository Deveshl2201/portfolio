import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-primary/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-gray-400"
          >
            <span>© {currentYear} Devesh L. Made with</span>
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <FaHeart className="text-red-500" />
            </motion.span>
            <span>using React & Tailwind CSS</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <motion.a
              href="https://github.com/Deveshl2201"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#D4AF37' }}
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/deveshl2201"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#D4AF37' }}
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </motion.a>
          </motion.div>
        </div>

        {/* Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 text-center"
        >
          <a
            href="#home"
            className="text-primary hover:text-secondary transition-colors duration-300 text-sm"
          >
            Back to Top ↑
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
