import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaJava,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiVercel,
  SiRender,
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      category: 'Languages',
      skills: [
        { name: 'Java', icon: FaJava, color: '#f89820' },
        { name: 'JavaScript', icon: FaJsSquare, color: '#f7df1e' },
        { name: 'HTML5', icon: FaHtml5, color: '#e34f26' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572b6' },
        { name: 'OOP', icon: FaDatabase, color: '#f59e0b' },
      ],
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'React.js', icon: FaReact, color: '#61dafb' },
        { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
        { name: 'REST APIs', icon: FaDatabase, color: '#0ea5e9' },
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
        { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
      ],
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: '#f05032' },
        { name: 'GitHub', icon: FaGithub, color: '#ffffff' },
        { name: 'Redux', icon: FaReact, color: '#764abc' },
        { name: 'Railway', icon: FaDatabase, color: '#a855f7' },
        { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
        { name: 'Render', icon: SiRender, color: '#46e3b7' },
        { name: 'JSON', icon: FaDatabase, color: '#f59e0b' },
      ],
    },
    {
      category: 'AI & ML',
      skills: [
        { name: 'AI & ML', icon: FaDatabase, color: '#eab308' },
        { name: 'Generative AI', icon: FaDatabase, color: '#06b6d4' },
        { name: 'Prompt Engineering', icon: FaDatabase, color: '#a78bfa' },
        { name: 'ChatGPT', icon: FaDatabase, color: '#10a37f' },
        { name: 'Cursor', icon: FaDatabase, color: '#60a5fa' },
        { name: 'Claude Opus', icon: FaDatabase, color: '#f97316' },
        { name: 'Copilot', icon: FaDatabase, color: '#38bdf8' },
        { name: 'OpenAI GPT APIs', icon: FaDatabase, color: '#22c55e' },
      ],
    },
    {
      category: 'Productivity & Testing',
      skills: [
        { name: 'VS Code AI tools', icon: FaDatabase, color: '#3b82f6' },
        { name: 'Hoppscotch', icon: FaDatabase, color: '#34d399' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="skills" className="py-20 bg-darker">
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
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"
        ></motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.6 + catIndex * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-light mb-6 text-center md:text-left">
                {category.category}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.01, y: -2 }}
                    className="glass-effect interactive-card rounded-xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.2 }}
                      style={{ color: skill.color }}
                      className="text-5xl"
                    >
                      <skill.icon />
                    </motion.div>
                    <span className="text-light group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
