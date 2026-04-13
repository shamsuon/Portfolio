import { motion } from 'framer-motion';
import { fadeUp, viewport } from '../hooks/useScrollAnimation';
import { BookOpen, Trophy, Lightbulb } from 'lucide-react';

const Experience = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const experienceItemVariants = {
    hidden: { opacity: 0, y: isMobile ? 40 : 56 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.8 : 0.95,
        ease: [0.2, 0.85, 0.25, 1]
      }
    }
  };
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

      <div className="experience-grid">
        {learningItems.map((item, idx) => (
          <motion.div 
            key={item.title}
            className="experience-item premium-hover glass"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={experienceItemVariants}
            transition={{ delay: idx * 0.16 }}
          >

            <div className="experience-icon-box">{item.icon}</div>
            <div className="experience-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
