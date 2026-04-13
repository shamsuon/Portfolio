import { motion } from 'framer-motion';
import { fadeUp, viewport } from '../hooks/useScrollAnimation';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projectCardVariants = {
    hidden: { opacity: 0, y: 38 },
    visible: (idx) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        delay: idx * 0.1,
        ease: [0.2, 0.85, 0.25, 1]
      }
    })
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 18, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, delay: 0.12, ease: [0.2, 0.85, 0.25, 1] }
    }
  };

  const projects = [
    {
      title: 'UNILIFE',
      description: 'A comprehensive university life management application built with Flutter, designed to streamline academic resources and student productivity at Delta Technological University.',
      tech: ['Flutter', 'Dart', 'Mobile Dev'],
      image: '/unilife-icon.png',
      github: 'https://github.com/shamsuon/UNILIFE.git',
      demo: '#',
      neonClass: 'neon-flutter'
    },
    {
      title: 'n8n Stock Management',
      description: 'An advanced automation system that uses Telegram as a mobile UI to manage inventory in Google Sheets, orchestrating data flows with n8n.',
      tech: ['n8n', 'Telegram API', 'Google Sheets'],
      image: '/n8n-icon.png',
      github: 'https://github.com/shamsuon/n8n.git',
      demo: '#',
      neonClass: 'neon-n8n'
    }
  ];

  return (
    <section className="section-container" id="projects">
      <motion.div 
        className="section-header"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <span className="section-label">03. Featured Work</span>
        <h2 className="section-title">Projects</h2>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <motion.div 
            key={project.title}
            className="project-card glass project-card-premium"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={projectCardVariants}
            custom={idx}
          >
            <motion.div 
              className="project-card-image"
              variants={imageVariants}
            >
              {project.image ? (
                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
              ) : (
                <div className="project-icon-overlay">{project.icon}</div>
              )}
            </motion.div>

            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link neon-icon neon-github" style={{ padding: '12px' }}>
                  <Github size={32} />
                </a>
                <a href={project.demo} className="project-link neon-icon neon-azure" style={{ padding: '12px' }}>
                  <ExternalLink size={28} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
