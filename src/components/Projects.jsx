import { motion } from 'framer-motion';
import { Github, ExternalLink, Smartphone, Sparkles, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projectImages = [
    '/unilife-icon.png',
    '/smart-home-controller.jpeg',
    null
  ];

  const projectLinks = [
    { github: 'https://github.com/shamsuon/UNILIFE.git', demo: 'https://github.com/shamsuon/UNILIFE.git' },
    { github: 'https://github.com/shamsuon/Controller.git', demo: 'https://github.com/shamsuon/Controller.git' },
    { github: 'https://github.com/shamsuon', demo: 'https://github.com/shamsuon' }
  ];

  const projectCategoryIcons = [
    <Smartphone key="i1" size={14} />,
    <Cpu key="i2" size={14} />,
    <Sparkles key="i3" size={14} />
  ];

  const projectAccents = ['cyan', 'violet', 'emerald'];

  return (
    <section className="section-container" id="projects">
      <div className="section-header">
        <span className="section-label">{t.projects.label}</span>
        <h2 className="section-title">{t.projects.title}</h2>
        <p className="section-subtitle">{t.projects.subtitle}</p>
      </div>

      <div className="projects-modern-grid">
        {t.projects.items.map((project, idx) => (
          <motion.div 
            key={project.title}
            className={`project-modern-card glass premium-hover accent-${projectAccents[idx]}`}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            {/* Visual Media Box */}
            <div className="project-media-wrapper">
              {projectImages[idx] ? (
                <div className="project-image-box">
                  <img 
                    src={projectImages[idx]} 
                    alt={project.title} 
                    className="project-cover-img" 
                  />
                  <div className="project-media-gradient-overlay" />
                </div>
              ) : (
                <div className="project-fallback-visual">
                  <div className="fallback-inner-glow" />
                  <Sparkles size={44} className="fallback-icon text-emerald-400" />
                  <span className="fallback-label joyboy-handwritten" style={{ fontSize: '1.25rem' }}>
                    joyboy.dev // AI Workflows
                  </span>
                </div>
              )}

              {/* Category Floating Pill */}
              <div className="project-category-pill">
                {projectCategoryIcons[idx]}
                <span>{project.category}</span>
              </div>
            </div>

            {/* Project Content */}
            <div className="project-details">
              <div className="project-header-row">
                <h3 className="project-heading">{project.title}</h3>
                <span className="project-badge-pill">{project.badge}</span>
              </div>

              <p className="project-summary">{project.desc}</p>

              {/* Tech Tags */}
              <div className="project-tags-list">
                {project.tech.map((tag) => (
                  <span key={tag} className="project-tag-item">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Card Footer Links */}
              <div className="project-actions-row">
                <a 
                  href={projectLinks[idx].github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-btn-icon"
                  title="GitHub"
                >
                  <Github size={18} />
                  <span>{t.projects.btnCode}</span>
                </a>

                <a 
                  href={projectLinks[idx].demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-btn-link"
                  title="Explore"
                >
                  <span>{t.projects.btnExplore}</span>
                  <ExternalLink size={16} />
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
