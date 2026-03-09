import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const contactInfo = [
    {
      id: 1,
      icon: FaPhone,
      label: 'Phone',
      value: '+91 9035915071',
      link: 'tel:+919035915071',
      color: 'text-emerald-400',
    },
    {
      id: 2,
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Bangalore',
      link: 'https://maps.google.com/?q=Bangalore',
      color: 'text-orange-400',
    },
    {
      id: 3,
      icon: FaEnvelope,
      label: 'Email',
      value: 'deveshl2201@gmail.com',
      link: 'mailto:deveshl2201@gmail.com',
      color: 'text-red-400',
    },
    {
      id: 4,
      icon: FaGithub,
      label: 'GitHub',
      value: 'Deveshl2201',
      link: 'https://github.com/Deveshl2201',
      color: 'text-gray-300',
    },
    {
      id: 5,
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'deveshl2201',
      link: 'https://linkedin.com/in/deveshl2201',
      color: 'text-blue-400',
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert('Message sent! Thank you for reaching out.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-darker">
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
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"
        ></motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center text-secondary mb-12 max-w-2xl mx-auto"
        >
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            {contactInfo.map((info, index) => (
              <motion.a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.005, x: 2 }}
                className="glass-effect interactive-card rounded-xl p-6 flex items-center gap-4 group cursor-pointer"
              >
                <div className="p-4 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors duration-300">
                  <info.icon className={`text-2xl ${info.color}`} />
                </div>
                <div>
                  <p className="text-secondary text-sm mb-1">{info.label}</p>
                  <p className="text-light font-semibold group-hover:text-primary transition-colors duration-300">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.4 }}
              className="mt-8 p-6 glass-effect rounded-xl"
            >
              <p className="text-secondary leading-relaxed">
                Whether you have a question, want to collaborate on a project,
                or just want to connect, feel free to reach out. I'll get back
                to you as soon as possible!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="glass-effect interactive-card rounded-xl p-8">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-light mb-2 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-white focus:outline-none focus:border-primary transition-colors duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-light mb-2 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-white focus:outline-none focus:border-primary transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-light mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-white focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.005 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
