import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, viewport } from '../hooks/useScrollAnimation';
import { BookOpen, Trophy, Lightbulb } from 'lucide-react';

const Experience = () => {
  const learningItems = [
    {
      title: 'Continuous Learning',
      description: 'Constantly exploring new frameworks, languages, and AI methodologies to stay at the forefront of technology.',
      icon: <BookOpen className="text-violet-400" />
    },
    {
      title: 'Problem Solving',
      description: 'Applying logical reasoning and computational thinking to tackle complex real-world challenges.',
      icon: <Lightbulb className="text-cyan-400" />
    },
    {
      title: 'Real-world Focus',
      description: 'Building projects that provide practical utility and demonstrate readiness for engineering environments.',
      icon: <Trophy className="text-pink-400" />
    }
  ];

  return (
    <section className="section-container" id="experience">
      <motion.div 
        className="section-header"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <span className="section-label">04. Journey</span>
        <h2 className="section-title">Experience & Learning</h2>
      </motion.div>

      <motion.div 
        className="experience-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {learningItems.map((item, idx) => (
          <motion.div 
            key={item.title}
            className="experience-item premium-hover glass"
            variants={staggerItem}
          >
            <div className="experience-icon-box">{item.icon}</div>
            <div className="experience-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
